import { useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import Latestwork from './component/Latestwork'
import Getintouch from './component/Getintouch'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black'>
        <Navbar></Navbar>
        <Home></Home>
        <About></About>
        <Latestwork></Latestwork>
        <Getintouch></Getintouch>
        <Footer></Footer>
    </div>
  )
}

export default App
