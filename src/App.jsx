import React from 'react'
import "./App.css"
import './index.css'
import { gsap } from 'gsap'
import { ScrollTrigger,SplitText } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger,SplitText);


 const App = () => {
  return (
    <div className='flex-center h-[100vh]'>
        <h1 className='Hello'>
          Hello, GSAP
        </h1>
    </div>
  )
}

export default App;