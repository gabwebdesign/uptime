import './style.scss';

export const CardUser=({firtsName,lastName,state})=>{
    return(
        <div className='card'>
            <p>{firtsName}</p>
            <p>{lastName}</p>
            <p>{state}</p>
        </div>
    )
} 