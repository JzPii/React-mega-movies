import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import MovieList from './MovieList';
import FeaturedMovies from './featuredMovies';

class App extends Component {
constructor () {
  super ();
  this.state={
    moviesList: [],
    featured:[],
    searchTerm: "",
  }
  this.API_NOW = 'e2c2243138750f562384ee018d3e19cf';
  this.page = 1;
}

getFeatured = async () => {
  const url2 = `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.API_NOW}&language=en-US&page=1`;
  let results2 = await fetch(url2);
  let data2 = await results2.json(); 
  console.log(data2)
  this.setState({
    featured: data2.results
  })
}

getMovies = async () => {
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.API_NOW}&language=en-US&page=${this.page}`;
  let results = await fetch(url);
  let data = await results.json(); 
  this.setState({
    moviesList: data.results
  })
}

seeMore = () => {
  this.page = (this.page + 1)
  this.getMovies()
}

componentDidMount(){
  this.getMovies();
  this.getFeatured();
}

onSearch= (text) => {
  this.setState({
    searchTerm: text,
  })
}
  render() {
    return (
      <div className="App">
      <NavBar textChange={this.onSearch} />
      <FeaturedMovies featuredOne={this.state.featured[0]}/>
      <MovieList movies={this.state.moviesList} searchProp = {this.state.searchTerm}/>
      {/* <Footer/> */}
      <div className="btn btn-light" onClick={this.seeMore}>Next page...</div>
      </div>
    );
  }
}

export default App;

