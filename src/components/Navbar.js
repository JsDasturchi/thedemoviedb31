import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="boxKatta">
      <div className="d-flex">
        <img
          width="154px"
          height="20"
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt=""
        />
        <ul className="d-flex">
          <li className="ms-3">
            <p className="rang2">Movies</p>
            <ul className="dropdown__quti">
             <li> {" "} <p className='rang'>Popular</p>    
             </li> 
              <li>
                {" "}
                <p className="rang">Now playing</p>{" "}
              </li>
              <li>
                {" "}
                <p className="rang">upcoming</p>{" "}
              </li>
              <li>
                {" "}
                <p className="rang">Top Rated</p>{" "}
              </li>
            </ul>
          </li>
          <li>
            {" "}
            <p>TV Shows</p>
            <ul className="dropdown__quti">
              <li>Popular</li>
              <li>Airing Today</li>
              <li>ON TV</li>
              <li>Top Rated</li>
            </ul>
          </li>

          <li className="dropdown__quti">
            {" "}
            <p>People</p>
            <ul>
              <li>Popular People</li>
            </ul>
          </li>

          <li>
            {" "}
            <p>More</p>
            <ul className="dropdown__quti">
              <li>Discussions</li>
              <li>Leaderboard</li>
              <li>Support</li>
              <li>API</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
