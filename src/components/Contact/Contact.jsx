import React, { useRef, useState } from "react";
import "./ContactForm.css";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

function ContactForm() {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kacchp3",
        "template_u0j4unb",
        e.target,
        "zi1Em8ggG9bfQ1sVl"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Message sent sucessfully 👍",
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Something went wrong 🙃",
            text: error.text,
          });
        }
      );
    e.target.reset();
  };


  return (
    <div className="form-container">
        <h1>PLEASE, FEEL FREE TO CONTACT ME:</h1>
      <form ref={form} onSubmit={sendEmail}>
        <h2>
          <label htmlFor="name">Name:</label>
        </h2>

        <input
          type="text"
          name="user_name"
          id="name"
          required
        />

        <label htmlFor="email"><h2>Email:</h2></label>
        <input
          type="email"
          name="from_email"
          id="email"
          required
        />

        <label htmlFor="message"><h2>Message:</h2></label>
        <textarea
          id="message"
          name="message"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
