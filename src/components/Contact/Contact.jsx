import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle form submission
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  };

  return (
    <div className="form-container">
        <h1>PLEASE, FEEL FREE TO CONTACT ME:</h1>
      <form onSubmit={handleSubmit}>
        <h2>
          <label htmlFor="name">Name:</label>
        </h2>

        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="email"><h2>Email:</h2></label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="message"><h2>Message:</h2></label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
