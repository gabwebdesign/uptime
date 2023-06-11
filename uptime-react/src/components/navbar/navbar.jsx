import { useSelector } from 'react-redux';
import './style.scss';
import { Link } from 'react-router-dom';

export const NavBar = ()=>{

    const loggedUser = useSelector((state)=>state.user);

    return(
        <nav className="navbar w-100">
            <div className='navbar__search d-flex'>
                <div className='text-capitalize'>{loggedUser.role}</div>
                <input className='navbar__search__input' />
            </div>
            <div className='navbar__buttons d-flex'>
                <button className='btn btn-primary d-none d-lg-block'>Create User +</button>
                <button className='btn btn-primary d-none d-lg-block'>Create Project +</button>
                <div>
                    <Link to='/userinfo' >{loggedUser.firstname}  {loggedUser.lastname}</Link>
                </div>
            </div>
        </nav>
    )
}