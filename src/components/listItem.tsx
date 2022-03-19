import React from "react";
import { Cafe } from "../atom";

interface ListItemProps {
  cafeData: Cafe;
  onClick: (address: string) => void;
}

function ListItem({ cafeData, onClick }: ListItemProps) {
  return (
    <li className="pl-[10%] my-1 border-b-2 mb-4 pb-4 border-indigo-100">
      <h5
        className="text-xl font-bold"
        onClick={() => onClick(cafeData["소재지(도로명)"])}
      >
        {cafeData["업소명"]}
      </h5>
      <p className="text-gray-600">{cafeData["소재지(도로명)"]}</p>
      <p className="text-gray-400">{cafeData["소재지전화"]}</p>
    </li>
  );
}

export default ListItem;
