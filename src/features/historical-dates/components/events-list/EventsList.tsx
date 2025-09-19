import React from "react";

const EventsList = ({ list }) => {
  return (
    <div style={{ display: "flex" }}>
      {list?.events.map((item) => (
        <div key={item.id} style={{ border: "1px solid black" }}>
          <div>{item.date}</div>
          <div>{item.description}</div>
        </div>
      ))}
    </div>
  );
};

export default EventsList;
