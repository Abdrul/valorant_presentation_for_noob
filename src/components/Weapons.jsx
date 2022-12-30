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

  return (
    <Div>
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

      {/* <div>
              {weapon.shopData.category === "Pistols" && (
                <>
                  <img src={weapon.shopData.newImage} alt="" />
                  <p>{weapon.shopData.cost}</p>
                  <p>{weapon.shopData.category}</p>
                </>
              )}
            </div>
            <div>
              {weapon.shopData.category === "Heavy Weapons" && (
                <>
                  <img src={weapon.shopData.newImage} alt="" />
                  <p>{weapon.shopData.cost}</p>
                  <p>{weapon.shopData.category}</p>
                </>
              )}
            </div> */}

      {weaponsWithoutKnife.map((weapon) => {
        return (
          <div key={weapon.uuid} className="test">
            <img src={weapon.shopData.newImage} alt="" />
            <p>{weapon.shopData.cost}</p>
            <p>{weapon.shopData.category}</p>
          </div>
        );
      })}
    </Div>
  );
};

const Div = styled.div`
  padding: 25px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 16px;

  .test {
    background: lightcoral;

    &:nth-child(3) {
      background: #000;
      grid-column: 3;
      grid-row: 1/5;
    }
    &:nth-child(7) {
      background: #000;
      grid-column: 3;
      grid-row: 2/5;
    }
    &:nth-child(11) {
      background: #000;
      grid-column: 3;
      grid-row: 3/5;
    }
    &:nth-child(15) {
      background: #000;
      grid-column: 3;
      grid-row: 4/6;
    }
  }
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
