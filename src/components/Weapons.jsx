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

  const filteredWeaponsByTypeAndPrice = (type) => {
    const categoryWeapons = weaponsWithoutKnife.filter(
      (weapon) => weapon.shopData.categoryText === type
    );

    const sortWeaponsByPrice = categoryWeapons.sort(
      (a, b) => a.shopData.cost - b.shopData.cost
    );

    return [sortWeaponsByPrice];
  };

  return (
    <Section>
      <WrappedInventoryRest>
        <WeaponBySidearms
          type={"Sidearms"}
          weapon={filteredWeaponsByTypeAndPrice}
        />
        <WeaponBySmgs type={"SMGs"} weapon={filteredWeaponsByTypeAndPrice} />
        <WeaponByShotguns
          type={"Shotguns"}
          weapon={filteredWeaponsByTypeAndPrice}
        />
        <WeaponByRifles
          type={"Assault Rifles"}
          weapon={filteredWeaponsByTypeAndPrice}
        />
        <WeaponBySniper
          type={"Sniper Rifles"}
          weapon={filteredWeaponsByTypeAndPrice}
        />
        <WeaponByHeavy
          type={"Heavy Weapons"}
          weapon={filteredWeaponsByTypeAndPrice}
        />
      </WrappedInventoryRest>
    </Section>
  );
};

const Section = styled.section`
  padding: 25px 0;
  display: flex;
`;

const WrappedInventoryRest = styled.div`
  max-width: 1800px;
  width: 80%;
  margin: 0 auto;
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
