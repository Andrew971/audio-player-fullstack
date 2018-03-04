import React, { Component } from 'react';
import axios from 'axios';
import img from '../../../../Assets/img/beat-solo-2.jpg'

export default class SongDetails extends Component {
	constructor() {
		super()
		this.state = {
			details: {},
			List: []
		}

	}
	componentWillMount = () => {
		axios.get("http://localhost:8080/data")
			.then((res) => {
				let details = res.data.find((song) => {
					return song.id === Number(this.props.match.params.songId)
				})
				this.setState({
					details: details,
					List: res.data
				})
			})

	}

	render() {
		let details = this.state.details
		let List = this.state.List.map((song) => {
			return (
				<div key={song.id} align="left">
					<li className="media row">
						<div className="box col-4 col-md-4 col-lg-5">
							<button onClick={() => { this.props.handler(song.src) }}>
								{(this.props.currentSong === song.src) ?
									<i className="fa fa-pause" aria-hidden="true"></i> :
									<i className="fa fa-play" aria-hidden="true"></i>
								}
							</button>
						</div>
						{song.name}

					</li>
				</div>
			);
		})
		return (
			<main className="container box1" align="center">
				<div className="row bio-grids">
					<div className="col-12 col-sm-12 col-md-6 bio-grid-left">
						<div className="box">
							<h3 className="movie-title">
								{details.name}
							</h3>
							<img className="album1" src={img} alt="img" />
							<div className="active">
								<button onClick={() => { this.props.handler(details.src) }}>
									{(this.props.currentSong === details.src) ?
										<i className="fa fa-pause" aria-hidden="true"></i> :
										<i className="fa fa-play" aria-hidden="true"></i>
									}								
									</button>
							</div>
							<p>{details.overview}</p>
						</div>
					</div>
					<div className="col-12 col-sm-12 col-md-6 bio-grid-right">
						<div className="">
							<h3>List of songs </h3>
							<div className="list-song">
							<ul className="list-unstyled">

								{List}
							</ul>
							</div>
						</div>

					</div>
				</div>
			</main>
		);
	}
}