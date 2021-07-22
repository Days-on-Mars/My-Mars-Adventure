import "./App.css";
// import axios from "axios";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import { render } from "@testing-library/react";
import MarsPage from "./components/MarsPage";
import Navbar from "./components/Navbar";

class App extends React.Component {
	render() {
		return (
			<>
				<BrowserRouter>
					<Navbar />
					<Switch>
						{/*<Route exact path ={'/beers'} render={() => {
              return <beers beerData={this.state.beers}/>
            }} /> */}
						<Route exact path={"/Mars-Journal"} component={MarsPage} />
					</Switch>

					{/* <DynamicNavbar>
						<Route exact path="/" component={App} />
						<Route path="/Mars-Journal" component={MarsPage} />
						<Route path="/dashboard" component={dashboard} />
						<Route path="/log-out" component={App} />
					</DynamicNavbar> */}
				</BrowserRouter>
			</>
		);
	}
}
export default App;
