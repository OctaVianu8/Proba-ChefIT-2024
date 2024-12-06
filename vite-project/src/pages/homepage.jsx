import React from 'react';
import './homepage.css';
import './contact-us.css';
import './footer.css';

import Footer from './footer.jsx';
import NavBar from './navbar.jsx';
import ContactUs from './contact-us.jsx';
import {topRatedRecipesPlaceholder} from './top-rated-recipes.jsx'
import TopRatedRecipes from './top-rated-recipes.jsx';

const Homepage = ({userLoggedIn}) => {
    return (
        <div className="homepage">
            <NavBar userLoggedIn={userLoggedIn}/>
            <div className="content">
                <div className="stack">
                    <img src="/src/assets/background.png" alt="Background" className="background-image" />
                    <img src="/src/assets/logo.png" alt="Logo" className="center-logo" />
                </div>
                <TopRatedRecipes recipes={topRatedRecipesPlaceholder}/>
            </div>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default Homepage;