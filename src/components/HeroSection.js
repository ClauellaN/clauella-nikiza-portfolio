
import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <HeroWrapper>
      <Content>
        <Greeting>Hello!</Greeting>
        <Title>I'm Clauella.</Title>
        <Title>A Full Stack Web Developer.</Title>
        <Subtitle>Nice to meet you!</Subtitle>
        <SocialIcons>
          <SocialLink href="https://twitter.com" target="_blank"><FaTwitter size={30} /></SocialLink>
          <SocialLink href="https://linkedin.com" target="_blank"><FaLinkedin size={30} /></SocialLink>
          <SocialLink href="https://instagram.com" target="_blank"><FaInstagram size={30} /></SocialLink>
          <SocialLink href="https://github.com" target="_blank"><FaGithub size={30} /></SocialLink>
        </SocialIcons>
      </Content>
      <ImageWrapper>
        <HeroImage src="/assets/Homepic.JPG" alt="Clauella" />
      </ImageWrapper>
    </HeroWrapper>
  );
}

export default HeroSection;

// styled components
const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: left;
  color: white;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Content = styled.div`
  padding-right: 10%;

  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 20px;
  }
`;

const Greeting = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #ff6347; 
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const SocialIcons = styled.div`
  margin-top: 30px; 
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  color: white;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }
`;

const ImageWrapper = styled.div`
  max-width: 1000px; 
  width: 100%;

  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;
