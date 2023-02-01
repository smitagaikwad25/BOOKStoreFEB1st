import React from "react";
import cartImage from "../../assets/2766594.png";
import "../merger/merger.css";
import { SignIn } from "../signIn/signIn";

export const MergerCLass = () => {
  return (
    <div className="meger-outercontainer">
      <div className="imageContainer">
        <img src={cartImage} className="imagecontent"></img>
        {/* <p>Image</p> */}
        <p>ONLINE BOOK SHOPING</p>
      </div>

      <div className="pages">
        <SignIn />
      </div>
    </div>
  );
};
