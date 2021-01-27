import React, { Fragment, useState } from 'react';
import axios from "axios";

const InstructorAuth = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [teacherPic, setTeacherPic] = useState("");
    const [accountName, setAccountName] = useState("");
    const [country, setCountry] = useState("");
    const [addressOne, setAddressOne] = useState("");
    const [addressTwo, setAddressTwo] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [newTeacher, setTeacher] = useState(false);
    const [text, setText] = useState("");

    const handleEmailInput = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordInput = (e) => {
        setPassword(e.target.value);
    };
    const handleFirstNameInput = (e) => {
        setFirstName(e.target.value);
    };
    const handleLastNameInput = (e) => {
        setLastName(e.target.value);
    };
    const handleTeacherPicInput = (e) => {
        setTeacherPic(e.target.value);
    };
    const handleAccountNameInput = (e) => {
        setAccountName(e.target.value);
    };
    const handleCountryInput = (e) => {
        setCountry(e.target.value);
    };
    const handleAddressOneInput = (e) => {
        setAddressOne(e.target.value);
    };
    const handleAddressTwoInput = (e) => {
        setAddressTwo(e.target.value);
    };
    const handleCityInput = (e) => {
        setCity(e.target.value);
    };
    const handleStateInput = (e) => {
        setState(e.target.value);
    };
    const handleZipInput = (e) => {
        setZip(e.target.value);
    };
    const handlePhoneNumberInput = (e) => {
        setPhoneNumber(e.target.value);
    };

    const login = () => {
        axios
            .post("/auth/login", {
                email: email,
                password: password,
            })
            .then((res) => {
                history.push("/instructor")
            })
            .catch((err) => {
                console.log(err);
                alert("Email or password are incorrect");
            });
    };

    const register = () => {
        axios
            .post("/auth/teacher", {
                email: email,
                password: password,
                first_name: firstName,
                last_name: lastName,
                teacher_pic: teacherPic,
                account_display_name: accountName,
                country: country,
                street_address_1: addressOne,
                street_address_2: addressTwo,
                city: city,
                state: state,
                zip: zip,
                phone_number: phoneNumber,
            })
            .then((res) => {
                props.setTeacher(res.data);
            })
            .catch((err) => {
                alert("Email already registered, would you like to login?")
            })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (text === "") {
          alert("Please enter something");
        } else {
          setText("");
        }
      };
    
    const toggle = () => setNewTeacher(!newTeacher);
    
    const onChange = (e) => setText(e.target.value);

    return (
        <Fragment>
            {!newTeacher ? (
                <div className="instructor__auth__page">
                    <div className="instructor__auth__page__content col-md-6">
                        <div className="instructor__auth__page__content__child">
                            <h2>Welcome Content Creator!</h2>
                            <div></div>
                            <p>Sign In to get started</p>
                        </div>
                    </div>
                    <div>
                        <h1>Login</h1>
                        <i></i>
                        <input
                            className="text-center"
                            onSubmit={onSubmit}
                            name="email"
                            type="text"
                            value={email}
                            placeholder="Email"
                            onChange={handleEmailInput}
                            ></input>
                        <input
                            className="text-center"
                            onSubmit={onSubmit}
                            name="password"
                            type="password"
                            value={password}
                            placeholder="Password"
                            onChange={handlePasswordInput}
                            ></input>
                            <div className="auth--buttons">
                                <button className="btn btn-primary" onClick={login}>Login</button>
                                <button className="btn btn-primary" onClick={toggle}>Register</button>
                            </div>
                    </div>
                </div>
            ) : (
                <div className="instructor__auth__page">
                    <div className="instructor__auth__page__content col-md-6">
                        <div className="instructor__auth__page__content__child">
                            <h2>Welcome to the Healing Hub Content Creator Registration</h2>
                            <div className="divider"></div>
                            <p>Create Your Account Below</p>
                        </div>
                    </div>
                    <div className="instructor__auth__page__login text-center col-md-6">
                        <h1>Register</h1>
                        <i className="far fa-envelope"></i>
                        <input
                            className="text-center"
                            onSubmit={onSubmit}
                            name="firstName"
                            type="text"
                            value={firstName}
                            placeholder="First Name"
                            onChange={handleFirstNameInput}
                            ></input>
                        <input
                            className="text-center"
                            onSubmit={onSubmit}
                            name="lastName"
                            type="text"
                            value={lastName}
                            placeholder="Last Name"
                            onChange={handleLastNameInput}
                            ></input>
                        <input
                            className="text-center"
                            onSubmit={onSubmit}
                            name="email"
                            type="text"
                            value={email}
                            placeholder="Email"
                            onChange={handleEmailInput}
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
                        <input
                            className="text-center"
                            onSubmit={onSubmit}
                            name="teacherPic"
                            type="text"
                            value={teacherPic}
                            placeholder="Profile Picture"
                            onChange={handleTeacherPicInput}
                            ></input>
                        <input
                            className="text-center"
                            onSubmit={onSubmit}
                            name="accountName"
                            type="text"
                            value={accountName}
                            placeholder="Account Display Name"
                            onChange={handleAccountNameInput}
                            ></input>
                        <input
                            className="text-center"
                            onSubmit={onSubmit}
                            name="country"
                            type="text"
                            value={country}
                            placeholder="Country"
                            onChange={handleCountryInput}
                            ></input>
                        <input
                            className="text-center"
                            onSubmit={onSubmit}
                            name="addressOne"
                            type="text"
                            value={addressOne}
                            placeholder="Street Address 1"
                            onChange={handleAddressOneInput}
                            ></input>
                        <input
                            className="text-center"
                            onSubmit={onSubmit}
                            name="addressTwo"
                            type="text"
                            value={addressTwo}
                            placeholder="Street Address 2"
                            onChange={handleAddressTwoInput}
                            ></input>
                        <input
                            className="text-center"
                            onSubmit={onSubmit}
                            name="city"
                            type="text"
                            value={city}
                            placeholder="City"
                            onChange={handleCityInput}
                            ></input>
                        <input
                            className="text-center"
                            onSubmit={onSubmit}
                            name="state"
                            type="text"
                            value={state}
                            placeholder="State"
                            onChange={handleStateInput}
                            ></input>
                        <input
                            className="text-center"
                            onSubmit={onSubmit}
                            name="zip"
                            type="text"
                            value={zip}
                            placeholder="Zip-code"
                            onChange={handleZipInput}
                            ></input>
                        <input
                            className="text-center"
                            onSubmit={onSubmit}
                            name="phoneNumber"
                            type="text"
                            value={phoneNumber}
                            placeholder="Phone Number"
                            onChange={handlePhoneNumberInput}
                            ></input>
                            <div className="auth--buttons">
                                <button className="btn btn-primary" onClick={toggle}>Already a creator?</button>
                                <button className="btn btn-primary" onClick={register}>Register</button>
                            </div>
                    </div>
                </div>
            )}
        </Fragment>
    );
};

export default InstructorAuth;