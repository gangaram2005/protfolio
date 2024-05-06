import React, { useState } from "react";
import "./Contact.css";
import ContactUs from "../../img/contactus.jpg";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      console.log(res);
      if (res.status === "success") {
        setError("successfully submitted");
        document.getElementById("contactform").reset();
      }

      if (res.status === 200) {
        setError("Successfully Submitted");
        document.getElementById("contactform").reset();
      }
      if (res.status === 402) {
        setError("Bad Request");
      }
      if (res.status === 400) {
        setError("Not found");
      }

      // if (res.ok) {
      //   console.log("data uploaded to the server");
      // } else {
      //   console.log("Can not upload to the server");
      // }
    } catch (err) {
      // setError("An error occurred during submission.");
      setError(err);
    }
  };
  return (
    <>
      <div className="contact" id="contact">
        <div className="card card0 border-0">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img src={ContactUs} alt="contact" className="image" />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6">
              <div className="card2 d-flex card border-0 px-4 py-5">
                <div className="row">
                  <div className="row">
                    <h6>
                      Contact With
                      <BsLinkedin color="blue" size={30} className="ms-2" />
                      <FaGithub color="black" size={30} className="ms-2" />
                      <BsFacebook color="blue" size={30} className="ms-2" />
                    </h6>
                  </div>

                  <div className="row px-3 mb-4">
                    <div className="line" />
                    <small className="or text-center">OR</small>
                    <div className="line" />
                  </div>

                  <div className="form-part">
                    <form onSubmit={handleSubmit} id="contactform">
                      <div className="row px-3">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Write your Name"
                          className="mb-3"
                        />
                      </div>

                      <div className="row px-3">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Write your Email"
                          className="mb-3"
                        />
                      </div>

                      <div className="row px-3">
                        <textarea
                          type="text"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Write your Message"
                          className="mb-3"
                        />
                      </div>

                      <div className="row px-3">
                        <button className="button" type="submit">
                          Send Message
                        </button>
                      </div>
                      <span className="text-success">{error}</span>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
