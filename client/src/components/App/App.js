import Home from '../Home';
import Header from '../Header';
import Login from '../Login';

import { Routes, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
