import React from "react";

const CirclePicker = ({ list, current, onChange }) => {
  const handleClick = (id) => () => {
    onChange(id);
  };

  return (
    <div>
      {list.map((item) => (
        <button style={{ marginRight: "5px" }} onClick={handleClick(item.id)}>
          {item.type}
        </button>
      ))}
    </div>
  );
};

export default CirclePicker;
