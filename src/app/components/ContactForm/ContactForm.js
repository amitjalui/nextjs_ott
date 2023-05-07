import React from "react";
import contactStyles from "@/app/contact/contact.module.css";
import { Mulish } from "next/font/google";

const mulish = Mulish({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const ContactForm = () => {
  return (
    <form className={contactStyles.contact_form}>
      <div className={contactStyles.input_field}>
        <label htmlFor="username" className={contactStyles.label}>
          Enter Your Name
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your name"
            className={mulish.className}
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
          />
        </label>
      </div>

      <div>
        <button type="submit" className={mulish.className}>
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
