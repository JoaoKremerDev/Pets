import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from './Components/Home';
import {BrowserRouter, Route, Routes, } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes>
            <Route path='/' element={<Home />}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
