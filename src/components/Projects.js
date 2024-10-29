
import React from "react";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "FinPort",
      description:
        "A financing portal to help merchants manage clients and payments seamlessly. Built with a MERN stack (MongoDB, Express.js, React, Node.js), it handles client account management, payment processing, and transaction logs.",
      technologies: "React, Node.js, Express, MongoDB, JWT, Styled-Components",
      challenges:
        "Integrated secure payment processing and efficient state management.",
      solutions:
        "Overcame payment tokenization issues with Square API and implemented Redux for managing global state efficiently.",
      repoLink: "https://github.com/ClauellaN/finport.git",
      liveDemo: "https://finport.vercel.app/",
    },
    {
      title: "Wearables",
      description:
        "An e-commerce store offering a seamless shopping experience with easy checkouts. Features product browsing, dynamic cart system, and secure payment integration.",
      technologies: "React, Node.js, Express, MongoDB, Square API",
      challenges:
        "Creating a dynamic cart system and integrating Stripe payments.",
      solutions:
        "Built a real-time cart with React Context API and successfully integrated Stripe for secure payments.",
      repoLink: "https://github.com/ClauellaN/finalProject-FinPort.git",
      liveDemo: "https://finport.vercel.app/",
    },
    {
      title: "SlingShot Airlines",
      description:
        "A user-friendly flight booking application. Users can easily search for available flights, book, and manage reservations.",
      technologies: "React, CSS",
      challenges: "Managing game logic and state efficiently.",
      solutions:
        "Utilized React's useState and useEffect hooks to manage game state and rerenders smoothly.",
      repoLink: "https://github.com/ClauellaN/slingshot-airlines.git",
      liveDemo: "https://finport.vercel.app/",
    },
  ];

  return (
    <Wrapper>
      <Title>Projects</Title>
      <ProjectsGrid>
        {projects.map((project) => (
          <ProjectContainer key={project.title}>
            <Details>
              <ProjectTitle>{project.title}</ProjectTitle>
              <Description>{project.description}</Description>
              <Section>
                <SectionTitle>Technologies:</SectionTitle>
                <SectionContent>{project.technologies}</SectionContent>
              </Section>
              <Section>
                <SectionTitle>Challenges:</SectionTitle>
                <SectionContent>{project.challenges}</SectionContent>
              </Section>
              <Section>
                <SectionTitle>Solutions:</SectionTitle>
                <SectionContent>{project.solutions}</SectionContent>
              </Section>
              <ButtonGroup>
                <Button href={project.liveDemo} target="_blank">
                  Live Demo
                </Button>
                <IconButton href={project.repoLink} target="_blank">
                  <FaGithub size={24} />
                </IconButton>
              </ButtonGroup>
            </Details>
          </ProjectContainer>
        ))}
      </ProjectsGrid>
    </Wrapper>
  );
};

export default Projects;

// Styled Components
const Wrapper = styled.div`
  padding: 40px;
  background-color: #1a1a1a;
  min-height: 100vh;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #fff;
  text-align: center;
  margin-bottom: 30px;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
`;

const ProjectContainer = styled.div`
  padding: 20px;
  background-color: #222;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  color: #ddd;
`;

const ProjectTitle = styled.h2`
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #ddd;
  margin-bottom: 15px;
`;

const Section = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const SectionTitle = styled.span`
  font-weight: bold;
  color: #00bcd4;
  margin-right: 5px;
`;

const SectionContent = styled.span`
  font-size: 1rem;
  color: #ddd;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;
`;

const Button = styled.a`
  background: linear-gradient(to right, #0070f3, #005bb5);
  padding: 8px 20px;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: linear-gradient(to right, #005bb5, #0070f3);
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
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
    transform: translateY(-3px);
  }
`;
