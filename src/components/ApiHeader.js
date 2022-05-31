import { useEffect, useState, Component } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Progress } from "antd";
import {useDispatch} from "react-redux"
import Slider from "react-slick"

const API_KEY = "2a6bed66b9c565a674eb831d980b838f";
const API_IMG = "https://image.tmdb.org/t/p/w500";

const NOW_PLAYING = "https://api.themoviedb.org/3/movie/now_playing?api_key=2a6bed66b9c565a674eb831d980b838f&language=en-US&page=1"
const GET_POPULAR = "https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1"
export default function Example() {
  const [popularMovies, setpopularMovies] = useState([]);
  const dispatch = useDispatch()

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then((ress) => {
        console.log(ress);
        setpopularMovies(ress.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function qoshFunNarsa(val){
    console.log(val);
    alert("Watch Listga qo'shildi")
    dispatch({type: "add", payload: val })
  }

  return (
    <div>
      <Container>
        <Row>
          {popularMovies.length > 0 &&
            popularMovies.map((item, index) => {
              return (
                <Col key={index} md="3">
                  <div className="card">
                    <img src={API_IMG + item.poster_path} alt="" />
                        {/* <div className="textoqrang2" onClick={() => {qoshFunNarsa(item)}}> */}
                        {/* <a onClick={() => {qoshFunNarsa(item)}}>
                    <img width="50px" className="textoqrang2" src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-947-circle-more-white-4c440dfc1b0e626c70f4853dbbce9c4d1f2c5d8f3e05a7d3df47881cbd816adf.svg" alt="" />
                        </a> */}

                    {/* <div className="item"> */}
                      <ul className="nav">
                          <li className="nav-item">
                        <a className="nav-link textoq img5 active" onClick={() => {qoshFunNarsa(item)}} aria-current="page">
                    <img width="50px" className="textoqrang2" src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-947-circle-more-white-4c440dfc1b0e626c70f4853dbbce9c4d1f2c5d8f3e05a7d3df47881cbd816adf.svg" alt="" />
                        {/* <div className="rasmv2"></div> */}
                        </a>
                        <div className='navbar_item'>
                                        <ul>
                                                <li><a className='textoq'>Add to list</a></li>
                                                <li><a className='textoq'>Favorite</a></li>
                                                <li><a className='textoq' onClick={() => {qoshFunNarsa(item)}}>Watchlist</a></li>
                                                <li><a className='textoq'>Your rating</a></li>
                                        </ul>
                                    </div>
                          </li>
                      </ul>
                    {/* </div> */}
                        {/* </div> */}
                    {/* <a  className="text-danger textoqrang2" onClick={() => {qoshFunNarsa(item)}}>watch</a> */}
                    <Progress className="textoqrang" type="circle" percent={item.vote_average * 10} width="50px" />
                    
                  <Link to={`/singlemovies/${item.id}`}>
                    <h4>{item.title}</h4>
                    <h4>{item.release_date}</h4>
                    
                  </Link>
                  </div>
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
}
