import React from 'react';
import styled from 'styled-components';

// Styled Components for the card
const Figure = styled.figure`
  font-family: 'Open Sans', Arial, sans-serif;
  position: relative;
  overflow: hidden;
  margin: 10px;
  min-width: 300px; /* Increased width */
  max-width: 400px; /* Increased max width */
  width: 100%;
  height: 500px; /* Increased height */
  color: #ffffff;
  text-align: center;
  line-height: 1.4em;
  background-color: transparent; /* Make background transparent */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); /* Added box shadow for boundary visibility */

  &:hover .background {
    transform: scale(1.3);
  }
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%; /* Ensure background fills the height */
  vertical-align: top;
  opacity: 0.2; /* You can adjust this to see more or less of the background */
  filter: grayscale(100%) blur(10px);
  transition: all 2s ease;
`;

const ProfileImage = styled.img`
  border-radius: 50%;
  position: absolute;
  bottom: 50%;
  left: 50%;
  max-width: 120px; /* Adjusted max-width for profile image */
  opacity: 1;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
  border: 2px solid rgba(255, 255, 255, 0.5);
  transform: translate(-50%, 0%);
`;

const FigCaption = styled.figcaption`
  width: 100%;
  padding: 15px 25px;
  position: absolute;
  left: 0;
  top: 50%;
`;

const Name = styled.h3`
  margin: 0 0 5px;
  font-weight: 400;

  span {
    display: block;
    font-size: 0.6em;
    color: #f39c12;
    opacity: 0.75;
  }
`;

const ContactNumber = styled.p`
  margin: 10px 0; /* Add some space around the contact number */
  font-size: 0.9em; /* Adjust the font size as needed */
  color: #f39c12; /* You can adjust the color to fit your design */
`;

const Icons = styled.div`
  a {
    text-decoration: none;
    i {
      padding: 10px 5px;
      display: inline-block;
      font-size: 32px;
      color: #ffffff;
      text-align: center;
      opacity: 0.65;

      &:hover {
        opacity: 1;
        transition: all 0.35s ease;
      }
    }
  }
`;

// Functional Component
const ContactCard = ({ name, designation, profileImg, backgroundImg, socialLinks, contactNumber }) => {
  return (
    <Figure className="snip1344">
      <BackgroundImage src={backgroundImg} alt={name} className="background" />
      <ProfileImage src={profileImg} alt={name} className="profile" />
      <FigCaption>
        <Name>
          {name}
          <span>{designation}</span>
        </Name>
        <ContactNumber>{contactNumber}</ContactNumber> {/* Added contact number */}
        <Icons>
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
              <i className={link.iconClass}></i>
            </a>
          ))}
        </Icons>
      </FigCaption>
    </Figure>
  );
};

export default ContactCard;
