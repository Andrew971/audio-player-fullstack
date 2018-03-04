import React, { Component } from 'react';
// import {Link} from 'react-router-dom'

export default class Player extends Component {
	constructor() {
		super()
		this.state = {
			progress: 0,
			currentTimeDisplay: "0:00",
			totalTimeDisplay: "0:00",
		}
	}
	componentDidUpdate() {
		(this.props.play) ? this.audio.play() : this.audio.pause();
		this.audio.addEventListener('timeupdate', this.getDuration);
		this.audio.addEventListener('timeupdate', this.updateProgress);
		this.audio.addEventListener('timeupdate', this.updateTime);
	}


	setProgress = (e) => {
		let target = e.target.nodeName === "SPAN" ? e.target.parentNode : e.target;
		let width = target.clientWidth;
		let rect = target.getBoundingClientRect();
		let offsetX = e.clientX - rect.left;
		let duration = this.audio.duration;
		let currentTime = (duration * offsetX) / width;
		let progress = (currentTime * 100) / duration;

		this.setState({
			progress: progress
		});

		this.audio.currentTime = currentTime;
	}

	updateProgress = () => {
		let duration = this.audio.duration;
		let currentTime = this.audio.currentTime;
		let progress = (currentTime * 100) / duration;

		this.setState({
			progress: progress
		});
	}

	/* Time Functions */
	getDuration = () => {
		let duration = Math.floor(this.audio.duration);
		let minutes = Math.floor(duration / 60);
		let seconds = duration % 60;

		// seconds = (seconds >= 10) ? seconds : '0' + seconds;
		let totalTimeDisplay = minutes + ":" + seconds;

		this.setState({
			totalTimeDisplay: totalTimeDisplay
		});
	}

	updateTime = () => {
		let currentTime = Math.floor(this.audio.currentTime);
		let minutes = Math.floor(currentTime / 60);
		let seconds = currentTime % 60;

		seconds = (seconds >= 10) ? seconds : '0' + seconds;
		let currentTimeDisplay = minutes + ":" + seconds;

		this.setState({
			currentTimeDisplay: currentTimeDisplay
		});
	}


	

	render() {
		const timeline = { width: this.state.progress + '%' };

		return (


			<div className="footer" align="center" >
				<br />
				<div className="audioplayer">
				<button onClick={() => { this.props.changeSong(-1) }} disabled={(this.props.List.indexOf(this.props.currentSong) === 0) || this.props.List.length === 0}>
					<i className="fa fa-backward" aria-hidden="true"></i>
				</button>
				<button onClick={() => { this.props.playPause() }} >
					{this.props.play ?
						<i className="fa fa-pause" aria-hidden="true"></i> :
						<i className="fa fa-play" aria-hidden="true"></i>
					}
				</button>
				<button onClick={() => { this.props.changeSong(1) }} disabled={(this.props.List.indexOf(this.props.currentSong) === this.props.List.length - 1) || this.props.List.length === 0}>
					<i className="fa fa-forward" aria-hidden="true"></i>
				</button>
				
				<br />
				<div className="timeline">
					<div className="current-time">{this.state.currentTimeDisplay}</div>
					<div className="player-progress-container" onClick={this.setProgress} ref={(self) => { this.timeline = self }}>
						<span
							className="player-progress-value"
							style={timeline} ref={(self) => { this.handle = self }}>
						</span>
					</div>
					<div className="total-time">{this.state.totalTimeDisplay}</div>
				</div>


				<audio src={this.props.currentSong} ref={(audio) => { this.audio = audio }} />
			</div>
			</div>
		);
	}
}