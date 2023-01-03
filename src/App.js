import React from 'react';
import Header from './Header'
import './App.css';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;