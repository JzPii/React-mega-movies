
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import YouTube from '@u-wave/react-youtube';

export default class Hasan extends Component {
  render() {
   
    return (
      <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">{this.props.title}</h5>

        {/* <button onClick={this.props.handleState}> Hide Modal </button> */}

      </div>
      <div className="modal-body d-flex justify-content-center">

      <YouTube className="col-sm-12 col-md-8 col-lg-12" height={400}
        video={this.props.id}
        autoplay
      />
      </div>
      <div className="modal-footer">
        {/* <button type="button" className="btn btn-primary">Save changes</button> */}
        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.props.handleState}>Close</button>
      </div>
    </div>
    )
  }
}


