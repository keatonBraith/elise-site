import React, { Fragment, useState } from "react";
import './Auth.css';

const Auth = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newUser, setNewUser] = useState(false);

  return (
    <Fragment>
      <div className='main--auth'>
        <h1>Signup</h1>
      </div>
    </Fragment>
  );
};

export default Auth;
