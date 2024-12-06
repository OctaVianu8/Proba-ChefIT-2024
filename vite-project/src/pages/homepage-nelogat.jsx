import React from 'react';
import './homepage-nelogat.css';
import './contact-us.css';
import './footer.css';

const HomepageNelogat = () => {
    const topRatedRecipes = [
        {
            name: "Spaghetti Carbonara",
            image: "/src/assets/supa.png",
            ratingsCount: 150,
            author: "Chef Luigi"
        },
        {
            name: "Chicken Alfredo",
            image: "/src/assets/pateu.png",
            ratingsCount: 200,
            author: "Chef Mario"
        },
        {
            name: "Beef Wellington",
            image: "/src/assets/cartofi.png",
            ratingsCount: 120,
            author: "Chef Gordon"
        }
    ];

    return (
        <div className="homepage">
            <nav className="navbar">
                <div className="navbar-left">
                    <img src="/src/assets/logo-white.png" alt="Logo" className="logo" />
                    <button className="nav-button">Recipes</button>
                    <button className="nav-button">Add Recipe</button>
                </div>
                <div className="navbar-right">
                    <button className="nav-button login">Login</button>
                    <button className="nav-button">Register</button>
                </div>
            </nav>
            <div className="content">
                <div className="stack">
                    <img src="/src/assets/background.png" alt="Background" className="background-image" />
                    <img src="/src/assets/logo.png" alt="Logo" className="center-logo" />
                </div>
                <TopRatedRecipes recipes={topRatedRecipes}/>
            </div>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

const TopRatedRecipes = ({ recipes }) => {
    return (
        <div className="top-rated-recipes">
            <h2>Top Rated Recipes</h2>
            <div className="recipes-list">
                {recipes.map((recipe, index) => (
                    <div key={index} className="recipe-item">
                        <img src={recipe.image} alt={recipe.name} className="recipe-image" />
                        <div className="recipe-details">
                            <h3>{recipe.name}</h3>
                            <div className="recipe-rating">
                                <span className="stars">★★★★★</span>
                                <span className="ratings-count">({recipe.ratingsCount} ratings)</span>
                            </div>
                            <p className="recipe-author">By {recipe.author}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const ContactUs = () => {
    return (
        <div className="contact-us">
            <div className='centered-div'>
                <div className="contact-form">
                <h2>Contact Us</h2>
                    <div className="contact-fields">
                        <div className='info-fields'>
                            <input type="text" placeholder="First Name" className="contact-input" />
                            <input type="text" placeholder="Last Name" className="contact-input" />
                            <input type="email" placeholder="Email" className="contact-input" />
                        </div>
                        <textarea placeholder="Message" className="contact-message"></textarea>
                    </div>
                    <button className="submit">Submit</button>
                </div>
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-icons">
                <a href="#" aria-label="Instagram">
                    <img src="/src/assets/instagram-logo.png" alt="Instagram" />
                </a>
                <a href="#" aria-label="Facebook">
                    <img src="/src/assets/facebook-logo.png" alt="Facebook" />
                </a>
                <a href="#" aria-label="YouTube">
                    <img src="/src/assets/youtube-logo.png" alt="YouTube" />
                </a>
                <a href="#" aria-label="Twitch">
                    <img src="/src/assets/twitch-logo.png" alt="Twitch" />
                </a>
            </div>

        </footer>);
};

export default HomepageNelogat;
export { TopRatedRecipes };