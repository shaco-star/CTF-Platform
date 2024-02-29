import "./Form.css";

function Signup() {
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
          <input
            type="password"
            placeholder="confirm Password"
            className="input-field"
            onBlur={handleBlur}
          />
          <select className="input-field" onBlur={handleBlur}>
            <option value="">Select your Role</option>
            <option value="student">Student</option>
            <option value="professional">Professional</option>
            <option value="hobbyist">Hobbyist</option>
          </select>
          <select className="input-field" onBlur={handleBlur}>
            <option value="">Select your Category of Interest</option>
            <option value="reverse-engineering">Reverse Engineering</option>
            <option value="web-pentest">Web Pentest</option>
            <option value="digital-forensics">Digital Forensics</option>
          </select>
          <button className="signup-button">Sign Up</button>
        </div>
      </section>
    </div>
  );
}

export default Signup;
