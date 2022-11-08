import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDetail, resState } from "../../redux/actions/actions";
import Loader from "../Loader/Loader";
import "./Details.css";
import imagenPoke from "../pokemon.png";

export default function Detail() {
  const { id } = useParams();
  const pokeDetail = useSelector((state) => state.detail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(id));
    return () => {
      dispatch(resState());
    };
  }, [dispatch, id]);

  if (Object.keys(pokeDetail).length === 0) {
    console.log(pokeDetail.types);

    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "-10rem",
          marginLeft: "3rem",
        }}
      >
        <Loader />
      </div>
    );
  } else {

    const typesArr = [];

    if (pokeDetail.types.length > 1) {
      typesArr.push(`${pokeDetail.types[0].charAt(0).toUpperCase() + pokeDetail.types[0].slice(1)}, ${pokeDetail.types[1].charAt(0).toUpperCase() + pokeDetail.types[1].slice(1)}`);
    } else {
      typesArr.push(pokeDetail.types[0].charAt(0).toUpperCase() + pokeDetail.types[0].slice(1));
    };

    return (
      <div className="paginado2">
        <div>
          <Link to="/home">
            <button className="botonDetails" onClick={resState}>
              Home
            </button>
          </Link>
        </div>
        <div className="details">
          <div className="imgContainer">
            <h1 className="name">{pokeDetail.name[0].toUpperCase() + pokeDetail.name.substring(1)}</h1>
            <img
              className="imagDetails"
              src={pokeDetail.img || imagenPoke}
              alt={pokeDetail.name}
            />
          </div>
          <div className="cardDetails">
            <div className="base3">
              <h2>
                Type:{" "}
                {typesArr.map((e) => e + " ")}
              </h2>
            </div>
            <div className="base3">
              <h2>Health: {pokeDetail.health}</h2>
            </div>
            <div className="base3">
              <h2>Speed: {pokeDetail.speed}</h2>
            </div>
            <div className="base3">
              <h2>Height: {pokeDetail.height}</h2>
            </div>
            <div className="base3">
              <h2>Weight: {pokeDetail.weight} </h2>
            </div>
            <div className="base3">
              <h2>Defense: {pokeDetail.defense}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
