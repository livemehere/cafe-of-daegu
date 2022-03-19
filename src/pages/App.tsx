import React, { useEffect, useState } from "react";
import NaverMap from "../components/naverMap";
import Navbar from "../components/navbar";
import { useRecoilState } from "recoil";
import { carfeState } from "../atom";
import data from "../data/data.json";
import { FaAngleDown } from "react-icons/fa";

function App() {
  const [cafe, setCafe] = useRecoilState(carfeState);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setCafe(data);
  }, []);
  return (
    <div className="App">
      <div className="h-screen m-auto relative">
        <NaverMap />
        <Navbar toggle={toggle} />
        <FaAngleDown
          className={
            "z-[1000] absolute bottom-6 right-4 text-3xl " +
            (toggle ? null : "rotate-180")
          }
          onClick={() => setToggle((prevState) => !prevState)}
        />
      </div>
    </div>
  );
}

export default App;
