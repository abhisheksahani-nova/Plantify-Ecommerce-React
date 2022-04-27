import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "../../../context/theme-context";
import { useToast } from "../../../context/toast-context";
import axios from "axios";
import "./login.css";

function Login() {
  const [userLoginData, setUserLoginData] = useState({
    email: "",
    password: "",
  });
  const [passwordInputType, setPasswordInputType] = useState("password");
  const { setToastData } = useToast();

  const navigate = useNavigate();
  const { theme } = useTheme();

  function handleUserLogin() {
    (async () => {
      try {
        const response = await axios.post("/api/auth/login", userLoginData);
        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem("email", userLoginData.email);
        setToastData({
          show: true,
          type: "success",
          message: "Successful login start shopping",
        });
        navigate("/");
      } catch (error) {
        console.log(error);
        setToastData({
          show: true,
          type: "error",
          message: "Oops failed to login you",
        });
      }
    })();
  }

  return (
    <section className="login_form_container d-flex">
      <div className="card-basic login_form app">
        <h2 className="t-align-center mt-2 mb-2">Login</h2>
        <div className="inp-container mb-1">
          <label className="inp-label d-block inp-label-required login_inp_label_resize inherit-clr">
            Email
          </label>
          <input
            className={`inp login_inp_resize ecommerce-login-inp ${
              theme == "dark" && "cart_card_outline_btn"
            }`}
            id="inp-email"
            placeholder="Enter your email"
            value={userLoginData.email}
            onChange={(e) =>
              setUserLoginData({ ...userLoginData, email: e.target.value })
            }
          />

          <div className="err-msg-container d-none">
            <span>
              <i className="fa fa-exclamation-circle err-icon"></i>Enter your
              email!
            </span>
          </div>
        </div>

        <div className="inp-container mb-1">
          <label className="inp-label d-block inp-label-required login_inp_label_resize inherit-clr">
            Password
          </label>
          <input
            type={passwordInputType}
            className={`inp login_inp_resize ecommerce-login-inp ${
              theme == "dark" && "cart_card_outline_btn"
            }`}
            id="inp-password"
            placeholder="Enter your password"
            value={userLoginData.password}
            onChange={(e) =>
              setUserLoginData({ ...userLoginData, password: e.target.value })
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
          <div className="d-flex login_checkbox_inp_container">
            <input
              type="checkbox"
              id="checkbox-termsPolicy"
              className={`${theme == "dark" && "cart_card_outline_btn"}`}
            />
            <label className="inp-label login-checkbox-label-size inherit-clr">
              Remember Me
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
            onClick={() => handleUserLogin()}
          >
            Login
          </button>
        </div>

        <div className="inp-container t-align-center mb-2">
          <NavLink className="t-decoration-none" to="/signup">
            <small className="create_acc_link">Create New Account</small>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Login;
