function DistanceToday({today}) {
    let TodayPercentage = today>2100?100:(today/2100)*100
    let GoalPercentage = today>2100?(2100/today)*100:100
    console.log(TodayPercentage)
    console.log(GoalPercentage)
  return (
    <div className="single-tab today-distance">
    <p className="tab-title">Todays Goal</p>
    <div className="info distance-info">
       <p>You should walk 2.1km per day for a healthy body, heres your progress.</p>
       <p>You have walked <span>{today/1000}km</span> today.</p>
    </div>
    <div className="fill-bar">
        <div className="bar-2">
            <div className="progress" style={{height:`${GoalPercentage}px`}}>
                <h3>Goal</h3>
            </div>
        </div>
        <div className="bar-2">
            <div className="progress" style={{height:`${TodayPercentage}px`}}>
                <h3>today</h3>
            </div>
        </div>
    </div>
  </div>
  )
}

export default DistanceToday