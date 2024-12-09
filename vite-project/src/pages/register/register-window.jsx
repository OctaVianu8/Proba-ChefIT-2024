import './register.css';

import { FaEnvelope, FaLock, FaPersonBooth, FaPhone } from 'react-icons/fa';
import '/src/pages/windows.css';
import { useState } from 'react';
// import { set } from 'mongoose';

export default function RegisterWindow() {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        repassword: '',
    });

    const handleChangeName = (e) => {
        setFormData({ ...formData, name: e.target.value });
        // console.log(formData);
    }

    const handleChangePhone = (e) => {
        setFormData({ ...formData, phone: e.target.value });
        // console.log(formData);
    }

    const handleChangeEmail = (e) => {
        setFormData({ ...formData, email: e.target.value });
        // console.log(formData);
    }

    const handleChangePassword = (e) => {
        setFormData({ ...formData, password: e.target.value });
        // console.log(formData);
    }

    const handleChangeRePassword = (e) => {
        setFormData({ ...formData, repassword: e.target.value });
        // console.log(formData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        if (formData.password !== formData.repassword) {
            alert('Passwords do not match!');
        } else {
            fetch('http://localhost:3001/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            }).then(response => response.json())
                .then(data => {
                    console.log(data);
                })
                .catch(error => {
                    // Handle any errors
                });
        }
    }

    return (
        <>
            <div className="login-window center-on-page">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h1>Fa foamea cu noi!</h1>

                    <div className="input-icon white">
                        <FaPersonBooth className="icon" />
                        <input type="text" placeholder="Full Name" onChange={handleChangeName} />
                    </div>
                    <div className="input-icon">
                        <FaPhone className="icon" />
                        <input type="phone" placeholder="Telephone" onChange={handleChangePhone} />
                    </div>
                    <div className="input-icon white">
                        <FaEnvelope className="icon" />
                        <input type="email" placeholder="E-mail" onChange={handleChangeEmail} />
                    </div>
                    <div className="input-icon">
                        <FaLock className="icon" />
                        <input type="password" placeholder="Password" onChange={handleChangePassword} />
                    </div>
                    <div className="input-icon">
                        <FaLock className="icon" />
                        <input type="password" placeholder="Confirm Password" onChange={handleChangeRePassword} />
                    </div>
                    <input type="submit" value="Register" />
                    <div className="forgot-password">
                        <a href="/forgot-password">Forgot Password?</a>
                    </div>
                </form>
            </div>
        </>
    );
};

