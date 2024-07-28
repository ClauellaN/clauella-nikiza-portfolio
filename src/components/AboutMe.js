
import React from "react";
import styled from "styled-components";
import { FaGraduationCap, FaBed, FaRocket } from "react-icons/fa";

const AboutMe = () => {
  return (
    <AboutWrapper>
      <Title>About Me</Title>
      <Content>
        <ContentDeets>
          <IconWrapper><FaGraduationCap /></IconWrapper>
          <ContentTitle>Professional Background</ContentTitle>
          <Paragraph>
            I successfully completed my bootcamp at Concordia University and earned my diploma in Full Stack Web Development.
          </Paragraph>
        </ContentDeets>
        <ContentDeets>
          <IconWrapper><FaBed /></IconWrapper>
          <ContentTitle>Personal Background</ContentTitle>
          <Paragraph>
            When I'm not coding, I enjoy sleeping, taking naps and going to bed.
          </Paragraph>
        </ContentDeets>
        <ContentDeets>
          <IconWrapper><FaRocket /></IconWrapper>
          <ContentTitle>Goals and Aspirations</ContentTitle>
          <Paragraph>
            I aspire to contribute to innovative projects that make a positive impact on people's lives. I'm particularly interested in developing scalable web applications and exploring new technologies.
          </Paragraph>
        </ContentDeets>
      </Content>
    </AboutWrapper>
  );
};

export default AboutMe;

// STYLED COMPONENTS
const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  min-height: 100vh;
  border: none;
  background-color: #1a1a1a;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: white;
  margin-bottom: 80px;
  font-family: 'Roboto', sans-serif;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  text-align: center;
  max-width: 100%;
  line-height: 1.6;
  border: none;
  gap: 20px;
`;

const ContentDeets = styled.div`
  padding: 30px;
  border: none;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 400px;
  height: 600px;
  background: #333;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const IconWrapper = styled.div`
  font-size: 2em;
  margin-bottom: 10px;
  color: #6c63ff; /* Icon color */
`;

const ContentTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 1.5em;
  color: white;
  // font-family: 'Roboto', sans-serif;
`;

const Paragraph = styled.p`
  margin-top: 10px;
  font-weight: normal;
  color: #bbb; /* Lighter grey for the text */
  // font-family: 'Open Sans', sans-serif;
`;
