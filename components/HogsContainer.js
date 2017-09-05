import React, { Component } from 'react';
import Hog from './Hog'

export default class HogsContainer extends Component {

	constructor(props) {
		super(props)

		this.state = {
			orderBy: 'name',
			filter: 'all',
			hogs: this.props.hogs
		}
	}

	handleChange = (event) => {
		this.setState({
			orderBy: event.target.value
		})
	}

	sortHogs = (a, b) => {
		let filter = this.state.orderBy
		if (filter === 'name') {
			return (a.name > b.name ? 1 : -1)
		} else {
			return (a[this.weightKey(a)] - b[this.weightKey(b)])
		}
	}

	weightKey = (obj) => {
		return Object.keys(obj).filter(key => key.includes('weight'))[0]
	}

	filterHogs = (filter) => {
		switch (filter) {
			case 'all':
				return this.props.hogs
			case 'greased':
				return this.props.hogs.filter(hog => hog.greased)
			case 'not greased':
				return this.props.hogs.filter(hog => !hog.greased)
		}

	}

	handleFilter = (event) => {
		this.setState({
			filter: event.target.value,
			hogs: this.filterHogs(event.target.value)
		})
	}

	render() {
		return (
			<div className='ui form'>
				<div className='two fields'>
					<div className='field'>
						<label>order by </label>
						<select className='ui dropdown' value={this.state.orderBy} onChange={this.handleChange}>
							<option value='name'>name</option>
							<option value='weight'>weight</option>
						</select>
					</div>
					<div className='field'>
						<label>filter by </label>
						<select className='ui dropdown' value={this.state.filter} onChange={this.handleFilter}>
							<option value='all'>all</option>
							<option value='greased'>greased</option>
							<option value='not greased'>not greased</option>
						</select>		
					</div>
				</div>
				<br/>		
				<div className='ui cards'>
						{this.state.hogs.sort(this.sortHogs).map((hog, index) => < Hog key={index} hog={hog} />)}
				</div>
			</div>
		)
	}
}
