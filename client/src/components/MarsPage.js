import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import axios from "axios";

export default class MarsPage extends Component {
	state = {
		apod: [],
		weather: [],
	};

	getApodData = () => {
		axios
			.get(
				"https://api.nasa.gov/planetary/apod?api_key=rWoTXXeBvjPqFXL8VgQVicRTI2BLUNTmRdpbPOke"
			)
			.then((response) => {
				console.log("1st checking apod api returning data:", response.data.url);
				this.setState({
					apod: response.data.url,
				});
			})
			.catch((err) => console.log(err));
	};

	getWeatherData = () => {
		axios
			.get(
				"https://api.nasa.gov/DONKI/FLR?startDate=2021-07-01&endDate=2021-07-20&api_key=rWoTXXeBvjPqFXL8VgQVicRTI2BLUNTmRdpbPOke&feedtype=json&ver=1.0"
			)
			.then((response) => {
				console.log("2nd checking weather api returning data:", response);
				this.setState({
					weather: response.data,
				});
			})
			.catch((err) => console.log(err));
	};

	componentDidMount() {
		this.getApodData();
		this.getWeatherData();
	}

	render() {
		const { picture } = this.state;
		return (
			<div>
				<h2>test</h2>
				<img src={picture} alt="astronomyPic" />
			</div>
		);
	}
}
