import { atom } from "recoil";

export interface Cafe {
  연번: number;
  업종명: string;
  업소명: string;
  "소재지(도로명)": string;
  "소재지(지번)": string;
  영업장면적: number;
  소재지전화: string;
  업태명: string;
}

export const carfeState = atom<Cafe[]>({
  key: "carfeState",
  default: [],
});
