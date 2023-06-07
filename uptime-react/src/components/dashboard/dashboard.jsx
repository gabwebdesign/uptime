import { useEffect, useState } from 'react';
import './style.scss';
import axios from "axios";
import { API_URL } from '../../config';
import { CardUser } from '../carduser.jsx/card.user';

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
            <div className='row'>
                <div className='dash d-flex flex-wrap justify-content-around w-100 p-3'>
                    { totalUsers.map(((element)=>{
                        return <CardUser 
                        key={element[0]}
                        firtsName={element[1].name}
                        />
                    }))
                    }
                </div>
            </div>
        </div>

    )
}