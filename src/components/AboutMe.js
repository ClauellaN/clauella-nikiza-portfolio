
import React from "react";
import styled from "styled-components";
import { FaGraduationCap, FaWalking, FaBullseye } from "react-icons/fa";

const AboutMe = () => {
  return (
    <AboutWrapper>
      <Title>About Me</Title>
      <CardContainer>
        <Card>
          <IconWrapper>
            <FaGraduationCap size={40} />
          </IconWrapper>
          <CardTitle>Professional Background</CardTitle>
          <CardContent>
            I have a diverse professional background that uniquely combines
            software development and finance. I earned a Full Stack Web
            Development diploma at Concordia University. My technical skills
            include creating scalable web applications, developing user-friendly
            interfaces, and implementing robust backend solutions.
          </CardContent>
        </Card>
        <Card>
          <IconWrapper>
            <FaWalking size={40} />
          </IconWrapper>
          <CardTitle>Personal Background</CardTitle>
          <CardContent>
            Outside of my professional life, I am passionate about activities
            that keep me inspired and active. I enjoy walking in nature to relax
            and appreciate its beauty, traveling to explore new places and
            cultures, and assembling and creating things, whether it’s furniture
            or DIY projects. These activities challenge my creativity and
            provide a great sense of accomplishment, helping me stay motivated
            and fulfilled.
          </CardContent>
        </Card>
        <Card>
          <IconWrapper>
            <FaBullseye size={40} />
          </IconWrapper>
          <CardTitle>Goals and Aspirations</CardTitle>
          <CardContent>
            I aspire to contribute to innovative projects that make a positive
            impact on people's lives. I'm particularly interested in developing
            scalable web applications and exploring new technologies.
          </CardContent>
        </Card>
      </CardContainer>
    </AboutWrapper>
  );
};

export default AboutMe;

// Styled Components
const AboutWrapper = styled.div`
  padding: 40px 20px;
  background-color: #1a1a1a;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 40px;
  font-family: "Roboto", sans-serif;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  background: #333;
  border-radius: 10px;
  padding: 25px;
  width: 500px;
  min-height: 320px;
  text-align: left;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: #00bcd4;
`;

const CardTitle = styled.h3`
  font-size: 1.6rem;
  color: #fff;
  margin-bottom: 15px;
  font-family: "Roboto", sans-serif;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const CardContent = styled.p`
  font-size: 1.1rem;
  color: #ddd;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
