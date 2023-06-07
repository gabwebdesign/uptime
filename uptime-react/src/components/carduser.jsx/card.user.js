import './style.scss';

export const CardUser=({firtsName,lastName,state})=>{
    return(
        <div className='card-container'>
            <div className='card d-flex justify-content-center'>
                <img className='mb-3' src={require('../../assets/cards/profile.gif')}/>
                <p className='text-uppercase text-center mb-0 fw-bolder'>{firtsName}  {lastName}</p>
                <p className='text-center job-position'>Occupation</p>
            </div>
            <div className='card-container__state text-center d-flex justify-content-center align-items-center'>
                <span>{state}</span>
            </div>
        </div>
    )
} 