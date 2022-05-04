import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./Requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row 
        title="NETFLIX ORIGINALS" 
        fetchURl={requests.fetchNetflixOriginals}
        isLargeRow 
        />
      <Row title="Trending Now" fetchURl={requests.fetchTrending} />
      <Row title="Top Rated" fetchURl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURl={requests.fetchDocumantaries} />
    </div>
  );
}

export default App;