import styled from "styled-components";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Map = () => {
  const { state } = useLocation();
  const item = state || [];

  const pointStyle = {
    position: "absolute",
    left: 753,
    top: 522,
    width: 10,
    height: 10,
    backgroundColor: "red",
    borderRadius: "50%",
  };

  return item ? (
    <Section>
      <WrappedMap>
        <h1>{item.displayName}</h1>
        <Img src={item.displayIcon} alt="map" />
        <div style={pointStyle} onClick={() => console.log("hello")}></div>
      </WrappedMap>
      <h2>Call Position :</h2>
      <WrappedRegionName>
        {item.callouts?.map((call, index) => (
          <div key={index}>
            <p>{call.regionName}</p>
            <p>{call.superRegionName}</p>
          </div>
        ))}
      </WrappedRegionName>
    </Section>
  ) : (
    "Error"
  );
};

const Section = styled.section`
  padding: 50px 10px;
  background: var(--background);

  h2 {
    color: var(--headline);
    padding: 50px 0;
    display: flex;
    justify-content: center;
  }
`;

const WrappedRegionName = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  div {
    cursor: pointer;
    color: var(--paragraph);
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 3px solid #121629;
    border-radius: 8px;
    padding: 15px;
  }
`;

const WrappedMap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding-bottom: 50px;

  h1 {
    color: var(--headline);
  }
`;

const Img = styled.img`
  transform: rotate(90deg);
`;
