import React from "react";
import styled from "styled-components";

export const WeaponBySidearms = ({ type, weapon }) => {
  const filterWeaponsBySidearms = weapon.filter(
    (weapon) => weapon.shopData.categoryText === "Sidearms"
  );
  return (
    <Test>
      <h3>{type}</h3>
      {filterWeaponsBySidearms.map((weapon) => {
        return (
          <div key={weapon.uuid}>
            <img src={weapon.shopData.newImage} alt="" />
            <p>{weapon.shopData.cost}</p>
            <p>{weapon.displayName}</p>
          </div>
        );
      })}
    </Test>
  );
};

export const WeaponBySniper = ({ type, weapon }) => {
  const filterWeaponsBySniper = weapon.filter(
    (weapon) => weapon.shopData.categoryText === "Sniper Rifles"
  );
  return (
    <Test>
      <h3>{type}</h3>
      {filterWeaponsBySniper.map((weapon) => {
        return (
          <div key={weapon.uuid}>
            <img src={weapon.shopData.newImage} alt="" />
            <p>{weapon.shopData.cost}</p>
            <p>{weapon.displayName}</p>
          </div>
        );
      })}
    </Test>
  );
};

export const WeaponByHeavy = ({ type, weapon }) => {
  const filterWeaponsByHeavy = weapon.filter(
    (weapon) => weapon.shopData.categoryText === "Heavy Weapons"
  );
  return (
    <Test>
      <h3>{type}</h3>
      {filterWeaponsByHeavy.map((weapon) => {
        return (
          <div key={weapon.uuid}>
            <img src={weapon.shopData.newImage} alt="" />
            <p>{weapon.shopData.cost}</p>
            <p>{weapon.displayName}</p>
          </div>
        );
      })}
    </Test>
  );
};

export const WeaponByRifles = ({ type, weapon }) => {
  const filterWeaponsByRifles = weapon.filter(
    (weapon) => weapon.shopData.categoryText === "Assault Rifles"
  );
  return (
    <Test>
      <h3>{type}</h3>
      {filterWeaponsByRifles.map((weapon) => {
        return (
          <div key={weapon.uuid}>
            <img src={weapon.shopData.newImage} alt="" />
            <p>{weapon.shopData.cost}</p>
            <p>{weapon.displayName}</p>
          </div>
        );
      })}
    </Test>
  );
};

export const WeaponBySmgs = ({ type, weapon }) => {
  const filterWeaponsBySmgs = weapon.filter(
    (weapon) => weapon.shopData.categoryText === "SMGs"
  );
  return (
    <Test>
      <h3>{type}</h3>
      {filterWeaponsBySmgs.map((weapon) => {
        return (
          <div key={weapon.uuid}>
            <img src={weapon.shopData.newImage} alt="" />
            <p>{weapon.shopData.cost}</p>
            <p>{weapon.displayName}</p>
          </div>
        );
      })}
    </Test>
  );
};

export const WeaponByShotguns = ({ type, weapon }) => {
  const filterWeaponsByShotguns = weapon.filter(
    (weapon) => weapon.shopData.categoryText === "Shotguns"
  );

  return (
    <Test>
      <h3>{type}</h3>
      {filterWeaponsByShotguns.map((weapon) => {
        return (
          <div key={weapon.uuid}>
            <img src={weapon.shopData.newImage} alt="" />
            <p>{weapon.shopData.cost}</p>
            <p>{weapon.displayName}</p>
          </div>
        );
      })}
    </Test>
  );
};

const Test = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #000;

  img {
    transform: rotateY(180deg);
  }
`;
