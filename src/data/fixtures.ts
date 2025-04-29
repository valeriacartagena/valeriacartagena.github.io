export default {
  author: "Valeria Cartagena",
  hero: {
    subtitle: "Chemical Engineering @ Stanford University",
    description: [
      "Rising junior passionate about clean energy and innovative solutions with electrochemistry."],
    
    cta: "Browse Products",
  },
  products: {
    featured: [
      {
        name: "DoubleText",
        medium: "React · GraphQL · Golang",
        summary: "The #1 Texting Analysis App",
        copy: [
          "Learn from millions of your messages, without giving up your data or privacy."
        ],
        links: {
          color: "#363636",
          primary: {
            name: "Discover",
            url: "https://doubletext.me/"
          }
        },
        images: [
          "/doubletext/0.jpg",
          "/doubletext/1.jpg",
          "/doubletext/2.jpg",
          "/doubletext/3.jpg",
        ]
      },
      // {
      //   name: "ClimbList",
      //   medium: "React · Next.js",
      //   summary: "Construction is now in progress.",
      //   copy: [
      //     "Compare and track grades between gyms around the country.",
      //   ],
      //   links: {
      //     color: "#363636",
      //     primary: {
      //       name: "Learn more",
      //       url: "https://climblist.com/"
      //     }
      //   },
      //   images: [
      //     "/climblist/0.jpg",
      //     "/climblist/1.jpg",
      //   ]
      // }
    ],
    // Only supports 0-3 at the moment
    minor: [
      {
        name: "Climate Change",
        description: "Find and track volunteer opportunities.",
        link: {
          name: "more information",
          url: "https://valeriacartagena.github.io/#/climate"
        }
      },
      {
        name: "Energy Transition",
        description: "Short survival experience on an abandoned planet.",
        link: {
          name: "electrochemistry research",
          url: "https://valeriacartagena.github.io/#/energy"
        }
      },
      {
        name: "Computational models",
        description: "The power of math!",
        link: {
          name: "projects",
          url: "https://valeriacartagena.github.io/#/projects"
        }
      }
    ]
  },
  logoSection: {
    title: "As hired by",
    // Only supports 0-3 at the moment
    logos: [
      {
        src: "/logos/unimelb.svg",
        url: "https://unimelb.edu.au/",
        alt: "Unimelb"
      },
      {
        src: "/logos/zendesk.svg",
        url: "https://www.zendesk.com/",
        alt: "Zendesk"
      },
      {
        src: "/logos/cashapp.svg",
        url: "https://cash.app/",
        alt: "Cash App"
      }
  ]
  },
  footer: {
    tagline: "Copyright © 2025 Valeria Cartagena. All rights reserved",
    links: [
      {
        name: "X",
        url: "https://x.com/vcartagena_",
        fa: "fab fa-twitter" // Code from: https://fontawesome.com/v5/icons/twitter?s=brands
      },
      {
        name: "Medium",
        url: "https://medium.com/@valeriacartagenav",
        fa: "fab fa-medium"
      },
      {
        name: "Github",
        url: "https://github.com/valeriacartagena",
        fa: "fab fa-github"
      },
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/valeriacartagena/",
        fa: "fab fa-linkedin"
      },
      {
        name: "Email",
        url: "mailto:valeriacartagenav@gmail.com",
        fa: "fa fa-envelope"
      },
    ]
  }
}