import React, { useState, useContext } from "react";

const userContext = React.createContext();
const userToggleContext = React.createContext();

export const user = {
    email: String,
    password: String
};

export function useUserContext() {
    return useContext(userContext);
}

export function useUserToggleContext() {
    return useContext(userToggleContext);
}

export function UserProvider(props) {

    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([]);

    const cambiaLogin = () => {
        if (user) {
            setUser(null);
        } else {
            setUser({
                name: 'Luis',
                email: 'luis@mail.com'
            });
        }
        console.log(user);
    }

    const createUser = (email,password)=>{
        const newUser = {
            email,
            password
        }
        const updalistUsers = [...newUser];
        return setUser(updalistUsers);
    }

    return (
        <userContext.Provider value={users}>
            <userToggleContext.Provider value={createUser}>
                {props.children}
            </userToggleContext.Provider>
        </userContext.Provider>
    );
}