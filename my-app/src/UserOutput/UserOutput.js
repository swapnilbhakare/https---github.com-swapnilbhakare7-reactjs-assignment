import React from "react";
import "./style.css";
const UserOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>UserName: {props.userName}</p>
      <p>this is another paragram</p>
    </div>
  );
};

export default UserOutput;
