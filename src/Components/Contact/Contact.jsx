import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "eb877da2-c281-4deb-9d88-3cea33859a56");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      // console.log("Success", res);
      alert(res.message);
    }
  };


  return (
    <div id="contact"className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects . So feel free to
            send me a message if anything that you want me to work on . You can
            contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>greatstack@gmial.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+777-825-524</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Ca ,United Stated</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit}className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="enter your name" name="name" />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="enter your email" name="email" />
          <label htmlFor="">Write you message here</label>
          <textarea
            rows="8"
            placeholder="Enter your message"
            name="message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

// eb877da2-c281-4deb-9d88-3cea33859a56