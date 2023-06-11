import './style.scss';
import { useSelector } from 'react-redux';
import { ToggleGroup } from './toggle.group';

export const UserInfo = ()=>{

    const loggedUser = useSelector((state)=>state.user);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="user-info">
                    <div className="user-info__global d-flex">
                        <div className='user-info__global__img'>
                            <img src={require('../../assets/cards/profile.gif')} />
                        </div>
                        <div className='user-info__global__info'>
                            <p className='name fw-bold mb-2'>{loggedUser.firstname}  {loggedUser.lastname}</p>
                            <p className='ocuppation fw-bold mb-2 text-uppercase text-secondary'>{loggedUser.role[0]} | Software engineer | {loggedUser.state} </p>
                            <p className='brief mb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur. Lorem ipsum dolor sit amet ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adip consectetur adip Maxime mollitia</p>
                        </div>
                    </div>
                    <hr></hr>
                    <ToggleGroup />
                </div>
            </div>
        </div>
    )
}