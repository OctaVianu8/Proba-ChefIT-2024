import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomepageNelogat from './pages/homepage-nelogat'

function App() {
  const [count, setCount] = useState(0)

  let userLoggedIn = false;
  if(userLoggedIn) {
    
  } else {
    return HomepageNelogat();
  }
}

export default App
