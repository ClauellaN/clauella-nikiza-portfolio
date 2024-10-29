import React from "react";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <HeroWrapper>
      <Content>
        <Greeting>BUILDING SECURE AND SCALABLE WEB APPS</Greeting>
        <Title>SOFTWARE DEVELOPER</Title>
        <Subtitle>
        I specialize in building high-performance web applications using React, Node.js, and MongoDB. With a focus on creating clean and efficient code, I deliver solutions that enhance user experiences and drive business success.
        </Subtitle>

        <ButtonGroup>
          <PrimaryButton href="#projects">Explore Projects</PrimaryButton>
          <SecondaryButton href="#about">About My Journey</SecondaryButton>
        </ButtonGroup>
      </Content>
      <ImageWrapper>
        <HeroImage src="/assets/Homepic.JPG" alt="Clauella" />
      </ImageWrapper>
    </HeroWrapper>
  );
};

export default HeroSection;

// Styled Components

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 0 10%;
  background-color: #1a1a1a;
  color: white;
  gap: 50px; 
`;

const Content = styled.div`
  max-width: 600px;
  padding: 50px;
`;

const Greeting = styled.h1`
  font-size: 1.5rem;
  color: #ff6347;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: white;
  text-transform: uppercase;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  color: #ddd;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
`;

const PrimaryButton = styled.a`
  padding: 15px 30px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const SecondaryButton = styled.a`
  padding: 15px 30px;
  background-color: transparent;
  border: 2px solid #007bff;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  transition: all 0.3s;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;
const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 50px;
`;

const HeroImage = styled.img`
  max-width: 100%;
  border-radius: 10px;
`;
