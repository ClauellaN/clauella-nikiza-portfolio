

import React from "react";
import styled from "styled-components";
import { FaJsSquare, FaHtml5, FaCss3Alt, FaPython, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';

const Technologies = () => {
  return (
    <TechWrapper>
      <Title>TECHNOLOGIES</Title>
          <SubTitle> Languages</SubTitle>
      <TechList>
        <TechCard>
          <IconWrapper><FaJsSquare size={40} /></IconWrapper>
          <CardTitle>JavaScript</CardTitle>
        </TechCard>
        <TechCard>
          <IconWrapper><FaHtml5 size={40} /></IconWrapper>
          <CardTitle>HTML</CardTitle>
        </TechCard>
        <TechCard>
          <IconWrapper><FaCss3Alt size={40} /></IconWrapper>
          <CardTitle>CSS</CardTitle>
        </TechCard>
        <TechCard>
          <IconWrapper><FaPython size={40} /></IconWrapper>
          <CardTitle>Python</CardTitle>
        </TechCard>
        </TechList>
        <SubTitle> Frameworks</SubTitle>
        <TechList>
        <TechCard>
          <IconWrapper><FaReact size={40} /></IconWrapper>
          <CardTitle>React</CardTitle>
        </TechCard>
        <TechCard>
          <IconWrapper><FaNodeJs size={40} /></IconWrapper>
          <CardTitle>Node.js</CardTitle>
        </TechCard>
        <TechCard>
          <IconWrapper><SiExpress size={40} /></IconWrapper>
          <CardTitle>Express</CardTitle>
        </TechCard>
        <TechCard>
          <IconWrapper><SiMongodb size={40} /></IconWrapper>
          <CardTitle>MongoDB</CardTitle>
        </TechCard>
      </TechList>
    </TechWrapper>
  );
};

export default Technologies;

// Styled Components
const TechWrapper = styled.div`
  padding: 50px 20px;
  text-align: center;

      min-height: 100vh;
    border: none;
    background-color: #1a1a1a;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 80px;
  font-family: 'Roboto', sans-serif;
  color: white;
`;
const TechList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;
const SubTitle = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 5%;
  font-family: 'Roboto', sans-serif;
  color: white;
  text-decoration: underline;
`;

const TechCard = styled.div`
  background: #333333 ;
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
  color: white;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 10px;
  font-family: 'Roboto', sans-serif;
`;


