import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import {Container, Col, Row, Badge} from 'react-bootstrap'

const API_KEY = "51cc7f5f459038d8f6fd27150449d6a1"
const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500"

export default function SingleMovies() {
    const params = useParams()
    console.log(params);
    const moive_id = params.id
    console.log(moive_id);

    const [movie, setMovie] = useState()
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${moive_id}?api_key=${API_KEY}&language=en-US`)
        .then(response => {
            console.log(response)
            setMovie(response.data)
            setLoading(false)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    if(loading){
        return <div>Loading...</div>
    }

    return (
    <div>
        <Container>
            <Row>
                <Col md="6">
                    <img width="100%" src={BASE_IMAGE_URL + movie.backdrop_path} alt={movie.title} />
                </Col>
                <Col md="6">
                    <h4>{movie.title}</h4>
                    {
                        (movie.genres.length > 0)? (
                            movie.genres.map(item => {
                                return (
                                    <Badge className="mx-2" bg="primary">{item.name}</Badge>
                                )
                            })
                        ) : (
                            <div>Hech qanday janr yo'q</div>
                        )
                    }
                    <p> <h5>Kino Budjeti:</h5> {movie.budget} </p>
                    <h5>Batafsil:</h5>
                    <p>{movie.overview}</p>
                </Col>
                <Col md="12">
                    <Row className="mt-5">
                        {
                            (movie.production_companies.length > 0) && movie.production_companies.map(item => {
                                    return (
                                        <Col md="3">
                                            <div className="card">
                                                <img width="100%" src={BASE_IMAGE_URL + item.logo_path} alt={item.title} />
                                                <h5>{item.name}</h5>
                                            </div>
                                        </Col>
                                    )
                                }   
                            )
                        }
                    </Row>

                </Col>
            </Row>
        </Container>
    </div>
  )
}
