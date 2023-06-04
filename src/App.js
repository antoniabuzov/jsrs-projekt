import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import PageLoader from './Components/PageLoader';
import LoginSection from './Components/LoginSection';
import Main from './Components/Main';
import "./Osnovno.css";
import "./Components/css/Buttons.css";
import "./Components/css/Animations.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="main-wrapper">
          <PageLoader />
          <Header />

          <Routes>
            <Route path='/' element={<Main />}/>
            <Route path="/login" element={<LoginSection />} />
          </Routes>

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
