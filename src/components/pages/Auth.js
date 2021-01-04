import React, { useState } from 'react'

const Auth = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newUser, setNewUser] = false;

    return (
        <div>
            Auth
        </div>
    )
}

export default Auth
