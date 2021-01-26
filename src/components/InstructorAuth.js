import React, { useState } from 'react';
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
                props.setTeacher(res.data);
            })
            .catch((err) => {
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

    return (
        <div>
            <div>Login or Create an Instructor Profile</div>
        </div>
    )
}

export default InstructorAuth;