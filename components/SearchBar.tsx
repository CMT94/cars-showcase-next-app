"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { SearchButton, SearchManufacturer } from ".";
import SearchModel from "./SearchModel";

const SearchBar = () => {
  const router = useRouter();

  const [manufacturer, setManufacturer] = React.useState<string>("");
  const [model, setModel] = React.useState<string>("");
  const [error, setError] = React.useState<string | undefined>(undefined);

  const handleSearch = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    let err;
    if (manufacturer === "" && model === "") {
      alert("Please, fill in the search bar.");
      // TODO: handle errror with popup modal (Dialog, TransitionChild, onEnter, onLeave, etc...)
      // err = "Please, fill in the search bar";
      // setError(err);
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathName);
  };
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
