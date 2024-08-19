import { supabase } from '../config/supabaseClient';
import { useUser } from '../Hooks/useUserStore';

export const addDistance = async (running_time,activity_type) => {
  const {user, setUser} = useUser((state)=>({
    user:state.user,
    setUser:state.setUser
}))
  const { data, error } = await supabase
    .from('user_activities')
    .insert([
      {
        user_id: user.id,
        activity_date: new Date(),
        running_time: runningTime,
        activity_type: activityType,
      }
    ]);

  if (error) {
    console.error('Error adding run:', error.message);
  } else {
    console.log('Run added:', data);
  }
};
