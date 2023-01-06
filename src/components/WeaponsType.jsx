import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const WeaponBySidearms = ({ type, weapon }) => {
  const [categoryWeapons] = weapon(type);

  return (
    <DivSidearm>
      <h3>{type}</h3>
      {categoryWeapons.map((weapon) => {
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
  const [categoryWeapons] = weapon(type);

  return (
    <WrappedWeapon>
      <h3>{type}</h3>
      {categoryWeapons.map((weapon) => {
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
    </WrappedWeapon>
  );
};

export const WeaponByHeavy = ({ type, weapon }) => {
  const [categoryWeapons] = weapon(type);

  return (
    <WrappedWeapon>
      <h3>{type}</h3>
      {categoryWeapons.map((weapon) => {
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
    </WrappedWeapon>
  );
};

export const WeaponByRifles = ({ type, weapon }) => {
  const [categoryWeapons] = weapon(type);

  return (
    <WrappedWeapon>
      <h3>{type}</h3>
      {categoryWeapons.map((weapon) => {
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
    </WrappedWeapon>
  );
};

export const WeaponBySmgs = ({ type, weapon }) => {
  const [categoryWeapons] = weapon(type);

  return (
    <WrappedWeapon>
      <h3>{type}</h3>
      {categoryWeapons.map((weapon) => {
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
    </WrappedWeapon>
  );
};

export const WeaponByShotguns = ({ type, weapon }) => {
  const [categoryWeapons] = weapon(type);

  return (
    <WrappedWeapon>
      <h3>{type}</h3>
      {categoryWeapons.map((weapon) => {
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
    </WrappedWeapon>
  );
};

const WrappedWeapon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    text-align: center;
    background: var(--background);
    color: var(--headline);
    text-transform: uppercase;
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
    text-transform: uppercase;
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
