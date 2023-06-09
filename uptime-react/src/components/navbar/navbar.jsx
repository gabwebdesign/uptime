import './style.scss';

export const NavBar = ()=>{
    return(
        <nav className="navbar w-100">
            <div className='navbar__search d-flex'>
                <div>Type of User</div>
                <input className='navbar__search__input' />
            </div>
            <div className='navbar__buttons d-flex'>
                <button className='btn btn-primary'>Create User +</button>
                <button className='btn btn-primary'>Create Project +</button>
                <div>my profile</div>
            </div>
        </nav>
    )
}