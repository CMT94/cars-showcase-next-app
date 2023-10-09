"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Listbox, Transition } from "@headlessui/react";

import { CustomFilterProps, OptionProps } from "@/types";

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const [selected, setSelected] = React.useState(options[0]);

  const handleSelected = (e: OptionProps) => {
    setSelected(e);
  };

  return (
    <div className="w-fit">
      <Listbox value={selected} onChange={handleSelected}>
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
            <span className="block truncate">{selected.title}</span>
            <Image
              src="/chevron-up-down.svg"
              width={20}
              height={20}
              className="ml-4 object-contain"
              alt="Chevron up down"
            />
          </Listbox.Button>
          <Transition
            as={React.Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="custom-filter__options">
              {options.map((option, optionIndex) => (
                <Listbox.Option
                  key={optionIndex}
                  value={option}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
