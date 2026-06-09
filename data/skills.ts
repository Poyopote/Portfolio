export interface Skill {
  id: number
  name: string
  devi?: string
  source?: string
  shadow: string
}

const skills: Skill[] = [
  { id: 1, name: 'React', devi: 'devicon-react-original', shadow: 'shadow-teal-300' },
  { id: 2, name: 'Sass', devi: 'devicon-sass-original', shadow: 'shadow-fuchsia-500' },
  { id: 3, name: 'Javascript', source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', shadow: 'shadow-yellow-500' },
  { id: 4, name: 'Wordpress', devi: 'devicon-wordpress-plain', shadow: 'shadow-slate-600' },
  { id: 5, name: 'Vue.JS', devi: 'devicon-vuejs-plain', shadow: 'shadow-teal-500' },
  { id: 6, name: 'Jquery', devi: 'devicon-jquery-plain', shadow: 'shadow-blue-700' },
  { id: 7, name: 'Photoshop', devi: 'devicon-photoshop-plain', shadow: 'shadow-blue-700' },
  { id: 8, name: 'Php', source: '/img/Skill_Php.png', shadow: 'shadow-indigo-500' },
  { id: 9, name: 'Illustrator', devi: 'devicon-illustrator-plain', shadow: 'shadow-amber-500' },
  { id: 10, name: 'Css3', devi: 'devicon-css3-plain', shadow: 'shadow-sky-700' },
  { id: 11, name: 'Tailwindcss', devi: 'devicon-tailwindcss-plain', shadow: 'shadow-indigo-500' },
  { id: 12, name: 'Bootstrap', devi: 'devicon-bootstrap-plain', shadow: 'shadow-violet-600' },
  { id: 13, name: 'Html5', devi: 'devicon-html5-plain', shadow: 'shadow-amber-600' },
  { id: 14, name: 'Shopify', source: '/img/Skill_Shopify.png', shadow: 'shadow-lime-600' },
  { id: 15, name: 'Symfony (Twig)', devi: 'devicon-symfony-original', shadow: 'shadow-lime-400' },
  { id: 16, name: 'Axure', source: '/img/Skill_Axure.png', shadow: 'shadow-indigo-500' },
  { id: 17, name: 'Sitecore', source: '/img/Skill_Sitecore.png', shadow: 'shadow-red-700' },
  { id: 18, name: 'Figma', source: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg', shadow: 'shadow-slate-400' },
]

export default skills
