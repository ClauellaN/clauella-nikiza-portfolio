

import React from 'react';
import styled, { keyframes } from 'styled-components';

const HeroSection = () => {
    return(                
        <HeroWrapper>
            <NameBox>
                <Name>Hi, I'm Clauella</Name>
            </NameBox>
            <SubtitleBox delay="4s" top="55%" left="45%">
                <Subtitle>A Full Stack Web Developer.</Subtitle>
            </SubtitleBox>
            <SubtitleBox delay="6s" top="70%" left="60%">
                <Subtitle>Nice to meet you!</Subtitle>
            </SubtitleBox>
        </HeroWrapper>
    )
}

export default HeroSection;

// Keyframes for background animation
const backgroundAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// Keyframes for box animation
const showBox = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

// Keyframes for name animation
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// Keyframes for moving the box
const moveBox = keyframes`
  0% {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  100% {
    top: 30%;
    left: 30%;
    transform: translate(-50%, -50%);
  }
`;

// Keyframes for subtitle animation
const fadeInAndMoveUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Keyframes for floating animation
const float = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

// styled components
const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 20px;
  animation: ${backgroundAnimation} 10s ease infinite;
  position: relative;
`;

const NameBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  padding: 20px 40px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: ${showBox} 1s ease-out forwards, ${moveBox} 2s ease-in-out 2s forwards, ${float} 6s ease-in-out infinite;
  position: absolute;
  top: 30%;
  left: 30%;
  transform: translate(-50%, -50%);
`;

const SubtitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  padding: 15px 30px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: absolute;
  top: ${({ top }) => top || '55%'};
  left: ${({ left }) => left || '45%'};
  transform: translate(-50%, -50%);
  opacity: 0;
  animation: ${fadeInAndMoveUp} 1s ease-out ${({ delay }) => delay || '4s'} forwards, ${float} 6s ease-in-out infinite;
`;

const Name = styled.h1`
  font-size: 2rem;
  color: #333;
  opacity: 0;
  animation: ${fadeIn} 1s ease-out 1s forwards;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  opacity: 1; /* Since the opacity of the SubtitleBox is handled, this can stay 1 */
`;

