import React from "react";

const ContactForm = (props: any) => {
  return (
    <div className="contact-form-container" id="Contact">
      <div className="simple-text contact-form-text">
        <h1>Share Your Ideas With Us</h1>
        <h2>Still reading? It's time to talk!</h2>
      </div>
      <form action="POST" className="contact-form">
        <div className="input-container-outer">
          <div className="form-input-container-left">
            <label htmlFor="name-input">Your Name</label>
            <input id="name-input" placeholder="Full Name"></input>
            <label htmlFor="phone-input">Your Phone Number</label>
            <input id="phone-input" placeholder="phone number"></input>
            <label htmlFor="text-input">How can we help?</label>
            <textarea
              name="help"
              id="text-input"
              placeholder="Provide a few details on your project"
              cols={30}
              rows={1}
            ></textarea>
          </div>
          <div className="form-input-container-right">
            <label htmlFor="company-input">Your Company</label>
            <input id="company-input" placeholder="Name of Company"></input>
            <label htmlFor="email-input">Your Email</label>
            <input id="email-input" placeholder="name@company.com"></input>
          </div>
        </div>
        <div className="form-input-container-full">
          <label htmlFor="name-input">Your Name</label>
          <input id="name-input" placeholder="Full Name"></input>
          <label htmlFor="company-input">Your Company</label>
          <input id="company-input" placeholder="Name of Company"></input>
          <label htmlFor="email-input">Your Email</label>
          <input id="email-input" placeholder="name@company.com"></input>
          <label htmlFor="phone-input">Your Phone Number</label>
          <input id="phone-input" placeholder="phone number"></input>
          <label htmlFor="text-input">How can we help?</label>
          <textarea
            name="help"
            id="text-input"
            placeholder="Provide a few details on your project"
            cols={30}
            rows={1}
          ></textarea>
        </div>
        <div className="submit-group">
          <input
            className="hero-button contact-submit-button"
            type="submit"
            value="Submit"
          />
          <h2>And take an atomic step towards growth.</h2>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
