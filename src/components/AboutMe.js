
import React from "react";
import styled from "styled-components";
import { FaGraduationCap, FaUser, FaRocket } from "react-icons/fa";

const AboutMe = () => {
  return (
    <AboutWrapper>
      <Title>ABOUT ME</Title>
      <Content>
        <ContentDeets>
          <IconWrapper><FaGraduationCap /></IconWrapper>
          <ContentTitle>PROFESSIONAL BACKGROUND</ContentTitle>
          <Paragraph>
          I have a diverse professional background that uniquely combines web development and finance. 
          I completed a bootcamp at Concordia University, earning a diploma in Full Stack Web Development. 
          My technical skills include creating scalable web applications, developing user-friendly interfaces, and implementing robust backend solutions.
          </Paragraph>
        </ContentDeets>
        <ContentDeets>
          <IconWrapper><FaUser /></IconWrapper>
          <ContentTitle>PERSONAL BACKGROUND</ContentTitle>
          <Paragraph>
          Outside of my professional life, I am passionate about activities that keep me inspired and active. I enjoy walking in nature to relax and appreciate its beauty, traveling to explore new places and cultures, and assembling and creating things, whether it's furniture or DIY projects. These activities challenge my creativity and provide a great sense of accomplishment, helping me stay motivated and fulfilled.
          </Paragraph>
        </ContentDeets>
        <ContentDeets>
          <IconWrapper><FaRocket /></IconWrapper>
          <ContentTitle>GOALS AND ASPIRATIONS</ContentTitle>
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
  margin-bottom: 100px;
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
  width: 600px;
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
  font-size: 3em;
  margin-bottom: 10px;
  color: #6c63ff; /* Icon color */
`;

const ContentTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 2rem;
  color: white;

`;

const Paragraph = styled.p`
  margin-top: 10px;
  font-weight: normal;
  color: white;
  font-size: 1.5rem;
`;

