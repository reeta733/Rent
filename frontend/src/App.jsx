import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Slider from './component/Slider'
import AllRouters from './routes/AllRouters'
import Agent from './component/Agent'
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <>
    <Header/>
    {/* <Slider/> */}
    <AllRouters/>
    <Agent/>
    <Footer/>
    </>
  )
}

export default App