import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './pages/homepage.jsx'

function App() {
  const [count, setCount] = useState(0)

  let userLoggedIn = false;
  return Homepage({userLoggedIn: userLoggedIn});
}

export default App
