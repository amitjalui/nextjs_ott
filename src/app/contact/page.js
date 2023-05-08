import React from 'react';
import ContactCard from '../components/ContactCard/ContactCard';
import ContactForm from '../components/ContactForm/ContactForm';
import contactStyles from "./contact.module.css";


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
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15093.280905579179!2d72.92264531312382!3d18.961459958941965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c53036606fa7%3A0xebf6bb8a685cd5c7!2sGharapuri%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1683579476178!5m2!1sen!2sin" width={600} height={450} style={{border: 0}} allowfullscreen="" loading="lazy" className={contactStyles.mapping} referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
      </div>
    </>
  )
}

export default Contact