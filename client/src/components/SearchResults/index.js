import { useState, useEffect } from 'react';

import axios from 'axios';

import { MapContainer, TileLayer, useMap } from 'react-leaflet'

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
    <div className="searchResults">
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
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
    </>
  )
}
