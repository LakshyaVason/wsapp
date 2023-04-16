import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaDatabase, FaChartBar, FaAngleUp } from 'react-icons/fa';
import styled from 'styled-components';

const Homepage = () => {
  return (
    <MainContainer>
      <Hero>
        <Heading>Web Scraping Application</Heading>
        <Description>
          Effortlessly extract data from websites and transform it into actionable insights.
        </Description>
        <ButtonsContainer>
          <StyledLink to="/add-remove-website">Scrape Now</StyledLink>
          <StyledLink to="/my-websites">My Websites</StyledLink>
        </ButtonsContainer>
        <ScrollIndicator>
          <FaAngleUp />
        </ScrollIndicator>
      </Hero>
      <FeaturesSection>
        <FeaturesHeading>Features</FeaturesHeading>
        <FeaturesGrid>
          <Feature>
            <IconContainer>
              <FaCode style={iconStyle} />
            </IconContainer>
            <FeatureHeading>Easy Scraping</FeatureHeading>
            <FeatureDescription>
              Our web scraping application makes it easy to extract data from any supported website.
            </FeatureDescription>
          </Feature>
          <Feature>
            <IconContainer>
              <FaDatabase style={iconStyle} />
            </IconContainer>
            <FeatureHeading>Robust Data Management</FeatureHeading>
            <FeatureDescription>
              Once you've scraped data, you can easily view and manage it.
            </FeatureDescription>
          </Feature>
          <Feature>
            <IconContainer>
              <FaChartBar style={iconStyle} />
            </IconContainer>
            <FeatureHeading>Actionable Insights</FeatureHeading>
            <FeatureDescription>
              Get notified of any changes to the website you scraped
            </FeatureDescription>
          </Feature>
        </FeaturesGrid>
      </FeaturesSection>
    </MainContainer>
  );
};

const iconStyle = {
  fontSize: '2rem',
  color: 'white'
};

const MainContainer = styled.div`
  background-color: white;
  color: #374151;
`;

const Hero = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
`;

const Heading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 3rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

const StyledLink = styled(Link)`
background-color: #374151;
color: white;
padding: 1rem 2rem;
border-radius: 2rem;
margin: 0 1rem;
font-size: 1.2rem;
text-decoration: none;
text-transform: uppercase;
letter-spacing: 0.1rem;
transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    background-color: #dedede;
    color: #374151;
  }
  `;
  
  const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 4rem;
  font-size: 2rem;
  color: #374151;
  cursor: pointer;
`;
  
const FeaturesSection = styled.section `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 75vh;
  padding: 2rem;
  background-color: #f7f7f7;
`;

const FeaturesHeading = styled.h2 `
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const FeaturesGrid = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const Feature = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 40rem;
`;

const IconContainer = styled.div `
  background-color: #374151;
  border-radius: 50%;
  padding: 1rem;
  margin-bottom: 1rem;
`;

const FeatureHeading = styled.h3 `
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
`;

const FeatureDescription = styled.p `
  font-size: 1rem;
  text-align: center;
`;

  
  export default Homepage;
  