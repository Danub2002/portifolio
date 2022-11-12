import{
  DiHtml5,
  DiCss3,
  DijsBadge,
  DiNodeJssmall,
  DiMysql,
  DiReact,
  DiJsBadge
} from "react-icons/di"

import "../styles/components/TechnologiesContainer.sass"

const technologies = [
  {id : "html", name: "HTML5", icon: <DiHtml5 />},
  {id : "css", name: "CSS3", icon: <DiCss3 />},
  {id : "js", name : "Javascript", icon: <DiJsBadge />},
  {id : "node", name : "Node.js", icon: <DiNodeJssmall />},
  {id : "mysql", name : "MySQL", icon : <DiMysql />},
  {id : "react", name : "React", icon : <DiReact />}
] 
export const TechnologiesContainer = () => {
  return (
    <div></div>
  )
}


export default TechnologiesContainer