import React, { useEffect, useState } from "react";
import "./App.scss";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import Home from "./views/Home";
import Page404 from "./views/Page404";
import BreedPage from "./views/BreedPage";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [breeds, setBreeds] = useState("Breeds")

  return (
    <Routes>
      <Route
        path="/"
        element={<Main breeds={breeds} setInputValue={setInputValue} />}
      >
        <Route index element={<Home inputValue={inputValue} setBreeds={setBreeds} />} />
        <Route path="/breed/:breed" element={<BreedPage setBreeds={setBreeds} />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
