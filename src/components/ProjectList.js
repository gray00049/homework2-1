export default function ProjectList(props) {
  return (
    <div className="project-list">
      {props.projects.map((item, index) => (
        <div 
          key={index.toString()}
          className="project-preview" style={{backgroundImage: 'url(' + item.img + ')'}}
        ></div>
      ))}
    </div>
  )
}