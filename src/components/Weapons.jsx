import React from "react";
import styled from "styled-components";
import useQuery from "./hooks/useQuery";
import { Link } from "react-router-dom";

export const Weapons = ({ search }) => {
  const { weaponsQuery } = useQuery();

  if (weaponsQuery.isLoading) return <p>Loading</p>;
  if (weaponsQuery.isError) return <p> {error.message} </p>;

  const WeaponsFilteredByName = weaponsQuery.data.data.filter((item) => {
    return item.displayName.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <Div>
      <WrappedAgent>
        {WeaponsFilteredByName.map((weapon) => {
          return (
            <div key={weapon.uuid}>
              <h3>{weapon.displayName}</h3>
              <Link to={`/${weapon.uuid}`} state={weapon}>
                <img src={weapon.displayIcon} alt="" />
              </Link>
            </div>
          );
        })}
      </WrappedAgent>
    </Div>
  );
};

const Div = styled.div`
  padding: 25px 0;
`;

const WrappedAgent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;

  div {
    height: 390px;
    background: var(--headline);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30%;

    h3 {
      color: var(--background);
      padding-top: 10px;
    }
  }

  a {
    text-decoration: none;
    cursor: pointer;

    img {
      width: 300px;
      object-fit: cover;
      &::selection {
        display: none;
      }
    }
  }
`;
