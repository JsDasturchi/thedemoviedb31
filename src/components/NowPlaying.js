import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const API_KEY = "2a6bed66b9c565a674eb831d980b838f";
const API_IMG = "https://image.tmdb.org/t/p/w500";

const NOW_PLAYING = "https://api.themoviedb.org/3/movie/now_playing?api_key=2a6bed66b9c565a674eb831d980b838f&language=en-US&page=1"

export default function NowPlaying() {
  const [popularMovies, setpopularMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then((ress) => {
        console.log(ress);
        setpopularMovies(ress.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Container>
        <Row>
          {popularMovies.length > 0 &&
            popularMovies.map((item, index) => {
              return (
                <Col key={index} md="3">
                  <Link to={`/singlemovies/${item.id}`}>
                  <div className="card">
                    <img src={API_IMG + item.poster_path} alt="" />
                    
                    <h4>{item.title}</h4>
                    <h4>{item.release_date}</h4>
                    
                  </div>
                  </Link>
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
}
