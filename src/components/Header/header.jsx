import React from 'react'
import { FlagUzIcon } from '../../assets/icon'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    let navigate=useNavigate()
  return (
    <header className='w-100 p-2 px-3 card rounded-5 d-flex flex-row align-items-center shadow-lg' style={{height:"10%"}}>
        <div className='col-2'>
            <div className='fst-italic h4' style={{fontWeight:"900",fontFamily:"sans-serif",color:"var(--color-web-icon)"}}>Worker</div>
        </div>
        <div className='col-7 d-flex justify-content-around align-items-center' style={{listStyleType:"none",fontWeight:"500"}}>
            <div>Foydalanuvchilar uchun</div>
            <div>Ishchilar uchun</div>
            <div>Foydalanuvchilar uchun</div>
        </div>
        <div className='col-3 d-flex flex-row justify-content-end gap-3'>
            <button type='button' className='btn card p-1 rounded-4 d-flex flex-row justify-content-center align-items-center gap-1'>
                <FlagUzIcon/>
                <div>o'zbekcha</div>
                <i className="bi bi-chevron-down"></i>
            </button>
            <button 
                type='button' 
                className='btn card p-1 rounded-4 d-flex flex-row justify-content-center align-items-center gap-1' 
                style={{backgroundColor:"var(--color-yellow)",minWidth:"6rem"}}
                onClick={()=>navigate("/signIn")}
                >
                <i className="bi bi-box-arrow-right"></i>
                <div>kirish</div>
            </button>
        </div>
    </header>
  )
}
