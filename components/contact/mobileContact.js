import React from 'react';
import { useForm } from 'react-hook-form';
import axios from "axios";
import { useRouter } from "next/router";


const MobileContact = () => {
    const { register, handleSubmit, formState: {errors}, reset } = useForm();
    const router = useRouter();

     async function onSubmitForm(values) {
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
         if (response.status == 200) {
           reset();
           router.push("/contact");
         }
       } catch (err) {
         console.error(err);
       }
     }
    return (
      <React.Fragment>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <div className="row contact-submit-form">
            <div className="col-md-6">
              <input
                type="text"
                name="fullName"
                className="form-control contact-form-input"
                placeholder="Full Name*"
                {...register("fullName", {
                  required: true,
                  maxLength: 30,
                })}
              />
              {errors?.fullName?.type === "required" && (
                <p className="error-message">This field is Required</p>
              )}
              {errors?.fullName?.type === "maxLength" && (
                <p className="error-message">
                  Name Cannot Exceed 30 Characters
                </p>
              )}
            </div>
            <div className="col-md-6">
              <input
                type="number"
                name="number"
                min="0"
                className="form-control contact-form-input"
                placeholder="Phone Number*"
                {...register("number", {
                  required: true,
                  minLength: 6,
                  maxLength: 17,
                })}
              />
              {errors?.number?.type === "required" && (
                <p className="error-message">This field is Required</p>
              )}
              {errors?.number?.type === "minLength" && (
                <p className="error-message">Phone Number minLength 6 number</p>
              )}
              {errors?.number?.type === "maxLength" && (
                <p className="error-message">
                  Phone Number maxLength 17 number
                </p>
              )}
            </div>
          </div>

          <div className="row contact-submit-form2">
            <div className="col-md-12">
              <input
                type="email"
                name="email"
                className="form-control contact-form-input"
                placeholder="Email Address*"
                {...register("email", {
                  required: "This Field is Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid Email Address",
                  },
                })}
              />
              {errors.email ? (
                <p className="error-message">
                  {errors.email && errors.email.message}
                </p>
              ) : null}
            </div>
          </div>

          <div className="row contact-submit-form2">
            <div className="col-md-12">
              <input
                type="text"
                name="subject"
                className="form-control contact-form-input"
                placeholder="Subject*"
                {...register("subject", {
                  required: true,
                  minLength: 10,
                  maxLength: 50,
                })}
              />
              {errors?.subject?.type === "required" && (
                <p className="error-message">This field is Required</p>
              )}
              {errors?.subject?.type === "minLength" && (
                <p className="error-message">Subject minLength 10 Characters</p>
              )}
              {errors?.subject?.type === "maxLength" && (
                <p className="error-message">Subject maxLength 50 Characters</p>
              )}
            </div>
          </div>

          <div className="row contact-submit-form2">
            <div className="col-md-12">
              <textarea
                className="form-control contact-form-input"
                id="exampleFormControlTextarea1"
                placeholder="Message*"
                name="message"
                {...register("message", {
                  required: true,
                  minLength: 50,
                  maxLength: 1000,
                })}
                rows="3"
              ></textarea>
              {errors?.message?.type === "required" && (
                <p className="error-message">This field is Required</p>
              )}
              {errors?.message?.type === "minLength" && (
                <p className="error-message">Message minLength 50 Characters</p>
              )}
              {errors?.message?.type === "maxLength" && (
                <p className="error-message">
                  Message maxLength 1000 Characters
                </p>
              )}
            </div>
          </div>

          <div className="row contact-submit-form2">
            <div className="col-md-12">
              <button type="submit" className="form-submit">
                SEND
              </button>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
}

export default MobileContact;