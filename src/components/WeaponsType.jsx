import React from "react";

export const WeaponBySidearms = ({ type, weapon }) => {
  const filterWeaponsBySidearms = weapon.filter(
    (weapon) => weapon.shopData.categoryText === "Sidearms"
  );
  return (
    <div>
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
    </div>
  );
};

export const WeaponBySniper = ({ type, weapon }) => {
  const filterWeaponsBySniper = weapon.filter(
    (weapon) => weapon.shopData.categoryText === "Sniper Rifles"
  );
  return (
    <div>
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
    </div>
  );
};

export const WeaponByHeavy = ({ type, weapon }) => {
  const filterWeaponsByHeavy = weapon.filter(
    (weapon) => weapon.shopData.categoryText === "Heavy Weapons"
  );
  return (
    <div>
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
    </div>
  );
};

export const WeaponByRifles = ({ type, weapon }) => {
  const filterWeaponsBySniper = weapon.filter(
    (weapon) => weapon.shopData.categoryText === "Sniper Rifles"
  );
  return (
    <div>
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
    </div>
  );
};

export const WeaponBySmgs = ({ type, weapon }) => {
  const filterWeaponsBySmgs = weapon.filter(
    (weapon) => weapon.shopData.categoryText === "SMGs"
  );
  return (
    <div>
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
    </div>
  );
};

export const WeaponByShotguns = ({ type, weapon }) => {
  const filterWeaponsByShotguns = weapon.filter(
    (weapon) => weapon.shopData.categoryText === "Shotguns"
  );

  return (
    <div>
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
    </div>
  );
};
