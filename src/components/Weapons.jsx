import React from "react";
import styled from "styled-components";
import useQuery from "./hooks/useQuery";
import { WeaponsByCategory } from "./WeaponsType";

export const Weapons = () => {
  const { weaponsQuery } = useQuery();

  if (weaponsQuery.isLoading) return <p>Loading</p>;
  if (weaponsQuery.isError) return <p> {error.message} </p>;

  const weaponsArray = weaponsQuery.data.data;

  const weaponsWithoutKnife = weaponsArray.slice(0, weaponsArray.length - 1);

  const categories = new Set(
    weaponsWithoutKnife.map((weapon) => weapon.shopData.categoryText)
  );

  const categoryComponents = Array.from(categories).map((category) => {
    return (
      <WeaponsByCategory
        type={category}
        weapon={weaponsWithoutKnife}
        category={category}
      />
    );
  });

  return (
    <Section>
      <WrappedInventoryRest>{categoryComponents}</WrappedInventoryRest>
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
      grid-area: HEAVY;
    }
    &:nth-child(2) {
      grid-area: RIFLES;
    }
    &:nth-child(3) {
      grid-area: SHOTGUNS;
    }
    &:nth-child(4) {
      grid-area: SIDE;
    }
    &:nth-child(5) {
      grid-area: SNIPER;
    }
    &:nth-child(6) {
      grid-area: SMGS;
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
