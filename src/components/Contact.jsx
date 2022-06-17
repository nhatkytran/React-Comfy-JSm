import { ContactStyles } from "./styledComponents";

function Contact() {
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
          <p className="message">Enter your email</p>
          <form
            action="https://formsubmit.co/dc2fc18512c7e45c708ba7b6d3979958"
            method="POST"
          >
            <input
              type="email"
              name="email"
              placeholder="loveyour@gmail.com"
              required
            />
            <button className="btn btn-email">SUBMIT</button>
          </form>
        </div>
      </div>
    </ContactStyles>
  );
}

export default Contact;
