import { useEffect, useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";

import axios from 'axios';
import { TextField } from '@mui/material';


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
    <div>
        <TextField
         id="outlined-textarea"
         
         placeholder="Find your Trailer"
         multiline>
          <input type="search" placeholder="Find your trailer" />
        <form onSubmit={handleSearch} >
          <input type="search" placeholder="Search" onChange={e =>
            setSearchLocation(e.target.value)} />
          <input type="submit" value="Search Rentals" />
          </TextField>
        <div>
          <h2>Section for different types of rentals</h2>
          
        </div>
    </div>
  );
};
