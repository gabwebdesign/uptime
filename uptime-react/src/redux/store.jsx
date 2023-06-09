import { configureStore } from '@reduxjs/toolkit';
import axios from "axios";
import { API_URL } from '../config';

let totalUsers=[];
export const register = "REGISTER USER";
export const userActionTypes = {
    register:"REGISTER USER",
    auth:"AUTH",
    get_users:"GET USERS",
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
export const register_action_user = (data) => {
    return {
        type:userActionTypes.register,
        payload:data
    }
}

export const get_users_action = (data) => {
    return {
        type:userActionTypes.auth,
        payload:data
    }
}


export const loggin_action_user = (data) => {
    return {
        type:userActionTypes.get_users,
        payload:data
    }
}


// reducers
export const user_reducer = (state= default_user_state, action)=>{
    //console.log(`action type ${action.type}`)
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
            console.log(`action.payload ** ${action.payload}`);
            axios.post(`${API_URL}auth/login`,action.payload).then((response) => {
                console.log('user from backend', response.data.user);
                localStorage.setItem('uptime',JSON.stringify(response.data.user))
                return 'isLogged';
            }).catch((e)=>{
                console.log(e);
            });
            break;
        }
        case userActionTypes.get_users:{
            let users=[];
            axios.post(`${API_URL}auth/login`,action.payload).then((response)=>{
                users = response.data
            }).catch((e)=>{
                console.log(e);
            });
            return users
        }
        default:
            break;
    }
}

export const auth_reducer = (state='',action)=>{
    if(action.type===userActionTypes.auth){
        console.log(`action.payload ** ${action.payload}`);
        let isResolved;
        axios.post(`${API_URL}auth/login`,action.payload).then((response) => {
            console.log('user from backend', response.data.user);
            localStorage.setItem('uptime',JSON.stringify(response.data.user))
            isResolved='isLogged';
        }).catch((e)=>{
            console.log(e);
        });
        return isResolved;
    }
}

/// store
export const store = configureStore(
    { reducer:user_reducer}
);

// console.log('Estado Inicial',store.getState());
// store.subscribe(()=>{
//     console.log('Cambio de estado', store.getState())
// })