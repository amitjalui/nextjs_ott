import React from 'react';
import ContactCard from '../components/ContactCard/ContactCard';
import contactStyles from "./contact.module.css";
import ContactForm from '../components/ContactForm/contactForm';


const Contact = () => {
  return (
    <>
      <div className={contactStyles.container}>
        <h1>Contact Us</h1>
        <ContactCard />
        <section className={contactStyles.contact_section}>
          <h2>
            We'd love to hear
            <span> from you</span>
          </h2>
          <ContactForm />
        </section>
      </div>
    </>
  )
}

export default Contact