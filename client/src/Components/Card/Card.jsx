import React from "react";
import { Link } from 'react-router-dom';
import "./Card.css";
import imagenPoke from "../pokemon.png"

export default function Card({ id, types, name, img}) {
    return (
        <div className="card">
            <div className="card-details">
                <div className="img-game">
                    <img
                        src={img || imagenPoke} 
                        alt={name}
                        height="150px"
                        width="150px"
                    />
                </div>
                <h3 className="text-title">{name[0].toUpperCase() + name.substring(1)}</h3>
                <h3 className="text-body">
                    Type:{" "}
                    {types.map((e) => " " + e.charAt(0).toUpperCase() + e.slice(1) + " ")}
                </h3>
            </div>
            <Link className="por" to={`/pokemons/${id}`}>
                <button className="card-button">More info</button>
            </Link>
        </div>
    );
};