import React from 'react'
import './input.css'




const Input = ({label, value, type, onChange, name}) => {
    return (
        <div>
        <label>{label}</label>
        <div>
            <input type={type} placeholder={`Enter ${label}`} name={name} value={value} onChange={(e) => onChange(e.target.value)}/>
        </div>
        </div>
    )
}

export default Input