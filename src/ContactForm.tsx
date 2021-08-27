import React from "react";

const ContactForm = (props: any) => {
  return (
    <div className="contact-form-container" id="Contact">
      <div className="simple-text contact-form-text">
        <h1>Share Your Ideas With Us</h1>
        <h2>Still reading? It's time to talk!</h2>
      </div>
      <form
        method="POST"
        action="https://formspree.io/f/xknkpdyj"
        className="contact-form two-line"
      >
        <div className="input-container-outer">
          <div className="form-input-container-left">
            <label htmlFor="name-input">Your Name</label>
            <input
              id="name-input"
              placeholder="Full Name"
              type="text"
              name="name"
            ></input>
            <label htmlFor="phone-input">Your Phone Number</label>
            <input
              id="phone-input"
              placeholder="Phone Number"
              type="text"
              name="phone number"
            ></input>
            <label htmlFor="text-input">How can we help?</label>
            <textarea
              name="messgae"
              id="text-input"
              placeholder="Provide a few details on your project"
              cols={30}
              rows={1}
            ></textarea>
          </div>
          <div className="form-input-container-right">
            <label htmlFor="company-input">Your Company</label>
            <input
              id="company-input"
              placeholder="Name of Company"
              type="text"
              name="company"
            ></input>
            <label htmlFor="email-input">Your Email</label>
            <input
              id="email-input"
              placeholder="name@company.com"
              type="email"
              name="email"
            ></input>
          </div>
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
      <form
        method="POST"
        action="https://formspree.io/f/xknkpdyj"
        className="contact-form one-line"
      >
        <div className="form-input-container-full">
          <label htmlFor="name-input">Your Name</label>
          <input
            id="name-input"
            placeholder="Full Name"
            type="text"
            name="name"
          ></input>
          <label htmlFor="company-input">Your Company</label>
          <input
            id="company-input"
            placeholder="Name of Company"
            type="text"
            name="company"
          ></input>
          <label htmlFor="email-input">Your Email</label>
          <input
            id="email-input"
            placeholder="name@company.com"
            type="email"
            name="email"
          ></input>
          <label htmlFor="phone-input">Your Phone Number</label>
          <input
            id="phone-input"
            placeholder="Phone Number"
            type="text"
            name="phone number"
          ></input>
          <label htmlFor="text-input">How can we help?</label>
          <textarea
            name="message"
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
