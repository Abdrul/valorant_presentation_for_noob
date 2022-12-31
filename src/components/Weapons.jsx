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

  return (
    <Section>
      <WeaponBySidearms type={"Sidearms"} weapon={weaponsWithoutKnife} />
      <WeaponBySniper type={"Sniper"} weapon={weaponsWithoutKnife} />
      <WeaponByHeavy type={"Heavy"} weapon={weaponsWithoutKnife} />
      <WeaponByRifles type={"Rifles"} weapon={weaponsWithoutKnife} />
      <WeaponBySmgs type={"Smgs"} weapon={weaponsWithoutKnife} />
      <WeaponByShotguns type={"Shotguns"} weapon={weaponsWithoutKnife} />
    </Section>
  );
};

const Section = styled.section`
  padding: 25px 0;
`;
