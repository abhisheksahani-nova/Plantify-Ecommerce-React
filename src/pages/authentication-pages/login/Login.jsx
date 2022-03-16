import "./login.css";

function Login() {
  return (
    <section class="login_form_container d-flex">
      <form
        class="card-basic login_form"
        onsubmit="event.preventDefault(); checkFormValidation()"
      >
        <h2 class="t-align-center mt-2 mb-2">Login</h2>
        <div class="inp-container mb-1">
          <label
            class="inp-label d-block inp-label-required login_inp_label_resize"
            for=""
          >
            Username
          </label>
          <input
            class="inp login_inp_resize"
            id="inp-email"
            placeholder="Enter your username"
          />

          <div class="err-msg-container d-none">
            <span>
              <i class="fa fa-exclamation-circle err-icon"></i>Enter your
              username!
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
            placeholder="Enter your password"
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
            <label class="inp-label font-small">Remember Me</label>
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
            Login
          </button>
        </div>

        <div class="inp-container t-align-center mb-2">
          <small>
            <a class="create_acc_link" href="./signup.html">
              Create New Account
            </a>
          </small>
        </div>
      </form>
    </section>
  );
}

export default Login;