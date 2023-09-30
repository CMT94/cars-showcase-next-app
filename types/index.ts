import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  btnType?: "submit" | "button";
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface CustomFilterProps {
  title: string;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
