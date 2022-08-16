import { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import axios from 'axios';

import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

import './SearchResults.scss';

export default function SearchResults() {
  
  const [results, setResults] = useState([]);
  
  const { search } = useLocation();

  const fetchListings = async () => {
    const lat = search.split('&')[0].split('=')[1];
    const lon = search.split('&')[1].split('=')[1];
    console.log(lat, lon)

    const res = await axios.get(`/api/listings/${lat}&${lon}`);

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
            <a href={`/listings/${listing.id}`}>
              <div key={listing.id} className="listing">
                {listing.photo && <img src={listing.photo}/>}
                <p>{listing.make} {listing.model}</p>
              </div>
            </a>
          )
        })}
      </div>
      <MapContainer center={[Number(search.split('&')[0].split('=')[1]),
      Number(search.split('&')[1].split('=')[1])]} zoom={11} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {results.map((listing) => {
          const coords = listing.location.slice(6, -1).split(' ');
          const position = [Number(coords[0]), Number(coords[1])]
          return (
            <Marker position={position}>
              <Popup>
                {listing.make} {listing.model}
              </Popup>
            </Marker>
          )
        })}
      </MapContainer>
    </div>
    </>
  )
}
