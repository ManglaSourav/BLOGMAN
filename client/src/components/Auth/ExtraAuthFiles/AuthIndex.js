import React, { useState, useEffect } from "./node_modules/react";
import "./authIndex.css";
import { withRouter } from "./node_modules/react-router-dom";

function AuthIndex(props) {
  const [rightPanel, setPanel] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    pass1: "",
    pass2: ""
  });
  // const [name,setName] = useState("")
  const [name, setName] = useState({ namee: "kjdbfek" });
  //   const [email, setEmail] = useState("");
  //   const [pass, setPass] = useState("");
  //   const [pass2, setPass2] = useState("");
  const [eUser, setEUser] = useState({ email: "jksbw", pass: "" });

  useEffect(() => {
    // setEUser({
    //   ...eUser,
    //   email: "sourav"
    //   // pass: "kjndkw"
    // });
    setName({ ...name, namee: "Sourav" });
    console.log(name);
  }, [name]);
  return (
    <div>
      <div id='auth-root'>
        <div
          className={"container " + (rightPanel ? "right-panel-active" : "")}
          id='container'>
          <div className='form-container sign-up-container'>
            <form action='#'>
              <h1>Create Account</h1>
              <div className='social-container'>
                <a href=' ' className='social'>
                  <i className='fab fa-facebook-f' />
                </a>
                <a href=' ' className='social'>
                  <i className='fab fa-google-plus-g' />
                </a>
                <a href=' ' className='social'>
                  <i className='fab fa-linkedin-in' />
                </a>
              </div>
              <span>or use your email for registration</span>
              <input type='text' placeholder='Name*' />
              <input type='email' placeholder='Email*' />
              <input type='password' placeholder='Password*' />
              <input type='password' placeholder='Confirm Password*' />
              <button>Sign Up</button>
            </form>
          </div>
          <div className='form-container sign-in-container'>
            <form action='#'>
              <h1>Sign in</h1>
              <div className='social-container'>
                <a href=' ' className='social'>
                  <i className='fab fa-facebook-f' />
                </a>
                <a href=' ' className='social'>
                  <i className='fab fa-google-plus-g' />
                </a>
                <a href=' ' className='social'>
                  <i className='fab fa-linkedin-in' />
                </a>
              </div>
              <span>or use your account</span>
              <input type='email' placeholder='Email' />
              <input type='password' placeholder='Password' />
              <a href=' '>Forgot your password?</a>
              <button>Sign In</button>
            </form>
          </div>
          <div className='overlay-container'>
            <div className='overlay'>
              <div className='overlay-panel overlay-left'>
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button
                  className='ghost'
                  id='signIn'
                  onClick={() => setPanel(false)}>
                  Sign In
                </button>
              </div>
              <div className='overlay-panel overlay-right'>
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button
                  className='ghost'
                  id='signUp'
                  onClick={() => setPanel(true)}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(AuthIndex);
