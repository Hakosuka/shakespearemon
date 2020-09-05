//React and Navigation
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
//Components
import Home from "./components/home.component";
import ShowPokemon from "./components/pokemon.component";

class App extends Component {
	render() {
		return(
			<Router>
				<div className="container">
					<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
						<Link to="/" className="navbar-brand">Shakespearemon</Link>	
					</nav>
					<br/>
					<Route path="/" exact component={Home}/>
					<Route path="/pokemon/:name" component={ShowPokemon}/>
				</div>
			</Router>
		);
	}
}
export default App;
