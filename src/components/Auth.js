import axios from "axios";
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

  const toggle = () => setNewUser(!newUser)

  const onChange = (e) => setText(e.target.value);

  return (
    <Fragment>
      {!newUser ? (
        <div>
          <h1 className="login">Login</h1>
          <input
            onSubmit={onSubmit}
            name="email"
            type="text"
            value={email}
            placeholder="Email"
            onChange={onChange}
          ></input>
          <input
            onSubmit={onSubmit}
            name="password"
            type="password"
            value={password}
            placeholder="Password"
            onChange={onChange}
          ></input>
          <div className="buttons">
            <button>Login</button>
            <button onClick={toggle}>Register</button>
          </div>
        </div>
      ) : (
        <div>
          <h1>Register</h1>
          <input
            onSubmit={onSubmit}
            name="firstName"
            type="text"
            value={firstName}
            placeholder="First Name"
            onChange={(e) => this.changeHandler(e)}
          ></input>
          <input
            onSubmit={onSubmit}
            name="lastName"
            type="text"
            value={lastName}
            placeholder="Last Name"
            onChange={onChange}
          ></input>
          <input
            onSubmit={onSubmit}
            name="email"
            type="email"
            value={email}
            placeholder="Email"
            onChange={onChange}
          ></input>
          <input
            onSubmit={onSubmit}
            name="password"
            type="password"
            value={password}
            placeholder="Password"
            onChange={onChange}
          ></input>
          <div id="buttons">
            <button onClick={toggle}>Already A User</button>
            <button >Register</button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Auth;

