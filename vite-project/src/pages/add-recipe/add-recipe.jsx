import React from 'react';
import '/src/pages/homepage.css';

import NavBar from '/src/pages/navbar.jsx';
import '/src/pages/windows.css'
import '/src/pages/add-recipe/add-recipe.css';

const AddRecipePage = () => {
    return (
        <div className="homepage">
            <NavBar userLoggedIn={true} />
            <div className="content">
                <div className="stack">
                    <img src="/src/assets/background.png" alt="Background" className="background-image" />
                    <AddRecipeWindow />
                </div>
            </div>
        </div>
    );
};

export const AddRecipeWindow = () => {
    return (
        <div className='window center-on-page'>
            <div className="recipe-form">
                <div className='white-bar'>
                    <label for="recipe-name">Recipe name:</label>
                    <input type="text" id="recipe-name" name="recipe-name" />
                </div>
                <div className='white-bar'>
                    <label for="description">Description:</label>
                    <textarea id="description" name="description" rows="4"></textarea>
                </div>

                <button className="upload-photo">
                    <span className="icon">📎</span> Upload photo
                </button>

                <button className="add-recipe">Add recipe</button>
            </div>
        </div>
    );
}

export default AddRecipePage;