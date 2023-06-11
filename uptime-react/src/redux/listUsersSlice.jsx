import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const usersListSlice = createSlice({
    name:'listUsers',
    initialState:{
        totalUsers:0,
        usersList:[]
    },
    reducers:{
        listUsers:(state,action)=>{
            let users=[];

            console.log('state en el reducers ',state)
            return state;
        }
    }
})

export const { list }= usersListSlice.actions;
export default usersListSlice.reducer