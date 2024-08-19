import { useState } from "react";
import { supabase } from "../config/supabaseClient";
import "./Profile.css";
import { useUser } from "../Hooks/useUserStore";

const Profile = () => {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const {user} = useUser((state)=>state.user)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = JSON.parse(sessionStorage.getItem('user')); 
    if (!user || !user.id) {
      setError("User not authenticated.");
      return;
    }

    if (!name || !weight) {
      setError("Please fill out all fields.");
      return;
    }

    if (weight <= 0) {
      setError("Weight must be a positive number.");
      return;
    }

    const { data, error } = await supabase
      .from('user_profiles')
      .upsert([{ user_id: user.id, name, weight }]);

    if (error) {
      setError(error.message);
    } else {
      setSuccess("Profile updated successfully.");
      setName("");
      setWeight("");
    }
  };


  return (
    <div>
      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="item">
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            value={name}
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div className="item">
          <label htmlFor="weight">Weight (kgs):</label>
          <input 
            type="number" 
            id="weight" 
            value={weight}
            onChange={(e) => setWeight(e.target.value)} 
          />
        </div>
        <button className="profile-button" type="submit">
          Submit
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{success}</p>}
    </div>
  );
};

export default Profile;
