import React, { Component } from 'react';
import HogDetails from './HogDetails';

export default class Hog extends Component {

	constructor(props) {
		super(props)
		
		this.picName = (name) => {
			return `${name.toLowerCase().replace(/ /g, "_")}.jpg`
		}

		this.state = {
			details: false,
			hidden: false,
			imageUrl: this.picName(this.props.hog.name)
		}

	}

	handleClick = () => {
		this.setState({
			details: !this.state.details
		})
	}

	hide = () => {
		this.setImage()
	}

	hogImage = () => {
		return (
			<div className='image' onClick={this.handleClick}>
					<img src={this.state.imageUrl}/>
			</div>
		)
	}

	setImage = () => {
		if (this.state.hidden) {
			this.setState({
				imageUrl: `/hog-imgs/${this.picName(this.props.hog.name)}`,
				hidden: !this.state.hidden
			}) 
		}
		else {
			this.randomPiglet()
		}
	}

	hogContent = () => {
		return (
			<div className='content'>
				<p className='header' >{this.props.hog.name}</p>
				{this.state.details && < HogDetails hog={this.props.hog}/> }
			</div>
		)
	}

	componentWillMount = () => {
		this.setImage()
	}

	randomPiglet = () => {
		fetch('https://api.giphy.com/v1/gifs/random?tag=miss+piggy&api_key=d32c82cd24b34bac8c8959b9c62ad18f&limit=1')
			.then((res) => res.json() )
				.then(res => this.setState({imageUrl: res.data.image_url, hidden: !this.state.hidden}))
	}


	render() {
		return (
			<div className='ui card' >
				{this.hogImage()}
				{!this.state.hidden && this.hogContent() }
				<button className='ui toggle button' onClick={this.hide}>{this.state.hidden ? 'show' : 'hide'}</button>
			</div>
		)
	}
}

/*
{'name': "Mudblood",
     'specialty': "Mediocre magic",
     'greased': false,
     'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water': 2.0,
     'highest medal achieved': 'bronze'
  }
  */
