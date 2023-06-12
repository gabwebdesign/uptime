import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    role:[],
    state:'idle',
    id:0
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        auth:(state,action)=>{
            //console.log('action ',action.payload.firstname)
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.role = action.payload.role;
            state.state = action.payload.state;
            state.firstname = action.payload.firstname;
            state.lastname = action.payload.lastname;
            state.id = action.payload._id;
        },
        update:(state,action)=>{
            state.state = action.payload.state;
        }
    }
})

export const { auth, update }= userSlice.actions;
export default userSlice.reducer