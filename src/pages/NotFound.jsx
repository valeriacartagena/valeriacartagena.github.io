import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

// --- pixel-art DeLorean (side view, facing right) -------------------------
// S silver, D dark silver, W glass, K black, H hub, . transparent
const SPRITE = [
  '.........SSSSSSS............',
  '.......SSWWWWWWWSS..........',
  '.....SSWWWWWWWWWWWSS........',
  'SSSSSSSWWWWWWWWWWWWSSS......',
  'SSSSSSSSSSSSSSSSSSSSSSSS....',
  'SSSSSSSSSSSSSSSSSSSSSSSSSSS.',
  'DSSSSSSSSSSSSSSSSSSSSSSSSSSS',
  'DDDDDDDDDDDDDDDDDDDDDDDDDDDK',
  '.KKKK..KKKK.......KKKK...KK.',
  '..KK..KHHHHK......KHHHHK....',
  '.......KKKK........KKKK.....',
]
const SPRITE_COLORS = {
  S: '#c9ced4',
  D: '#8f979f',
  W: '#222c38',
  K: '#141414',
  H: '#dfe3e8',
}
const PX = 3
const CAR_W = SPRITE[0].length * PX
const CAR_H = SPRITE.length * PX

const W = 600
const H = 300
const GROUND_H = 34
const GROUND_Y = H - GROUND_H
const HOVER = 6 // the time machine floats a little
const GRAVITY = 1.15
const JUMP = -15
const CAR_X = 80
const BEST_KEY = 'delorean-best-mph'
// sky color changes at every new multiple of 88 mph
const SKIES = ['#232734', '#2a2340', '#1f3230', '#33222e', '#22303f', '#302a1e']

