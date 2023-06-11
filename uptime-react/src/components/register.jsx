import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { register_action_user } from '../redux/store';
//import { v4 as uuidv4 } from 'uuid';
import { Link,useNavigate } from "react-router-dom";

const Register = ()=>{

    const baseURL="http://localhost:3001/api/auth/register";
    const [fname, setFName] = useState(false);
    const [lname, setLName] = useState(false);
    const [email, setEmail] = useState(false);
    const [password,setPassword] = useState(false);
    const [isValid, setValid] = useState(false);

    const [fnameToushed, setFNameToushed] = useState(false);
    const [lnameToushed, setLNameToushed] = useState(false);
    const [emailToushed, setEmailToushed] = useState(false);
    const [passwordToushed,setPasswordToushed] = useState(false);

    const [error,setError] = useState(false);
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const registerUser = (e)=> {
        e.preventDefault();
        const newObject = {
            firstname:e.target[0].value,
            lastname:e.target[1].value,
            email:e.target[2].value,
            password:e.target[3].value
        }
        axios.post(baseURL,newObject).then((response) => {
            console.log(response);
            //dispatch(register_action_user('se registro un usuario'));
            navigate("/login");
        });
        
    }

    const onchange = (e)=>{
        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        //const passwordFormat = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}";
        switch(e.target.name){
            case 'firstname':
                (e.target.value.length > 0) ? setFName(true) : setFName(false);
                setFNameToushed(true);
                break;
            case 'lastname':
                (e.target.value.length > 0) ? setLName(true) : setLName(false);
                setLNameToushed(true);
                break; 
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

        if(fname && lname && email && password){
            setValid(true);
        }else{
            setValid(false);
        }

        validateError();

    }

    const validateError=()=>{
        if(fnameToushed && !fname){
            setError(true);
        }
        if(lnameToushed && !lname){
            setError(true);
        }
        if(emailToushed && !email){
            setError(true);
        }
        if(passwordToushed && !password){
            setError(true);
        }
    }

    return <div>
        <div className="container">
            <div className="row justify-content-center vh-100 align-items-center">
                <div className="mt-5 d-flex flex-column col-md-5 form">
                    <h1>Register</h1>
                    <form onSubmit={registerUser}  className="d-flex flex-column gap-3 mb-3">
                        <input 
                            type='text' 
                            name="firstname" 
                            placeholder="First Name" 
                            required
                            onChange={onchange}
                        />
                        <input 
                            type='text' 
                            name="lastname" 
                            placeholder="Last Name" 
                            required
                            onChange={onchange}
                        />
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
                    <Link to='/login'>Have already Account?</Link>
                </div>
            </div>
        </div>
        
    </div>;
}

export default Register;