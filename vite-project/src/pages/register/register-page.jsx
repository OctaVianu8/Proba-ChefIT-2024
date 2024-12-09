import React from 'react';
import '/src/pages/homepage.css';
import '/src/pages/contact-us.css';
import '/src/pages/footer.css';

import NavBar from '/src/pages/navbar.jsx';

import RegisterWindow from '/src/pages/register/register-window.jsx';

const RegisterPage = () => {
    return (
        <div className="homepage">
            <NavBar userLoggedIn={false}/>
            <div className="content">
                <div className="stack">
                    <img src="/src/assets/background.png" alt="Background" className="background-image fullscreen" />
                    <RegisterWindow/>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;