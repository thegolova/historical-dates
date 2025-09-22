import React from "react";
import styles from "./ArrowButton.module.scss";

type ArrowButtonProps = {
  position?: "left" | "right";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

const ArrowButton: React.FC<ArrowButtonProps> = ({
  position = "left",
  onClick,
  className,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${styles.button} 
        ${styles[position]} 
        ${disabled ? styles.disabled : ""}
        ${className || ""}`}
      disabled={disabled}
    >
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.icon}
      >
        <circle
          cx="25"
          cy="25"
          r="24.5"
          transform="matrix(-1 0 0 1 50 0)"
          stroke="#42567A"
          strokeOpacity="0.5"
        />
        <path
          d="M27.4999 18.75L21.2499 25L27.4999 31.25"
          stroke="#42567A"
          strokeWidth="2"
        />
      </svg>
    </button>
  );
};

export default ArrowButton;
