
import React, { useState } from "react";
import styled from "styled-components";
import { FaEnvelope, FaPhone, FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_txfwapk",
        "template_1vym2tc",
        e.target,
        "w5x3poBS7GxrL9xT2"
      )
      .then((result) => {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(error.text);
      });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <ContactWrapper>
      <Title>LET'S CONNECT</Title>
      <ContactInfo>
        <InfoSection>
          <SocialLink href="tel:+15147024250" target="_blank">
            <FaPhone size={20} />
          </SocialLink>
          <ContactText>+1(514)702-4250</ContactText>
        </InfoSection>
        <InfoSection>
          <SocialLink href="mailto:clauenikiz@gmail.com" target="_blank">
            <FaEnvelope size={20} />
          </SocialLink>
          <ContactText>clauenikiz@gmail.com</ContactText>
        </InfoSection>
      </ContactInfo>

      <SocialIcons>
        <SocialLink href="https://github.com" target="_blank"><FaGithub size={35} /></SocialLink>
        <SocialLink href="https://linkedin.com" target="_blank"><FaLinkedin size={35} /></SocialLink>
        <SocialLink href="https://twitter.com" target="_blank"><FaTwitter size={35} /></SocialLink>
        <SocialLink href="https://instagram.com" target="_blank"><FaInstagram size={35} /></SocialLink>
      </SocialIcons>

      <Form onSubmit={handleSubmit}>
        <FormField>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            required
          />
        </FormField>
        <FormField>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email address"
            required
          />
        </FormField>
        <FormField>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message"
            required
          />
        </FormField>
        <ButtonContainer>
          <SubmitButton type="submit">SEND</SubmitButton>
        </ButtonContainer>
        {submitted && <SentMessage> Your message has been sent!</SentMessage>}
      </Form>
    </ContactWrapper>
  );
};

export default Contact;

// Styled Components

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  color: black;
  min-height: 100vh;
  background-color: #1a1a1a;
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  margin-bottom: 50px;
  background-color: #333333;
  padding: 20px;
  border-radius: 15px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 50px;
  font-family: "Roboto", sans-serif;
  color: white;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  color: white;
  padding: 10px;
  text-align: center;
  min-width: 150px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ContactText = styled.span`
  margin-top: 30px;
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
`;

const SocialLink = styled.a`
  color: white;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  background-color: #333333;
  padding: 20px;
  border-radius: 15px;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 15px;
  font-size: 1.5rem;
  background-color: black;
  color: white;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
    outline: none;
  }
`;

const Textarea = styled.textarea`
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 15px;
  font-size: 1.5rem;
  background-color: black;
  color: white;
  transition: border-color 0.3s;
  height: 150px;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
    outline: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const SubmitButton = styled.button`
  padding: 15px 30px;
  background-color: #e50914;
  color: #fff;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  font-size: 1.5rem;
  width: 100%;
  max-width: 200px;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #b20710;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
`;

const SentMessage = styled.p`
  margin-top: 20px;
  font-size: 2rem;
  color: green;
  text-align: center;
`;
