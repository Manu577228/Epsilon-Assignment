import React from 'react'
import './Card.css'

function Card() {
    return (
        <div className='wrapper'>
            <div className='card'>

                <div className='image'>
                    <img src='https://images.unsplash.com/photo-1513904178077-6c5730ddd446?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' alt='dog' />
                </div>

                <div className='title'>
                    <p className='beach'>Beach Day</p>
                    <p className='rufus'>RUFUS THE DOG</p>
                    <p className='modification'>Modified 02/28/2018 by frost</p>
                </div>

            </div>
        </div>
    )
}

export default Card