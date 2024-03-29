import React from "react";

import { fetchCars } from "@/utils";
import { HomeProps } from "@/types";
import { FUELS, YEARS_OF_PRODUCTION } from "@/constants";

import { CustomFilter, Hero, SearchBar } from "@/components";
import { CarCardsList, ShowMore } from "@/components";

const Home = async ({ searchParams }: HomeProps) => {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });

  const isDataEmpty =
    !Array.isArray(allCars) || allCars.length === 0 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Cars Catalogue</h1>
          <p>Explore all the best cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={FUELS} />
            <CustomFilter title="year" options={YEARS_OF_PRODUCTION} />
          </div>
        </div>

        {!isDataEmpty ? (
          <React.Fragment>
            <CarCardsList carsList={allCars} />

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </React.Fragment>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results.</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Home;
