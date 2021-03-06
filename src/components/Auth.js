// import axios from "axios";
import React, { Fragment, useState } from "react";
import "./Auth.css";

const Auth = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [newUser, setNewUser] = useState(false);
  const [text, setText] = useState("");

  // const register = () => {
  //   const [firstName, lastName, email, password] = useState();
  //   axios
  //     .post("/register", { firstName, lastName, email, password })
  //     .then((res) => {
  //       props.loginUser(res.data);
  //       history.push("/home");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       alert("error, user already exists");
  //     });
  // };

  // const login = () => {
  //   const [email, password] = useState();
  //   axios
  //     .post("/login", { email, password })
  //     .then((res) => {
  //       history.push("/home");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       alert("Incorrect username or password");
  //     });
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter something");
    } else {
      setText("");
    }
  };

  const toggle = () => setNewUser(!newUser);

  const onChange = (e) => setText(e.target.value);

  return (
    <Fragment>
      {!newUser ? (
        <form className="auth__page">
          <div className="auth__page__content col-md-6">
            <div className="auth__page__content__child">
              <h2>Welcome to the Healing Hub</h2>
              <div className="divider"></div>
              <p>Sign in to get started</p>
            </div>
          </div>
          <div className="auth__page__login text-center col-md-6">
            <h1>Login</h1>
            <i class="far fa-envelope"></i>
            <input
              className="text-center"
              onSubmit={onSubmit}
              name="email"
              type="text"
              value={email}
              placeholder="Email"
              onChange={onChange}
            ></input>
            <input
              className="text-center"
              onSubmit={onSubmit}
              name="password"
              type="password"
              value={password}
              placeholder="Password"
              onChange={onChange}
            ></input>
            <div className="auth--buttons">
              <button className="btn btn-primary">Login</button>
              <button className="btn btn-primary" onClick={toggle}>
                Register
              </button>
            </div>
          </div>
        </form>
      ) : (
        <div className="auth__page">
          <div className="auth__page__content col-md-6">
            <div className="auth__page__content__child">
              <h2>Welcome to the Healing Hub</h2>
              <div className="divider"></div>
              <p>Sign in to get started</p>
            </div>
          </div>
          <div className="auth__page__login text-center col-md-6">
            <h1>Register</h1>
            <i class="far fa-envelope"></i>
            <input
              className="text-center"
              onSubmit={onSubmit}
              name="firstName"
              type="text"
              value={firstName}
              placeholder="First Name"
              onChange={onChange}
            ></input>
            <input
              className="text-center"
              onSubmit={onSubmit}
              name="email"
              type="text"
              value={lastName}
              placeholder="Last Name"
              onChange={onChange}
            ></input>
            <input
              className="text-center"
              onSubmit={onSubmit}
              name="email"
              type="text"
              value={email}
              placeholder="Email"
              onChange={onChange}
            ></input>
            <input
              className="text-center"
              onSubmit={onSubmit}
              name="password"
              type="password"
              value={password}
              placeholder="Password"
              onChange={onChange}
            ></input>
            <div className="auth--buttons">
              <button className="btn btn-primary" onClick={toggle}>
                Already a user?
              </button>
              <button className="btn btn-primary">Register</button>
            </div>
          </div>
        </div>
      )}

      <div id="auth-footer">
        <a className="footer__link" href="*">
          HELP
        </a>
        <a className="footer__link" href="*">
          TERMS
        </a>
        <a className="footer__link" href="*">
          PRIVACY
        </a>
        <a className="footer__link" href="*">
          HEALING HUB
        </a>
        <a className="footer__link" href="*">
          CONTACT
        </a>
        <a className="footer__link" href="*">
          ABOUT
        </a>
        <a className="footer__link" href="*">
          PRICING
        </a>
      </div>
    </Fragment>
  );
};

export default Auth;
