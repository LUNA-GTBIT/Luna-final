import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/mainPage/home'

function App() {
  return (
    <>
      <section className="mainpage"> 
      <Navbar/>
      <Home/>
      </section>
      <section id="community"><h1>Community Hub</h1></section>
      <section id="learning">Blogs and research</section>
      <section id='news'>News and Events</section>
      <section id='learning'>Interactive Learning</section>
      <section id="about">Society Information</section>
    
    </>
  )
}

export default App
