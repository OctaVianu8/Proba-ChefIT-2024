import { NavLink } from 'react-router-dom';
import './navbar.css';

const NavBar = ({ userLoggedIn = 0 }) => {

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <NavLink to="/">
                    <img src="/src/assets/logo-white.png" alt="Logo" className="logo" />
                </NavLink>
                <NavLink to="/search-recipes">
                    <button className="nav-button">Recipes</button>
                </NavLink>
                <NavLink to="/add-recipe">
                    <button className="nav-button">Add Recipe</button>
                </NavLink>
            </div>
            {ProfileButtons({ userLoggedIn: userLoggedIn })}
        </nav>
    );
};

const ProfileButtons = ({ userLoggedIn }) => {
    if (userLoggedIn) {
        return (
            <div>
                <NavLink to="/profile">
                    <button className="nav-button">Profile</button>
                </NavLink>
            </div>
        );
    } else {
        return (
            <div className="navbar-right">
                <NavLink to="/login">
                    <button className="nav-button login">Login</button>
                </NavLink>
                <button className="nav-button">Register</button>
            </div>
        );
    }
}

export default NavBar;