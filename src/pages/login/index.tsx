import React from 'react';
import './Login.css';

const Login = () => {
    return  (
        <>
            <div className="loginBorder"> 
                <div className='imageLeft'>
                    <img src='http://localhost:3000/books.jpg'></img>
                </div>
                <div className='formRight'>
                    <h3> Login </h3>
                    <p> Email </p>
                    <p> Password </p>
                    <button> Login </button>
                </div>
            </div>
        </>
    )
}

export {Login}