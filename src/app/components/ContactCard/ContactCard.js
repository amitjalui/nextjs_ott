import React from "react";
import contactStyles from "@/app/contact/contact.module.css";
import { MdEmail, MdVoiceChat, MdForum } from "react-icons/md";
import Link from "next/link";

const ContactCard = () => {
  return (
    <div className={contactStyles.section}>
      <div className={contactStyles.container}>
        <div className={contactStyles.grid}>
          <div className={contactStyles.grid_card}>
            <i>
              <MdEmail />
            </i>
            <h2>Email</h2>
            <p>Monday to Friday Expected</p>
            <p className={contactStyles.last_para}>
              response time: 72 hours
            </p>
            <Link href="/">
              Send Email <span>-&gt;</span>
            </Link>
          </div>
          <div className={contactStyles.grid_card}>
            <i>
              {" "}
              <MdVoiceChat />{" "}
            </i>
            <h2>Live Chat</h2>
            <p>Weekdays: 9 AM — 6 PM ET</p>
            <p className={contactStyles.last_para}>Weekends: 9 AM — 5 PM ET </p>
            <Link href="/">
              {" "}
              Chat Now <span>-&gt;</span>
            </Link>
          </div>

          <div className={contactStyles.grid_card}>
            <i>
              {" "}
              <MdForum />{" "}
            </i>
            <h2>Community Forum</h2>
            <p>Monday to Friday Expected </p>
            <p className={contactStyles.last_para}>response time: 72 hours </p>
            <Link href="/" className={contactStyles.anchorLink}>
              {" "}
              Ask The Community <span>-&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
