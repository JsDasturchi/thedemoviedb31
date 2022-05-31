import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Example from "./components/Example";
import SingleMovies from "./components/SingleMovies";
import NowPlaying from "./components/NowPlaying"
import Upcoming from "./components/Upcoming"
import TvPopular from "./components/TvPopular"
import AiringToday from "./components/AiringToday"
import PopularPeople from "./components/PopularPeople"
import 'antd/dist/antd.css'
import { Provider } from "react-redux";
import Store from "./components/store/Store";
import WatchList from "./components/WatchList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Provider store={Store}>
    <Routes>
      <Route path="/" element={<App />}>
        </Route>
      <Route path="/example" element={<Example />}>
      </Route>
      <Route path="/singlemovies/:id" element={<SingleMovies />}>
      </Route>
      <Route path="/nowplaying" element={<NowPlaying />}>
      </Route>
      <Route path="/upcoming" element={<Upcoming />}>
      </Route>
      <Route path="/tvPopular" element={<TvPopular />}>
      </Route>
      <Route path="/airingToday" element={<AiringToday />}>
      </Route>
      <Route path="/popularPeople" element={<PopularPeople />}>
      </Route>
      <Route path="/watchlist" element={<WatchList />}>
      </Route>
    </Routes>
    </Provider>
  </BrowserRouter>
 </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
