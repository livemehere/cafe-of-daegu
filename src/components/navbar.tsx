import React, { useState } from "react";
import ListItem from "./listItem";
import { FaAngleDown } from "react-icons/fa";
import { useRecoilValue } from "recoil";
import { carfeState } from "../atom";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const cafeList = useRecoilValue(carfeState);

  const selectCafe = () => {
    console.log(1);
    //TODO: 주소 -> 좌표
    //TODO: 조표 -> selectedCafe 값으로 세팅

    //TODO: 그다음 지도에서는 selectedCafe를 observe하다가 생기면 위치이동 및 마커 표시
  };

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
          {cafeList.map((i) => (
            <ListItem key={i.연번} cafeData={i} onClick={selectCafe} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
