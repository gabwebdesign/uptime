import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { register_action_user } from '../redux/store';
import { SweetAlert } from "./sweetalert";
import { Link } from "react-router-dom";

const Login = ()=>{

    const [email, setEmail] = useState(false);
    const [password,setPassword] = useState(false);
    const [isValid, setValid] = useState(false);

    const [emailToushed, setEmailToushed] = useState(false);
    const [passwordToushed,setPasswordToushed] = useState(false);

    const [error,setError] = useState(false);

    const userRegistered = useSelector(state => state)

    const dispatch = useDispatch();

    const showUser = (e)=> {
        e.preventDefault();
        const credentials = {
            email:e.target[0].value,
            password:e.target[1].value
        }
        dispatch({
            type:"AUTH",
            paylaod:credentials
        });
    }

    const onchange = (e)=>{
        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        //const passwordFormat = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}";
        switch(e.target.name){
            case 'email':
                (e.target.value.match(mailFormat)!=null) ? setEmail(true) : setEmail(false);
                setEmailToushed(true);
                break;    
            case 'password':
                (e.target.value.length > 3) ? setPassword(true) : setPassword(false);
                setPasswordToushed(true);
                break;        
            default:
            break;
        }

        if( email && password){
            setValid(true);
        }else{
            setValid(false);
        }

        validateError();

    }

    const validateError=()=>{
        if(emailToushed && !email){
            setError(true);
        }
        if(passwordToushed && !password){
            setError(true);
        }
    }

    return <div>
        {
            userRegistered==='se registro un usuario' && 
            <SweetAlert text={'The user was created successufly'}></SweetAlert>
        }
        <div className="container">
            <div className="row justify-content-center vh-100 align-items-center">
                <div className="mt-5 d-flex flex-column col-md-5 form">
                    <h1>Login</h1>
                    <form onSubmit={showUser}  className="d-flex flex-column gap-3 mb-3">
                        <input 
                            type='email' 
                            name="email" 
                            placeholder="Your e-mail" 
                            required
                            onChange={onchange}
                        />
                        <input 
                            type='password' 
                            name="password" 
                            placeholder="password" 
                            required
                            onChange={onchange}
                        />
                        <button type="submit" className="btn btn-primary p-3" disabled={!isValid}>Register</button>
                        { error &&  <p className="text-danger">*Please fill all fields.</p>}
                    </form>
                    <div className="d-flex justify-content-end">
                        <Link to='/'>Not Registred yet?</Link>
                    </div>
                </div>
            </div>
        </div>
        
    </div>;
}

export default Login;