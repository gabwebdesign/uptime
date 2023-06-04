import { configureStore } from '@reduxjs/toolkit';
import axios from "axios";

//let users=[];
const API_URL="http://localhost:3001/api/";
export const register = "REGISTER USER";
export const userActionTypes = {
    register:"REGISTER USER",
    auth:"AUTH",
    edit:"EDIT USER",
    delete:"DELETE USER"
};

// state default user
const default_user_state={
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    id:0,    
}

// actions
export const register_action_user = (user) => {
    return {
        type:userActionTypes.register,
        payload:user
    }
}

export const user_reducer = (state= default_user_state, action)=>{
    switch(action.type){
        case userActionTypes.register:{
            // const checkingUsers = users.find((user)=> user.email === action.payload.email)
            // if(!checkingUsers){
            //     users = [action.payload,...users];
            // }else{
            //     alert('this user already exits');
            // }
            return action.payload;
        }
        case userActionTypes.auth:{
            const data = axios.post(`${API_URL}auth/login`,action.payload).then((response) => {
                console.log('user from backend', response);
                return response;
            }).catch((e)=>{
                console.log(e)
            });
            return data;
        }
        default:return state;
    }
}

/// store
export const store = configureStore(
    { reducer:user_reducer}
);

console.log('Estado Inicial',store.getState());
store.subscribe(()=>{
    console.log('Cambio de estado', store.getState())
})