import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/mainPage/Home'
import BlogWebsite from './components/Blog/BlogWebsite'
import AdminPanel from './components/Blog/AdminPanel'

function App() {
  return (
    <>
      <section className="mainpage"> 
      <Navbar/>
      <Home/>
      </section>
      <section id="about">Society Information</section>
      
      <section id="learning">Blogs and research
        <BlogWebsite/>
      </section>
      <section id="admin"> <AdminPanel/> </section>

      <section id="community"><h1>Community Hub</h1></section>
      
      <section id='news'>News and Events</section>

      <section id='learning'>Interactive Learning</section>
  
    </>
  )
}

export default App
