"use client";

import React, { useState } from "react";
import contactStyles from "@/app/contact/contact.module.css";
import { Mulish } from "next/font/google";

const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const ContactForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: ""
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;
    setUser(prev => ({...prev, [fieldName]: value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {"Content_Type":"application/json"},
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          phone: user.phone,
          message: user.message
        })
      });

      if (response.status === 200) {
        setUser({
          username: "",
          email: "",
          phone: "",
          message: ""
        });
        setStatus('success');
      } else {
        setStatus('error')
      }
    } catch (e) {
      console.log(e);
    } 
  }

  return (
    <form className={contactStyles.contact_form} onSubmit={handleSubmit}>
      <div className={contactStyles.input_field}>
        <label htmlFor="username" className={contactStyles.label}>
          Enter Your Name
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your name"
            className={mulish.className}
            value={user.name}
            onChange={e => handleChange(e)}
            autoComplete="off"
            required
          />
        </label>
      </div>

      <div className={contactStyles.input_field}>
        <label htmlFor="email" className={contactStyles.label}>
          Email
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className={mulish.className}
            value={user.email}
            onChange={e => handleChange(e)}
            autoComplete="off"
            required
          />
        </label>
      </div>

      <div className={contactStyles.input_field}>
        <label htmlFor="phone" className={contactStyles.label}>
          Phone Number
          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Enter your phone no."
            className={mulish.className}
            value={user.phone}
            onChange={e => handleChange(e)}
            autoComplete="off"
            required
          />
        </label>
      </div>

      <div className={contactStyles.input_field}>
        <label htmlFor="message" className={contactStyles.label}>
          Message
          <textarea
            type="text"
            name="message"
            id="message"
            rows={5}
            placeholder="Enter your message"
            className={mulish.className}
            value={user.message}
            onChange={e => handleChange(e)}
            autoComplete="off"
            required
          />
        </label>
      </div>

      <div>
        {
          status === 'success' && <p className={styles.success_msg}>Thank you for your message!</p>
        }
        {
          status === 'error' && <p className={styles.error_msg}>There was an error submitting your message. Please try again.</p>
        }
        <button type="submit" className={mulish.className}>
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
