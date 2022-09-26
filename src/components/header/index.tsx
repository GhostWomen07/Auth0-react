
import React,{useState} from "react"
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export const Header: React.FC = () => {
  const navigate = useNavigate();

  let [authMode, setAuthMode] = useState("signin"); 

  const {user, loginWithRedirect,isAuthenticated,logout } = useAuth0();
// console.log(loginWithRedirect);


const handleSubmit = (e) => {
  e.preventDefault();
if(isAuthenticated){
    // navigate("/dashboard");
    <h1>success</h1>
}else {
  navigate("/")
}
  }

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              {
              //   isAuthenticated?<><button type="submit" className="btn btn-primary" onClick={() => logout({ returnTo: window.location.origin })}>
              //   Logout
              // </button><h5>{user.name}</h5></>:

              isAuthenticated?`${navigate("/profile")}`:

              <button type="submit" className="btn btn-primary" onClick={() => loginWithRedirect()}>
              Submit
            </button>
              }
              {/* <button type="submit" className="btn btn-primary" onClick={() => loginWithRedirect()}>
                Submit
              </button> */}
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}