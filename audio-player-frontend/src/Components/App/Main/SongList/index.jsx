import React, { Component } from 'react';
import {
	Link
} from 'react-router-dom'
import img from '../../../../Assets/img/beat-solo-2.jpg'

export default class SongList extends Component {

	render() {
		let { match } = this.props
		let List = this.props.data.map((song) => {
			return (
				<div key={song.id} className="col-4 col-md-4 col-lg-2" align="center">
					<li className="media">
						<div className="box">
							<img className="album" src={img} alt={song.name} />
							<div className="active">
								<button onClick={() => {
									this.props.handler(song.src)
								}}>
									{(this.props.currentSong === song.src && this.props.play === true) ?
										<i className="fa fa-pause" aria-hidden="true"></i> :
										<i className="fa fa-play" aria-hidden="true"></i>
									}
								</button>
							</div>
						</div>
						<div className="media-body">
							<Link to={match.url + '/' + song.id}>{song.name}</Link>
							<button onClick={()=>{this.props.addtoPlaylist(song.id)}}>+</button>
						</div>
					</li>
				</div>
			);
		})
		return (
			<div align="center">
				<br />
				<div className="row">
					<ul className="list-unstyled">
						{List}
					</ul>
				</div>
			</div>
		);
	}
}