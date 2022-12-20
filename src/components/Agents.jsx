import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useQuery from "./hooks/useQuery";
import { Link } from "react-router-dom";

export const Agents = ({ search }) => {
  const [agentsQuery, _] = useQuery();

  if (agentsQuery.isLoading) return <p>Loading</p>;
  if (agentsQuery.isError) return <p> {error.message} </p>;

  const agentsFilteredByNameAndRole = agentsQuery.data.data.filter((item) => {
    return (
      item.displayName.toLowerCase().includes(search.toLowerCase()) ||
      item.role.displayName.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <Section>
      <WrappedAgent>
        {agentsFilteredByNameAndRole.map((user) => {
          return (
            <div key={user.uuid}>
              <Link to={`/${user.uuid}`} state={user}>
                <h3>{user.displayName}</h3>
                <img src={user.fullPortraitV2} alt="" />
              </Link>
              <p>{user.description}</p>
            </div>
          );
        })}
      </WrappedAgent>
    </Section>
  );
};

const Section = styled.section`
  background: var(--paragraph);
  padding: 25px 0;
`;

const WrappedAgent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 600px;
    background: var(--headline);
    border-radius: 15px;

    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      cursor: pointer;
    }

    h3 {
      color: var(--background);
    }

    img {
      width: 400px;
      object-fit: cover;
      &::selection {
        display: none;
      }
    }

    p {
      width: 500px;
      padding: 15px;
      color: var(--background);

      &::selection {
        background: var(--button);
      }
    }
  }
`;
