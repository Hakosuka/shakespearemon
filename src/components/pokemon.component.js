import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ShowPokemon extends Component {
	constructor(props){
		super(props);
		this.state = { 
			pkmn_name: "",
			pkmn_description: ""
		};
	}
	//Retrieves the current Pokémon from the back-end to update the page's state.
	componentDidMount(){
		let pkmn_name = this.props.match.params.name
		axios.get('http://localhost:4000/pokemon/' + pkmn_name)
			.then(response => {	
				this.setState({ 
					pkmn_name: response.data.name,
					pkmn_description: response.data.description });
			})
			.catch(function(error){
				console.log(error);
			});
	}
    render() {
        return (
			<div>
				<p>Name: {this.state.pkmn_name}</p>
				<p>Description: {this.state.pkmn_description}</p>
			</div>);
    }
}