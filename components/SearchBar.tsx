"use client";

import React from "react";

import { SearchButton, SearchManufacturer } from ".";
import SearchModel from "./SearchModel";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = React.useState<string>("");
  const [model, setModel] = React.useState<string>("");
  const [error, setError] = React.useState<string | undefined>(undefined);

  const handleSearch = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    let err;
    if (manufacturer === "" && model === "") {
      err = "Please, fill in the search bar";
      setError(err);
    }
  };

  const updateSearchParams = () => {};
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default SearchBar;
