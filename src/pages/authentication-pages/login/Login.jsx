import "./login.css";

function Login() {
  return (
    <section className="login_form_container d-flex">
      <form
        className="card-basic login_form"
        onsubmit="event.preventDefault(); checkFormValidation()"
      >
        <h2 className="t-align-center mt-2 mb-2">Login</h2>
        <div className="inp-container mb-1">
          <label
            className="inp-label d-block inp-label-required login_inp_label_resize"
            for=""
          >
            Username
          </label>
          <input
            className="inp login_inp_resize"
            id="inp-email"
            placeholder="Enter your username"
          />

          <div className="err-msg-container d-none">
            <span>
              <i className="fa fa-exclamation-circle err-icon"></i>Enter your
              username!
            </span>
          </div>
        </div>

        <div className="inp-container mb-1">
          <label
            className="inp-label d-block inp-label-required login_inp_label_resize"
            for=""
          >
            Password
          </label>
          <input
            className="inp login_inp_resize"
            id="inp-password"
            placeholder="Enter your password"
          />

          <div className="err-msg-container d-none">
            <span>
              <i className="fa fa-exclamation-circle err-icon"></i>Enter your
              password!
            </span>
          </div>
        </div>

        <div className="inp-container mb-1">
          <div className="d-flex login_checkbox_inp_container">
            <input type="checkbox" id="checkbox-termsPolicy" />
            <label className="inp-label font-small">Remember Me</label>
          </div>

          <div className="err-msg-container d-none">
            <span>
              <i className="fa fa-exclamation-circle err-icon"></i>Accept our terms
              & policy before going forward!
            </span>
          </div>
        </div>

        <div className="inp-container ml-1 mb-1">
          <button className="btn cta-btn login_custom_btn" type="submit">
            Login
          </button>
        </div>

        <div className="inp-container t-align-center mb-2">
          <small>
            <a className="create_acc_link" href="./signup.html">
              Create New Account
            </a>
          </small>
        </div>
      </form>
    </section>
  );
}

export default Login;