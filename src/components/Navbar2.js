import React,{useEffect, useState} from 'react'
import "./style.css"
import {Link} from 'react-router-dom'
import axios from "axios"
export default function Navbar2() {

    const [izla, setIzla] = useState("");
    const [searchApi, setSearchApi] = useState("");
    const API_KEY = "2a6bed66b9c565a674eb831d980b838f";

    // useEffect(() => {
    //     axios
    //       .get(
    //         `https://api.themoviedb.org/3/search/movie?api_key=2a6bed66b9c565a674eb831d980b838f&language=en-US&page=1&include_adult=false`
    //       )
    //       .then((ress) => {
    //         console.log(ress);
    //         setSearchApi(ress.data.results);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   }, []);

    //   console.log(searchApi);

  return (
    <div className='bg p-3 right_nav'>
            <div className='container'>
                <div className='d-flex right_navbar'>
                    <div className='d-flex'>
                            <a href='/'>
                                    <img width="300px" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="" />
                            </a>
                    
                        <div className='item'>
                            <ul className="nav">
                                <li className="nav-item"><a className="nav-link active" aria-current="page">Movies</a>
                                    <div className='navbar_item'>
                                        <ul>
                                               <Link to="/example"> <li><a className='textoq'>Popular</a></li> </Link>
                                               <Link to="/nowplaying"> <li><a className='textoq'>Now Playing</a></li> </Link>
                                               <Link to="/upcoming"> <li><a className='textoq'>Upcoming</a></li> </Link>
                                                {/* <li><a className='textoq'>Top rated</a></li> */}
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link textoq" >Tv Shows</a>
                                    <div className='navbar_item'>
                                        <ul>
                                               <Link to="/tvPopular"> <li><a className='textoq'>Popular</a></li> </Link>
                                               <Link to="/airingToday"> <li><a className='textoq'>Airing Today</a></li> </Link>
                                                {/* <li><a className='textoq'>On Tv</a></li> */}
                                                {/* <li><a className='textoq'>Top rated</a></li> */}
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Peoplee</a>
                                    <div className='navbar_item'>
                                        <ul>
                                                <Link to="/popularPeople"> <li><a className='textoq'>Popular People</a></li> </Link>
                                        </ul>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">Watchlist</a>
                                    <div className='navbar_item'>
                                        <ul>
                                                <Link to="/watchlist"> <li><a className='textoq'>Watch List</a></li> </Link>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                        <div>
                            <p className='d-inline m-3 fs-4'>+</p>
                            <p className='d-inline m-3 '>En</p>
                            <p className='d-inline m-3 '>Login</p>
                            <p className='d-inline m-3 '>Join TMDB</p>
                            {/* <p className='d-inline m-3 '><input onChange={(val) => setIzla(val)} className="text-black textwin" type="text" placeholder='Search...' /></p> */}
                        </div>
                    
                </div>
            </div>
        </div>
  )
}
