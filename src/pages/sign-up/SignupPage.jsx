import { useState } from "react";
import { signupHandler } from "../../backend/controllers/AuthController";
import { Navigation } from "../../components";
import { NavLink } from "react-router-dom";
import "../login-page/login-page.css";

const Signup = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const { email, password, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signupHandler({ email, password })
      .then((data) => {
        if (data.error) {
          console.log(data.error)
          setValues({ ...values, error: data.error, success: false });
        } else {
          console.log(email)
          setValues({
            ...values,
            email: "",  
            password: "", 
            error: "",
            success: true,
          });
        }
      })
      .catch(console.log("Error in signup"));
  };
  const signupForm = () => {
    return (
      <div>
        <Navigation />
        <div className="center">
          <div className="login-container">
            <div className="login-heading">Sign Up</div>
            <form action="#">
              <div className="data">
                <label className="label-class" for="">
                  Email Address
                </label>
                <input
                  onChange={handleChange("email")}
                  type="email"
                  value={email}
                  required 
                />
              </div>
              <div className="data">
                <label className="label-class" for="">
                  Password
                </label>
                <input
                  onChange={handleChange("password")}
                  type="password"
                  value={password}
                  placeholder="***********"
                  required 
                />
              </div>

              <div>
                <input type="checkbox" />
                <span>I accept all terms and conditions</span>
              </div>
              <div>
                <button onClick={onSubmit} className="btn login-btn" type="submit">
                  Create New Account
                </button>
              </div>
              <div className="create-new-account">
                <a href="">
                  Already have an account{" "}
                  <i className="fas fa-angle-right create-icon"></i>
                </a>
              </div>
            </form>
          </div>
        </div>
        ;
      </div>
    );
  };
  const successMessage = () => {
    return (
      <div>
        <div className="alert-items alert-success"
        style={{ display: success ? "" : "none" }}
        >
          <i className="fas fa-check-circle alert-icon"></i>
          New account was created successfully. Please
            {/* <NavLink to="/signin">Login Here</NavLink> */}
        </div>
      </div>
    );
  };
  return <div>
    {successMessage()}
    {signupForm()}
    </div>;

};
export default Signup;
