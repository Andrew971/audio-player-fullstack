import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import LogButton from '../../../js/LogButton.jsx'

export default class Nav extends Component {
	render() {
		return (
			<aside className="nav-bar-container">
				<div className="sidenav">
					<h1><Link to='/'>Player</Link></h1>
					<hr />
					<input type="search" id="maRecherche" name="q" />
					<hr />
					<a href="">About</a>
					<a href="">Services</a>
					<a href="/playlist">My Playlist</a>
					<LogButton/>
				</div>
			</aside>
		);
	}
}