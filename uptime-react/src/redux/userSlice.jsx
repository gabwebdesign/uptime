import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    role:[],
    state:'idle'
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        auth:(state,action)=>{
            console.log('action ',action.payload.firstname)
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.role = action.payload.role;
            state.state = action.payload.state;
            state.firstname = action.payload.firstname;
            state.lastname = action.payload.lastname;
        }
    }
})

export const { auth }= userSlice.actions;
export default userSlice.reducer