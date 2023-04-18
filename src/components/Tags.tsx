import React from "react";
import SingleTag from "./tag";

function Tags({ array }: { array: string[] }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        marginTop: "8px",
      }}
    >
      {array.map((item) => {
        return <SingleTag title={item} />;
      })}
    </div>
  );
}

export default Tags;
