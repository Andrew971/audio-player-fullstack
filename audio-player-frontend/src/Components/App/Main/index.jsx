import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import SongList from './SongList'
import SongDetails from './SongDetails'


export default class Main extends Component {
	render() {
		const { match } = this.props
		
		return (
			<main className="container-fluid content">
				<Switch>
				<Route exact path={match.url} render={(routeProps) =>
						<SongList
							{...routeProps}
							data={this.props.data}
							handler={this.props.handler}
							currentSong={this.props.currentSong}
							playPause={this.props.playPause}
							play={this.props.play}
							addtoPlaylist={this.props.addtoPlaylist}
						/>
					}
					/>
					<Route path={`${match.url}/:songId`} render={({match}) =>
						<SongDetails
							data={this.props.data}
							handler={this.props.handler}
							currentSong={this.props.currentSong}
							match={match}
							
						/>
					} />
				</Switch>
				
			</main>
		);
	}
}