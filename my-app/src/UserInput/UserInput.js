import React from "react";

const userInput = (props) => {
  const style = {
    border: "2px solid skyblue",
  };
  return (
    <div className="input-box">
      <input
        style={style}
        type="text"
        onChange={props.changed}
        value={props.currentName}
      />
    </div>
  );
};

export default userInput;
