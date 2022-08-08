import { useState, useEffect } from 'react';

import axios from 'axios';

import './SearchResults.scss';

export default function SearchResults() {
  
  const [results, setResults] = useState([]);
  
  const fetchListings = async () => {
    const res = await axios.get('/api/listings');

    const listings = res.data;
    setResults(listings);
  }

  useEffect(() => {
    fetchListings(); 
  }, [])

  return (
    <>
      <h2>Search Results</h2>
      {results.length > 0 &&
        <div className="searchResultsGrid">
          {results.map((listing) => {
            return (
              <div key={listing.id}>
                <p>id: {listing.id}</p>
                <p> owner: {listing.owner_id}</p>
                <p> vehicle: {listing.vehicle_id}</p>
              </div>
            )
          })}
        </div>
      }
    </>
  )
}
