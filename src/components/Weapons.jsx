import React from "react";
import styled from "styled-components";
import useQuery from "./hooks/useQuery";
import {
  WeaponBySidearms,
  WeaponBySniper,
  WeaponByHeavy,
  WeaponByRifles,
  WeaponBySmgs,
  WeaponByShotguns,
} from "./WeaponsType";

export const Weapons = ({ search }) => {
  const { weaponsQuery } = useQuery();

  if (weaponsQuery.isLoading) return <p>Loading</p>;
  if (weaponsQuery.isError) return <p> {error.message} </p>;

  const weaponsArray = weaponsQuery.data.data;

  const weaponsWithoutKnife = weaponsArray.slice(0, weaponsArray.length - 1);
  console.log(weaponsWithoutKnife);

  return (
    <Section>
      <Container>
        {/* <WrappedInventorySidearms> */}
        {/* </WrappedInventorySidearms> */}

        <WrappedInventoryRest>
          <WeaponBySidearms type={"Sidearms"} weapon={weaponsWithoutKnife} />

          <WeaponBySmgs type={"Smgs"} weapon={weaponsWithoutKnife} />
          <WeaponByShotguns type={"Shotguns"} weapon={weaponsWithoutKnife} />
          <WeaponByRifles type={"Rifles"} weapon={weaponsWithoutKnife} />
          <WeaponBySniper type={"Sniper"} weapon={weaponsWithoutKnife} />
          <WeaponByHeavy type={"Heavy"} weapon={weaponsWithoutKnife} />
        </WrappedInventoryRest>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  padding: 25px 0;
`;

const Container = styled.div`
  display: flex;
`;

const WrappedInventoryRest = styled.div`
  display: grid;
  grid-template-areas:
    "SIDE SMGS RIFLES SNIPER"
    "SIDE SHOTGUNS RIFLES HEAVY";
  grid-gap: 15px;

  div {
    &:nth-child(1) {
      grid-area: SIDE;
    }
    &:nth-child(2) {
      grid-area: SMGS;
    }
    &:nth-child(3) {
      grid-area: SHOTGUNS;
    }
    &:nth-child(4) {
      grid-area: RIFLES;
    }
    &:nth-child(5) {
      grid-area: SNIPER;
    }
    &:nth-child(6) {
      grid-area: HEAVY;
    }
  }
`;
