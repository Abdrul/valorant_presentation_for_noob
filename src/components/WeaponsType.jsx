import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const WeaponBySidearms = ({ type, weapon }) => {
  const filterWeaponsBySidearms = weapon.filter(
    (weapon) => weapon.shopData.categoryText === "Sidearms"
  );
  const sortWeaponsByPrice = filterWeaponsBySidearms.sort(
    (a, b) => a.shopData.cost - b.shopData.cost
  );
  return (
    <DivSidearm>
      <h3>{type}</h3>
      {sortWeaponsByPrice.map((weapon) => {
        return (
          <div key={weapon.uuid}>
            <Link to={`/weapons/${weapon.uuid}`} state={weapon}>
              <img src={weapon.shopData.newImage} alt="" />
              <p>{weapon.shopData.cost}</p>
              <p>{weapon.displayName}</p>
            </Link>
          </div>
        );
      })}
    </DivSidearm>
  );
};

export const WeaponBySniper = ({ type, weapon }) => {
  const filterWeaponsBySniper = weapon.filter(
    (weapon) => weapon.shopData.categoryText === "Sniper Rifles"
  );

  const sortWeaponsByPrice = filterWeaponsBySniper.sort(
    (a, b) => a.shopData.cost - b.shopData.cost
  );
  return (
    <Test>
      <h3>{type}</h3>
      {sortWeaponsByPrice.map((weapon) => {
        return (
          <div key={weapon.uuid}>
            <Link to={`/weapons/${weapon.uuid}`} state={weapon}>
              <img src={weapon.shopData.newImage} alt="" />
              <p>{weapon.shopData.cost}</p>
              <p>{weapon.displayName}</p>
            </Link>
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

  const sortWeaponsByPrice = filterWeaponsByHeavy.sort(
    (a, b) => a.shopData.cost - b.shopData.cost
  );
  return (
    <Test>
      <h3>{type}</h3>
      {sortWeaponsByPrice.map((weapon) => {
        return (
          <div key={weapon.uuid}>
            <Link to={`/weapons/${weapon.uuid}`} state={weapon}>
              <img src={weapon.shopData.newImage} alt="" />
              <p>{weapon.shopData.cost}</p>
              <p>{weapon.displayName}</p>
            </Link>
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

  const sortWeaponsByPrice = filterWeaponsByRifles.sort(
    (a, b) => a.shopData.cost - b.shopData.cost
  );
  return (
    <Test>
      <h3>{type}</h3>
      {sortWeaponsByPrice.map((weapon) => {
        return (
          <div key={weapon.uuid}>
            <Link to={`/weapons/${weapon.uuid}`} state={weapon}>
              <img src={weapon.shopData.newImage} alt="" />
              <p>{weapon.shopData.cost}</p>
              <p>{weapon.displayName}</p>
            </Link>
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

  const sortWeaponsByPrice = filterWeaponsBySmgs.sort(
    (a, b) => a.shopData.cost - b.shopData.cost
  );
  return (
    <Test>
      <h3>{type}</h3>
      {sortWeaponsByPrice.map((weapon) => {
        return (
          <div key={weapon.uuid}>
            <Link to={`/weapons/${weapon.uuid}`} state={weapon}>
              <img src={weapon.shopData.newImage} alt="" />
              <p>{weapon.shopData.cost}</p>
              <p>{weapon.displayName}</p>
            </Link>
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
  const sortWeaponsByPrice = filterWeaponsByShotguns.sort(
    (a, b) => a.shopData.cost - b.shopData.cost
  );

  return (
    <Test>
      <h3>{type}</h3>
      {sortWeaponsByPrice.map((weapon) => {
        return (
          <div key={weapon.uuid}>
            <Link to={`/weapons/${weapon.uuid}`} state={weapon}>
              <img src={weapon.shopData.newImage} alt="" />
              <p>{weapon.shopData.cost}</p>
              <p>{weapon.displayName}</p>
            </Link>
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

  h3 {
    text-align: center;
    background: var(--background);
    color: var(--headline);
  }

  div {
    padding: 15px;
    background: var(--background);
    color: var(--headline);
    cursor: pointer;

    a {
      text-transform: uppercase;
      font-weight: 600;
      text-decoration: none;
      color: inherit;
    }

    img {
      transform: rotateY(180deg);
      margin: 0 auto;
    }

    &:hover {
      color: var(--background);
      background: var(--headline);
      transition: all 0.3s ease-in-out;
    }
  }
`;

const DivSidearm = styled.div`
  h3 {
    text-align: center;
    background: var(--background);
    color: var(--headline);
  }

  div {
    padding: 15px;
    background: var(--background);
    color: var(--headline);

    margin-top: 5px;
    cursor: pointer;

    a {
      text-transform: uppercase;
      font-weight: 600;
      text-decoration: none;
      color: inherit;
    }

    img {
      transform: rotateY(180deg);
      margin: 0 auto;
    }

    &:hover {
      color: var(--background);
      background: var(--headline);
      transition: all 0.3s ease-in-out;
    }
  }
`;
