"use client";

import Image from "next/image";

import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  btnType,
  containerStyles,
  textStyles,
  rightIcon,
  isDisabled,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
      disabled={isDisabled}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="Right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
