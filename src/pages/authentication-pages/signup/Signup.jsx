function Signup() {
  return (
    <section class="login_form_container d-flex">
      <form
        class="card-basic login_form"
        onsubmit="event.preventDefault(); checkFormValidation()"
      >
        <h2 class="t-align-center mt-2 mb-2">Signup</h2>
        <div class="inp-container mb-1">
          <label
            class="inp-label d-block inp-label-required login_inp_label_resize"
            for=""
          >
            Email address
          </label>
          <input
            class="inp login_inp_resize"
            id="inp-email"
            placeholder="Enter your email address"
          />

          <div class="err-msg-container d-none">
            <span>
              <i class="fa fa-exclamation-circle err-icon"></i>Enter your email
              address!
            </span>
          </div>
        </div>

        <div class="inp-container mb-1">
          <label
            class="inp-label d-block inp-label-required login_inp_label_resize"
            for=""
          >
            Password
          </label>
          <input
            class="inp login_inp_resize"
            id="inp-password"
            placeholder="Enter password"
          />

          <div class="err-msg-container d-none">
            <span>
              <i class="fa fa-exclamation-circle err-icon"></i>Enter your
              password!
            </span>
          </div>
        </div>

        <div class="inp-container mb-1">
          <div class="d-flex login_checkbox_inp_container">
            <input type="checkbox" id="checkbox-termsPolicy" />
            <label class="inp-label inp-label-required font-small">
              I accept all Terms & Conditions
            </label>
          </div>

          <div class="err-msg-container d-none">
            <span>
              <i class="fa fa-exclamation-circle err-icon"></i>Accept our terms
              & policy before going forward!
            </span>
          </div>
        </div>

        <div class="inp-container ml-1 mb-1">
          <button class="btn cta-btn login_custom_btn" type="submit">
            Signup
          </button>
        </div>

        <div class="inp-container t-align-center mb-2">
          <small>
            <a class="create_acc_link" href="./login.html">
              Already have an account
            </a>
          </small>
        </div>
      </form>
    </section>
  );
}

export default Signup;