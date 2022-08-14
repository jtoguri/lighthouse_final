import { useEffect, useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";

import axios from 'axios';

import HomeSlider from '../HomeSlider';

export default function Home() {
  
  const [searchLocation, setSearchLocation] = useState("");

  let navigate = useNavigate();
  
  const handleSearch = async (e) => {

    e.preventDefault(); 

    let res;

    if (searchLocation) {
      res = await axios.get(`/api/search/${searchLocation}`);
    } else {
      res = await axios.get(`/api/search/toronto,+on`);
    }

    const locationData = res.data;

    console.log(locationData)

    navigate(`/search?lat=${locationData.lat}&lon=${locationData.lon}`);
  }

  return (
    <div id="Home">
        <div id="backgroundContainer">
        </div>
        <form onSubmit={handleSearch} >
          <input type="search" placeholder="Search" onChange={e =>
            setSearchLocation(e.target.value)} />
          <input type="submit" value="Search Rentals" />
        </form>
        <HomeSlider />


        {/*<div>
          <h2>Section for different types of rentals</h2>
          <ul>
            <li>type 1</li>
            <li>type 2</li>
            <li>type 3</li>
            <li>type 4</li>
            <li>type 5</li>
          </ul>
        </div>*/}
    </div>
  );
};
