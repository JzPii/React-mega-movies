import React, { Component } from 'react';
import MovieCard from './MovieCard';
// import MovieFilter from './MovieFilter'
import FeaturedMovies from './featuredMovies'

export default class MovieList extends Component {
  render() {
    return (
<div>
    {/* <div className="container-fluid"  style={{height:500}}>
    <FeaturedMovies featuredOne={this.props.featuredOne}/>

    </div>

    <br/> */}
    

    <div className="my-4 mx-2 row">
    {this.props.movies
    .filter(xxx => xxx.title.toLowerCase().includes(this.props.searchProp.toLowerCase()))
    .map(movie =>
            <MovieCard {...movie} />    )}
        {/* <MovieFilter className="col-sm-12 col-lg-3"/> */}
    </div>
</div>
    )
  }
}
