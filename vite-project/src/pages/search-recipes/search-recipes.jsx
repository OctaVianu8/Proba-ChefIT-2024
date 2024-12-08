import React from 'react';
import '/src/pages/homepage.css';
import '/src/pages/search-recipes/search-recipes.css';
import '/src/pages/windows.css'

import NavBar from '/src/pages/navbar.jsx';
import { IoMdSearch } from "react-icons/io";

const SearchRecipesPage = ({userLoggedIn}) => {
    return (
        <div className="homepage">
            <NavBar userLoggedIn={userLoggedIn}/>
            <div className="content">
                <div className="stack">
                    <img src="/src/assets/background.png" alt="Background" 
                        className="background-image immovable" />
                    <SearchRecipesWindow/>
                </div>
            </div>
        </div>
    );
};

export const SearchRecipesWindow = () => {
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
                    <option value="">Filter by</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="gluten-free">Gluten-Free</option>
                </select>
                <select className="sort-dropdown">
                    <option value="">Sort by</option>
                    <option value="popularity">Popularity</option>
                    <option value="rating">Rating</option>
                    <option value="newest">Newest</option>
                </select>
            </div>
            <RecipeGrid />
        </div>
    );
}

const RecipeGrid = () => {
    const recipe_placeholder = {
        title: 'Reteta 1',
        stars: 5,
        ratings: 100,
        author: 'Prenume Nume'
    };
    let recipes = Array(20).fill(recipe_placeholder);
    return (
        <div className='recipe-grid'>
            {recipes.map(recipe => <RecipeCard recipe={recipe}/>)}
        </div>
    );
}

const RecipeCard = ({recipe}) => {
    return (
        <div className='recipe-card'>
            <img src="/src/assets/pizza.jpeg" alt="Recipe" />
            <div className='recipe-info'>
                <h3>{recipe.title}</h3>
                <div className='stars'>
                    {Array(recipe.stars).fill().map(() => <span>⭐</span>)}
                </div>
                <p>{recipe.ratings} ratings</p>
                <p >Author:</p>
                <p>{recipe.author}</p>
            </div>
        </div>
    );
}

export default SearchRecipesPage;