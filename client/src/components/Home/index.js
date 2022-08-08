import { useEffect, useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";

import axios from 'axios';


export default function Home() {
  
  const [searchLocation, setSearchLocation] = useState("");

  let navigate = useNavigate();
  
  const handleSearch = (e) => {
    e.preventDefault(); 
    
    setSearchLocation(e.target.value);

    navigate("/search");
  }

  return (
    <div>
        <h1>
          Lighthouse Labs Final Project
        </h1>

        <form onSubmit={handleSearch} >
          <input type="search" placeholder="Search" />
          <input type="submit" value="Search Rentals" />
        </form>

        <div>
          <h2>Section for different types of rentals</h2>
          <ul>
            <li>type 1</li>
            <li>type 2</li>
            <li>type 3</li>
            <li>type 4</li>
            <li>type 5</li>
          </ul>
        </div>
    </div>
  );
};
