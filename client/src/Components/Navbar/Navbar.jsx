import React from "react";
import { Link } from "react-router-dom";

import Search from "../Search/Search";
import logo from "../logo-landing.png";

import "./Navbar.css";

export default function Navbar({ setCurrentPage }) {
    return (
        <div className="nav-container" margin="0px">
            <div className="div-search">
            <Link to="/">
                <div className="tittle2">
                    <img src={logo} alt="logo" className="logo"></img>
                </div>
            </Link> 
            <Search setCurrentPage={setCurrentPage} />
            </div>
            <div className="div-buttons">
                <Link to={"/pokemon"}>
                    <button className="create-poke">Create Pokémon</button>
                </Link>
                {" "}
            </div>
        </div>
    );
};