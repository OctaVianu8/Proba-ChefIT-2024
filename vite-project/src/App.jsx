import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './pages/homepage.jsx';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login/login-page.jsx';
import ProfilePage from './pages/profile/profile-page.jsx';

export default function App() {
  const [count, setCount] = useState(0)

  let userLoggedIn = true;
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage userLoggedIn={userLoggedIn} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </>
  );
  // return Homepage({userLoggedIn: userLoggedIn});
}
