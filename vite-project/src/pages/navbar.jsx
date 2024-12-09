import { NavLink } from 'react-router-dom';
import './navbar.css';

const NavBar = ({ userLoggedIn = 0, isOnProfile = 0}) => {

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
            {ProfileButtons({ userLoggedIn: userLoggedIn, isOnProfile: isOnProfile })}
        </nav>
    );
};

const logoutFnc = () => {
    localStorage.removeItem('token');
    window.location.reload();
}

const ProfileButtons = ({ userLoggedIn, isOnProfile}) => {
    if (userLoggedIn) {
        if(isOnProfile) {
            return (
                <div>
                    <NavLink to="/">
                        <button className="nav-button login" onClick={logoutFnc}>Logout</button>
                    </NavLink>
                </div>
            );
        }
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
                <NavLink to='/register'>

                <button className="nav-button">Register</button>
                </NavLink>
            </div>
        );
    }
}

export default NavBar;