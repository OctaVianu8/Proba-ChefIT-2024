import React from 'react';
import '/src/pages/homepage.css';
import '/src/pages/contact-us.css';
import '/src/pages/footer.css';

import Footer from '/src/pages/footer.jsx';
import NavBar from '/src/pages/navbar.jsx';
import ContactUs from '/src/pages/contact-us.jsx';
import {topRatedRecipesPlaceholder} from '/src/pages/top-rated-recipes.jsx'
import TopRatedRecipes from '/src/pages/top-rated-recipes.jsx';

import LoginWindow from '/src/pages/login/login-window.jsx';

const LoginPage = () => {
    return (
        <div className="homepage">
            <NavBar userLoggedIn={false}/>
            <div className="content">
                <div className="stack">
                    <img src="/src/assets/background.png" alt="Background" className="background-image fullscreen" />
                    <LoginWindow/>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;