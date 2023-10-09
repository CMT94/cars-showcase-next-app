import React from "react";

import { CarsListProps } from "@/types";
import { CarCard } from ".";

const CarCardsList = ({ carsList }: CarsListProps) => {
  return (
    <section>
      <div className="home__cars-wrapper">
        {carsList?.map((car) => (
          <CarCard car={car} />
        ))}
      </div>
    </section>
  );
};

export default CarCardsList;
