"use client";

import React from "react";

import { CarsListProps } from "@/types";
import { CarCard } from ".";

const CarCardsList = ({ carsList }: CarsListProps) => {
  return (
    <section>
      <div className="home__cars-wrapper">
        {carsList?.map((car, carIndex) => (
          <CarCard key={`${car}-${carIndex}`} car={car} />
        ))}
      </div>
    </section>
  );
};

export default CarCardsList;
