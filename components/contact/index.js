import React from "react";
import { NavLogo } from "components/commons";
import { useForm } from 'react-hook-form';
import { Navigation } from "components/home/components";
import MobileContact from './mobileContact';
import axios from 'axios';
import { useRouter } from 'next/router';

const ContactHomePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const router = useRouter();
  async function onSubmitForm(values){
    let config = {
      method: "post",
      url: "/api/contact",
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };
    try {
      const response = await axios(config);
      if(response.status == 200){
        reset();
        router.push('/contact');
      }
    } catch (err){
      console.error(err);
    }
  }

  return (
    <React.Fragment>
      <NavLogo />
      <Navigation />
      <div id="full-page">
        <div className="container-fluid contact-section">
          <div
            data-scrollmagic-pin-spacer={true}
            className="scrollmagic-pin-spacer"
          >
            <div id="pinContainer">
              <div
                id="slideContainer"
                style={{ transform: "matrix(1, 0, 0, 1, 0, 0)" }}
              >
                <section className="panel blue">
                  <div className="container-fluid contact-detail-section">
                    <div className="row">
                      <div className="col-md-5 pl-0">
                        <div className="contact-detail">
                          <h1 className="contact-heading">Contact</h1>
                          <a className="contact-phone" href="tel:03041119969 ">
                            0304 1119969
                          </a>{" "}
                          <br />
                          <a
                            className="contact-email"
                            href="mailto:info@buildearth.com"
                          >
                            info@buildearth.com
                          </a>
                          <h1 className="contact-heading">Our Office</h1>
                          <p className="office-address">
                            MB-43 Phase II Al Jalil Garden Housing Scheme,
                            Faizpur Interchange M2, Lahore
                          </p>
                          <a href="#" className="contact-us-btn">
                            ASK US ANY THING
                          </a>
                          <br />
                          <img
                            className="img-fluid contact-arrow"
                            src="https://buildearth.s3.us-east-2.amazonaws.com/img/contact/arrow.svg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6 offset-1">
                        <img
                          className="img-fluid contact-right-lion"
                          src="https://buildearth.s3.us-east-2.amazonaws.com/img/contact/Lion+Right.svg"
                          alt="Right lion"
                        />
                      </div>
                    </div>
                  </div>
                </section>
                <section className="panel turqoise">
                  <div className="container-fluid contact-detail-section">
                    <div className="row">
                      <div className="col-md-6">
                        <img
                          className="img-fluid contact-left-lion"
                          src="https://buildearth.s3.us-east-2.amazonaws.com/img/contact/Lion+Left.svg"
                          alt="Left Lion"
                        />
                        <h1 className="contact-form-heading">
                          Let Us <br /> Know How <br /> We Can Help You.
                        </h1>
                      </div>
                      <div className="col-md-6">
                        <div className="contact-white-section">
                          <h1 className="form-heading">
                            Please complete the form below.
                          </h1>
                          <form onSubmit={handleSubmit(onSubmitForm)}>
                            <div className="row contact-submit-form">
                              <div className="col-md-4">
                                <input
                                  type="text"
                                  name="fullName"
                                  {...register("fullName", {
                                    required: true,
                                    maxLength: 30,
                                  })}
                                  className="form-control contact-form-input"
                                  placeholder="Full Name*"
                                />
                                {errors?.fullName?.type === "required" && (
                                  <p className="error-message">
                                    This field is Required
                                  </p>
                                )}
                                {errors?.fullName?.type === "maxLength" && (
                                  <p className="error-message">
                                    Name Cannot Exceed 30 Characters
                                  </p>
                                )}
                              </div>
                              <div className="col-md-4">
                                <input
                                  type="number"
                                  name="number"
                                  min="0"
                                  {...register("number", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 17,
                                  })}
                                  className="form-control contact-form-input"
                                  placeholder="Phone Number*"
                                />
                                {errors?.number?.type === "required" && (
                                  <p className="error-message">
                                    This field is Required
                                  </p>
                                )}
                                {errors?.number?.type === "minLength" && (
                                  <p className="error-message">
                                    Phone Number minLength 6 number
                                  </p>
                                )}
                                {errors?.number?.type === "maxLength" && (
                                  <p className="error-message">
                                    Phone Number maxLength 17 number
                                  </p>
                                )}
                              </div>
                            </div>

                            <div className="row contact-submit-form2">
                              <div className="col-md-8">
                                <input
                                  type="email"
                                  name="email"
                                  {...register("email", {
                                    required: "This Field is Required",
                                    pattern: {
                                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                      message: "Invalid Email Address",
                                    },
                                  })}
                                  className="form-control contact-form-input"
                                  placeholder="Email Address*"
                                />
                                {errors.email ? (
                                  <p className="error-message">
                                    {errors.email && errors.email.message}
                                  </p>
                                ) : null}
                              </div>
                            </div>

                            <div className="row contact-submit-form2">
                              <div className="col-md-8">
                                <input
                                  type="text"
                                  name="subject"
                                  {...register("subject", {
                                    required: true,
                                    minLength: 10,
                                    maxLength: 50,
                                  })}
                                  className="form-control contact-form-input"
                                  placeholder="Subject*"
                                />
                                {errors?.subject?.type === "required" && (
                                  <p className="error-message">
                                    This field is Required
                                  </p>
                                )}
                                {errors?.subject?.type === "minLength" && (
                                  <p className="error-message">
                                    Subject minLength 10 Characters
                                  </p>
                                )}
                                {errors?.subject?.type === "maxLength" && (
                                  <p className="error-message">
                                    Subject maxLength 50 Characters
                                  </p>
                                )}
                              </div>
                            </div>

                            <div className="row contact-submit-form2">
                              <div className="col-md-8">
                                <textarea
                                  className="form-control contact-form-input"
                                  id="exampleFormControlTextarea1"
                                  placeholder="Message*"
                                  name="message"
                                  {...register("message", {
                                    required: true,
                                    minLength: 30,
                                    maxLength: 1000,
                                  })}
                                  rows="3"
                                ></textarea>
                                {errors?.message?.type === "required" && (
                                  <p className="error-message">
                                    This field is Required
                                  </p>
                                )}
                                {errors?.message?.type === "minLength" && (
                                  <p className="error-message">
                                    Message minLength 30 Characters
                                  </p>
                                )}
                                {errors?.message?.type === "maxLength" && (
                                  <p className="error-message">
                                    Message maxLength 1000 Characters
                                  </p>
                                )}
                              </div>
                            </div>

                            <div className="row contact-submit-form2">
                              <div className="col-md-8">
                                <button type="submit" className="form-submit">
                                  SEND
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid contact-section-small-screen">
          <div className="container-fluid contact-detail-section">
            <div className="row">
              <div className="col-md-6">
                <div className="contact-detail">
                  <h1 className="contact-heading">Contact</h1>
                  <a className="contact-phone" href="tel:03041119969 ">
                    0304 1119969
                  </a>{" "}
                  <br />
                  <a
                    className="contact-email"
                    href="mailto:info@buildearth.com"
                  >
                    info@buildearth.com
                  </a>
                  <h1 className="contact-heading">Our Office</h1>
                  <p className="office-address">
                    MB-43 Phase II Al Jalil Garden Housing Scheme, Faizpur
                    Interchange M2, Lahore
                  </p>
                  <a href="#" className="contact-us-btn">
                    ASK US ANY THING
                  </a>
                  <br />
                  <img
                    className="img-fluid contact-arrow"
                    src="https://buildearth.s3.us-east-2.amazonaws.com/img/contact/arrow.svg"
                    alt="Arrow"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <img
                  className="img-fluid contact-right-lion"
                  src="https://buildearth.s3.us-east-2.amazonaws.com/img/contact/Lion+Right.svg"
                  alt="Right lion"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container contact-mobile-section">
          <div className="row">
            <div className="col-md-12">
              <h1 className="contact-mobile-heading">
                Let Us <br /> Know How <br />{" "}
                <span className="dark-mobile-heading">We</span> Can Help You.
              </h1>
            </div>
          </div>

         <MobileContact/>


        </div>

        <div className="container-fluid footer-section">
          <div className="row contact">
            <div className="col-md-12 footer-detail">
              <div className="social-links">
                <a href="#">
                  <img
                    className="img-fluid facebook-icon"
                    src="https://buildearth.s3.us-east-2.amazonaws.com/img/aljalil/facebook.svg"
                    alt="Facebook"
                  />
                </a>
                <a href="#">
                  <img
                    className="img-fluid"
                    src="https://buildearth.s3.us-east-2.amazonaws.com/img/aljalil/instagram.svg"
                    alt="Instagram"
                  />
                </a>
                <a href="#">
                  <img
                    className="img-fluid"
                    src="https://buildearth.s3.us-east-2.amazonaws.com/img/aljalil/twitter.svg"
                    alt="Twitter"
                  />
                </a>
                <a href="#">
                  <img
                    className="img-fluid"
                    src="https://buildearth.s3.us-east-2.amazonaws.com/img/aljalil/youtube.svg"
                    alt="Youtube"
                  />
                </a>
                <a href="#">
                  <img
                    className="img-fluid"
                    src="https://buildearth.s3.us-east-2.amazonaws.com/img/aljalil/linkedin.svg"
                    alt="LinkeDin"
                  />
                </a>
                <a href="#">
                  <img
                    className="img-fluid"
                    src="https://buildearth.s3.us-east-2.amazonaws.com/img/aljalil/whatsapp.svg"
                    alt="WhatsApp"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid footer-small-screen">
          <div className="row">
            <div className="col-md-12 footer-bg-width">
              <p className="footer-text">
                COPYRIGHTS. © 2020-2022. Build Earth PVT .LTD. All RIGHTS
                RESERVED.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactHomePage;
