import React from 'react'
import './FormElement.css'

function FormElement() {
    return (
        <div className='wrap'>
            
            <p className='heading'>Name</p>
            <input className='ip' type='text' placeholder='Enter Name' />

            <p className='heading'>Email</p>
            <input className='ip' type='email' placeholder='Enter Email' />

            <p className='heading'>Phone Number</p>
            <input className='ip' type='phone' placeholder='Enter Phone Number' />

            <p className='heading'>Password</p>
            <input className='ip' type='password' placeholder='Enter Password' />

            <p className='heading'>Confirm Password</p>
            <input className='ip' type='password' placeholder='Confirm Password' />

            <button className='btn' type='submit'> SAVE </button>
            
        </div>
    )
}

export default FormElement