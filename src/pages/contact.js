import React, { useEffect, useState } from 'react';
import classes from './contact.module.css';
import Typist from 'react-typist';

const Contact = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }

  const handleOnchange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    document.title = "Contact with Manik"
  }, []);


  const handleOnsubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState })
    })
      .then(() => {
        alert("Thanks for message!")
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      })
      .catch(error => alert("Please try again"));
    e.preventDefault()

  }
  return (
    <>
    <section className="text-white">
      <header className="text-center pt-5">
        <Typist cursor={{ show: false }}><p className={`${classes.description}`}>Feel free to contact me anytime</p></Typist>
        <h2 className={`${classes.title}`} >Get in Touch</h2>
        <div data-sal="zoom-in"
          data-sal-delay="400"
          data-sal-easing="ease" className={`${classes.bar} shadow`}></div>
      </header>
    </section>
    <section className={`${classes.contactAria} container pt-5`} >
      <div className="row">
        <div className="col-md-6 col-lg-7">
          <form onSubmit={handleOnsubmit}
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field" autoComplete={false.toString()}>
            <div className="title">
              <h2>Message Me</h2>
              <div className="row">
                <div className="col-12 col-md-6 form-group">
                  <input className={`${classes.inputbg} form-control text-white`} onChange={handleOnchange} value={formState.name} id="contact-name" type="text" name="name" placeholder="Name" required />
                </div>
                <div className="col-12 col-md-6 form-group">
                  <input className={`${classes.inputbg} form-control text-white`} onChange={handleOnchange} value={formState.email} id="contact-email" type="email" name="email" placeholder="Email" required />
                </div>
                <div className="col-12 form-group">
                  <input className={`${classes.inputbg} form-control text-white`} onChange={handleOnchange} value={formState.subject} id="contact-subject" type="text" name="subject" placeholder="Subject" required />
                </div>
                <div className="col-12 form-group form-message">
                  <textarea className={`${classes.inputbg} form-control text-white`} onChange={handleOnchange} value={formState.message} id="contact-message" name="message" placeholder="Message" rows="5"></textarea>
                </div>
                <div className="col-12 form-submit">
                  <button className="btn button-main button-scheme text-white" id="contact-submit" type="submit">Send Message</button>
                  <p className="contact-feedback"></p>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-6 col-lg-5">
          <div className={`${classes.contactinfo} pl-4`}>
            <h4 className="py-2">Contact Info</h4>
            <p className={classes.infoDescription}>Always available for freelance work if the right project comes along, Feel free to contact me!</p>
            <ul className="list-unstyled list-info">
              <li>
                <div className="media align-items-center"><span className="info-icon"></span>
                  <div className={classes.infoList}>
                    <h6 className="info-type">Name</h6><span className="info-value">Manik Roy</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="media align-items-center"><span className="info-icon"><i className="icon ion-md-map"></i></span>
                  <div className={classes.infoList}>
                    <h6 className="info-type">Location</h6><span className="info-value">Dinajpur, Bangladesh</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="media align-items-center"><span className="info-icon"><i className="icon ion-md-call"></i></span>
                  <div className={classes.infoList}>
                    <h6 className="info-type">Call Me</h6><span className="info-value"><a href="tel:+8801780849889">+88 01780849889</a></span>
                  </div>
                </div>
              </li>
              <li>
                <div className="media align-items-center"><span className="info-icon"><i className="icon ion-md-send"></i></span>
                  <div className={classes.infoList}>
                    <h6 className="info-type">Email Me</h6><span className="info-value"><a href="mailto:cm.dpi15@gmail.com">cm.dpi15@gmail.com</a></span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Contact;