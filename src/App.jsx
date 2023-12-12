import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './Pages/Home/Home'
import { About } from './Pages/About/About'
import { Contact } from './Pages/Contact/Contact'
import { MyWorks } from './Pages/MyWorks/MyWorks'
import { Navbar } from './Components/Navbar'
import { ParticleBg } from './Components/ParticleBg'
function App() {


  return (
    <>
      <BrowserRouter>
      <ParticleBg></ParticleBg>
      <Navbar></Navbar>
          <Routes>
            <Route index element= {<Home/>} />
            <Route path='about' element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='myworks' element={<MyWorks/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
