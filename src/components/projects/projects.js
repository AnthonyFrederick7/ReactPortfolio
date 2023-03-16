import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";
import styled from "styled-components";
import "./project.css";
import MusicJunkeez from "../../assets/png/MusicJunkeezShort.png";
import NDNC from "../../assets/png/NDNC.png";
import OffnOn from "../../assets/png/OffNOn.png"
import { ProjectDetails1, ProjectDetails2, ProjectDetails3 } from "./projectDetails.js";

const CardContainer = styled.div`
  width: 285px;
  height: 450px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background: linear-gradient(270deg,rgb(0, 0, 0),#272525);
  color: #fff;
  position: relative;
`;

const CircleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  border-top-right-radius: 25px;
`;

const Circle = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  top: -4.2em;
  right: -10em;
  z-index: 5;
  background-image: linear-gradient(to right,  0%, #1d2e4e 100%);
  border-radius: 50%;
  border: 2px white;
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding: 1em 15px;
`;

const ProjectsHeader = styled.h1`
  color: rgb(21, 219, 149);
  margin-top: 2.5em;
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  font-family: "Maven Pro", sans-serif;
`;

const ProjectWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Project = styled.div`
  width: auto;
  height: 190px;
  z-index: 5;
  user-select: none;
  margin-right: 1em;
  margin-left: 1em;
  margin-top: 3em;

  img {
    width: auto;
    height: 100%;
  }
`;

export default function Projects() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <>
      <ProjectsHeader id='projectPage'>Projects</ProjectsHeader>
    <div className="cardWrapper">
      <CardContainer className="cardContainer">
        <TopContainer>
          <CircleWrapper>
            <Circle />
          </CircleWrapper>
          <ProjectWrapper>
            <Project>
              <img src={NDNC} style={{ width: "100%", height: "50%", marginTop: "2.5em" }} />
            </Project>
          </ProjectWrapper>
        </TopContainer>
        <div className="bottomContainer">
          <ProjectDetails1 />
        </div>
      </CardContainer>

      <CardContainer  className="cardContainer">
        <TopContainer>
          <CircleWrapper>
            <Circle />
          </CircleWrapper>
          <ProjectWrapper>
            <Project>
              <img src={MusicJunkeez} style={{ width: "100%", height: "65%", marginTop: "1.75em" }} />
            </Project>
          </ProjectWrapper>
        </TopContainer>
        <div className="bottomContainer">
          <ProjectDetails2 />
        </div>
      </CardContainer>

      <CardContainer>
        <TopContainer>
          <CircleWrapper>
            <Circle />
          </CircleWrapper>
          <ProjectWrapper>
            <Project>
              <img src={OffnOn} style={{ width: "100%", height: "70%", marginTop: "1.75em" }} />
            </Project>
          </ProjectWrapper>
        </TopContainer>
        <div className="bottomContainer">
          <ProjectDetails3 />
        </div>
      </CardContainer>
    </div>
    </>
  );
}