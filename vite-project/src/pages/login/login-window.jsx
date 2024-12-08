import './login.css';

import { FaEnvelope, FaLock } from 'react-icons/fa';

                    

export default function LoginWindow() {
    return (
        <>
            <div className="login-window">
                <div className="login-form">
                    <h1>Loghează-te, chiorăie mațele!</h1>

                    <div className="input-icon">
                        <FaEnvelope className="icon" />
                        <input type="email" placeholder="E-mail" />
                    </div>
                    <div className="input-icon">
                        <FaLock className="icon" />
                        <input type="password" placeholder="Password" />
                    </div>
                    
                    <button>Login</button>
                    <div className="forgot-password">
                        <a href="/forgot-password">Forgot Password?</a>
                    </div>
                </div>
            </div>
        </>
    );
};
