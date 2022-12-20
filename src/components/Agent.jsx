import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Agent = () => {
  const { state } = useLocation();
  const item = state || [];

  const characterTags = item.characterTags;

  const CharacterTags = () => {
    return (
      <>
        {characterTags?.map((tag, index) => (
          <p key={index}>{tag}</p>
        ))}
      </>
    );
  };

  const Abilities = () => {
    const abilities = item.abilities;

    return (
      <WrappedAbilities>
        {abilities?.map((abilitie, index) => {
          return (
            <CardAbilities key={index}>
              <div>
                <h3>{abilitie.displayName} </h3>
                <i className="fa-solid fa-circle-chevron-down"></i>
              </div>
              <img src={abilitie.displayIcon} alt="" />
              <p> {abilitie.description} </p>
            </CardAbilities>
          );
        })}
      </WrappedAbilities>
    );
  };

  return item ? (
    <Section>
      <WrappedAgent>
        <img src={item.fullPortraitV2} alt="" />

        <div>
          <h1>
            {item.displayName} <br /> <span>{item.role.displayName}</span>{" "}
          </h1>
          <p>{item.role.description}</p>
          {characterTags && <h3>Objectif :</h3>}
          <CharacterTags />
        </div>
      </WrappedAgent>
      <Abilities />
    </Section>
  ) : (
    "Error"
  );
};

const Section = styled.section`
  padding-top: 50px;
  background: var(--background);
  height: 100vh;
`;

const WrappedAgent = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 15px;
  padding-bottom: 45px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    border: 3px solid #121629;
    border-radius: 8px;
    padding: 10px;

    h1 {
      color: var(--paragraph);
      padding-bottom: 15px;
    }

    h3 {
      padding-top: 15px;
      color: var(--paragraph);
    }

    p {
      color: var(--paragraph);
      padding-top: 15px;
    }
  }

  img {
    width: 400px;
    object-fit: cover;
  }
`;

const WrappedAbilities = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 15px;
  padding-bottom: 50px;
  background: var(--background);
`;

const CardAbilities = styled.div`
  width: 400px;
  color: var(--headline);
  border: 3px solid #121629;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  border-radius: 8px;
  padding: 15px;

  div {
    width: 100%;
    display: grid;
    grid-template-columns: 2.5fr 1fr;
    align-items: center;

    h3 {
      justify-self: end;
    }

    i {
      justify-self: end;
      font-size: 20px;
      cursor: pointer;
    }
  }
`;

export default Agent;
