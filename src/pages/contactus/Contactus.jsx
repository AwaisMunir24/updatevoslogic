import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <>
      <section className="contact-us">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-12">
              <h3 className="conversation">Let's continue the conversation</h3>
              <h2 className="demo">Maybe you want to schedule a demo?</h2>
            </div>
          </div>
          <form>
            <div className="row rowsss">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <input
                  type="text"
                  className="form-control input_enter"
                  placeholder="First Name"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <input
                  type="text"
                  className="form-control input_enter"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="row rowsss">
              <div className="col-lg-6 col-md-6 col-sm-12 ">
                <input
                  type="text"
                  className="form-control input_enter"
                  placeholder="Email"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <input
                  type="number"
                  className="form-control input_enter"
                  placeholder="Phone"
                />
              </div>
            </div>
            <div className="row rowsss">
              <div className="col-lg-12">
                <textarea
                  rows="8"
                  cols="50"
                  class="form-control input_enter2"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>
            <button className="submit_button">Submit </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
