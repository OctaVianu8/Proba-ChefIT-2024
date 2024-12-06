import React from 'react';
import './homepage.css';
import './contact-us.css';
import './footer.css';

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

export default Footer;