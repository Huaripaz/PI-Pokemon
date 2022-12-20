import React from 'react';
import { Link } from 'react-router-dom';
import logoLand from "../logo-landing.png";
import buttonHome from "./button-home.png"
import linkedin from './linkedin.png'
import gitHub from './github.png'
import "./Landing.css";

export default function LandingPage() {
    return (
        <div className='landing'>
            <div className='social-media'>
                <a href='https://github.com/Huaripaz'>
                    <img src={gitHub} alt='gitHub' className='gitHub'></img>
                </a>
                <a href='https://www.linkedin.com/in/huari-patey-paz-17588924a/'>
                    <img src={linkedin} alt='linkedin' className='linkedin'></img>
                </a>
            </div>
            <div className='container'>
                <div className='tittle2'>
                    <img src={logoLand} alt='logoLand' className='logoLand'></img>
                </div>
                <Link to='/home'>
                    <img src={buttonHome} alt='buttonHome' className='buttonHome'></img>
                </Link>
            </div>
            <h2 className='text-footer'>
                Huari Patey Paz © Henry's individual project
            </h2>
        </div>
    );
};