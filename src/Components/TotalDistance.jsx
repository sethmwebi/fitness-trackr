
function TotalDistance({distance,today}) {
  return (
    <div className="single-tab">
    <p className="tab-title">Total Exersice Distance</p>
    <div className="info distance-info">
       <p>You have walked/ran a total distance of:</p>
      <h2>{distance/1000} <span>km</span></h2>
    </div>
  </div>
  )
}

export default TotalDistance