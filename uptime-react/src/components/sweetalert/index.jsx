import './style.scss';

export const SweetAlert=({text})=>{
    return(
        <div className="sweet-alert w-100 position-fixed">
            <p className='mb-0 text-center'>{text}</p>
        </div>
    )
}
