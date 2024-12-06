const NavBar = ({userLoggedIn = 0}) => {
    
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src="/src/assets/logo-white.png" alt="Logo" className="logo" />
                <button className="nav-button">Recipes</button>
                <button className="nav-button">Add Recipe</button>
            </div>
            {ProfileButtons({userLoggedIn: userLoggedIn})}
        </nav>
    );
};

const ProfileButtons = ({userLoggedIn}) => {
    if(userLoggedIn) {
        return (
            <div>
                <button className="nav-button">Profile</button>
            </div>
        );
    } else {
        return (
            <div className="navbar-right">
                <button className="nav-button login">Login</button>
                <button className="nav-button">Register</button>
            </div>
        );
    }
}

export default NavBar;