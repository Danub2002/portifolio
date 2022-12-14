import{
  DiHtml5,
  DiCss3,
  DijsBadge,
  DiNodeJssmall,
  DiMysql,
  DiReact,
  DiJsBadge
} from "react-icons/di"

import "../styles/components/technologiescontainer.sass"

const technologies = [
  {id : "html", name: "HTML5", icon: <DiHtml5 />},
  {id : "css", name: "CSS3", icon: <DiCss3 />},
  {id : "js", name : "Javascript", icon: <DiJsBadge />},
  {id : "node", name : "Node.js", icon: <DiNodeJssmall />},
  {id : "mysql", name : "MySQL", icon : <DiMysql />},
  {id : "react", name : "React", icon : <DiReact />}
] 
const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Technologies</h2>
      <div className="technologies-grid">
        {technologies.push.map((tech) => (
          <div className="technology-card" id = {tech.id} key = {tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur ea aperiam tempora dolorem cumque ducimus ratione nesciunt corporis optio cum. Ullam explicabo sed 
              quae! Fugiat ipsa accusamus architecto natus nihil!</p>
            
            </div>
          </div>
          

        ))}
      </div>
    </section>
    
  )
}


export default TechnologiesContainer