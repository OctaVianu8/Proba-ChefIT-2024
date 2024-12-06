import React from 'react';
import './homepage-nelogat.css';
import './contact-us.css';
import './footer.css';

const HomepageNelogat = () => {
    const topRatedRecipes = [
        {
            name: "Spaghetti Carbonara",
            image: "/src/assets/spaghetti-carbonara.jpg",
            ratingsCount: 150,
            author: "Chef Luigi"
        },
        {
            name: "Chicken Alfredo",
            image: "/src/assets/chicken-alfredo.jpg",
            ratingsCount: 200,
            author: "Chef Mario"
        },
        {
            name: "Beef Wellington",
            image: "/src/assets/beef-wellington.jpg",
            ratingsCount: 120,
            author: "Chef Gordon"
        }
    ];

    return (
        <div className="homepage">
            <nav className="navbar">
                <div className="navbar-left">
                    <img src="/src/assets/logo_white.png" alt="Logo" className="logo" />
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
                {TopRatedRecipes({ recipes: topRatedRecipes })}
            </div>
            {ContactUs()}
            {Footer()}
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
            <h2 className="green">Contact Us</h2>
            <div className="contact-form">
                <div className="contact-fields">
                    <input type="text" placeholder="First Name" className="contact-input green" />
                    <input type="text" placeholder="Last Name" className="contact-input green" />
                    <input type="email" placeholder="Email" className="contact-input green" />
                </div>
                <textarea placeholder="Message" className="contact-message"></textarea>
                <button className="submit-button">Submit</button>
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <footer class="footer">
            <div class="footer-icons">
                <a href="#" aria-label="Instagram">
                    <img src="path-to-instagram-icon.svg" alt="Instagram" />
                </a>
                <a href="#" aria-label="Facebook">
                    <img src="path-to-facebook-icon.svg" alt="Facebook" />
                </a>
                <a href="#" aria-label="YouTube">
                    <img src="path-to-youtube-icon.svg" alt="YouTube" />
                </a>
                <a href="#" aria-label="Twitch">
                    <img src="path-to-twitch-icon.svg" alt="Twitch" />
                </a>
            </div>

        </footer>);
};

export default HomepageNelogat;
export { TopRatedRecipes };