import React, { Component } from 'react'
import PacmanLoader from 'react-spinners/PacmanLoader';

export default class FeaturedMovies extends Component {
  constructor () {
    super()
    this.state = {
      loading: true
    }
  }
  render() {
    if (!this.props.featuredOne) {
        return (
        <div className="" style={{minHeight:'800px', marginTop: '140px', paddingLeft:'25%'}}>
            <PacmanLoader
              className=""
              style={{marginLeft:'70px'}}
              sizeUnit={"px"}
              size={120}
              loading={this.state.loading}
              color={'burlywood'}>
            </PacmanLoader>
        </div>
        )
    }
return(
<div className="container-fluid " style={{paddingLeft:'0px', paddingRight:'0px'}}>
    <div>
    <img className="card-img" src={'http://image.tmdb.org/t/p/original/' + this.props.featuredOne.backdrop_path}  alt='feat'/>
    
    <div className="text-center imgoverlay hidden-sm hidden-md">
        <h2 className="font-weight-bold" style={{fontFamily: 'Poiret One', }}>{this.props.featuredOne.title}</h2>
        {/* <p className="container card-text ">{this.props.featuredOne.overview}</p> */}
        {/* <button type="button" className="btn btn-outline-light">let's chill.</button>
    
            <div className="mt-3">
                <button className=" btn btn-outline-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Genre
                </button>
                <div className="dropdown-menu m-0 container-fluid" aria-labelledby="dropdownMenuButton">
                  <div className="row m-0" >
                    <div className="bgcl col-4">
                    <button type="button" className="btn btn-outline-light col-12 border-0">Action</button>
                    <button type="button" className="btn btn-outline-light col-12 border-0">Crime</button>
                    <button type="button" className="btn btn-outline-light col-12 border-0">Romance</button>
                    </div>
                
                  <div className="bgcl col-4">
                    <button type="button" className="btn btn-outline-light col-12 border-0">Romance</button>
                    <button type="button" className="btn btn-outline-light col-12 border-0">Horror</button>
                    <button type="button" className="btn btn-outline-light col-12 border-0">Comedies</button>
        
                  </div>  
                  <div className="bgcl col-4">
                    <button type="button" className="btn btn-outline-light col-12 border-0">Anime</button>
                    <button type="button" className="btn btn-outline-light col-12 border-0">Sci-fi</button>
                    <button type="button" className="btn btn-outline-light col-12 border-0">Documentaries</button>
                  </div> 
                  </div>
                </div>
            </div> */}
      </div>
    </div>     
</div>


    )
  }
}
