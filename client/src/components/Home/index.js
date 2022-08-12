import { useEffect, useContext } from 'react';
import axios from 'axios';
import { TextField } from '@mui/material';


export default function Home() {

  return (
    <div>
    

        <TextField
         id="outlined-textarea"
         
         placeholder="Find your Trailer"
         multiline>
          <input type="search" placeholder="Find your trailer" />
          <input type="submit" value="Search Rentals" />
          </TextField>
        <div>
          <h2>Section for different types of rentals</h2>
          
        </div>
    </div>
  );
};
