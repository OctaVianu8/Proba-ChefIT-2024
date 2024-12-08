import React, { useState } from 'react';
import '/src/pages/homepage.css';
import '/src/pages/search-recipes/search-recipes.css';
import '/src/pages/windows.css'

import NavBar from '/src/pages/navbar.jsx';
import { IoMdSearch } from "react-icons/io";
import ReactModal from 'react-modal';
import '/src/pages/search-recipes/recipe-popup.css';

//image imports
import pizzaImage from '/src/assets/pizza.jpeg';
import backgroundImage from '/src/assets/background.png';

const SearchRecipesPage = ({ userLoggedIn }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [LocalRecipe, setLocalRecipe] = useState(null);

    const showModal = (recipe) => {
        setLocalRecipe(recipe);
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    }

    return (
        <div className="homepage">
            <NavBar userLoggedIn={userLoggedIn} />
            <div className="content">
                <div className="stack">
                    <img src={backgroundImage} alt="Background"
                        className="background-image immovable" />
                    <SearchRecipesWindow showModal={showModal} />
                    {
                        (isModalOpen) && <RecipePopup closeModal={closeModal} recipe={LocalRecipe} />
                    }
                </div>
            </div>
        </div>
    );
};

export const RecipePopup = ({ closeModal, recipe }) => {
    return (
        <ReactModal isOpen={true} className="recipe-popup" onRequestClose={closeModal}>
            <div className="popup-content">
                <div className='row'>
                    <div className='primary'>
                        <img src={pizzaImage} />
                        <div className='info'>
                            <h3>{recipe.title}</h3>
                            <div className='stars'>
                                {Array(recipe.stars).fill().map((_, i) => <span key={i}>⭐</span>)}
                            </div>
                            <div className='ratings'>{recipe.ratings} ratings</div>
                            <span></span>
                            <span></span>
                            <div className='author'>Author:</div>
                            <div className='author'>{recipe.author}</div>
                        </div>
                    </div>
                    <div className='rate'>
                        <p>Rate this recipe</p>
                        <p>⭐⭐⭐⭐⭐</p>
                        <button>Submit</button>
                    </div>
                </div>
                <div className='description'>
                    <h2>Description</h2>
                    <p>
                        {recipe.description}
                    </p>
                    <p>Semnat JamilaCuisine</p>
                </div>
            </div>
        </ReactModal>
    );
}

export const SearchRecipesWindow = ({ showModal }) => {

    let search_words = 'pizza';
    let sort_by = 'popularity';

    return (
        <div className='search'>
            <div className='search-bar'>
                <input type="text" placeholder="Search " />
                <button className="search-button">
                    <IoMdSearch />
                </button>
            </div>
            <div className='search-options'>
                <select className="filter-dropdown">
                    <option value="">Filter</option>
                    <option value="five">⭐⭐⭐⭐⭐</option>
                    <option value="four">⭐⭐⭐⭐</option>
                    <option value="three">⭐⭐⭐</option>
                    <option value="two">⭐⭐</option>
                    <option value="one">⭐</option>
                </select>
                <select className="sort-dropdown">
                    <option value="">Sort</option>
                    <option value="top-rated">Top rated</option>
                    <option value="worst-rated">Worst rated</option>
                    <option value="most-rated">Most rated</option>
                    <option value="least-rated">Least rated</option>
                </select>
            </div>
            <RecipeGrid showModal={showModal} />
        </div>
    );
}

const RecipeGrid = ({ showModal }) => {
    const recipe_placeholder = {
        title: 'Reteta 1',
        stars: 5,
        ratings: 100,
        author: 'Prenume Nume',
        description: 'Reteta de eclere pas cu pas este una dintre cele mai cerute retete de la voi, \
                        asa ca trebuia neaparat sa vin cu o versiune video. Nu stiu de ce, dar se \
                        pare ca eclerele va dau batai de cap sau ca va este frica de ele. Imi \
                        amintesc si acum de primele eclere pe cale le-am mancat. Eram la o petrecere, \
                        iar gazdele le faceau chiar atunci. Eram fascinata de cojile perfecte, de \
                        crema care mirosea genial si cantitatea uriasa de frisca. Imi aduc aminte \
                        ca toata petrecerea am mancat eclere si ca de atunci se numara printre \
                        deserturile mele preferate.',
    };
    let recipes = Array(20).fill(recipe_placeholder);
    return (
        <div className='recipe-grid'>
            {recipes.map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} showModal={showModal} />
            ))}
        </div>
    );
}

const RecipeCard = ({ recipe, showModal }) => {
    return (
        <div className='recipe-card' onClick={() => showModal(recipe)}>
            <img src="/src/assets/pizza.jpeg" alt="Recipe" />
            <div className='recipe-info'>
                <h3>{recipe.title}</h3>
                <div className='stars'>
                    {Array(recipe.stars).fill().map((_, i) => <span key={i}>⭐</span>)}
                </div>
                <p>{recipe.ratings} ratings</p>
                <p>Author:</p>
                <p>{recipe.author}</p>
            </div>
        </div>
    );
}

export default SearchRecipesPage;