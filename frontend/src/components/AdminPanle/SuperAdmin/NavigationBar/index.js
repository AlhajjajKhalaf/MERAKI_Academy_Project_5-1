import React, { useState } from "react";
import "./style.css";
import { AiOutlineMenu } from "react-icons/ai";
import { User } from "../../../../controllers/user";

//AiOutlineMenu
export const NavigationBarPanel = ({setHideMenu ,hideMenu }) => {
  const userArea = ({
    name = User.userName,
    imgUrl = User.imgUr,
  }) => {
    return (
      <div id="user-img2-div">
        <div>
          <img src={imgUrl} />
        </div>
        <div>
          <h4>{name} </h4>
        </div>
      </div>
    );
  };
  return (
    <div id="NavigationBarPanel">
      <AiOutlineMenu color="white" onClick={() => {
        setHideMenu(!hideMenu)
      }} />
      <div>{userArea({})}</div>
    </div>
  );
};
