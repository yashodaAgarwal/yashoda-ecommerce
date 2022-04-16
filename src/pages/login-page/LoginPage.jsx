import Navigation from "../../components/navigation/Navigation";
import "./login-page.css";

export default function LoginPage() {
  return (
    <div>
      <Navigation />
      <div class="center">
        <div class="login-container">
          <div class="login-heading">Login</div>
          <form action="#">
            <div class="data">
              <label class="input-login label-class" for="">
                Email Address
              </label>
              <input type="text" required />
            </div>
            <div class="data">
              <label class="input-login label-class" for="">
                Password
              </label>
              <input type="password" placeholder="***" required />
            </div>
            <div class="remember-me flex">
              <div class="checkmark">
                <input type="checkbox" />
                <span class="span-style">Remember me</span>
              </div>
              <button href="" class="forget">
                Forget Password
              </button>
            </div>
            <div>
              <button class="btn login-btn">Login</button>
            </div>
            <div class="create-new-account">
              <button>
                Create new account{" "}
                <i class="fas fa-angle-right create-icon"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
