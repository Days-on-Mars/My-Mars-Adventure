import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class MarsPage extends Component {
    state = {
        apod: [],
        weather: []
    }

    getApodData = () => {
		axios.get('https://api.nasa.gov/planetary/apod?api_key=rWoTXXeBvjPqFXL8VgQVicRTI2BLUNTmRdpbPOke')
			.then(response => {
				console.log("1st checking apod api returning data:", response.data.url);
				this.setState({
					apod: response.data.url
				})
			})
			.catch(err => console.log(err))
	}

    getWeatherData = () => {
		axios.get('https://api.nasa.gov/DONKI/FLR?startDate=2021-07-10&endDate=2021-07-22&api_key=rWoTXXeBvjPqFXL8VgQVicRTI2BLUNTmRdpbPOke&feedtype=json&ver=1.0')
			.then(response => {
				console.log("2nd checking weather api returning data:", response);
				this.setState({
					weather: response.data
				})
			})
			.catch(err => console.log(err))
	}


	componentDidMount() {
		this.getApodData();
        this.getWeatherData();
	}


    render() {
        const  picture  = this.state.apod;
        const  solar  = this.state.weather;
        console.log('3rd checking solar variable:', solar)
        return (
            <div>
                <h2>Mars Life of User XYZ</h2>
                <p>Welcome back, dear fellow Martian. As one of the first humans migrated to Mars, your journals are extremely valuable for the future generations to come.</p>
                <img src = {picture} style={{width: '600px'}} alt='space photo'></img>
                <h4>Attention, solar activities, plan your day accordingly</h4>
                {solar.map(elm =>
                <div key={elm.flrID}>
                <p>Solar flare started at {elm.beginTime}, ended at {elm.endTime}.</p>
                </div>
                )}
                <p>Time recorded using Earth time. Disruption to data could occur due to space weather activities</p>
                <h2>place holder for journal entry</h2>
            </div>
        )
    }
}
