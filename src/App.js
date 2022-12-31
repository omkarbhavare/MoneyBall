
import './App.css';
import ExpenseStructure from './components/expensetracker/ExpenseStructure';
import NewsSection from './components/news/NewsSection';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from 'react';

function App() {

  
  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<ExpenseStructure />}></Route>
          <Route path="news" element={<NewsSection />}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
