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
				{/*TODO: Access the data from the response and get it to render! */}
				console.log("Type: " + typeof response);
				console.log("Response: " + response);
				console.log("Data: " + response.data);
				this.setState({ 
					pkmn_name: response.data.name,
					pkmn_description: response.data.description});
			})
			.catch(function(error){
				console.log(error);
			});
	}
    render() {
		console.log("Render() called");
		console.log("State type: " + typeof this.state.selected_pkmn);
		console.log("State: " + JSON.stringify(this.state.selected_pkmn));
        return (
			<div>
				<p>Name: {this.state.pkmn_name}</p>
				<p>Description: {this.state.pkmn_description}</p>
			</div>);
    }
}