import { useState } from "react";
import { ContactStyles } from "./styledComponents";

function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("Enter your email");

  function handleemail(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(email);
  }

  return (
    <ContactStyles className="center-flex-display">
      <div className="app">
        <div className="contact">
          <h2 className="underline">Join Our Newsletter</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            ex officiis. Unde, odit inventore. Minima saepe porro natus?
            Aliquam, praesentium.
          </p>
          <p className="message">{message}</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="email@email.com"
              value={email}
              onChange={handleemail}
            />
            <button className="btn btn-email">SUBMIT</button>
          </form>
        </div>
      </div>
    </ContactStyles>
  );
}

export default Contact;
