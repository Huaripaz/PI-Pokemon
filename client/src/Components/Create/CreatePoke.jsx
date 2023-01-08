import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { getTypes, resState, getPokes } from "../../redux/actions/actions";
import Loader from "../Loader/Loader";
import Message from "../Message/Message";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { validation } from "../Validations/Validations";

import "./CreatePoke.css";

export default function CreatePoke() {
  const dispatch = useDispatch();
  const allTypes = useSelector((e) => e.types);
  const allPokes = useSelector((e) => e.pokemons);
  const [response, setResponse] = useState(null);
  const [loading] = useState(false);
  const [err, setErr] = useState(false);

  const [input, setInput] = useState({
    name: "",
    health: "",
    strength: "",
    defense: "",
    height: "",
    speed: "",
    weight: "",
    types: [],
    img: "",
    createdDB: false,
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getTypes());
    dispatch(resState(resState));
    dispatch(getPokes());
  }, [dispatch]);

  async function handleSubmit(e) {
    e.preventDefault();
    const a = allPokes.filter((b) => b.name === input.name);
    if (a.length > 0) {
      return alert("There is a pokémon with that name, try another");
    }

    if (
      input.name.length &&
      input.health.length &&
      input.strength.length &&
      input.defense.length &&
      input.height.length &&
      input.speed.length &&
      input.weight.length &&
      input.types.length
    ) {
      let crear = {
        name: input.name,
        health: input.health,
        strength: input.strength,
        defense: input.defense,
        height: input.height,
        speed: input.speed,
        weight: input.weight,
        img: input.img,
        types: input.types.join(", "),
      };

      const create = await axios.post("http://localhost:3001/pokemon", crear);
      console.log(create);

      // setLoading(false);
      setResponse(true);

      setTimeout(() => setResponse(false), 4000);
      setInput({
        name: "",
        health: "",
        strength: "",
        defense: "",
        height: "",
        speed: "",
        weight: "",
        types: [],
        img: "",
        createdDB: false,
      });
    } else if (
      !input.name.length ||
      !input.health.length ||
      !input.strength.length ||
      !input.defense.length ||
      !input.height.length ||
      !input.speed.length ||
      !input.weight.length ||
      !input.types.length
    ) {
      setErr(true);
      setTimeout(() => setErr(false), 4000);
    }
  }

  function handelChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validation({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSelectTypes(e) {
    const { value } = e.target;
    if (input.types.includes(value))
      return alert("You've already selected that temperament");
    if (input.types.length < 6) {
      setInput({
        ...input,
        types: [...input.types, value],
      });
      setErrors(
        validation({
          ...input,
          types: [...input.types, value],
        })
      );
    } else alert("You've reached the max amount of temperaments");
  }

  function handleDelete(e) {
    e.preventDefault();
    setInput({
      ...input,
      types: input.types.filter((temp) => temp !== e.target.value),
    });
  }

  return (
    <div className="content">
      <div key="up" className="up-things">
        <Link to="/home">
          <button key="up1" className="boton">
            Home
          </button>
        </Link>
      </div>
      <div key="form" className="formPerfil">
        <div key="up45">
          <h1 key="up2" className="titleForm">
            Create Pokémon
          </h1>
        </div>

        <form key="form4" className="form" onSubmit={resState}>
          <div key="name8" className="inputs">
            <label key="name" className="title5">
              Name:
            </label>
            <input
              key="name2"
              type="text"
              name="name"
              placeholder="Name"
              value={input.name}
              onChange={(e) => handelChange(e)}
              className="inputName"
            />

            <strong className="msgError"> {errors.name }</strong>
          </div>
          <div key="strength8" className="inputs">
            <label key="Strength" className="title5">
              Strength:
            </label>
            <input
              type="number"
              name="strength"
              key="strength2"
              placeholder="Strength"
              value={input.strength}
              onChange={(e) => handelChange(e)}
              className="inputStrength"
            />

            <strong className="msgError"> {errors.strength}</strong>
          </div>

          <div key="defense8" className="inputs">
            <label key="defense" className="title5">
              Defense:
            </label>
            <input
              type="number"
              name="defense"
              key="defense2"
              placeholder="Defense"
              value={input.defense}
              onChange={(e) => handelChange(e)}
              className="inputDefense"
            />

            <strong className="msgError"> {errors.defense}</strong>
          </div>

          <div key="img8" className="inputs">
            <label key="image" name="img" className="title5">
              Image:
            </label>
            <input
              key="image2"
              name="img"
              value={input.img}
              placeholder="URL"
              onChange={(e) => handelChange(e)}
              className="inputImg"
            ></input>
          </div>
          <div key="hp8" className="inputs">
            <label key="hp2" className="title5">
              Health:
            </label>
            <input
              type="number"
              name="health"
              key="hp3"
              placeholder="Health"
              value={input.health}
              onChange={(e) => handelChange(e)}
              className="inputHealth"
            />

            <strong className="msgError"> {errors.health}</strong>
          </div>
          <div key="height8" className="inputs">
            <label key="height2" className="title5">
              Height:
            </label>
            <input
              type="number"
              name="height"
              key="height3"
              placeholder="Height"
              value={input.height}
              onChange={(e) => handelChange(e)}
              className="inputHeight"
            />

            <strong className="msgError"> {errors.height}</strong>
          </div>
          <div key="weight8" className="inputs">
            <label key="weight2" className="title5">
              Weight:
            </label>
            <input
              type="number"
              name="weight"
              key="weight3"
              placeholder="Weight"
              value={input.weight}
              onChange={(e) => handelChange(e)}
              className="inputWeight"
            />

            <strong className="msgError"> {errors.weight}</strong>
          </div>
          <div key="speed8" className="inputs">
            <label key="speed2" className="title5">
              Speed:
            </label>
            <input
              type="number"
              name="speed"
              key="speed3"
              placeholder="Speed"
              value={input.speed}
              onChange={(e) => handelChange(e)}
              className="inputSpeed"
            />

            <strong className="msgError"> {errors.speed}</strong>
          </div>
          <div key="types8" className="types">
            <label key="types" className="title5" value="types6" name="types7">
              {" "}
              Types:{" "}
            </label>
            <select
              key="genres2"
              className="inputTypes"
              onChange={(e) => handleSelectTypes(e)}
            >
              {allTypes &&
                allTypes
                  .sort((a, b) => (a.name > b.name ? 1 : -1))
                  .map((e, i) => (
                    <option key={i} value={e.name}>
                      {e.name.toUpperCase()}
                    </option>
                  ))}
            </select>

            <div key="choosed8" className="choosed">
              {!input.types.length ? (
                <strong className="msgError"> {errors.types}</strong>
              ) : (
                input.types.map((value, i) => {
                  return (
                    <div key={i} className="inputType">
                      <button
                        onClick={handleDelete}
                        value={value}
                        className="cross"
                        key="botonX"
                      >
                        X
                      </button>
                      <span key="poke" className="pokeName">
                        {value.toUpperCase()}
                      </span>
                    </div>
                  );
                })
              )}
            </div>
          </div>
          <div key="button8" className="contBtnCreate">
            <button
              key="submit"
              className="btn-createPoke"
              type="submit"
              onClick={(e) => handleSubmit(e)}
            >
              {" "}
              Create Pokémon
            </button>
          </div>
          {loading && <Loader />}
          {response && (
            <Message
              msg="The pokémon was successfully created"
              bgColor="#198754"
            />
          )}
          {err && (
            <Message
              msg="You have to complete all the fields"
              bgColor="#FF0000"
            />
          )}
        </form>
      </div>
    </div>
  );
};
