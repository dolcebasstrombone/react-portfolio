import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
    //   console.log(isValid);
      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`A ${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section>
      <h2 className="moon-flower">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="moon-flower" htmlFor="name">Name:</label>
          <input
            type="text"
            defaultValue={name}
            name="name"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label className="moon-flower" htmlFor="email">Email address:</label>
          <input
            type="text"
            defaultValue={email}
            name="email"
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label className="moon-flower" htmlFor="message">Message:</label>
          <textarea
            rows="5"
            defaultValue={message}
            name="message"
            onChange={handleChange}
          ></textarea>
        </div>
        {errorMessage && (
          <div>
            <p>{errorMessage}</p>
          </div>
        )}
        <button className="moon-flower" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
