import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing.jsx";
import Home from "./Components/Home/Home.jsx";
import Details from "./Components/Details/Details";
import CreatePoke from "./Components/Create/CreatePoke";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:3001/'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pokemon" element={<CreatePoke />} />
          <Route path="/pokemons/:id" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
