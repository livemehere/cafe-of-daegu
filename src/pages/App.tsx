import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { carfeState } from "../atom";
import data from "../data/data.json";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./menu";
import Root from "./root";

function App() {
  const [cafe, setCafe] = useRecoilState(carfeState);

  useEffect(() => {
    setCafe(data);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cafe-of-daegu" element={<Menu />} />
        <Route path="cafe-of-daegu/main" element={<Root />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
