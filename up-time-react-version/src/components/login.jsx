//import { useUserContext, useUserToggleContext } from "../provider/userProvider";
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { register_action_user } from '../redux/store';
import { v4 as uuidv4 } from 'uuid';

const Login = ()=>{

    //const user = useUserContext();
    //const cambiaLogged = useUserToggleContext();
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');

    //const currentUser = useSelector(state => state);
    const dispatch = useDispatch();

    const showUser = (e)=> {
        e.preventDefault();
        console.log(e)
        const newObject = {
            firstname:'',
            lastname:'',
            email:e.target[0].value,
            password:e.target[1].value,
            id:uuidv4(),
        }
        dispatch(register_action_user(newObject));
    }

    const onchange = (e)=>{
        console.log(e);
    }

    return <div>
        <div className="container">
            <div className="row justify-content-center vh-100 align-items-center">
                <div className="mt-5 d-flex flex-column col-3">
                    <form onSubmit={showUser}  className="d-flex flex-column gap-3">
                        <input 
                            type='text' 
                            name="firstname" 
                            className="p-1"
                            placeholder="First Name" 
                            required
                            onChange={onchange}
                        />
                        <input 
                            type='text' 
                            name="lastname" 
                            className="p-1"
                            placeholder="Last Name" 
                            required
                            onChange={onchange}
                        />
                        <input 
                            type='email' 
                            name="username" 
                            className="p-1"
                            placeholder="Your e-mail" 
                            required
                            onChange={onchange}
                        />
                        <input 
                            type='password' 
                            name="password" 
                            className="p-1"
                            placeholder="password" 
                            required
                            onChange={onchange}
                        />
                        <button type="submit" className="btn btn-primary p-3" disabled={!input1 && !input2}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
        
    </div>;
}

export default Login;