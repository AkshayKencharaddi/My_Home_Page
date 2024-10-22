import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'; 
import Notifications from './Notifications';
import Contacts from './Contacts'; 
import HomePage from './HomePage';
import Footer from './Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
