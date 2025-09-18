import React from "react";

const Stepper = ({ current, onChange, total }) => {
  const subStep = () => {
    onChange(current - 1);
  };

  const addStep = () => {
    onChange(current + 1);
  };

  return (
    <div style={{ margin: "10px" }}>
      <button
        style={{
          border: "1px solid black",
          borderRadius: "100%",
          padding: "5px",
          marginRight: "5px",
          fontWeight: "bold",
        }}
        onClick={subStep}
      >
        &#60;
      </button>
      <button
        style={{
          border: "1px solid black",
          borderRadius: "100%",
          padding: "5px",
          fontWeight: "bold",
        }}
        onClick={addStep}
      >
        &gt;
      </button>
    </div>
  );
};

export default Stepper;
