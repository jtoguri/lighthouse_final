import { useState, useEffect, useRef } from 'react';

import { useLocation } from 'react-router-dom';

import axios from 'axios';

import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

import './SearchResults.scss';

export default function SearchResults() {
  
  const [results, setResults] = useState([]);
  
  const { search } = useLocation();

  const mapRef = useRef(null);
  const markerRef = useRef({});

  const fetchListings = async () => {
    const lat = search.split('&')[0].split('=')[1];
    const lon = search.split('&')[1].split('=')[1];
    console.log(lat, lon)

    const res = await axios.get(`/api/listings/${lat}&${lon}`);

    const listings = res.data;
    setResults(listings);
  }

  const onListingHover = (e) => {
    let listingId;
    
    if (e.target.tagName === "IMG") {
      listingId = e.target.parentElement.id;  
    } else if (e.target.tagName === "DIV") {
      listingId = e.target.id; 
    } else if (e.target.tagName === "A") {
      console.log("anchor was hovered")
    }

    if (!listingId) return;

    listingId = Number(listingId.slice(7));
    let listingIndex;

    const listing = results.find((listing, index) => {
      if (listing.id === listingId) {
        listingIndex = index;
        return listing;
      }
    });

    const position = listing.location.slice(6, -1).split(' ');

    const map = mapRef.current
    
    if (!map) {
      return
    }

    map.flyTo([Number(position[0]), Number(position[1])], 13)

    const marker = markerRef.current[listingIndex]

    if (marker) {
      marker.openPopup()
    }
  }

  const onListingHoverOff = (e) => {

    let listingId;

    if (e.target.tagName === "IMG" || e.target.tagName === "P") {
      listingId = e.target.parentElement.id;  
    } else if (e.target.tagName === "DIV") {
      listingId = e.target.id; 
    } else if (e.target.tagName === "A") {
      console.log("anchor was hovered")
    } else {
      console.log(e.target.tagName)
    }

    if (!listingId) {
      console.log("no id found")
      return;
    }

    listingId = Number(listingId.slice(7));
    const listingIndex= results.findIndex(listing => listing.id === listingId) 
    const map = mapRef.current

    if (!map) {
      return
    }

    const marker = markerRef.current[listingIndex]
    if (marker) {
      marker.closePopup()
    }
  }

  useEffect(() => {


    fetchListings(); 
  }, [])

  return (
    <>
    <div className="searchResults">
      <div className="searchResultsGrid">
        {results.map((listing) => {
          return (
            <a href={`/listings/${listing.id}`}>
              <div key={listing.id} id={`listing${listing.id}`} className="listing"
                onMouseEnter={onListingHover}
                onMouseLeave={onListingHoverOff}>
                {listing.photo && <img src={listing.photo}/>}
                <p>{listing.make} {listing.model}</p>
              </div>
            </a>
          )
        })}
      </div>
      <MapContainer 
        center={[Number(search.split('&')[0].split('=')[1]),
      Number(search.split('&')[1].split('=')[1])]} 
        zoom={13} 
        scrollWheelZoom={false}
        ref={mapRef}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {results.map((listing, index) => {
          const coords = listing.location.slice(6, -1).split(' ');
          const position = [Number(coords[0]), Number(coords[1])]
          return (
            <Marker ref={element => markerRef.current[index] = element} position={position}>
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
