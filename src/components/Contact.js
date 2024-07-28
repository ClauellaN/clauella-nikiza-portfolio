
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { FaLinkedin, FaEnvelope, FaGithub, FaPhone, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data submitted:", formData);
    };

    return (
        <ContactWrapper>
            <Title>Contact Me</Title>
            <ContactInfo>
                <InfoSection>
                <SocialLink href="tel:+15147024250" target="_blank">
                    <FaPhone size={20} />
                </SocialLink> 
                    <ContactText>+1(514)702-4250</ContactText>
                </InfoSection>
                <InfoSection>
                  <SocialLink href="https://gmail.com/" target="_blank">
                    <FaEnvelope size={20} /> 
                  </SocialLink>
                    <ContactText>clauenikiz@gmail.com</ContactText>
                </InfoSection>
                <InfoSection>
                    <SocialTitle>Socials</SocialTitle>
                    <SocialLinks>
                        <SocialLink href="https://linkedin.com/in/yourprofile" target="_blank">
                            <FaLinkedin size={30} />
                        </SocialLink>
                        <SocialLink href="https://github.com/yourprofile" target="_blank">
                            <FaGithub size={30} />
                        </SocialLink>
                        <SocialLink href="https://instagram.com/yourprofile" target="_blank">
                            <FaInstagram size={30} />
                        </SocialLink>
                    </SocialLinks>
                </InfoSection>
            </ContactInfo>
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
            </Form>
        </ContactWrapper>
    );
};

export default Contact;

// styled components
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
    background-color: #808080;
    padding: 20px;
    border-radius: 15px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;
const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 50px;
  font-family: 'Roboto', sans-serif;
  color: white;
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
    font-size: 1.5rem;
    color: white;
`;

const SocialTitle = styled.h3`
    margin-top: 0;
    font-size: 1.5rem;
    color: white;
`;

const SocialLinks = styled.div`
    display: flex;
    gap: 20px;
`;

const SocialLink = styled.a`
    color: white;
    transition: color 0.3s;

    &:hover {
        color: #007bff;
    }
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 800px;
    background-color: #808080;
    padding: 20px;
    border-radius: 15px;
`;

const FormField = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
`;

const Input = styled.input`
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 15px;
    font-size: 1.5rem;
   background-color: black;
    color: white;
    transition: border-color 0.3s;

    &:focus {
        border-color: #007bff;
        outline: none;
    }
`;

const Textarea = styled.textarea`
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 15px;
    font-size: 1.5rem;
    background-color: black;
    color: white;
    resize: vertical;
    transition: border-color 0.3s;
    height: 150px;

    &:focus {
        border-color: #007bff;
        outline: none;
    }
`;
const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const SubmitButton = styled.button`
    padding: 10px 20px;
    background-color: #e50914;
    color: #fff;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    font-size: 1.5rem;
    transition: background-color 0.3s, transform 0.3s;
    width: 100%;
    max-width: 200px; 

    &:hover {
        background-color: #b20710;
        transform: translateY(-2px);
    }
`;
