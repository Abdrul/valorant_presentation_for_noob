import React from "react";
import styled from "styled-components";
import { DebounceInput } from "react-debounce-input";

export const SearchBar = ({ search, setSearch, placeholder }) => {
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <WrappedInput>
        <DebounceInput
          type="text"
          value={search}
          onChange={handleSearch}
          debounceTimeout={500}
          placeholder={placeholder}
        />
      </WrappedInput>
    </>
  );
};

const WrappedInput = styled.div`
  width: 100%;
  padding: 25px 0;

  input {
    width: 300px;
    display: block;
    margin: 0 auto;
    border: none;
    border-radius: 5px;
    padding: 5px;
    outline: none;
    background: var(--headline);
    color: var(--background);

    &:focus {
      outline: none;
      box-shadow: 0 0 0 4px var(--background);
    }
  }
`;
