import { useEffect, useState } from 'react';
import './style.scss';
import axios from "axios";
import { API_URL } from '../../config';
import { CardUser } from '../carduser.jsx/card.user';
import { NavBar } from '../navbar/navbar';

export const Dashboard =()=>{

    const [totalUsers,setTotalUsers]= useState([]);
    useEffect(()=>{
        getUsers();
    },[])

    const getUsers = ()=>{
        axios.get(`${API_URL}users`).then((response) => {
            //console.log('user from backend', Object.entries(response.data.data));
            setTotalUsers(Object.entries(response.data.data));
        }).catch((e)=>{
            console.log(e);
        });
    }

    return(
        <div className='container-fluid'>
            <NavBar />
            <div className='row'>
                <div className='d-flex flex-column w-100 p-3'>
                    <div className='hero'>
                        <h1 className='text-center pt-3 mb-1'>THE TEAM</h1>
                        <p className='text-center mb-1'>____</p>
                    </div>
                    <div className='dash d-flex flex-wrap justify-content-around w-100 p-3'>
                        { totalUsers.map(((element)=>{
                            return <CardUser 
                            key={element[0]}
                            firtsName={element[1].name}
                            lastName={element[1].lastName}
                            state={element[1].state}
                            />
                        }))
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}