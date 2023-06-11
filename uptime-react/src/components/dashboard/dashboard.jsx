import { useEffect, useState } from 'react';
import './style.scss';
import { CardUser } from '../carduser.jsx/card.user';
import axios from "axios";

export const Dashboard =()=>{

    const [listUsers,setlistUsers]= useState([]);

    useEffect(()=>{
        fetchAllUsers();
    },[])

    const fetchAllUsers = ()=>{
        axios.post(`http://localhost:3001/api/users`).then((response) => {
            console.log('user from backend', response.data.data);
            setlistUsers(response.data.data);
        }).catch((e)=>{
            console.log(e);
        });
    }

    return(
        <div className='w-100'>
            <div className='row'>
                <div className='d-flex flex-column w-100 p-3'>
                    <div className='hero'>
                        <h1 className='text-center pt-3 mb-1'>THE TEAM</h1>
                        <p className='text-center mb-1'>____</p>
                    </div>
                    <div className='dash d-flex flex-wrap justify-content-around w-100 p-3'>
                        { listUsers.map(((element)=>{
                                return <CardUser 
                                key={element._id}
                                firstName={element.name}
                                state={element.state}
                                />
                            }))
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}