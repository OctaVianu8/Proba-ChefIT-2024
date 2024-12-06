import React from "react";
import './top-rated-recipes.css'

const TopRatedRecipes = ({ recipes }) => {
    recipes = Array.isArray(recipes) ? recipes : [];
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

const topRatedRecipesPlaceholder = [
    {
        name: "Supă la plic",
        image: "/src/assets/supa.png",
        ratingsCount: 150,
        author: "Mari"
    },
    {
        name: "Pâine cu pateu",
        image: "/src/assets/pateu.png",
        ratingsCount: 200,
        author: "Croi"
    },
    {
        name: "Cartofi prăjiți",
        image: "/src/assets/cartofi.png",
        ratingsCount: 120,
        author: "Edi"
    }
];

export { TopRatedRecipes, topRatedRecipesPlaceholder };
export default TopRatedRecipes;