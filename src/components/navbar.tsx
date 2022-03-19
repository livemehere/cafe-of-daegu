import React, { useState } from "react";
import ListItem from "./listItem";
import { FaAngleDown } from "react-icons/fa";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className={
        "navbar max-w-5xl absolute-center overflow-scroll " +
        (toggle ? "h-[558px]" : "h-[258px]")
      }
    >
      <div className="relative">
        <FaAngleDown
          className={
            "absolute top-6 left-4 text-3xl " + (toggle ? null : "rotate-180")
          }
          onClick={() => setToggle((prevState) => !prevState)}
        />
        <h1 className="text-3xl font-bold text-center pt-5 ">
          찾으시는 카페가 있나요?
        </h1>
        <input type="text" className="search" placeholder="검색" />
        <h2 className="text-[#19104E] text-2xl font-bold pl-[10%] mb-3">
          카페 목록
        </h2>
        <ul>
          <ListItem />
          <ListItem />
          <ListItem />
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
