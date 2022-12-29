import React from "react";
import { Link } from 'react-router-dom';
import "./Card.css";
import imagenPoke from "../pokemon.png";

export default function Card({ id, types, name, img }) {
    const allTypes = {
        normal: "normal",
        fighting: "fighting",
        flying: "flying",
        poison: "poison",
        ground: "ground",
        rock: "rock",
        bug: "bug",
        ghost: "ghost",
        steel: "steel",
        fire: "fire",
        water: "water",
        grass: "grass",
        electric: "electric",
        psychic: "psychic",
        ice: "ice",
        dragon: "dragon",
        dark: "dark",
        fairy: "fairy",
    };

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
                <div className="conteiner-types">
                    {types.map((t, i) => {
                        if (t === allTypes[t]) {
                            return (
                                <img
                                    className="img-types"
                                    src={`./Imagenes/${t}.png`}
                                    alt={`type_${t}.png`}
                                    key={i}
                                />
                            );
                        }
                    })}
                </div>
            </div>
            <Link className="por" to={`/pokemons/${id}`}>
                <button className="card-button">More info</button>
            </Link>
        </div>
    );
};