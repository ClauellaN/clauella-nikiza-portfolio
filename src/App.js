import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import styled from "styled-components";
import GlobalStyle from "./styles/GlobalStyles";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Container>
        <Header />
        <MainContent>
          <Section id="hero">
            <Card>
              <HeroSection />
            </Card>
          </Section>
          <Section id="about">
            <Card>
              <AboutMe />
            </Card>
          </Section>
          <Section id="technologies">
            <Card>
              <Technologies />
            </Card>
          </Section>
    
          <Section id="projects">
            <Card>
              <Projects />
            </Card>
          </Section>
    
          <Section id="contact">
            <Card>
              <Contact />
            </Card>
          </Section>
       
        </MainContent>
      </Container>
    </Router>
  );
};
export default App;

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`;
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;
const Section = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background: transparent;
  transition: background 0.3s;
  min-height: 100vh;
`;
const Card = styled.div`
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px;
  width: 100%;
  text-align: center;
`;

