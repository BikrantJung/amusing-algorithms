import React from "react";

function SingleTag({ title }: { title: string }) {
  return (
    <div
      style={{
        fontSize: "8px",
        border: "1px solid #cccccc",
        display: "inline",
        borderRadius: "6px",
        padding: "0.2rem 0.4rem",
        // fontFamily: "Consolas",
        backgroundColor: "#f0f9ff",
        fontWeight: "600",
        color: "#374151",
      }}
    >
      {title}
    </div>
  );
}

export default SingleTag;
