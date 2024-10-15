

import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "FinPort",
      imgSrc: "/assets/finport.JPG",
      repoLink: "https://github.com/ClauellaN/finalProject-FinPort.git",
      liveDemo: "https://finport.vercel.app/",
      description:
        "A financing portal to help merchants manage clients and payments seamlessly.",
    },
    {
      title: "Wearables Store",
      imgSrc: "/assets/eComm.JPG",
      repoLink: "https://github.com/ClauellaN/finalProject-FinPort.git",
      liveDemo: "https://finport.vercel.app/",
      description:
        "An e-commerce store offering a seamless shopping experience with easy checkouts.",
    },
    {
      title: "Nyan Cat",
      imgSrc: "/assets/nyan-cat.jpg",
      repoLink: "https://github.com/ClauellaN/project-js-nyan-cat.git",
      liveDemo: "https://nyan-cat.vercel.app",
      description:
        "Experience a thrilling game with Nyan Cat the astronaut. Help him navigate through falling arrows to safely reach the moon.",
    },
    {
      title: "Sling Air",
      imgSrc: "/assets/slingAir1.jpg",
      repoLink: "https://github.com/ClauellaN/project-slingair.git",
      liveDemo: "https://sling-air.vercel.app",
      description:
        "A user-friendly flight booking application. Easily book flights and manage your reservations.",
    },
    {
      title: "Tic-Tac-Toe",
      imgSrc: "/assets/TicTacToe.JPG",
      repoLink: "https://github.com/ClauellaN/react-useState.git",
      liveDemo: "https://tic-tac-toe.vercel.app",
      description: "A classic Tic-Tac-Toe game built with React.",
    },
  ];

  return (
    <Wrapper>
      <Title>Projects</Title>
      <Grid>
        {projects.map((project) => (
          <Card key={project.title}>
            <Image src={project.imgSrc} alt={project.title} />
            <Overlay>
              <ProjectTitle>{project.title}</ProjectTitle>
              <Description>{project.description}</Description>
              <ButtonGroup>
                <Button href={project.liveDemo} target="_blank">
                  Live Demo
                </Button>
                <IconButton href={project.repoLink} target="_blank">
                  <FaGithub size={24} />
                </IconButton>
              </ButtonGroup>
            </Overlay>
          </Card>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Projects;

const Wrapper = styled.div`
  padding: 60px;
  background-color: #1a1a1a;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1200px;
`;

const Card = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${Card}:hover & {
    opacity: 9;
  }
`;

const ProjectTitle = styled.h2`
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #ddd;
  text-align: center;
  margin-bottom: 15px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
`;

const Button = styled.a`
  background: linear-gradient(to right, #0070f3, #005bb5);
  padding: 10px 20px;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: linear-gradient(to right, #005bb5, #0070f3);
    transform: translateY(-2px);
  }
`;

const IconButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #444;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  text-decoration: none;
  color: white;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #666;
    transform: translateY(-2px);
  }
`;
