import React from "react";
import styled from "styled-components";

export const WeaponBySidearms = ({ type, weapon }) => {
  const filterWeaponsBySidearms = weapon.filter(
    (weapon) => weapon.shopData.categoryText === "Sidearms"
  );
  return (
    <WrappedWeapon>
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
    </WrappedWeapon>
  );
};

export const WeaponBySniper = ({ type, weapon }) => {
  const filterWeaponsBySniper = weapon.filter(
    (weapon) => weapon.shopData.categoryText === "Sniper Rifles"
  );
  return (
    <WrappedWeapon>
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
    </WrappedWeapon>
  );
};

export const WeaponByHeavy = ({ type, weapon }) => {
  const filterWeaponsByHeavy = weapon.filter(
    (weapon) => weapon.shopData.categoryText === "Heavy Weapons"
  );
  return (
    <WrappedWeapon>
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
    </WrappedWeapon>
  );
};

export const WeaponByRifles = ({ type, weapon }) => {
  const filterWeaponsBySniper = weapon.filter(
    (weapon) => weapon.shopData.categoryText === "Assault Rifles"
  );
  return (
    <WrappedWeapon>
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
    </WrappedWeapon>
  );
};

export const WeaponBySmgs = ({ type, weapon }) => {
  const filterWeaponsBySmgs = weapon.filter(
    (weapon) => weapon.shopData.categoryText === "SMGs"
  );
  return (
    <WrappedWeapon>
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
    </WrappedWeapon>
  );
};

export const WeaponByShotguns = ({ type, weapon }) => {
  const filterWeaponsByShotguns = weapon.filter(
    (weapon) => weapon.shopData.categoryText === "Shotguns"
  );

  return (
    <WrappedWeapon>
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
    </WrappedWeapon>
  );
};

const WrappedWeapon = styled.div`
  border: 1px solid black;
`;
