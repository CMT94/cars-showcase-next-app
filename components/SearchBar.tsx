"use client";

import React from "react";
import Image from "next/image";

import { SearchButton, SearchManufacturer } from ".";
import SearchModel from "./SearchModel";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = React.useState<string>("");
  const [model, setModel] = React.useState<string>("");

  const handleSearch = () => {};

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <SearchModel model={model} setModel={setModel} />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
