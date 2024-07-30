
import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projectsInfo = [
    {
      title: "Nyan Cat",
      imgSrc: "/assets/nyan-cat.jpg",
      repoLink: "https://github.com/ClauellaN/project-js-nyan-cat.git",
      liveDemo: "https://nyan-cat.vercel.app",
      description: "Experience a thrilling game with Nyan Cat the astronaut. Help him navigate through falling arrows to safely reach the moon. You have 3 lives to complete your mission.",
      instructions: "View the source code on GitHub.",
    },
    {
      title: "Sling Air",
      imgSrc: "/assets/slingAir1.jpg",
      repoLink: "https://github.com/ClauellaN/project-slingair.git",
      liveDemo: "https://sling-air.vercel.app",
      description: "A user-friendly flight booking application. Easily book flights and manage your reservations.",
      instructions: "View the source code on GitHub.",
    },
    {
      title: "Tic-Tac-Toe",
      imgSrc: "/assets/TicTacToe.JPG",
      repoLink: "https://github.com/ClauellaN/react-useState.git",
      liveDemo: "https://tic-tac-toe.vercel.app",
      description: "A classic Tic-Tac-Toe game built with React. Play against the computer or challenge a friend.",
      instructions: "View the source code on GitHub.",
    },
  ];

  return (
    <ProjectsWrapper>
      <Title>PROJECTS</Title>
      <ProjectGrid>
        {projectsInfo.map((project) => (
          <ProjectItem key={project.title}>
            <img src={project.imgSrc} alt={`${project.title} Screenshot`} />
            <Overlay>
              <ProjectTitle>{project.title}</ProjectTitle>
              <Description>{project.description}</Description>
              <ProjectLinks>
                {project.liveDemo && (
                  <Button href={project.liveDemo} target="_blank">
                    Live Demo
                  </Button>
                )}
              </ProjectLinks>
              <Instructions>{project.instructions}</Instructions>
              <ProjectLinks>
                <IconButton href={project.repoLink} target="_blank">
                  <FaGithub size={20} />
                </IconButton>
              </ProjectLinks>
            </Overlay>
          </ProjectItem>
        ))}
      </ProjectGrid>
    </ProjectsWrapper>
  );
};

export default Projects;

// Styled components
const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 45px;
  min-height: 100vh;
  background-color: #1a1a1a;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 100px;
  color: white;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ProjectGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 1000px) {
    gap: 10px;
  }
`;

const ProjectItem = styled.div`
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
  height: 500px;
  width: 500px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #333;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  &:hover div {
    opacity: 1;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 20px; 
`;

const ProjectTitle = styled.h3`
  margin: 15px 0;
  font-size: 1.8rem;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  margin: 10px 0;
  font-size: 1.2rem;
  color: #ddd;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Instructions = styled.p`
  margin: 10px 0;
  font-size: 1rem;
  color: #aaa;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ProjectLinks = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
`;

const Button = styled.a`
  text-decoration: none;
  color: white;
  background: linear-gradient(to right, #0070f3, #005bb5);
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: linear-gradient(to right, #005bb5, #0070f3);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
`;

const IconButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  text-decoration: none;
  color: white;
  background-color: #333;
  border-radius: 50%;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #555;
    transform: translateY(-2px);
  }

  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;
