import { kebabCase, kebabArray } from "@/utils/utils";
import { Project } from "types";

const projects: Project[] = [
  {
    id: 0,
    title: "ReserGo",
    desc: "Plataforma web que ofrece un sistema de reservas automático para que tus clientes",
    img: "/static/projects/resergo.jpg",
    link: "https://resergo-sistema-de-reservas.vercel.app/",
    github: "https://github.com/CamiloSanchez19/Resergo---Sistema-de-Reservas",
    tags: ["React", "Vite", "TailwindCSS", "Javascript"],
  },
  {
    id: 1,
    title: "Control de Gastos Personales",
    desc: "Aplicación web para gestionar finanzas personales mediante el registro y categorización de ingresos y gastos.",
    img: "/static/projects/control-gastos.jpg",
    link: "https://control-gastos-roan.vercel.app/",
    github: "https://github.com/CamiloSanchez19/Control-Gastos",
    tags: ["React", "Vite", "Javascript", "CSS"],
  },
  {
    id: 2,
    title: "App-Tareas",
    desc: "Aplicación web para crear, completar y gestionar tareas de forma sencilla.",
    img: "/static/projects/app-tareas.jpg",
    link: "https://app-tareas-rosy.vercel.app/",
    github: "https://github.com/CamiloSanchez19/App-Tareas",
    tags: ["React", "Vite", "Javascript", "CSS"],
  },
  {
    id: 3,
    title: "App-Peliculas",
    desc: "Aplicación web para explorar, buscar y guardar tus películas favoritas, facilitando la gestión de tu lista personal de cine.",
    img: "/static/projects/movie-app.jpg",
    link: "https://app-peliculas-red.vercel.app/",
    github: "https://github.com/CamiloSanchez19/App-Peliculas",
    tags: ["React", "Vite", "Javascript", "CSS", "API"],
  },
  {
    id: 4,
    title: "CapDistrict",
    desc: "Plataforma web para explorar y comprar gorras de distintos estilos.",
    img: "/static/projects/cap-district.jpg",
    link: "https://cap-district.vercel.app/",
    github: "https://github.com/CamiloSanchez19/CapDistrict",
    tags: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 5,
    title: "TN Colombia",
    desc: "Plataforma empresarial diseñada para presentar los servicios de la compañía de forma clara y profesional.",
    img: "/static/projects/tn-colombia.jpg",
    link: "https://tn-colombia.vercel.app/",
    github: "https://github.com/CamiloSanchez19/TN-Colombia",
    tags: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 6,
    title: "ValrousStudio",
    desc: "Plataforma personal para ofrecer y mostrar servicios de belleza.",
    img: "/static/projects/valrous-studio.jpg",
    link: "https://valrous-studio.vercel.app/",
    github: "https://github.com/CamiloSanchez19/ValrousStudio",
    tags: ["HTML", "CSS", "Javascript"],
  },
  {
    id: 7,
    title: "Andamos",
    desc: "Plataforma personal que visibiliza a las víctimas de la fuerza pública en 2020.",
    img: "/static/projects/andamos.jpg",
    link: "https://andamos.vercel.app/",
    github: "https://github.com/CamiloSanchez19/Andamos",
    tags: ["HTML", "CSS", "Javascript"],
  },
    {
    id: 8,
    title: "Calisoft",
    desc: "Plataforma educativa sobre calidad de software.",
    img: "/static/projects/calisoft.jpg",
    link: "https://calisoft.vercel.app/",
    github: "https://github.com/CamiloSanchez19/Calisoft",
    tags: ["HTML", "CSS", "Javascript"],
  },
];

export const allTags = []

projects.forEach((project) => {
  project.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default projects
