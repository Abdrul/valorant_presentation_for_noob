import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const WeaponsByCategory = ({ type, weapon, category }) => {
  const filterWeaponsByCategory = weapon.filter(
    (weapon) => weapon.shopData.categoryText === category
  );
  const sortWeaponsByPrice = filterWeaponsByCategory.sort(
    (a, b) => a.shopData.cost - b.shopData.cost
  );
  return (
    <WrapperWeapons>
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
    </WrapperWeapons>
  );
};

const WrapperWeapons = styled.div`
  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3),
  &:nth-child(5),
  &:nth-child(6) {
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

    @media (max-width: 768px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;

      h3 {
        width: 100%;
      }
    }
  }

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
