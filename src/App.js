/* Dependencies */
import React from "react";
import { Routes, Route} from "react-router-dom"

/** Styles */
import './App.css';

/* Pages */
import Home from './pages/Home';

/** Components */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
