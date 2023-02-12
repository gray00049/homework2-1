export default function Toolbar (props) {
  return (
    <div className="toolbar">
      {props.filters.map((item, index) => (
        <button 
          key={index.toString()}
          className={item == props.selected ? "filter-button selected" : "filter-button"}
          onClick={() => props.onSelectFilter(item)}
        >{item}</button>
      ))}
    </div>
  )
}