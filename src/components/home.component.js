import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Home extends Component {
	constructor(props){
		super(props);
		this.onChangePokemonName = this.onChangePokemonName.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.state = {
			entered_pokemon: "",
		}
	}
	onChangePokemonName(event) {
		this.setState({
			entered_pokemon: event.target.value
		});
	}
	onSubmit(event){
		event.preventDefault(); //back-end isn't ready yet, so the app can't handle the submit behaviour properly yet.
		console.log(`Form submitted:`);
		console.log(`Pokemon requested: ${this.state.entered_pokemon}`);
		this.setState({
			entered_pokemon: ""
		})
	}
    render() {
        return (
            <div>
                <p>Valorous morrow to thee, Trainer! Welcome to the realm of Pokémon! Mine name is Shakespeare! 
				People calleth me the Pokémon bard! This realm is did inhabit by creatures did doth clepe Pokémon! 
				For some people, Pokémon art pets. Others useth them for fights. Myself...I study Pokémon as a profession.</p>
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<label>Pokémon Name:</label>
						<input type="text" 
							className="form-control" 
							value={this.state.entered_pokemon} 
							onChange={this.onChangePokemonName}/>
					</div>
					<div>
						<Link to={"/pokemon/"+this.state.entered_pokemon}>
							<input type="submit" value="GO!" className="btn btn-success"/>
						</Link>
					</div>
				</form>
            </div>
        )
    }
}