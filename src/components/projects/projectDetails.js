import React from "react";
import styled from "styled-components";
import { Marginer } from "./marginer/index";
import { FaCode } from 'react-icons/fa';
import { FaPlay } from 'react-icons/fa';

const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  line-height: 1.4;
`;

const SmallText = styled.span`
  font-size: 16px;
  color: #fff;
  font-weight: 700;
  font-family: "Maven Pro", sans-serif;
  margin-bottom: 25px;
`;

const SpacedHorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RepoButton = styled.button`
  width: 45px;
  height: 45px;
  color: #EFF3F4;
  background-color: transparent;
  font-size: 16px;
  font-weight: 700;
  border: 2px solid #15DB95;
  outline: none;
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 50px;
  &:hover {
    background-color: grey;
        color: #15DB95;
        transform: 'scale(1.1)';
        border: 2px solid #15DB95;
}
`;

const LinkButton = styled.button`
  width: 45px;
  height: 45px;
  color: #EFF3F4;
  background-color: transparent;
  font-size: 16px;
  font-weight: 700;
  border: 2px solid #15DB95;
  outline: none;
  cursor: pointer;
  transition: all 0.2s;
  border-radius: 50px;
  &:hover {
    background-color: grey;
        color: #15DB95;
        transform: 'scale(1.1)';
        border: 2px solid #15DB95;
  }
`;

export function ProjectDetails1(props) {
  return (
    <DetailsContainer>
      <SmallText>New Day New City (NDNC) is a traveler oriented webpage. Built for users to easily view hotels, restaurants and attractions
                        within a searched city.</SmallText>
      <Marginer direction="vertical" />
      <SpacedHorizontalContainer>
        <a href="https://anthonyfrederick7.github.io/New-Day-New-City/" target={"__blank"}  style={{marginBottom: "15px"}}>
        <LinkButton><FaPlay style={{marginTop: ".2em", marginLeft: ".1em", fontSize: "18px"}}/></LinkButton>
        </a>
        <a href="https://github.com/AnthonyFrederick7/New-Day-New-City" target={"__blank"}  style={{marginBottom: "15px"}}>
        <RepoButton><FaCode style={{marginTop: ".2em", marginRightt: ".1em", fontSize: "20px"}}/></RepoButton>
        </a>
      </SpacedHorizontalContainer>
    </DetailsContainer>
  );
}

export function ProjectDetails2(props) {
  return (
    <DetailsContainer>
      <SmallText>Off N On is a ticketing system buit to assist with Tech problems.</SmallText>
      <Marginer direction="vertical" margin="2.8em" />
      <SpacedHorizontalContainer>
      <a href="https://limitless-castle-65696.herokuapp.com/" target={"__blank"} style={{marginBottom: "15px"}}>
      <LinkButton><FaPlay style={{marginTop: ".2em", marginLeft: ".1em", fontSize: "18px"}}/></LinkButton>
        </a>
        <a href="https://github.com/rxtATX/OffNOn" target={"__blank"}  style={{marginBottom: "15px"}}>
        <RepoButton><FaCode style={{marginTop: ".2em", marginRightt: ".1em", fontSize: "20px"}}/></RepoButton>
        </a>
      </SpacedHorizontalContainer>
    </DetailsContainer>
  );
}

export function ProjectDetails3(props) {
  return (
    <DetailsContainer>
      <SmallText>New Day New City (NDNC) is a traveler oriented webpage. Built for users to easily view hotels, restaurants and attractions
                        within a searched city.</SmallText>
      <Marginer direction="vertical"/>
      <SpacedHorizontalContainer>
      <a href="https://anthonyfrederick7.github.io/New-Day-New-City/" target={"__blank"}  style={{marginBottom: "15px"}}>
        <LinkButton><FaPlay style={{marginTop: ".2em", marginLeft: ".1em", fontSize: "18px"}}/></LinkButton>
        </a>
        <a href="https://github.com/AnthonyFrederick7/New-Day-New-City" target={"__blank"}  style={{marginBottom: "15px"}}>
        <RepoButton><FaCode style={{marginTop: ".2em", marginRightt: ".1em", fontSize: "20px"}}/></RepoButton>
        </a>
      </SpacedHorizontalContainer>
    </DetailsContainer>
  );
}