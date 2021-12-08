import React from "react";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const LoaderContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;
`;

const Header = styled.h2`
    color: #083A55
`;

export default function Spinner(){
  

  
    return (
      <LoaderContainer className="sweet-loading">
        <Header>DOG611</Header>
    
        <ClipLoader
          css={override}
          size={150}
          color={"#083A55"}
          loading={true}
        />
        <Header>Loading...</Header>
      </LoaderContainer>
    );

}