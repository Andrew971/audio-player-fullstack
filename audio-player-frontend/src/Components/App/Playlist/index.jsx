import React, { Component } from 'react';
import {
	Link
} from 'react-router-dom'
import img from '../../../Assets/img/beat-solo-2.jpg'
import axios from 'axios'

export default class Playlist extends Component {
  constructor(){
    super()
    this.state={
      Playlist:[]
  }
  this.apiPlaylist = 'http://localhost:8080/playlist'
}
componentWillMount = () => {
  axios.get(this.apiPlaylist).then((res) => {
    this.setState({ Playlist: res.data })
  })
}

    render() {
      let { match } = this.props
      let List = this.state.Playlist.map((song) => {
        return (
          <div key={song.id} className="col-4 col-md-4 col-lg-2" align="center">
            <li className="media">
              <div className="box">
                <img className="album" src={img} alt={song.name} />
                <div className="active">
                  <button onClick={() => { 
                    this.props.handler(song.src)
                     }}>
                    {(this.props.currentSong === song.src)?
                      <i className="fa fa-pause" aria-hidden="true"></i> :
                      <i className="fa fa-play" aria-hidden="true"></i>
                    }								</button>
                </div>
              </div>
              <div className="media-body">
                <Link to={match.url +'/'+ song.id}>{song.name}</Link>
              </div>
            </li>
          </div>
        );
      })
      return (
        			<main className="container-fluid content">

        <div align="center">
          <br />
          <div className="row">
            <ul className="list-unstyled">
              {List}
            </ul>
          </div>
        </div>
        </main>
      );
    }
  }