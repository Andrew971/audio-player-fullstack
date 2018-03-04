import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Nav from './Nav'
import Main from './Main'
import Player from './Player'
import Signup from './Signup'
import Login from './Login'
import Playlist from './Playlist'
import axios from 'axios'
import PrivateRoute from '../../js/PrivateRoute'


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      List: [],
      Playlist: [],
      currentSong: "",
      play: false

    }
    this.apiUrl = 'http://localhost:8080/data'
    this.apiPlaylist = 'http://localhost:8080/playlist'
  }
  componentWillMount = () => {
    axios.get(this.apiUrl).then((res) => {
      this.setState({ data: res.data })
    })

  }


  addtoPlaylist = (id) => {
    const song = this.state.data.find((item) => {
      return item.id === id
    })
    axios.post(this.apiPlaylist, song)
      .then((res) => {
        this.setState({ Playlist: res.data })
      })

  }

  handler = (src) => {
    if (this.state.List.indexOf(src) === -1) {
      this.state.List.push(src)
    }


    let songSrc = src

    this.setState({
      List: this.state.List,
      currentSong: songSrc,
      play: !this.state.play
    })
  }
  playPause = () => {

    this.setState({ play: !this.state.play })

  }

  changeSong = (value) => {

    let prevSong = this.state.List.indexOf(this.state.currentSong) + value;
    this.setState({
      currentSong: this.state.List[prevSong],
    });

  }



  render() {

    return (
      <div className="container-fluid">
        <Nav />
        <Route path="/" render={(routeProps) =>
          <Main
            {...routeProps}
            data={this.state.data}
            handler={this.handler}
            playPause={this.playPause}
            currentSong={this.state.currentSong}
            play={this.state.play}
            addtoPlaylist={this.addtoPlaylist}
          />
        } />
        <Switch>
          {/* <PrivateRoute path="/Home" render={(routeProps) =>
            <Main
              {...routeProps}
              data={this.state.data}
              handler={this.handler}
              playPause={this.playPause}
              currentSong={this.state.currentSong}
              play={this.state.play}
              addtoPlaylist={this.addtoPlaylist}
            />
          } />  */}
          <PrivateRoute path="/playlist" render={(routeProps) =>
            <Playlist
              {...routeProps}
              data={this.state.data}
              handler={this.handler}
              playPause={this.playPause}
              currentSong={this.state.currentSong}
              play={this.state.play}
              Playlist={this.state.Playlist}
            />
          } />

          <Route path="/Login" component={Login} />

          <Route path="/Signup" component={Signup} />
        </Switch>
        <Player
          List={this.state.List}
          changeSong={this.changeSong}
          currentSong={this.state.currentSong}
          play={this.state.play}
          playPause={this.playPause}
          data={this.state.data}
        />

      </div>
    );
  }
}


