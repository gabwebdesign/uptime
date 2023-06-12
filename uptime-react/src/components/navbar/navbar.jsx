import { useSelector } from 'react-redux';
import './style.scss';
import { useNavigate } from 'react-router-dom';

export const NavBar = ()=>{

    const loggedUser = useSelector((state)=>state.user);
    const navigate = useNavigate();

    return(
        <nav className="navbar w-100">
            <div className='navbar__search d-flex'>
                <div className='text-capitalize'>{loggedUser.role}</div>
                <input className='navbar__search__input' />
            </div>
            <div className='navbar__buttons d-flex'>
                <button className='btn btn-primary d-none d-lg-block'>Create Project +</button>
                <div className='navbar__buttons__profile-details d-flex align-items-center' onClick={()=> navigate('/userinfo')}>
                    <p className='mb-0'>{loggedUser.firstname}  {loggedUser.lastname}</p>
                    <div className={`state-${loggedUser.state}`}>
                        <img src={require('../../assets/cards/profile.gif')} alt="profile" />
                    </div>
                </div>
            </div>
        </nav>
    )
}