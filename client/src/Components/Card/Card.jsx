import React from "react";
import { Link } from 'react-router-dom';
import "./Card.css";
import imagenPoke from "../pokemon.png"

export default function Card({ id, types, name, img}) {
    const typesArr = [];

    if (types.length > 1) {
        typesArr.push(`${types[0].charAt(0).toUpperCase() + types[0].slice(1)}, ${types[1].charAt(0).toUpperCase() + types[1].slice(1)}`)
    } else {
        typesArr.push(types[0].charAt(0).toUpperCase() + types[0].slice(1))
    }

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
                    Type: {typesArr.map((e) => e + " ")}
                </h3>
            </div>
            <Link className="por" to={`/pokemons/${id}`}>
                <button className="card-button">More info</button>
            </Link>
        </div>
    );
};