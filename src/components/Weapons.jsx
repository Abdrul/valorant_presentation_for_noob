import React, { useState } from "react";
import styled from "styled-components";
import useQuery from "./hooks/useQuery";
import { Link } from "react-router-dom";

export const Weapons = ({ search }) => {
  const { weaponsQuery } = useQuery();

  if (weaponsQuery.isLoading) return <p>Loading</p>;
  if (weaponsQuery.isError) return <p> {error.message} </p>;

  const weaponsArray = weaponsQuery.data.data;

  // const WeaponsFilteredByName = weaponsQuery.data.data.filter((item) => {
  //   return item.displayName.toLowerCase().includes(search.toLowerCase());
  // });

  const weaponsWithoutKnife = weaponsArray.slice(0, weaponsArray.length - 1);
  console.log(weaponsWithoutKnife);

  const filterWeaponsBySidearms = weaponsWithoutKnife.filter(
    (weapon) => weapon.shopData.categoryText === "Sidearms"
  );

  const filterWeaponsByHeavy = weaponsWithoutKnife.filter(
    (weapon) => weapon.shopData.categoryText === "Heavy Weapons"
  );
  const filterWeaponsByRifles = weaponsWithoutKnife.filter(
    (weapon) => weapon.shopData.categoryText === "Assault Rifles"
  );
  const filterWeaponsByShotguns = weaponsWithoutKnife.filter(
    (weapon) => weapon.shopData.categoryText === "Shotguns"
  );
  const filterWeaponsBySniper = weaponsWithoutKnife.filter(
    (weapon) => weapon.shopData.categoryText === "Sniper Rifles"
  );
  const filterWeaponsBySmgs = weaponsWithoutKnife.filter(
    (weapon) => weapon.shopData.categoryText === "SMGs"
  );

  return (
    <Section>
      {/* <WrappedAgent>
        {WeaponsFilteredByName.map((weapon) => {
          return (
            <div key={weapon.uuid}>
              <h3>{weapon.displayName}</h3>
              <Link to={`/weapons/${weapon.uuid}`} state={weapon}>
                <img src={weapon.displayIcon} alt="" />
              </Link>
            </div>
          );
        })}
      </WrappedAgent> */}
      <div>
        <h3>Sidearm</h3>
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
      <div>
        <h3>Heavy</h3>
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
      <div>
        <h3>Rifles</h3>
        {filterWeaponsByRifles.map((weapon) => {
          return (
            <div key={weapon.uuid}>
              <img src={weapon.shopData.newImage} alt="" />
              <p>{weapon.shopData.cost}</p>
              <p>{weapon.displayName}</p>
            </div>
          );
        })}
      </div>
      <div>
        <h3>Sniper</h3>
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
      <div>
        <h3>Shotguns</h3>
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
      <div>
        <h3>Smgs</h3>
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
    </Section>
  );
};

const Section = styled.section`
  padding: 25px 0;
`;

// const WrappedAgent = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-wrap: wrap;
//   gap: 15px;

//   div {
//     height: 390px;
//     background: var(--headline);
//     border-radius: 15px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     gap: 30%;

//     h3 {
//       color: var(--background);
//       padding-top: 10px;
//     }
//   }

//   a {
//     text-decoration: none;
//     cursor: pointer;

//     img {
//       width: 300px;
//       object-fit: cover;
//       &::selection {
//         display: none;
//       }
//     }
//   }
// `;
