import React from 'react'
import "./App.css"
import './index.css'
import { gsap } from 'gsap'
import { ScrollTrigger,SplitText } from 'gsap/all'
import Navbar from './components/Navbar'
gsap.registerPlugin(ScrollTrigger,SplitText);


 const App = () => {
  return (
    <main>
      <Navbar />
    </main>
  )
}

export default App;