import SingleBar from "./SingleBar";
import { useEffect, useState } from "react";

const calculateCaloriesBurned = (distance, weight) => {
  const caloriesPerKm = 1; 
  return distance * caloriesPerKm;
};

function Calories({ distance, weight }) {
  const [caloriesData, setCaloriesData] = useState([]);
  const maxCalorieValue = 200;

  useEffect(() => {
    const fetchCaloriesData = () => {
      const lastSevenDaysData = Array(7).fill(0).map((_, i) => {
        const dayDistance = distance / 7; 
        const dailyCalories = calculateCaloriesBurned(dayDistance, weight);
        return (dailyCalories / maxCalorieValue) * 100; 
      });

      setCaloriesData(lastSevenDaysData);
    };

    if (distance && weight) {
      fetchCaloriesData();
    }
  }, [distance, weight]);

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="single-tab calories">
      <p className="tab-title">Calories burned</p>
      <div className="info">
        <h2>{calculateCaloriesBurned(distance, weight)} <span>cals</span></h2>
      </div>
      <div className="bar-graphs">
        {caloriesData.map((cals, index) => (
          <SingleBar key={index} day={daysOfWeek[index]} cals={cals} />
        ))}
      </div>
    </div>
  );
}

export default Calories;
