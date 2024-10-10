import React from 'react';
import styled from 'styled-components';
import ContactCard from '../components/ContactCard'; // Import the ContactCard component

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Adjusts spacing between cards */
  flex-wrap: wrap; /* Allows cards to wrap to the next line on smaller screens */
  margin: 20px; /* Adjust margin as needed */
  padding: 0 10px; /* Optional: Add some padding to the sides */
`;

const ContactPage = () => {
  // return (
  //   // <div>
  //   //   <h1>Contact Page</h1>
  //   //   <CardsContainer>
  //   //     <ContactCard
  //   //       name="Ursula Gurnmeister"
  //   //       designation="Engineer"
  //   //       profileImg="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample1.jpg"
  //   //       backgroundImg="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample1.jpg"
  //   //       contactNumber="+1234567890" // Add contact number here
  //   //       socialLinks={[
  //   //         { href: '#', iconClass: 'ion-social-reddit-outline' },
  //   //         { href: '#', iconClass: 'ion-social-twitter-outline' },
  //   //         { href: '#', iconClass: 'ion-social-vimeo-outline' },
  //   //       ]}
  //   //     />

  //   //     <ContactCard
  //   //       name="Jason Response"
  //   //       designation="Photographer"
  //   //       profileImg="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample7.jpg"
  //   //       backgroundImg="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample7.jpg"
  //   //       contactNumber="+1234567890" // Add contact number here
  //   //       socialLinks={[
  //   //         { href: '#', iconClass: 'ion-social-reddit-outline' },
  //   //         { href: '#', iconClass: 'ion-social-twitter-outline' },
  //   //         { href: '#', iconClass: 'ion-social-vimeo-outline' },
  //   //       ]}
  //   //     />

  //   //     <ContactCard
  //   //       name="Druid Wensleydale"
  //   //       designation="Accountant"
  //   //       profileImg="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg"
  //   //       backgroundImg="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg"
  //   //       contactNumber="+1234567890" // Add contact number here
  //   //       socialLinks={[
  //   //         { href: '#', iconClass: 'ion-social-reddit-outline' },
  //   //         { href: '#', iconClass: 'ion-social-twitter-outline' },
  //   //         { href: '#', iconClass: 'ion-social-vimeo-outline' },
  //   //       ]}
  //   //     />
  //   //   </CardsContainer>
  //   // </div>
  // );
};

export default ContactPage;
