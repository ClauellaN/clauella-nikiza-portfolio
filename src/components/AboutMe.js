
import React from "react";
import styled from "styled-components";
import { FaGraduationCap, FaUser, FaRocket } from "react-icons/fa";

const AboutMe = () => {
  return (
    <AboutWrapper>
      <Title>ABOUT ME</Title>
      <Content>
        <ContentDeets>
          <TitleBox>
            <IconWrapper><FaGraduationCap /></IconWrapper>
            <ContentTitle>PROFESSIONAL BACKGROUND</ContentTitle>
          </TitleBox>
          <ContentBox>
            <Paragraph>
              I have a diverse professional background that uniquely combines web development and finance. 
              I completed a bootcamp at Concordia University, earning a diploma in Full Stack Web Development. 
              My technical skills include creating scalable web applications, developing user-friendly interfaces, and implementing robust backend solutions.
            </Paragraph>
          </ContentBox>
        </ContentDeets>
        <ContentDeets>
          <TitleBox>
            <IconWrapper><FaUser /></IconWrapper>
            <ContentTitle>PERSONAL BACKGROUND</ContentTitle>
          </TitleBox>
          <ContentBox>
            <Paragraph>
              Outside of my professional life, I am passionate about activities that keep me inspired and active. I enjoy walking in nature to relax and appreciate its beauty, traveling to explore new places and cultures, and assembling and creating things, whether it's furniture or DIY projects. These activities challenge my creativity and provide a great sense of accomplishment, helping me stay motivated and fulfilled.
            </Paragraph>
          </ContentBox>
        </ContentDeets>
        <ContentDeets>
          <TitleBox>
            <IconWrapper><FaRocket /></IconWrapper>
            <ContentTitle>GOALS AND ASPIRATIONS</ContentTitle>
          </TitleBox>
          <ContentBox>
            <Paragraph>
              I aspire to contribute to innovative projects that make a positive impact on people's lives. I'm particularly interested in developing scalable web applications and exploring new technologies.
            </Paragraph>
          </ContentBox>
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
  padding: 50px 20px;
  min-height: 100vh;
  background-color: #1a1a1a;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: white;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  flex-wrap: wrap;
  text-align: left;
  max-width: 1400px;
  gap: 20px;
`;

const ContentDeets = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  background: #333;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 1024px) {
    width: calc(50% - 40px);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  background: #444;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;

const ContentBox = styled.div`
  padding: 20px;
  background: #333;
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  margin-right: 10px;
  color: #6c63ff;
`;

const ContentTitle = styled.h3`
  font-size: 2rem;
  color: white;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Paragraph = styled.p`
  margin-top: 10px;
  font-weight: normal;
  color: white;
  font-size: 1.4rem;
  text-align: justify;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
