import React, { useState } from "react";
import styled from "styled-components";
import { SearchBar } from "./SearchBar";
import { Agents } from "./Agents";
import { Maps } from "./Maps";
import { Weapons } from "./Weapons";
import { useStickyState } from "./hooks/useStickyState";

const NAME_KEY = "categorie";

export const HeaderPage = () => {
  const [search, setSearch] = useState("");
  const [displayCategories, setDisplayCategories] = useStickyState(
    NAME_KEY,
    "Agents"
  );

  const categories = ["Agents", "Maps", "Weapon"];

  const handleChangeCategories = (categorie) => {
    setDisplayCategories(categorie);
    setSearch("");
  };

  return (
    <>
      <Header>
        <h1>Valorant</h1>
        <ul>
          {categories.map((categorie, index) => (
            <li onClick={() => handleChangeCategories(categorie)} key={index}>
              {categorie}
            </li>
          ))}
        </ul>
      </Header>
      <Section>
        {displayCategories === "Agents" && (
          <>
            <SearchBar
              search={search}
              setSearch={setSearch}
              placeholder="Search"
            />

            <Agents search={search} />
          </>
        )}
        {displayCategories === "Maps" && (
          <>
            <SearchBar
              search={search}
              setSearch={setSearch}
              placeholder="Search"
            />

            <Maps search={search} />
          </>
        )}
        {displayCategories === "Weapon" && <Weapons />}
      </Section>
    </>
  );
};

const Section = styled.section`
  background: var(--paragraph);
  min-height: 789px;
`;

const Header = styled.header`
  background: var(--background);
  color: var(--headline);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 25px;

  h1 {
    font-size: 50px;
    padding-bottom: 20px;
  }

  ul {
    display: flex;
    position: relative;
    font-size: 18px;
    padding-inline-start: 0;
    border: 1px solid var(--headline);
    border-bottom: none;

    li {
      list-style-type: none;
      cursor: pointer;
      border-left: 1px solid var(--headline);
      padding: 16px;

      &:nth-child(1) {
        border-left: none;
      }
    }

    div {
      position: absolute;
      top: 50%;
      left: 50%;
      background: var(--headline);
      transform: translate(-50%, -50%) rotate(90deg);
      height: 1px;
      width: 36px;
    }
  }
`;
