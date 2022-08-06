import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "../../../context/theme-context";
import { useToast } from "../../../context/toast-context";
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
  const [passwordInputType, setPasswordInputType] = useState("password");
  const [confirmPasswordInputType, setConfirmPasswordInputType] =
    useState("password");

  const { setToastData } = useToast();

  const navigate = useNavigate();
  const { theme } = useTheme();

  function handleSignup() {
    const userData = {
      email: userSignupData.email,
      password: userSignupData.password,
    };

    (async () => {
      try {
        if (
          userSignupData.firstName &&
          userSignupData.lastName &&
          userSignupData.email &&
          userSignupData.password &&
          userSignupData.confirmPassword &&
          userSignupData.password == userSignupData.confirmPassword
        ) {
          const response = await axios.post("/api/auth/signup", userData);
          localStorage.setItem("token", response.data.encodedToken);
          localStorage.setItem(
            "username",
            `${userSignupData.firstName} ${userSignupData.lastName}`
          );
          localStorage.setItem("email", userSignupData.email);

          if (userSignupData.email == "abhishekSahani@gmail.com") {
            localStorage.setItem("isGuest", "abhi");
          } else {
            localStorage.setItem("isGuest", "unknown");
          }

          setToastData({
            show: true,
            type: "success",
            message: "Lets start shopping",
          });
          navigate("/");
        } else {
          setToastData({
            show: true,
            type: "error",
            message: "Fill required filed",
          });
        }
      } catch (error) {
        console.log(error);
        setToastData({
          show: true,
          type: "error",
          message: "Oops failed to signup you",
        });
      }
    })();
  }

  function signupWithDummyData() {
    setUserSignupData({
      firstName: "Arun",
      lastName: "Sharma",
      email: "arunsharma@234",
      password: "arunsharma9807",
      confirmPassword: "arunsharma9807",
    });
  }

  return (
    <>
      <Navbar />

      <section className="login_form_container d-flex">
        <div className="card-basic login_form app">
          <h2 className="t-align-center mt-2 mb-2">Signup</h2>

          <div className="inp-container mb-1">
            <label className="inp-label d-block inp-label-required login_inp_label_resize inherit-clr">
              First name
            </label>
            <input
              className={`inp login_inp_resize ecommerce-login-inp ${
                theme == "dark" && "dark-theme-clr-combo "
              }`}
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
            <label className="inp-label d-block inp-label-required login_inp_label_resize inherit-clr">
              Last name
            </label>
            <input
              className={`inp login_inp_resize ecommerce-login-inp ${
                theme == "dark" && "dark-theme-clr-combo "
              }`}
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
            <label className="inp-label d-block inp-label-required login_inp_label_resize inherit-clr">
              Email address
            </label>
            <input
              className={`inp login_inp_resize ecommerce-login-inp ${
                theme == "dark" && "dark-theme-clr-combo"
              }`}
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

          <div className="inp-container mb-1 p-relative">
            <label className="inp-label d-block inp-label-required login_inp_label_resize inherit-clr">
              Password
            </label>
            <input
              type={passwordInputType}
              className={`inp login_inp_resize ecommerce-login-inp ${
                theme == "dark" && "dark-theme-clr-combo"
              }`}
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

            {passwordInputType == "password" ? (
              <i
                className="fa-solid fa-eye login-inp-icon"
                onClick={() => setPasswordInputType("text")}
              ></i>
            ) : (
              <i
                className="fa-solid fa-eye-slash login-inp-icon"
                onClick={() => setPasswordInputType("password")}
              ></i>
            )}

            <div className="err-msg-container d-none">
              <span>
                <i className="fa fa-exclamation-circle err-icon"></i>Enter your
                password!
              </span>
            </div>
          </div>

          <div className="inp-container mb-1">
            <label className="inp-label d-block inp-label-required login_inp_label_resize inherit-clr">
              Confirm Password
            </label>
            <input
              type={confirmPasswordInputType}
              className={`inp login_inp_resize ecommerce-login-inp ${
                theme == "dark" && "dark-theme-clr-combo"
              }`}
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
            {confirmPasswordInputType == "password" ? (
              <i
                className="fa-solid fa-eye login-inp-icon"
                onClick={() => setConfirmPasswordInputType("text")}
              ></i>
            ) : (
              <i
                className="fa-solid fa-eye-slash login-inp-icon"
                onClick={() => setConfirmPasswordInputType("password")}
              ></i>
            )}
          </div>

          <div className="inp-container mb-1">
            <div className="d-flex login_checkbox_inp_container">
              <input type="checkbox" id="checkbox-termsPolicy" />
              <label className="inp-label login-checkbox-label-size inherit-clr">
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
              className={`btn cta-btn guest-btn ${
                theme == "dark" ? "cart_card_outline_btn" : "pri-outline-btn"
              }`}
              type="button"
              onClick={() => signupWithDummyData()}
            >
              Fill dummy data
            </button>

            <button
              className="btn cta-btn guest-btn pri-clr-border"
              type="button"
              onClick={() => handleSignup()}
            >
              Signup
            </button>
          </div>

          <div className="inp-container t-align-center mb-2">
            <NavLink to="/login" className="t-decoration-none">
              <small className="create_acc_link">Already have an account</small>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
