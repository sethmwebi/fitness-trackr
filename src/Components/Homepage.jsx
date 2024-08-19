import ActivityTracker from "./ActivityTracker"
import DashboardTabs from "./DashboardTabs"
import Navbar from "./Navbar"

function Homepage() {
  return (
    <div className="dashboard">
        <Navbar />
        <DashboardTabs/>
        <ActivityTracker/>
        
    </div>
  )
}

export default Homepage