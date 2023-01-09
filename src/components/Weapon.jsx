import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

export const Weapon = () => {
  const { state } = useLocation();
  const item = state || [];

  console.log(item);
  return item ? (
    <div>
      <h1>{item.displayName}</h1>
      <img src={item.displayIcon} alt="" />
    </div>
  ) : (
    "Erreur"
  );
};
