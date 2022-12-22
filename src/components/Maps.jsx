import React from "react";
import useQuery from "./hooks/useQuery";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Maps = ({ search }) => {
  const [_, mapsQuery] = useQuery();

  if (mapsQuery?.isLoading) return <p>Loading</p>;
  if (mapsQuery?.isError) return <p> {error.message} </p>;

  console.log(mapsQuery.data.data);

  const filterMap = mapsQuery.data.data.filter(
    (map) => map.displayName !== "Split" && map.displayName !== "The Range"
  );

  const mapsFilteredByName = filterMap.filter((item) => {
    return item.displayName.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <Section>
      {mapsFilteredByName.map((map) => {
        return (
          <WrappedMaps key={map.uuid}>
            <Link to={`/maps/${map.uuid}`} state={map}>
              <h3> {map.displayName} </h3>
              <Img src={map.splash} alt="" />
            </Link>
          </WrappedMaps>
        );
      })}
    </Section>
  );
};

const Section = styled.section`
  padding: 50px 0;
  background: var(--paragraph);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  align-items: center;
`;

const WrappedMaps = styled.div`
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: var(--background);
  }
`;

const Img = styled.img`
  width: 500px;
  object-fit: cover;
  border-radius: 5px;
`;
