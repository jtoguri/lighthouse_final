import Home from "../Home";
import Header from "../Header";
import Login from "../Login";
import Chat from "../Chat";
import Register from "../Register";
import Rental from "../Rental";
import SearchResults from "../SearchResults";
import Footer from "../Footer";

import { useState, useMemo, useEffect } from "react";

import { Routes, Route, useLocation } from "react-router-dom";

import axios from "axios";

import { UserContext, TokenContext } from "../UserContext";

import "./App.scss";
import Bookings from "../Bookings/Bookings";

function App() {
  const storedJwt = sessionStorage.getItem("token");

  //const decodedUser = storedJwt ? jwt_decode(storedJwt) : null;

  const [user, setUser] = useState(storedJwt || null);

  const [accessToken, setAccessToken] = useState("");

  const location = useLocation();

  const value = useMemo(
    () => ({ accessToken, setAccessToken }),
    [accessToken, setAccessToken]
  );

  const getToken = async () => {
    const res = await axios.post("/refresh_token");
    console.log(res.data)
    setAccessToken(res.data.accessToken);
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <div className="App">
      <TokenContext.Provider value={value}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/chat" element={<Chat />} />
          {/* <Route path="/listing" element={<Rental />} /> */}
          <Route path="/listings/:id" element={<Rental />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/bookings/:id" element={<Bookings />} />
        </Routes>
        {location.pathname !== "/search" && <Footer />}
      </TokenContext.Provider>
    </div>
  );
}

export default App;
