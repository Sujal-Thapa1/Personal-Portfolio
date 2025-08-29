import React from "react";
import "../CSS Components/contact.css";

export default function Contact() {
  return (
    <>
      <div className="contact-container" id="contact-page">
        <h1>Contact</h1>
        <div className="contact-main">
          <form action="https://api.web3forms.com/submit" method="POST">
            <input
              type="hidden"
              name="access_key"
              value="065288e7-028c-49ca-889a-44471c878f42"
            ></input>
            <div className="userNamme form-input">
              <input
                name="name"
                type="text"
                className="form-control"
                placeholder="Enter Your Name "
                required
              />
            </div>

            <div className="Email form-input">
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter email"
                required
              />
            </div>

            <div className="phone form-input">
              <input
                name="Number"
                type="text"
                className="form-control"
                placeholder="Enter Mobile Number"
                required
              />
            </div>
            <div className="message form-input">
              <textarea rows="4" placeholder="Enter Your Message"></textarea>
            </div>

            <div className="submit-btn">
              <button
                name="message"
                type="submit"
                class="text-center"
                onclick="return checkvalidation()"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
