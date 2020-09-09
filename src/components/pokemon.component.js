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
				var dummy_pkmn = {"name": "Slowpoke", 
					"description": "Slowpoke hath vacant eyes yond nev'r seemeth focused, curled ears, and a rounded, tan muzzle. 't hath four forks, each of which ends in a single white claw. Its long, tapering tail hath a white tip. This tail drips a sweet, sappy substance yond is attractive to many species of gudgeon. Slowpoke uses the tail as a fishing lure. The tail oft breaks off, but 'twill groweth back. In Alola, its tail is oft did dry and did lay-to in home-did cook stews. Slowpoke hath a notoriously dim intellect and oft forgets what 't wast doing. 't doth take a long time to respond to outside stimuli. For example, 't can taketh up to five seconds to process teen and can taketh an entire day to notice at which hour its tail hath been bitten. Slowpoke is commonly did find at the water's edge. In some places, 't is did doth believe yond slowpoke's yawn causes rain. This pokémon is worshiped in those areas."}
				console.log("Response: " + response);
				console.log("Data: " + response.data);
				console.log("Stringified data: " + JSON.stringify(response.data));
				this.setState({ 
					pkmn_name: dummy_pkmn.name, //response.data.name,
				pkmn_description: dummy_pkmn.description });//response.data.description});
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