function NotFound() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    ctx.imageSmoothingEnabled = false

    const restY = GROUND_Y - CAR_H - HOVER
    let raf = 0
    let mode = 'idle' // idle | play | over
    let carY = restY
    let vy = 0
    let onGround = true
    let obstacles = []
    let scrolled = 0
    let nextGap = 500
    let flash = 0
    let tick = 0
    let queuedJump = 0 // frames left in the "pressed just before landing" buffer
    let milestone = 0 // how many multiples of 88 mph reached
    let best = 0
    try {
      best = Number(localStorage.getItem(BEST_KEY)) || 0
    } catch {
      /* fine without a saved best */
    }

    const lines = Array.from({ length: 22 }, () => ({
      x: Math.random() * W,
      y: Math.random() * (GROUND_Y - 20),
      len: 6 + Math.random() * 16,
      v: 1 + Math.random() * 2.5,
    }))

    const mph = () => Math.floor(scrolled / 24)
    const speed = () => Math.min(6.5 + scrolled / 2000, 12)

    const reset = () => {
      carY = restY
      vy = 0
      onGround = true
      queuedJump = 0
      obstacles = []
      scrolled = 0
      nextGap = 500
      flash = 0
      milestone = 0
    }

    const jump = () => {
      vy = JUMP
      onGround = false
      queuedJump = 0
    }

    const drawCar = (x, y) => {
      SPRITE.forEach((row, r) => {
        for (let c = 0; c < row.length; c += 1) {
          const color = SPRITE_COLORS[row[c]]
          if (color) {
            ctx.fillStyle = color
            ctx.fillRect(Math.round(x + c * PX), Math.round(y + r * PX), PX, PX)
          }
        }
      })
      // pulsing blue underglow, like the hover conversion
      const glowY = y + CAR_H - 2 * PX
      ctx.fillStyle = tick % 12 < 6 ? '#57c8ff' : '#9fe0ff'
      ctx.fillRect(Math.round(x + 4 * PX), Math.round(glowY + PX * 2), CAR_W - 8 * PX, PX)
      ctx.fillStyle = 'rgba(87, 200, 255, 0.35)'
      ctx.fillRect(Math.round(x + 2 * PX), Math.round(glowY + PX * 3), CAR_W - 4 * PX, PX)
      // flame trail once you hit 88 mph
      if (mph() >= 88 && mode === 'play') {
        for (let i = 0; i < 6; i += 1) {
          ctx.fillStyle = i % 2 === 0 ? '#ff8c3a' : '#ffd23f'
          const fy = y + CAR_H - 5 * PX + (((tick >> 2) + i) % 3) * PX
          ctx.fillRect(Math.round(x - (i + 1) * PX), Math.round(fy), PX, PX)
        }
      }
    }

    const draw = () => {
      ctx.fillStyle = SKIES[milestone % SKIES.length]
      ctx.fillRect(0, 0, W, H)
      ctx.fillStyle = '#39405a'
      lines.forEach((l) => ctx.fillRect(Math.round(l.x), Math.round(l.y), l.len, 2))

      // road
      ctx.fillStyle = '#1a1d27'
      ctx.fillRect(0, GROUND_Y, W, GROUND_H)
      ctx.fillStyle = '#39405a'
      for (let x = -((scrolled % 26)); x < W; x += 26) {
        ctx.fillRect(Math.round(x), GROUND_Y + 4, 12, 2)
      }

      // obstacles: pixel traffic cones (one, or two side by side)
      const drawCone = (x, w, h) => {
        const rows = Math.max(4, Math.floor(h / PX))
        for (let i = 0; i < rows; i += 1) {
          const t = i / (rows - 1)
          const rowW = Math.max(PX, Math.round((4 + t * (w - 4)) / PX) * PX)
          const rx = Math.round(x + (w - rowW) / 2)
          const ry = Math.round(GROUND_Y - h + i * (h / rows))
          const stripe = t > 0.45 && t < 0.7
          ctx.fillStyle = i === rows - 1 ? '#c75d1e' : stripe ? '#f4f4f4' : '#ff8c3a'
          ctx.fillRect(rx, ry, rowW, Math.ceil(h / rows))
        }
      }
      // soda can: red top, white wave, blue bottom (no branding)
      const drawCan = (x, w, h) => {
        ctx.fillStyle = '#d7dbe0' // lid
        ctx.fillRect(Math.round(x + PX), GROUND_Y - h, w - 2 * PX, PX)
        for (let y = GROUND_Y - h + PX; y < GROUND_Y; y += PX) {
          const t = (y - (GROUND_Y - h + PX)) / (h - PX)
          const wave = t > 0.42 && t < 0.62
          ctx.fillStyle = t >= 0.95 ? '#9aa2ab' : wave ? '#f4f4f4' : t < 0.42 ? '#e0322e' : '#1e5bc6'
          const shift = wave ? ((y / PX) % 2) * 2 - 1 : 0
          ctx.fillRect(Math.round(x + shift), Math.round(y), w, PX)
        }
      }

      // little tree: green canopy, brown trunk
      const drawTree = (x, w, h) => {
        const trunkW = 2 * PX
        ctx.fillStyle = '#7a5230'
        ctx.fillRect(Math.round(x + (w - trunkW) / 2), Math.round(GROUND_Y - h * 0.45), trunkW, Math.ceil(h * 0.45))
        const canopyH = h * 0.7
        for (let y = GROUND_Y - h; y < GROUND_Y - h + canopyH; y += PX) {
          const t = (y - (GROUND_Y - h)) / canopyH
          const rowW = Math.max(2 * PX, Math.round((w * (t < 0.5 ? 0.45 + 1.1 * t : 1.55 - 1.1 * t)) / PX) * PX)
          ctx.fillStyle = (y / PX) % 3 === 0 ? '#2e7d3a' : '#3f9e4d'
          ctx.fillRect(Math.round(x + (w - rowW) / 2), Math.round(y), rowW, PX)
        }
      }

      // trash can: gray bin, lid with a handle
      const drawBin = (x, w, h) => {
        ctx.fillStyle = '#8b93a4'
        ctx.fillRect(Math.round(x + w / 2 - PX), GROUND_Y - h - PX, 2 * PX, PX) // handle
        ctx.fillStyle = '#5b6472'
        ctx.fillRect(Math.round(x - PX), GROUND_Y - h, w + 2 * PX, PX) // lid
        ctx.fillStyle = '#6b7280'
        ctx.fillRect(Math.round(x), GROUND_Y - h + PX, w, h - PX)
        ctx.fillStyle = '#59616e'
        for (let rx = x + 2 * PX; rx < x + w - PX; rx += 2 * PX) {
          ctx.fillRect(Math.round(rx), GROUND_Y - h + 2 * PX, PX, h - 4 * PX)
        }
      }

      obstacles.forEach((o) => {
        if (o.kind === 'can') {
          drawCan(o.x, o.w, o.h)
        } else if (o.kind === 'tree') {
          drawTree(o.x, o.w, o.h)
        } else if (o.kind === 'bin') {
          drawBin(o.x, o.w, o.h)
        } else if (o.w > 30) {
          const each = (o.w - 4) / 2
          drawCone(o.x, each, o.h)
          drawCone(o.x + each + 4, each, o.h * 0.85)
        } else {
          drawCone(o.x, o.w, o.h)
        }
      })

      drawCar(CAR_X, carY)

      ctx.textAlign = 'right'
      ctx.fillStyle = mph() >= 88 ? '#7fd4ff' : '#ffffff'
      ctx.font = 'bold 16px "Courier New", monospace'
      ctx.fillText(`${mph()} mph`, W - 14, 26)
      if (best > 0) {
        ctx.fillStyle = '#8b93ad'
        ctx.font = 'bold 11px "Courier New", monospace'
        ctx.fillText(`best ${best} mph`, W - 14, 42)
      }
      if (flash > 0) {
        ctx.textAlign = 'center'
        ctx.fillStyle = '#7fd4ff'
        ctx.font = 'bold 22px "Courier New", monospace'
        ctx.fillText(milestone > 1 ? `88 x ${milestone} MPH!` : '88 MPH!', W / 2, 60)
      }

      ctx.textAlign = 'center'
      if (mode === 'idle') {
        ctx.fillStyle = '#ffffff'
        ctx.font = 'bold 16px "Courier New", monospace'
        ctx.fillText('press SPACE or tap to jump', W / 2, H / 2 - 30)
      } else if (mode === 'over') {
        ctx.fillStyle = '#ef8cba'
        ctx.font = 'bold 26px "Courier New", monospace'
        ctx.fillText('CRASH!', W / 2, H / 2 - 44)
        ctx.fillStyle = '#ffffff'
        ctx.font = 'bold 14px "Courier New", monospace'
        ctx.fillText(`${mph()} mph  ·  best ${best} mph`, W / 2, H / 2 - 20)
        ctx.fillText('press SPACE or tap to try again', W / 2, H / 2 + 2)
      }
    }

    const step = () => {
      tick += 1
      lines.forEach((l) => {
        l.x -= l.v
        if (l.x + l.len < 0) {
          l.x = W + Math.random() * 30
          l.y = Math.random() * (GROUND_Y - 20)
        }
      })
      if (flash > 0) flash -= 1

      if (mode !== 'play' && onGround) {
        carY = restY + Math.sin(tick / 14) * 2 // hover bob
      }

      if (mode === 'play') {
        const v = speed()
        scrolled += v

        // jump physics; onGround is explicit state, so the hover bob can
        // never make the game think the car is airborne and eat an input
        if (onGround) {
          carY = restY + Math.sin(tick / 14) * 2
          if (queuedJump > 0) jump()
        } else {
          vy += GRAVITY
          carY += vy
          if (vy > 0 && carY >= restY) {
            carY = restY
            vy = 0
            onGround = true
            if (queuedJump > 0) jump()
          }
        }
        if (queuedJump > 0) queuedJump -= 1

        // spawn obstacles with a jumpable, speed-aware gap
        if (obstacles.length === 0 || W - obstacles[obstacles.length - 1].x > nextGap) {
          const kind = ['cone', 'can', 'tree', 'bin'][Math.floor(Math.random() * 4)]
          let ow
          let oh
          if (kind === 'cone') {
            const double = Math.random() < 0.3
            ow = double ? 38 + Math.random() * 8 : 18 + Math.random() * 8
            oh = 22 + Math.random() * 12
          } else if (kind === 'can') {
            ow = 18
            oh = 27
          } else if (kind === 'tree') {
            ow = 27
            oh = 40 + Math.random() * 8
          } else {
            ow = 21
            oh = 26 + Math.random() * 6
          }
          obstacles.push({ x: W + 20, w: ow, h: oh, kind })
          nextGap = 260 + v * 30 + Math.random() * 240
        }
        obstacles.forEach((o) => {
          o.x -= v
        })
        obstacles = obstacles.filter((o) => o.x + o.w > -10)

        const reached = Math.floor(mph() / 88)
        if (reached > milestone) {
          milestone = reached
          flash = 55
        }

        // collision (forgiving box)
        const cx = CAR_X + 4
        const cy = carY + 4
        const cw = CAR_W - 8
        const ch = CAR_H - 8
        const hit = obstacles.some(
          (o) => cx + cw > o.x && cx < o.x + o.w && cy + ch > GROUND_Y - o.h,
        )
        if (hit) {
          mode = 'over'
          if (mph() > best) {
            best = mph()
            try {
              localStorage.setItem(BEST_KEY, String(best))
            } catch {
              /* fine without a saved best */
            }
          }
        }
      }

      draw()
      raf = requestAnimationFrame(step)
    }

    const action = () => {
      if (mode === 'idle') {
        mode = 'play'
      } else if (mode === 'over') {
        reset()
        mode = 'play'
        return
      }
      if (onGround) {
        jump()
      } else {
        queuedJump = 10 // land within 10 frames and the jump still fires
      }
    }

    const onKey = (e) => {
      if (e.code === 'Space' || e.code === 'ArrowUp') {
        e.preventDefault()
        action()
      }
    }
    const onPointer = (e) => {
      e.preventDefault()
      action()
    }

    window.addEventListener('keydown', onKey)
    canvas.addEventListener('pointerdown', onPointer)
    raf = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('keydown', onKey)
      canvas.removeEventListener('pointerdown', onPointer)
    }
  }, [])

  return (
    <section className="page notfound">
      <h2 className="notfound-code">404</h2>
      <p className="notfound-text">
        Oops! This page got lost in time. While you&apos;re here&hellip; take the DeLorean for a ride :)
      </p>
      <div className="notfound-game">
        <canvas ref={canvasRef} width={W} height={H} aria-label="DeLorean runner mini-game" />
      </div>
      <p className="notfound-hint">SPACE / tap to jump and get to 88&nbsp;mph!</p>
      <p className="notfound-back">
        <Link to="/">&larr; Back to the present</Link>
      </p>
    </section>
  )
}

export default NotFound
