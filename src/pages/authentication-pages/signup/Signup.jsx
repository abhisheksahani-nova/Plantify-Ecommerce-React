function Signup() {
  return (
    <section className="login_form_container d-flex">
      <form
        className="card-basic login_form"
        onsubmit="event.preventDefault()"
      >
        <h2 className="t-align-center mt-2 mb-2">Signup</h2>
        <div className="inp-container mb-1">
          <label
            className="inp-label d-block inp-label-required login_inp_label_resize"
            for=""
          >
            Email address
          </label>
          <input
            className="inp login_inp_resize"
            id="inp-email"
            placeholder="Enter your email address"
          />

          <div className="err-msg-container d-none">
            <span>
              <i className="fa fa-exclamation-circle err-icon"></i>Enter your email
              address!
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
            placeholder="Enter password"
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
            <label className="inp-label inp-label-required font-small">
              I accept all Terms & Conditions
            </label>
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
            Signup
          </button>
        </div>

        <div className="inp-container t-align-center mb-2">
          <small>
            <a className="create_acc_link" href="./login.html">
              Already have an account
            </a>
          </small>
        </div>
      </form>
    </section>
  );
}

export default Signup;