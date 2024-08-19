import { create } from "zustand";

export const useActivity = create((set)=>({
    Activity:'',
    setActivity:(activity)=>set({Activity:activity})
}))