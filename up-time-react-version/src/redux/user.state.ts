import { createSlice } from '@reduxjs/toolkit';
import { User } from './user.model';


export const UserEmpty:User={
    username:'',
    password:''
}

export const userSlice = createSlice({
    name:'user',
    initialState:UserEmpty,
    reducers:{
        createUser:(state, action) => action.payload,
        modifyUser:(state,action) => ({...state,...action.payload}),
        resetUser:() => UserEmpty
    }
})

//export const { createUser, modifyUser, resetUser } =  userSlice.actions;
export default userSlice.reducer;
