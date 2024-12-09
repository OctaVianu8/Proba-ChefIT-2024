import './login.css';

import { FaEnvelope, FaLock } from 'react-icons/fa';
import '/src/pages/windows.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


export default function LoginWindow() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChangeEmail = (e) => {
        setFormData({ ...formData, email: e.target.value });
        // console.log(formData);
    }

    const handleChangePassword = (e) => {
        setFormData({ ...formData, password: e.target.value });
        // console.log(formData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then(response => response.json())
            .then(data => {
                console.log(data);
                localStorage.setItem('token', data.token);
            })
            .catch(error => {
                // Handle any errors
            });
    };

    return (
        <>
            <div className="login-window center-on-page">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h1>Loghează-te, chiorăie mațele!</h1>

                    <div className="input-icon white">
                        <FaEnvelope className="icon" />
                        <input type="email" placeholder="E-mail" onChange={handleChangeEmail} />
                    </div>
                    <div className="input-icon">
                        <FaLock className="icon" />
                        <input type="password" placeholder="Password" onChange={handleChangePassword} />
                    </div>

                        <button type='submit'>Login</button>
                    <div className="forgot-password">
                        <a href="/forgot-password">Forgot Password?</a>
                    </div>
                </form>
            </div>
        </>
    );
};

