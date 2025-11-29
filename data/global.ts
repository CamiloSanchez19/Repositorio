type Route = {
  title: string,
  path: string
}

type FooterCol = {
  title: string,
  links: {
    name: string,
    link: string,
    icon?: string,
    leavesWebsite: boolean
  }[]
}

type Footer = {
  columns: FooterCol[]
  support: {
    buymeacoffee: string
    paypal: string
    message: string
  }
};

export const routes: Route[] = [
  {
    title: "Inicio",
    path: "/",
  },
  // {
  //   title: "Blog",
  //   path: "/blog",
  // },
  {
    title: "Proyectos",
    path: "/projects",
  },
  {
    title: "Certificaciones",
    path: "/designs",
  },
];


export const footer: Footer = {
  columns: [
    {
      title: "Paginas",
      links: [
        {
          name: "Inicio",
          link: "/",
          leavesWebsite: false,
        },
        // {
        //   name: "Blog",
        //   link: "/blog",
        //   leavesWebsite: false,
        // },
        {
          name: "Proyectos",
          link: "/projects",
          leavesWebsite: false,
        },
        {
          name: "Certificaciones",
          link: "/designs",
          leavesWebsite: false,
        },
      ],
    },
    {
      title: "Redes Sociales",
      links: [
        {
          name: "GitHub",
          link: "https://github.com/CamiloSanchez19",
          icon: "/static/icons/github-f.svg",
          leavesWebsite: true,
        },
        {
          name: "LinkedIn",
          link: "www.linkedin.com/in/camilo-sánchez-roncancio-0b7717274",
          icon: "/static/icons/linkedin-f.svg",
          leavesWebsite: true,
        },
        {
          name: "Email",
          link: "scamilosanchez1941gmail.com",
          icon: "/static/icons/mail-f.svg",
          leavesWebsite: true,
        },
      ],
    },
  ],
  support: {
    buymeacoffee: "camilo",
    paypal: "camilo",
    message: "I appreciate your support very much! 💙",
  },
};
