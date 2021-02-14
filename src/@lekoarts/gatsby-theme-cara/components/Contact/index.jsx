import React from 'react';
import Container from '../common/Container';
import contact from '../../../../../static/contact.svg';
import { Wrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';

const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <ContactForm />
    </Details>
    <Thumbnail>
      <img src={contact} alt="I’m John and I’m a Backend & Devops engineer!" />
    </Thumbnail>
  </Wrapper>
);

export default Contact;
