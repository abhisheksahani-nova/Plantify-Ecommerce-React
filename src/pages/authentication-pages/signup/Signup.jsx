import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "../../../components/index";
import axios from "axios";

function Signup() {
  const [userSignupData, setUserSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleSignup() {
    const userData = {
      email: userSignupData.email,
      password: userSignupData.password,
    };

    (async () => {
      try {
        const response = await axios.post("/api/auth/signup", userData);
        localStorage.setItem(
          "token",
          JSON.stringify(response.data.encodedToken)
        );
      } catch (error) {
        console.log(error);
      }
    })();
  }

  return (
    <>
      <Navbar />
      <section className="login_form_container d-flex">
        <div className="card-basic login_form">
          <h2 className="t-align-center mt-2 mb-2">Signup</h2>

          <div className="inp-container mb-1">
            <label className="inp-label d-block inp-label-required login_inp_label_resize">
              First name
            </label>
            <input
              className="inp login_inp_resize"
              id="inp-email"
              placeholder="Enter your first name"
              value={userSignupData.firstName}
              onChange={(e) =>
                setUserSignupData({
                  ...userSignupData,
                  firstName: e.target.value,
                })
              }
            />
          </div>

          <div className="inp-container mb-1">
            <label className="inp-label d-block inp-label-required login_inp_label_resize">
              Last name
            </label>
            <input
              className="inp login_inp_resize"
              id="inp-email"
              placeholder="Enter your last name"
              value={userSignupData.lastName}
              onChange={(e) =>
                setUserSignupData({
                  ...userSignupData,
                  lastName: e.target.value,
                })
              }
            />
          </div>

          <div className="inp-container mb-1">
            <label className="inp-label d-block inp-label-required login_inp_label_resize">
              Email address
            </label>
            <input
              className="inp login_inp_resize"
              id="inp-email"
              placeholder="Enter your email address"
              value={userSignupData.email}
              onChange={(e) =>
                setUserSignupData({ ...userSignupData, email: e.target.value })
              }
            />

            <div className="err-msg-container d-none">
              <span>
                <i className="fa fa-exclamation-circle err-icon"></i>Enter your
                email address!
              </span>
            </div>
          </div>

          <div className="inp-container mb-1">
            <label className="inp-label d-block inp-label-required login_inp_label_resize">
              Password
            </label>
            <input
              className="inp login_inp_resize"
              id="inp-password"
              placeholder="Enter password"
              value={userSignupData.password}
              onChange={(e) =>
                setUserSignupData({
                  ...userSignupData,
                  password: e.target.value,
                })
              }
            />

            <div className="err-msg-container d-none">
              <span>
                <i className="fa fa-exclamation-circle err-icon"></i>Enter your
                password!
              </span>
            </div>
          </div>

          <div className="inp-container mb-1">
            <label className="inp-label d-block inp-label-required login_inp_label_resize">
              Confirm Password
            </label>
            <input
              className="inp login_inp_resize"
              id="inp-email"
              placeholder="Enter your password again"
              value={userSignupData.confirmPassword}
              onChange={(e) =>
                setUserSignupData({
                  ...userSignupData,
                  confirmPassword: e.target.value,
                })
              }
            />
          </div>

          <div className="inp-container mb-1">
            <div className="d-flex login_checkbox_inp_container">
              <input type="checkbox" id="checkbox-termsPolicy" />
              <label className="inp-label inp-label-required font-small">
                I accept all Terms & Conditions
              </label>
            </div>

            <div className="err-msg-container d-none">
              <span>
                <i className="fa fa-exclamation-circle err-icon"></i>Accept our
                terms & policy before going forward!
              </span>
            </div>
          </div>

          <div className="inp-container ml-1 mb-1">
            <button
              className="btn cta-btn login_custom_btn"
              type="button"
              onClick={() => handleSignup()}
            >
              Signup
            </button>
          </div>

          <div className="inp-container t-align-center mb-2">
            <NavLink to="/cart">
              <small className="create_acc_link">Already have an account</small>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
