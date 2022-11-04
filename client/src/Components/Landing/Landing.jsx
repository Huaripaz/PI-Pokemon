import React from 'react';
import { Link } from 'react-router-dom';
import logoLand from "../logo-landing.png";
import "./Landing.css";

export default function LandingPage() {
    return (
        <div className='container'>
            <h1 className='tittle'>Welcome to...</h1>
            <div className='tittle2'>
                <img src={logoLand} alt='logoLand' className='logoLand'></img>
            </div>
            <p className='content'>¡You have to be the very best!</p>
            <Link to='/home'>
                <button className='btn-land'> Gotta catch'em all! </button>
            </Link>
        </div>
    );
};