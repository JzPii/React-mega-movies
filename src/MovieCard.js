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
            <h3 className="font-weight-bold d-flex align-items-center justify-content-center"
                style={{fontFamily: 'Poiret One',  
                minHeight: '95px', marginBottom: '0'}}>{this.props.title}</h3>
            <p className="text-right font-italic text-muted">Rated: {this.props.vote_average}/10 </p>

            <a class="btn btn-outline-light" style={{border: '0'}} data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Movie overview...</a>
                <div class="collapse multi-collapse" id="multiCollapseExample1">
                    <p className="text-left" style={{}}>{this.props.overview}</p>
                </div>
            
        </div>
    </div>
</div>

    )
  }
}

// npm install --save react-infinite-scroll-component