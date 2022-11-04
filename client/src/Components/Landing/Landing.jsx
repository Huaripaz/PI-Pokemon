import React from 'react';
import { Link } from 'react-router-dom';
import logoLand from "../logo-landing.png";
import buttonHome from "./button-home.png"
import "./Landing.css";

export default function LandingPage() {
    return (
        <div className='container'>
            <div className='tittle2'>
                <img src={logoLand} alt='logoLand' className='logoLand'></img>
            </div>
            <Link to='/home'>
                <img src={buttonHome} alt='buttonHome' className='buttonHome'></img>
            </Link>
        </div>
    );
};