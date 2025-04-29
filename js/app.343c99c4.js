(function(e){function t(t){for(var n,i,s=t[0],d=t[1],l=t[2],p=0,m=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&m.push(a[i][0]),a[i]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);c&&c(t);while(m.length)m.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var d=r[s];0!==a[d]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=d;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("theme-provider",{attrs:{theme:e.theme}},["/"===e.$route.path?r("div",[r("hero",{attrs:{author:e.author,subtitle:e.hero.subtitle,description:e.hero.description,cta:e.hero.cta}}),r("card-container",{attrs:{id:"products"}},[e._l(e.products.featured,(function(e,t){return r("card",{key:t,attrs:{name:e.name,medium:e.medium,summary:e.summary,copy:e.copy,links:e.links,images:e.images}})})),r("minor-card-container",e._l(e.products.minor&&e.products.minor.slice(0,3),(function(e,t){return r("minor-card",{key:t,attrs:{name:e.name,description:e.description,link:e.link}})})),1),r("logo-section-container",[r("main-title",[e._v(e._s(e.logoSection.title))]),r("logo-container",e._l(e.logoSection.logos&&e.logoSection.logos.slice(0,3),(function(e,t){return r("logo-card",{key:t,attrs:{src:e.src,url:e.url,alt:e.alt}})})),1)],1)],2),r("foot",{attrs:{author:e.author,footer:e.footer}})],1):e._e(),r("router-view"),r("light-toggle",{on:{click:function(t){return e.toggleTheme()}}},[e.isDark?e._e():r("span",[e._v("💡")]),e.isDark?r("span",[e._v("💡")]):e._e()])],1)},o=[],i=r("9c56"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("background",[r("container",[r("text-container",[r("heading",[e._v(e._s(e.author))]),r("subtitle",[e._v(e._s(e.subtitle))]),r("paragraph",e._l(e.description,(function(t,n){return r("span",{key:n},[e._v(e._s(t)),r("br")])})),0),r("cta-section",[r("styled-button",{attrs:{secondary:"",color:"#363636",href:"/#products"}},[r("button-text",[e._v(e._s(e.cta))]),r("i",{staticClass:"fas fa-arrow-down"})],1)],1)],1)],1)],1)},d=[];i["b"].a`
&::after {
  width: 0%;
  content: "";
  height: 2px;
  background: var(--link-color);
  position: absolute;
  left: 0;
  bottom: -3px;
  transition: width 0.3s;
}

&:hover::after {
  width: 100%;
}
`;const l=i["b"].h1`
  font-size: 2.25rem;
  margin-top: 0px;
  margin-bottom: 8px;
`,c={size:String},p=Object(i["b"])("p",c)`
  font-size: ${e=>"s"===e.size?"0.8888rem":"0.95rem"};
  margin: 0 0 0.5em 0;
  line-height: 1.5;
  font-weight: 400;
`,m=i["b"].h2`
  font-weight: 600;
  font-size: 0.95rem;
`,h=i["b"].span`
  margin-right: 0.5em;
`;var u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("card",[r("contents",[r("left-container",[r("div",[r("main-title",[e._v(e._s(e.name))]),r("medium",[e._v(e._s(e.medium))]),e.windowWidth<=980?r("carousel-container",[e.images?r("styled-carousel",{attrs:{perPage:1}},e._l(e.images,(function(e,t){return r("slide",{key:t},[r("carousel-image",{attrs:{loading:"lazy",src:e}})],1)})),1):e._e()],1):e._e(),r("subtitle",[e._v(e._s(e.summary))]),e._l(e.copy,(function(t,n){return r("paragraph",{key:n},[e._v(e._s(t))])}))],2),r("button-container",{attrs:{empty:!e.copy}},[e.links.primary?r("styled-button",{attrs:{primary:"",color:e.links.color,href:e.links.primary.url,target:"_blank"}},[r("button-text",[e._v(e._s(e.links.primary.name))]),r("i",{staticClass:"fas fa-arrow-right"})],1):e._e(),e.links.secondary?r("styled-button",{attrs:{secondary:"",color:e.links.color,href:e.links.secondary.url,target:"_blank"}},[r("button-text",[e._v(e._s(e.links.secondary.name))]),r("i",{staticClass:"fas fa-arrow-right"})],1):e._e()],1)],1),e.windowWidth>980?r("carousel-container",[e.images?r("styled-carousel",{attrs:{perPage:1}},e._l(e.images,(function(e,t){return r("slide",{key:t},[r("carousel-image",{attrs:{loading:"lazy",src:e}})],1)})),1):e._e()],1):e._e()],1)],1)},g=[],x=r("0a63");const b=i["b"].div`
  width: ${({theme:e})=>e.screen.width.desktop}px;
  background: ${({theme:e})=>e.card.background};
  box-shadow: ${({theme:e})=>e.card.boxShadow};
  border-radius: 20px;
  margin: auto;
  margin-bottom: 80px;
  /* Can't transition radial gradients */
  /* transition: 0.3s background; */
  @media screen and (max-width: ${({theme:e})=>e.screen.width.desktop}px) {
    width: ${({theme:e})=>e.screen.width.tablet}px;
    margin-bottom: 40px;
  }
  @media screen and (max-width: ${({theme:e})=>e.screen.width.tablet}px) {
    width: ${({theme:e})=>e.screen.width.mobile}px;
    margin-bottom: 40px;
  }
  /* Disabled for performance issues */
  /* backdrop-filter: blur(10px); */
`,f=i["b"].div`
  display: flex;
  padding: 64px ${({theme:e})=>e.screen.padding.desktop}px;
  /* height: 100%; */

  @media screen and (max-width: ${({theme:e})=>e.screen.width.desktop}px) {
    padding: 40px ${({theme:e})=>e.screen.padding.tablet}px;
    width: ${({theme:e})=>e.screen.width.tablet-2*e.screen.padding.tablet}px;
    margin: 0;
  }

  @media screen and (max-width: ${({theme:e})=>e.screen.width.tablet}px) {
    padding: 40px ${({theme:e})=>e.screen.padding.mobile}px;
    width: ${({theme:e})=>e.screen.width.mobile-2*e.screen.padding.mobile}px;
  }
`,w=i["b"].div`
  width: 320px;
  margin-right: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (max-width: ${({theme:e})=>e.screen.width.desktop}px) {
    width: ${({theme:e})=>e.screen.width.tablet-2*e.screen.padding.tablet}px;
  }

  @media screen and (max-width: ${({theme:e})=>e.screen.width.tablet}px) {
    width: ${({theme:e})=>e.screen.width.mobile-2*e.screen.padding.mobile}px;
  }
`,k=i["b"].div`
  font-weight: 400;
  font-size: 0.75rem;
  letter-spacing: 0.75px;
  margin-bottom: 1.5em;
  opacity: 0.8;
`,y={empty:Boolean},v=Object(i["b"])("div",y)`
  @media screen and (max-width: ${({theme:e})=>e.screen.width.desktop}px) {
    margin-top: 32px;
  }
  margin-top: ${e=>e.empty?32:0}px;
`,_={primary:Boolean,secondary:Boolean,color:String},$=Object(i["b"])("a",_)`
  font-size: 0.66rem;
  letter-spacing: 0.75px;
  text-transform: uppercase;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  margin-right: 20px;
  border-radius: 24px;
  line-height: 40px;
  color: ${e=>e.primary?"#eee":e.secondary?e.theme.card.button.text:"black"};
  background: ${e=>e.primary?e.color:e.secondary?e.theme.card.button.background:"white"};
  box-shadow: ${e=>e.primary?e.theme.card.button.boxShadow.primary:e.secondary?e.theme.card.button.boxShadow.secondary:"none"};
  /* Won't transition background since card can't transition. */
  /* transition: 0.3s background; */
  &::before {
    content: "";
    height: 100%;
    width: 100%;
    background: ${({theme:e})=>e.card.button.boxShadow.hover};
    mix-blend-mode: luminosity;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 24px;
    animation: none;
    opacity: 0;
    transition: 0.3s opacity ease-in-out, 0.3s background;
  }
  &:hover::before {
    opacity: ${({theme:e})=>e.card.button.hoverIntensity};
    transition: 0.3s opacity ease-in-out, 0.3s background;
  }
`,S=i["b"].img`
  width: 100%;
  float: right;
  object-fit: cover;
  object-position: top;
  opacity: ${({theme:e})=>e.card.carousel.opacity}
  &:hover {
    cursor: grab;
  }
  &:active {
    cursor:grabbing;
  }
`,C=i["b"].div`
  margin: auto;
`,j=Object(i["b"])(x["Carousel"])`
&.VueCarousel {
  box-shadow: ${({theme:e})=>e.card.carousel.boxShadow};
  border-radius: 10px;
  overflow: hidden;
  height: 275px;
  width: 500px;
}

& > .VueCarousel-pagination {
    position: absolute;
    bottom: 0;
}

& > * > .VueCarousel-dot-container {
  margin-top: 0px !important;
}

& > * > * > .VueCarousel-dot {
  margin-top: 0px !important;
  background-color: rgb(127 127 127 / 25%) !important;
  transition: 0.3s background-color ease-in-out;
  /* outline: none !important; */
}

& > * > * > .VueCarousel-dot--active {
  background-color: rgb(127 127 127) !important;
  transition: 0.3s background-color ease-in-out;
  /* outline: none !important; */
}

@media screen and (max-width: ${({theme:e})=>e.screen.width.desktop}px) {
  &.VueCarousel {
    width: ${({theme:e})=>e.screen.width.tablet-2*e.screen.padding.tablet}px;
    height: ${({theme:e})=>8.8*(e.screen.width.tablet-2*e.screen.padding.tablet)/16}px;
    margin: 20px 0px;
  }
}

@media screen and (max-width: ${({theme:e})=>e.screen.width.tablet}px) {
  &.VueCarousel {
    width: ${({theme:e})=>e.screen.width.mobile-2*e.screen.padding.mobile}px;
    height: ${({theme:e})=>8.8*(e.screen.width.mobile-2*e.screen.padding.mobile)/16}px;
  }
}
`;var P={components:{Slide:x["Slide"],Card:b,Contents:f,LeftContainer:w,MainTitle:l,Subtitle:m,Paragraph:p,ButtonContainer:v,StyledButton:$,CarouselImage:S,CarouselContainer:C,StyledCarousel:j,Medium:k,ButtonText:h},props:{name:String,medium:String,summary:String,copy:Array,links:{color:String,primary:{name:String,url:String},secondary:{name:String,url:String}},images:Array},data(){return{windowWidth:window.innerWidth}},mounted(){window.addEventListener("resize",()=>{this.windowWidth=window.innerWidth})},beforeDestroy(){window.removeEventListener("resize",()=>{})}},z=P,E=r("2877"),F=Object(E["a"])(z,u,g,!1,null,null,null),O=F.exports;const B=i["b"].div`
  background: url(${({theme:e})=>e.hero.background.image});
  background-size: cover;
  background-position: 50%;
  height: 800px;
  width: 100%;
  min-width: ${({theme:e})=>e.screen.width.mobile}px;
  margin: auto;

  /* Responsive */
  height: 100vh;
  min-height: 600px;
  max-height: 1035px;
  @media screen and (max-width: ${({theme:e})=>e.screen.width.desktop}px) {
    background-position: 60% -45px;
    background-size: inherit;
}
`,D=i["b"].div`
  max-width: ${({theme:e})=>e.screen.width.desktop}px;
  margin: auto;
  /* padding-top: 180px; */

  /* Responsive */
  height: 100vh;
  min-height: 600px;
  max-height: 1035px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`,T=i["b"].div`
  /* TODO: CONFIGURABLE */
  width: 400px;
  margin: 10px;

  /* Responsive */
  margin-top: -20px;

  @media screen and (max-width: ${({theme:e})=>e.screen.width.desktop}px) {
    width: ${({theme:e})=>e.screen.width.mobile-2*e.screen.padding.mobile}px;
    margin: auto;
  }
`,L=i["b"].h1`
  font-size: 5rem;
  margin: 32px auto;
  font-weight: 600;
  @media screen and (max-width: ${({theme:e})=>e.screen.width.desktop}px) {
    font-size: 72px;
  }
`,M=i["b"].div`
  margin: 36px 0px;
`;var A={components:{Background:B,Container:D,TextContainer:T,CtaSection:M,Heading:L,Subtitle:m,Paragraph:p,StyledButton:$,ButtonText:h},props:{author:String,cta:String,subtitle:String,description:Array}},V=A,I=Object(E["a"])(V,s,d,!1,null,null,null),W=I.exports,H=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("card",[r("contents",[r("product-title",[e._v(e._s(e.name))]),r("paragraph",[e._v(e._s(e.description))])],1),r("div",[r("styled-button",{attrs:{href:e.link.url,target:"_blank"}},[r("button-text",[e._v(e._s(e.link.name))]),r("i",{staticClass:"fas fa-arrow-right"})],1)],1)],1)},R=[];const Y=i["b"].div`
  /* width: 100px; */
  height: 200px;
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: ${({theme:e})=>e.card.background};
  /* background: radial-gradient(118.99% 670.46% at -7.06% -9.5%, #FFFFFF 0%, #F1F1F1 100%); */
  box-shadow: ${({theme:e})=>e.card.boxShadow};
  border-radius: 20px;
  margin: auto;
  position: relative;
  margin-bottom: 40px;
  padding: 32px ${({theme:e})=>e.screen.padding.desktop}px;
  /* Can't transition radial gradients */
  /* transition: 0.3s background; */
  @media screen and (max-width: ${({theme:e})=>e.screen.width.desktop}px) {
    padding: 32px ${({theme:e})=>e.screen.padding.tablet}px;
  }
  @media screen and (max-width: ${({theme:e})=>e.screen.width.tablet}px) {
    padding: 32px ${({theme:e})=>e.screen.padding.mobile}px;
  }
  /* Disabled for performance issues */
  /* backdrop-filter: blur(10px); */
`,G=i["b"].h1`
  font-size: 24px;
  margin-top: 0px;
  margin-bottom: 8px;
`,N=i["b"].div`
  & > * {
    margin: 24px 0px;
  }
`,U=i["b"].a`
  display: block;
  width: fit-content;
  font-size: 0.7rem;
  letter-spacing: 0.75px;
  text-transform: uppercase;
  padding: 0.25rem;
  padding-left: 0px;
  font-weight: 600;
  margin-right: 20px;
  line-height: 40px;
  color: ${e=>e.theme.color.text};
  transform: translateY(0px);
  transition: 0.3s all ease-out;
  &:hover {
    transform: translateX(2px);
    transition: 0.2s all ease-out;
    /* color: ${({theme:e})=>e.color.link}; */
  }
`;var J={components:{Card:Y,ProductTitle:G,Paragraph:p,Contents:N,StyledButton:U,ButtonText:h},props:{name:String,description:String,link:{name:String,url:String}}},X=J,Q=Object(E["a"])(X,H,R,!1,null,null,null),Z=Q.exports,q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("styled-a",{attrs:{href:e.url,target:"_blank","aria-label":e.alt}},[r("card",[r("logo",{attrs:{src:e.src,alt:e.alt}})],1)],1)},K=[];const ee=i["b"].a`
  margin: 2rem 1rem;
  @media screen and (max-width: ${({theme:e})=>e.screen.width.desktop}px) {
    margin: 1rem 0.5rem;
  }
  @media screen and (max-width: ${({theme:e})=>e.screen.width.tablet}px) {
    margin: 1rem 0.5rem;
  }
`,te=i["b"].div`
  height: 2rem;
  flex: 1;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: ${({theme:e})=>e.card.background};
  /* background: radial-gradient(118.99% 670.46% at -7.06% -9.5%, #FFFFFF 0%, #F1F1F1 100%); */
  box-shadow: ${({theme:e})=>e.card.boxShadow};
  border-radius: 20px;
  padding: 2rem 2.66rem;
  position: relative;
  /* Can't transition radial gradients */
  /* transition: 0.3s background; */

  /* Disabled for performance issues */
  /* backdrop-filter: blur(10px); */

  display: block;
  transform: translateY(0px);
  transition: 0.3s transform ease-out, 0.3s filter ease-out;
  filter: saturate(0);

  &:hover {
    transform: translateY(-4px);
    transition: 0.2s transform ease-out, 0.3s filter ease-out;
    filter: saturate(0);
  }
`,re=i["b"].img`
  height: 100%;
  mix-blend-mode: exclusion;
  filter: invert(1);
  opacity: 0.8;
`;var ne={components:{Card:te,Logo:re,StyledA:ee},props:{src:String,url:String,alt:String}},ae=ne,oe=Object(E["a"])(ae,q,K,!1,null,null,null),ie=oe.exports,se=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("app-footer",[r("div",[r("subtitle",[e._v(e._s(e.footer.tagline))])],1),r("icon-container",e._l(e.footer.links,(function(e,t){return r("icons",{key:"product-desctiption-"+t,attrs:{href:e.url,target:"_blank"}},[r("i",{class:e.fa})])})),1)],1)},de=[];const le=i["b"].div`
  width: ${({theme:e})=>e.screen.width.desktop-2*e.screen.padding.desktop}px;
  margin: 64px auto;
  padding: 0px ${({theme:e})=>e.screen.padding.desktop}px;
  display: flex;
  font-weight: 600;
  flex-direction: column;

  @media screen and (max-width: ${({theme:e})=>e.screen.width.desktop}px) {
    padding: 0px 20px;
    width: ${({theme:e})=>e.screen.width.tablet-2*e.screen.padding.tablet}px;
  }

  @media screen and (max-width: ${({theme:e})=>e.screen.width.tablet}px) {
    width: ${({theme:e})=>e.screen.width.mobile-2*e.screen.padding.mobile}px;
  }
`,ce=i["b"].a`
  padding: 8px;
  margin-right: 16px;
  color: ${({theme:e})=>e.color.text};
  opacity: 0.5;
  transform: translateY(0px);
  transition: 0.3s all ease-out;

  &:hover {
    transform: translateY(-2px);
    transition: 0.2s all ease-out;
    opacity: 1;
    /* color: ${({theme:e})=>e.color.link}; */
  }
`,pe=i["b"].div`
  display: flex;
`;var me={components:{AppFooter:le,Icons:ce,IconContainer:pe,Subtitle:m},props:{footer:{tagline:String,links:Array}}},he=me,ue=Object(E["a"])(he,se,de,!1,null,null,null),ge=ue.exports,xe={author:"Valeria Cartagena",hero:{subtitle:"Chemical Engineering @ Stanford University",description:["Description here"],cta:"Browse Products"},products:{featured:[{name:"DoubleText",medium:"React · GraphQL · Golang",summary:"The #1 Texting Analysis App",copy:["Learn from millions of your messages, without giving up your data or privacy."],links:{color:"#363636",primary:{name:"Discover",url:"https://doubletext.me/"}},images:["/doubletext/0.jpg","/doubletext/1.jpg","/doubletext/2.jpg","/doubletext/3.jpg"]}],minor:[{name:"Volunteer Portal",description:"Find and track volunteer opportunities.",link:{name:"Github",url:"https://github.com/zendesk/volunteer_portal"}},{name:"Weightless VR",description:"Short survival experience on an abandoned planet.",link:{name:"Download",url:"https://samzx.itch.io/weightless-vr"}},{name:"Soft Portfolio",description:"Neumorphic personal portfolio website.",link:{name:"Github",url:"https://github.com/samzx/soft-portfolio"}}]},logoSection:{title:"As hired by",logos:[{src:"/logos/unimelb.svg",url:"https://unimelb.edu.au/",alt:"Unimelb"},{src:"/logos/zendesk.svg",url:"https://www.zendesk.com/",alt:"Zendesk"},{src:"/logos/cashapp.svg",url:"https://cash.app/",alt:"Cash App"}]},footer:{tagline:"Copyright © 2025 Valeria Cartagena. All rights reserved",links:[{name:"X",url:"https://x.com/vcartagena_",fa:"fab fa-twitter"},{name:"Medium",url:"https://medium.com/@valeriacartagenav",fa:"fab fa-medium"},{name:"Github",url:"https://github.com/valeriacartagena",fa:"fab fa-github"},{name:"Linkedin",url:"https://www.linkedin.com/in/valeriacartagena/",fa:"fab fa-linkedin"},{name:"Email",url:"mailto:valeriacartagenav@gmail.com",fa:"fa fa-envelope"}]}},be={hero:{background:{image:"/falcon-light-plus-50-shadow.png"}},color:{link:"#005c89",text:"#1d1d1f",background:"linear-gradient(160deg, #efefef 0%, #ddd 40%, #ddd 100%)",fallbackBackground:"#fff"},card:{background:"radial-gradient(145% 145.46% at 0% 0%, #efefef 0%, #eee 100%)",boxShadow:"2px 4px 4px rgba(0,0,0,0.05), inset 1px 1px 2px hsla(0,0%,100%,0.5)",carousel:{opacity:1,boxShadow:"-10px -10px 30px rgba(255, 255, 255, 0), 10px 10px 30px rgba(0, 0, 0, 0.05)"},button:{text:"#222",background:"#efefef",boxShadow:{primary:"2px 4px 4px rgba(0,0,0,0.05), inset 1px 1px 2px hsla(0,0%,100%,0.25)",secondary:"2px 4px 4px rgba(0,0,0,0.05), inset 1px 1px 2px hsla(0,0%,100%,0.5)",hover:"linear-gradient(145deg, rgba(0,0,0,0.05), rgba(255,255,255,0.2))"},hoverIntensity:1}},screen:{width:{mobile:360,tablet:600,desktop:980},padding:{mobile:20,tablet:20,desktop:48}}},fe={hero:{background:{image:"/falcon-dark-minus-50-brightness.png"}},color:{link:"#4bafbd",text:"#f5f5f7",background:"linear-gradient(160deg, #2a2a2a 0%, #1a1a1a 40%, #1a1a1a 100%)",fallbackBackground:"#2a2a2a"},card:{background:"linear-gradient(141.65deg,#151515 15.17%,#050505 86.5%)",boxShadow:"2px 4px 4px rgba(0,0,0,0.45), inset 1px 1px 2px hsla(0,0%,100%,.15)",carousel:{opacity:1,boxShadow:"-10px -10px 30px rgba(255, 255, 255, 0), 10px 10px 30px rgba(0, 0, 0, 1)"},button:{text:"#fff",background:"#151515",boxShadow:{primary:"2px 4px 4px rgba(0,0,0,0.45), inset 1px 1px 2px hsla(0,0%,100%,.15)",secondary:"2px 4px 4px rgba(0,0,0,0.45), inset 1px 1px 2px hsla(0,0%,100%,.15)",hover:"linear-gradient(145deg, rgba(0,0,0,0.66), rgba(255,255,255,0.2))"},hoverIntensity:.25}},screen:{width:{mobile:360,tablet:600,desktop:980},padding:{mobile:20,tablet:20,desktop:48}}};const we=n["a"].observable({dark:!1}),ke={toggleDark(){we.dark=!we.dark},setDark(e){we.dark=e}},ye=()=>{we.dark?(document.documentElement.style.setProperty("--main-color",fe.color.text),document.documentElement.style.setProperty("--main-background-color",fe.color.background),document.documentElement.style.setProperty("--fallback-background-color",fe.color.fallbackBackground),document.documentElement.style.setProperty("--link-color",fe.color.link)):(document.documentElement.style.setProperty("--main-color",be.color.text),document.documentElement.style.setProperty("--main-background-color",be.color.background),document.documentElement.style.setProperty("--fallback-background-color",be.color.fallbackBackground),document.documentElement.style.setProperty("--link-color",be.color.link))};if(window.matchMedia)try{window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",e=>{e.matches?we.dark=!0:we.dark=!1,ye()})}catch(at){console.error(at)}const ve=()=>{window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?we.dark=!0:we.dark=!1,ye();var e=document.getElementsByTagName("html")[0];e.style.setProperty("transition","0.3s color, 0.3s background");var t=document.getElementsByTagName("body")[0];t.style.setProperty("transition","0.3s color, 0.3s background")};i["c"]`
  /* @font-face {
    font-family: "SF Pro Display";
    font-weight: 400;
    src: url("/fonts/SFProDisplay-Regular.ttf");
  }
  @font-face {
    font-family: "SF Pro Display";
    font-weight: 700;
    src: url("/fonts/SFProDisplay-Bold.ttf");
  }
  @font-face {
    font-family: "SF Pro Display";
    font-weight: 300;
    src: url("/fonts/SFProDisplay-Light.ttf");
  } */

  html {
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  body {
    margin: 0px;
    letter-spacing: -0.02em;
  }

  html {
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    position: relative;
  }
  h1 {
    font-weight: 600;
  }
  /* p {
    color: #1d1d1f;
  } */
`;const _e=i["b"].div`
  margin-top: -60px;
  @media screen and (max-width: ${({theme:e})=>e.screen.width.desktop}px) {
    margin-top: -48px;
  }
`,$e=i["b"].div`
  margin: auto;
  margin-bottom: 80px;
  width: ${({theme:e})=>e.screen.width.desktop}px;
  display: flex;
  @media screen and (max-width: ${({theme:e})=>e.screen.width.desktop}px) {
    width: ${({theme:e})=>e.screen.width.tablet}px;
    flex-direction: column;
  }
  @media screen and (max-width: ${({theme:e})=>e.screen.width.tablet}px) {
    width: ${({theme:e})=>e.screen.width.mobile}px;
    flex-direction: column;
  }
  & > * {
    margin: 16px;
  }
  & > *:nth-child(3n+1) {
    margin-left: 0px;
  }
  & > *:nth-child(3n+0) {
    margin-right: 0px;
  }
  @media screen and (max-width: ${({theme:e})=>e.screen.width.desktop}px) {
    & > * {
      margin: 16px 0px;
    & > *:nth-child(3n+1) {
      margin: 16px 0px;
    }
    & > *:nth-child(3n+0) {
      margin: 16px 0px;
    }
  }
  }
`,Se=i["b"].div`
  margin:auto;
  text-align: center;
  width: ${({theme:e})=>e.screen.width.desktop}px;
  @media screen and (max-width: ${({theme:e})=>e.screen.width.desktop}px) {
    width: ${({theme:e})=>e.screen.width.tablet}px;
    flex-direction: column;
  }
  @media screen and (max-width: ${({theme:e})=>e.screen.width.tablet}px) {
    width: ${({theme:e})=>e.screen.width.mobile}px;
    flex-direction: column;
  }
`,Ce=i["b"].div`
  justify-content: center;
  margin:auto;
  margin-top: 20px;
  width: ${({theme:e})=>e.screen.width.desktop}px;
  display: flex;
  @media screen and (max-width: ${({theme:e})=>e.screen.width.desktop}px) {
    width: ${({theme:e})=>e.screen.width.tablet}px;
    flex-direction: column;
  }
  @media screen and (max-width: ${({theme:e})=>e.screen.width.tablet}px) {
    width: ${({theme:e})=>e.screen.width.mobile}px;
    flex-direction: column;
  }
`,je=i["b"].button`
  border: none;
  background: transparent;
  position: sticky;
  float: right;
  bottom: 20px;
  right: 20px;
  margin-top: -40px;
  padding: 5px;
  font-size: 24px;
  text-decoration: none;
  transform: translateY(0px);
  transition: 0.3s transform ease-out;
  cursor: pointer;
  &:hover {
    transform: translateY(-5px);
    transition: 0.2s transform ease-out;
  }
`;var Pe={name:"Home",components:{Hero:W,Card:O,MinorCard:Z,MinorCardContainer:$e,Foot:ge,ThemeProvider:i["a"],CardContainer:_e,LightToggle:je,MainTitle:l,LogoContainer:Ce,LogoSectionContainer:Se,LogoCard:ie},computed:{theme(){return we.dark?fe:be},isDark(){return we.dark}},methods:{toggleTheme:()=>{ke.toggleDark(),ye()}},data:()=>({...xe})};ve();var ze=Pe,Ee=(r("034f"),Object(E["a"])(ze,a,o,!1,null,null,null)),Fe=Ee.exports,Oe=r("8c4f"),Be=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{padding:"20px"}},[r("h1",[e._v("Climate Change")]),r("p",[e._v("This page discusses environment and climate.")]),r("router-link",{attrs:{to:"/"}},[e._v("← Back to Home")])],1)},De=[],Te={name:"Climate"},Le=Te,Me=Object(E["a"])(Le,Be,De,!1,null,null,null),Ae=Me.exports,Ve=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{padding:"20px"}},[r("h1",[e._v("Energy")]),r("p",[e._v("This page talks about renewable energy, technologies, and initiatives.")]),r("router-link",{attrs:{to:"/"}},[e._v("← Back to Home")])],1)},Ie=[],We={name:"EnergyPage"},He=We,Re=Object(E["a"])(He,Ve,Ie,!1,null,null,null),Ye=Re.exports,Ge=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{padding:"20px"}},[r("h1",[e._v("Projects")]),r("p",[e._v("Details about our latest projects and case studies.")]),r("router-link",{attrs:{to:"/"}},[e._v("← Back to Home")])],1)},Ne=[],Ue={name:"ProjectsPage"},Je=Ue,Xe=Object(E["a"])(Je,Ge,Ne,!1,null,null,null),Qe=Xe.exports,Ze=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{padding:"20px"}},[r("h1",[e._v("Books")]),r("p",[e._v("A collection of recommended books about climate, energy, and environment.")]),r("router-link",{attrs:{to:"/"}},[e._v("← Back to Home")])],1)},qe=[],Ke={name:"BooksPage"},et=Ke,tt=Object(E["a"])(et,Ze,qe,!1,null,null,null),rt=tt.exports;n["a"].use(Oe["a"]);var nt=new Oe["a"]({mode:"history",routes:[{path:"/climate",component:Ae},{path:"/energy",component:Ye},{path:"/projects",component:Qe},{path:"/books",component:rt}]});n["a"].config.productionTip=!1,new n["a"]({router:nt,render:e=>e(Fe)}).$mount("#app")},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.343c99c4.js.map