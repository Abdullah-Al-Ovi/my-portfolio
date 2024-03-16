import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './Pages/Home/Home'
import { About } from './Pages/About/About'
import { Contact } from './Pages/Contact/Contact'
import { MyWorks } from './Pages/MyWorks/MyWorks'
import { Navbar } from './Components/Navbar'
import { ParticleBg } from './Components/ParticleBg'

import { useEffect, useState } from 'react'
import Loading from './Components/Loading'
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
       {
        loading ? <Loading loading={loading} />
        :
        <BrowserRouter>
        <ParticleBg></ParticleBg>
        <Navbar></Navbar>
        <Routes>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='myworks' element={<MyWorks />} />
        </Routes>
      </BrowserRouter>
      
      }
    
    </>
    
  )
}

export default App
