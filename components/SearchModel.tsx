import React, { SetStateAction } from "react";
import Image from "next/image";
import { SearchButton } from ".";

interface SearchModelProps {
  model: string;
  setModel: React.Dispatch<SetStateAction<string>>;
}

const SearchModel = ({ model, setModel }: SearchModelProps) => {
  const handleChangeModel = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setModel(ev.target.value);
  };

  return (
    <React.Fragment>
      <Image
        src="/model-icon.png"
        alt="Model icon"
        width={25}
        height={25}
        className="absolute w-[20px] h-[20px] ml-4"
      />
      <input
        type="text"
        name="model"
        value={model}
        placeholder="Touareg"
        onChange={handleChangeModel}
        className="searchbar__input"
      />
    </React.Fragment>
  );
};

export default SearchModel;
