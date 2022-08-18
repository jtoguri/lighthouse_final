import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import HomeSlider from "../HomeSlider";
import Cityslider from "../Cityslider/Cityslider";

export default function Home() {
  const [searchLocation, setSearchLocation] = useState("");
  const [listings, setListings] = useState([]);
  const [legendDisplay, setLegendDisplay] = useState("");

  let navigate = useNavigate();

  const getHomePageListings = async () => {
    const listings = await axios.get("api/listings");
    setListings(listings.data);
  };

  useEffect(() => {
    getHomePageListings();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();

    let res;

    if (searchLocation) {
      res = await axios.get(`/api/search/${searchLocation}`);
    } else {
      res = await axios.get(`/api/search/toronto,+on`);
    }

    const locationData = res.data;

    console.log(locationData);

    navigate(`/search?lat=${locationData.lat}&lon=${locationData.lon}`);
  };

  return (
    <div id="Home">
      <div id="backgroundContainer"></div>
      <form onSubmit={handleSearch}>
        <fieldset>
          <legend className={legendDisplay}>Search by location</legend>
          <input
            onFocus={() => setLegendDisplay("visible")}
            onBlur={() => setLegendDisplay("")}
            type="search"
            placeholder="Search by location"
            onChange={(e) => setSearchLocation(e.target.value)}
          />
        </fieldset>
        <button type="submit">Search</button>
      </form>

      <div className="home-message">
        <p>
          With over 3000 users worldwide, come find the right trailer for your
          needs
        </p>
      </div>

      <HomeSlider listings={listings} />
      <Cityslider/>

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
}
