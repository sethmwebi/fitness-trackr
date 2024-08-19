import Calories from "./Calories";
import { useEffect, useState } from "react";
import { supabase } from "../config/supabaseClient";
import { useUser } from "../Hooks/useUserStore";
import { useNavigate } from "react-router-dom";
import TotalDistance from "./TotalDistance";
import DistanceToday from "./DistanceToday";
import Steps from "./steps";

function DashboardTabs() {
  const navigate = useNavigate();
  const [totalDistance, setTotalDistance] = useState(0);
  const [totalDistanceToday, setTotalDistanceToday] = useState(0);
  const [userActivity, setUserActivity] = useState([]);
  const [userActivityToday, setUserActivityToday] = useState([]);
  const { user, setUser } = useUser((state) => ({
    user: state.user,
    setUser: state.setUser,
  }));
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const userData = sessionStorage.getItem('user');
    if (!userData) {
      navigate('/login');
    } else {
      setUser(JSON.parse(userData));
    }
  }, [navigate, setUser]);

  useEffect(() => {
    const fetchActivities = async () => {
      setLoading(true);
      try {
        const today = new Date().toISOString();
        const { data, error } = await supabase
          .from('user_activities')
          .select('*')
          .eq('user_id', user.id);

        if (error) {
          console.error('Error fetching activities:', error);
        } else {
          setUserActivity(data);

          let cumulativeDistance = 0;
          let cumulativeDistanceToday = 0;
          const todayDate = new Date().toISOString().split('T')[0];

          const activitiesToday = data.filter((activity) =>
            activity.activity_date.startsWith(todayDate)
          );

          data.forEach((single) => {
            if (single.distance !== null && !isNaN(single.distance)) {
              cumulativeDistance += single.distance;
            }
          });

          activitiesToday.forEach((single) => {
            if (single.distance !== null && !isNaN(single.distance)) {
              cumulativeDistanceToday += single.distance;
            }
          });

          setTotalDistance(cumulativeDistance);
          setTotalDistanceToday(cumulativeDistanceToday);
          setUserActivityToday(activitiesToday);
        }
      } catch (error) {
        console.error('Error fetching activities:', error);
      } finally {
        setLoading(false);
      }
    };

    if (user?.id) {
      fetchActivities();
    }
  }, [user?.id]);

  return (
    <div className="dashboard-tabs">
      <Calories distance={totalDistance} weight={user?.weight} />
      <TotalDistance distance={totalDistance} />
      <DistanceToday today={totalDistanceToday} />
      <Steps today={totalDistanceToday}/>
    </div>
  );
}

export default DashboardTabs;
