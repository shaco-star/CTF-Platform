import "./Form.css";

function Login() {
  const handleBlur = (event) => {
    event.target.classList.add("red-text");
  };
  return (
    <div className="center">
      <section className="form-container">
        <div className="form">
          <input
            type="email"
            placeholder="Enter your Email"
            className="input-field"
            onBlur={handleBlur}
          />
          <input
            type="password"
            placeholder="Enter your Password"
            className="input-field"
            onBlur={handleBlur}
          />
          <a href="/forgot-password" className="forgot-password">
            Forgot password?
          </a>
          <button className="login-button">Login</button>
          <button className="signup-button">Sign Up</button>
        </div>
      </section>
    </div>
  );
}

export default Login;
