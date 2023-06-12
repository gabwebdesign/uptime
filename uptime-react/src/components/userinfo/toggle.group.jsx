import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from '../../redux/userSlice';
import axios from "axios";

export const ToggleGroup = ()=>{

    const loggedUser = useSelector((state)=>state.user);
    const dispatch = useDispatch();

    const types = ["idle", "brb", "working on","training"];
    const [active, setActive] = useState(types[0]);
    const toggleStateUser = (type)=>{
        setActive(type);
        axios.post(`http://localhost:3001/api/users`,{
            _id:loggedUser.id,
            state:type
        }).then((response)=>{
            let newUser =response.data.usertoModified.value;
            dispatch(update(newUser));
            localStorage.setItem('uptime',JSON.stringify(newUser));
        }).catch((e)=>{
            console.log(e)
        })
    }
    return (
        <div className="user-info__states d-flex">
          {types.map((type) => (
            <button key={type} className={active===type ? 'btn btn-primary btn-state' : 'btn btn-secondary btn-state'} onClick={() => toggleStateUser(type)}>
              {type}
            </button>
          ))}
        </div>
      );
}