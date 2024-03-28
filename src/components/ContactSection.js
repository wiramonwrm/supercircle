import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import "./ContactSection.css";

function ContactSection() {
  return (
    <div className="contact-page">
      <a href="https://www.linkedin.com/in/wiramonth/">
        <AiFillLinkedin className="sns-icon" />
      </a>
    </div>
  );
}

export default ContactSection;
