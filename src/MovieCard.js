import React, { Component } from 'react'

export default class MovieCard extends Component {
  render() {
    return (
<div className="col-lg-3 col-sm-12 col-md-6">
    <div className="card" style={{marginBottom:20}}>
        <img className="card-img-top" alt="img" style={{}} src={'http://image.tmdb.org/t/p/w500/' + this.props.poster_path} />
        <div className="container card-body">
            <div className="d-flex justify-content-around mb-3">
                <button type="button" className="btn btn-outline-light rounded-2 col-5" onClick={()=> this.props.hello(this.props.id)}>Trailer</button>
                <button type="button" className="btn btn-outline-danger rounded-2 col-5">Chill now</button>
            </div>
            <h3 className="font-weight-bold" style={{fontFamily: 'fantasy'}}>{this.props.title}</h3>
            <p className="text-right font-italic text-muted">Rated: {this.props.vote_average}/10 </p>
            <p className="text-left" style={{}}>{this.props.overview}</p>
        </div>
    </div>
</div>

    )
  }
}
