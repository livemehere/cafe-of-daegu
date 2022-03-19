import React, { useEffect, useState } from "react";
import ListItem from "./listItem";
import { FaAngleDown } from "react-icons/fa";
import { useRecoilState, useSetRecoilState } from "recoil";
import { carfeState, selectedCafeState } from "../atom";
import useGeocode from "../hooks/useGeocode";

interface NavbarProps {
  toggle: boolean;
}

function Navbar() {
  const [cafeList, setCafeList] = useRecoilState(carfeState);
  const [toggle, setToggle] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");

  const { targetGeocode, setAddress } = useGeocode();
  const selectedCafe = useSetRecoilState(selectedCafeState);

  const selectCafe = (address: string) => {
    //TODO: 주소 -> 좌표
    setAddress(address);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    setSearchKeyword(target.value);
  };

  useEffect(() => {
    //TODO: 조표 -> selectedCafe 값으로 세팅
    selectedCafe(targetGeocode);
  }, [targetGeocode]);

  return (
    <div
      className={
        "navbar max-w-5xl absolute-center overflow-scroll " +
        (toggle ? "h-[70vh]" : "h-[40vh]")
      }
    >
      <FaAngleDown
        className={
          "toggle-btn z-[1000] text-3xl " + (toggle ? null : "rotate-180")
        }
        onClick={() => setToggle((prevState) => !prevState)}
      />
      <div>
        <h1 className="text-3xl font-bold text-center pt-5 ">
          찾으시는 카페가 있나요?
        </h1>
        <input
          type="text"
          className="search"
          placeholder="검색"
          value={searchKeyword}
          onChange={handleChange}
        />
        <h2 className="text-[#19104E] text-2xl font-bold pl-[10%] mb-3">
          카페 목록
        </h2>
        <ul>
          {cafeList
            .filter(
              (item) =>
                item.업소명.includes(searchKeyword) ||
                searchKeyword.length === 0,
            )
            .map((i) => (
              <ListItem key={i.연번} cafeData={i} onClick={selectCafe} />
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
