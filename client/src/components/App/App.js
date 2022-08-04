import Home from '../Home';
import Header from '../Header';
import Login from '../Login';
import IconTabs from '../IconTabs/Index';
import { useState, useMemo } from 'react';

import { Routes, Route } from "react-router-dom";

import { UserContext } from '../UserContext';

import './App.scss';

function App() {

  const storedJwt = sessionStorage.getItem('token');

  //const decodedUser = storedJwt ? jwt_decode(storedJwt) : null;
  
  const [user, setUser] = useState(storedJwt || null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <div className="App">
      <UserContext.Provider value={value}>
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
