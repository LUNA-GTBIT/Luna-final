import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/mainPage/Home'
import Community from './components/Community/Community'
import AstronomyBlogs from './components/Blog/AstronomyBlogs'
import AdminPanel from './components/Blog/AdminPanel'
import Infopage from './components/SocietyInfo/infopage'

function App() {
  return (
    <>
      <section className="mainpage"> 
        <Navbar/>
        <Home/>
      </section>
      
      <section id="community" style={{ paddingTop: '2rem' }}>
        <Community/>
      </section>
      
      <section id="blogs" style={{ paddingTop: '2rem' }}>
        <AstronomyBlogs/>
      </section>
      
      <section id='news' style={{ paddingTop: '2rem' }}>
        <div style={{ 
          minHeight: '100vh', 
          background: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '2rem'
        }}>
          <div>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>News & Events</h1>
            <p style={{ fontSize: '1.2rem', color: '#cccccc' }}>Coming Soon - Stay tuned for the latest astronomy news and upcoming events!</p>
          </div>
        </div>
      </section>

      <section id='learning' style={{ paddingTop: '2rem' }}>
        <div style={{ 
          minHeight: '100vh', 
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '2rem'
        }}>
          <div>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Interactive Learning</h1>
            <p style={{ fontSize: '1.2rem', color: '#cccccc' }}>Coming Soon - Interactive astronomy lessons and educational resources!</p>
          </div>
        </div>
      </section>

      <section id="about" style={{ paddingTop: '2rem' }}>
        <Infopage/>
      </section>
      
      <section id="admin" style={{ display: 'none' }}> 
        <AdminPanel/> 
      </section>
    </>
  )
}

export default App
