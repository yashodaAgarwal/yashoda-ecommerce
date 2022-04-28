import { useState } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "../../components";
import { useAuth, useFilter } from "../../context";
import "../login-page/login-page.css";

export default function LoginPage() {
  const { handleLoginData } = useAuth();
  const { FilterDispatch } = useFilter();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const test = {
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  };
  const { email, password } = login;
  const [isError, setIsError] = useState("");
  const handleChange = (name) => (event) => {
    setLogin({ ...login, error: false, [name]: event.target.value });
  };

  const loginHandler = (e) => {
    const { email, password } = login;
    e.preventDefault();
    if (email !== "" && password !== "") {
      handleLoginData(email, password);
    } else {
      setIsError("Please fill all the field");
    }
    setIsError("");
  };

  return (
    <div>
      <Navigation />
      <div class="center">
        <div class="login-container">
          <div class="login-heading">Login</div>
          {isError && (
            <div class="alert-items alert-danger ">
              <i class="fas fa-exclamation-triangle alert-icon"></i>
              {isError}
            </div>
          )}
          <form action="#" onSubmit={loginHandler}>
            <div class="data">
              <label class="input-login label-class" for="">
                Email Address
              </label>
              <input
                onChange={handleChange("email")}
                type="email"
                value={email}
                
              />
            </div>
            <div class="data">
              <label class="input-login label-class" for="">
                Password
              </label>
              <input
                onChange={handleChange("password")}
                type="password"
                value={password}
                placeholder="***********"
              />
            </div>
            <div>
              <button
                class="btn login-btn"
                onClick={() => {
                  FilterDispatch({ type: "Clear_Filter" });
                }}
              >
                Login
              </button>
            </div>
            <button
              class="btn login-btn"
              onClick={() => {
                FilterDispatch({ type: "Clear_Filter" });
                handleLoginData(test.email, test.password);
              }}
            >
              Login with test credential
            </button>
            <div class="create-new-account">
              <Link to="/signup">
                Create new account{" "}
                <i class="fas fa-angle-right create-icon"></i>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
