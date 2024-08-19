import { create } from "zustand";

export const useUser = create((set)=>({
    user:[],
    setUser:(user)=>set({user}),
    logout:()=>set({user:null})
}))