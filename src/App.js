import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import MovieList from './MovieList';
import FeaturedMovies from './featuredMovies';
import ReactModal from 'react-modal';
import Hasan from './Hasan.js'
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
constructor () {
  super ();
  this.state={
    moviesList: [],
    featured:[],
    searchTerm: "",
    showModal: false,
    trailerId: null

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

getMovieTrailer = async (movie_id) => {
  const url = `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${this.API_NOW}&language=en-US`;
  let results = await fetch(url);
  let data = await results.json(); 
  this.setState({
   trailerId: data.results[0].key
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
componentDidUpdate() {
  console.log(this.state)
}
onSearch= (text) => {
  this.setState({
    searchTerm: text,
  })
}

changeModalToFalse= () => {
  this.setState({
    showModal: false
  })
}

changeModalToTrue= (id) => {
  this.setState({
    showModal: true
  });
  this.getMovieTrailer(id);
}
  render() {
    return (
      <div className="App">

    {/* <button onClick={() => this.setState({
      showModal:true
    })}>Open Modal</button> */}

    
    
<ReactModal isOpen={this.state.showModal} style={{backgroundColor: 'transperant'}}>
<Hasan handleState={this.changeModalToFalse} id= {this.state.trailerId}  />
</ReactModal>

      <NavBar textChange={this.onSearch} />
      <FeaturedMovies featuredOne={this.state.featured[0]} />
      <MovieList movies={this.state.moviesList} searchProp = {this.state.searchTerm} handleState={(id)=>this.changeModalToTrue(id)}/>
      {/* <Footer/> */}
      <div className="btn btn-secondary" onClick={this.seeMore} style={{marginBottom:'70px'}}>Next page...</div>
      </div>
    );
  }
}

export default App;

