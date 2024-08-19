
function SingleBar({day,cals}) {
  return (
    <div className="singleBar">
        <div className="bar-progres" style={{height:`${cals}px`}}></div>
        <p>{day}</p>
    </div>
  )
}

export default SingleBar