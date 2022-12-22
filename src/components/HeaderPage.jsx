import React, { useState } from "react";
import styled from "styled-components";
import { SearchBar } from "./SearchBar";
import { Agents } from "./Agents";
import { Maps } from "./Maps";
import { useStickyState } from "./hooks/useStickyState";

const NAME_KEY = "toggle";

export const HeaderPage = () => {
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useStickyState(NAME_KEY, false);

  const handleAgents = () => {
    setToggle(false);
    setSearch("");
  };

  const handleMaps = () => {
    setToggle(true);
    setSearch("");
  };

  return (
    <>
      <Header>
        <h1>Valorant</h1>
        <ul>
          <li onClick={handleAgents}>Agents</li>
          <div></div>
          <li onClick={handleMaps}>Maps</li>
        </ul>
      </Header>
      <Section>
        <SearchBar search={search} setSearch={setSearch} placeholder="Search" />

        {toggle ? <Maps search={search} /> : <Agents search={search} />}
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
    gap: 50px;
    position: relative;
    font-size: 18px;
    padding-inline-start: 0;
    padding: 5px 30px;
    border: 1px solid var(--headline);
    border-bottom: none;

    li {
      list-style-type: none;
      cursor: pointer;
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
