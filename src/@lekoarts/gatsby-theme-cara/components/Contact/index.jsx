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
      <img src={contact} alt="I’m Matias and I’m a Full Stack Developer!" />
    </Thumbnail>
  </Wrapper>
);

export default Contact;
