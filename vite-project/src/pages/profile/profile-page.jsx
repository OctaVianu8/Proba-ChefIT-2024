import React from 'react';
import '/src/pages/homepage.css';
import '/src/pages/profile/profile-page.css';

import NavBar from '/src/pages/navbar.jsx';

const ProfilePage = () => {
    return (
        <div className="homepage">
            <NavBar userLoggedIn={true} />
            <div className="content">
                <div className="stack">
                    <img src="/src/assets/background.png" alt="Background" className="background-image" />
                    <ProfileWindow />
                </div>
            </div>
        </div>
    );
};

export const ProfileWindow = () => {
    return (
        <div className='profile'>
            <div className='profile-windows'>
                <ProfileCard />
                <ProfileForm />
            </div>
            <button class="add-recipe">Add a recipe</button>
        </div>
    );
}

const ProfileCard = () => {
    return (
        <div className='profile-card'>
            <div class="icon">
                <img src="/src/assets/chef-icon.png" alt="Chef Icon" />
            </div>
            <div className='white-bar'>
                <input type="email" id="email" name="email" value='Gogu Bucatar' />
            </div>
        </div>
    );
}

const ProfileForm = () => {
    return (
        <div className='profile-form'>
            <div className='white-bar'>
                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" />
            </div>

            <div className='white-bar'>
                <label for="telephone">Telephone:</label>
                <input type="tel" id="telephone" name="telephone" />
            </div>

            <div className='white-bar'>
                <label for="group">College group:</label>
                <input type="text" id="group" name="group" />
            </div>
        </div>
    );
}

export default ProfilePage;