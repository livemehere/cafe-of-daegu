import React, { useEffect, useState } from "react";
import NaverMap from "../components/naverMap";
import Navbar from "../components/navbar";
import { useRecoilState } from "recoil";
import { carfeState } from "../atom";
import data from "../data/data.json";
import { FaAngleDown } from "react-icons/fa";

function App() {
  const [cafe, setCafe] = useRecoilState(carfeState);

  useEffect(() => {
    setCafe(data);
  }, []);

  return (
    <div className="App">
      <div className="h-screen m-auto relative">
        <NaverMap />
        <Navbar />
      </div>
    </div>
  );
}

export default App;
