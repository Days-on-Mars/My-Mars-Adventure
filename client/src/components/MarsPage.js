import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Dropdown, DropdownButton } from 'react-bootstrap';


export default class MarsPage extends Component {
    state = {
        apod: [],
        weather: [],
        paragrah: '',
        oneToDo: '',
        oneStatus: '',
        twoToDo: '',
        twoStatus: '',
        threeToDo: '',
        threeStatus: '',
        fourToDo: '',
        fourStatus: '',
        fiveToDo: '',
        fiveStatus: '',
        sixToDo: '',
        sixStatus: '',
        sevenToDo: '',
        sevenStatus: '',
        eightToDo: '',
        eightStatus: '',
        nineToDo: '',
        nineStatus: '',
        tenToDo: '',
        tenStatus: ''
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

    handleSubmit = event => {
		event.preventDefault();
		// make a post request to the server
		axios.post('/mars-journal', {
			paragrah: this.state.paragrah,
            oneToDo: this.state.oneToDo,
            oneStatus: this.state.oneStatus,
            twoToDo: this.state.twoToDo,
            twoStatus: this.state.twoStatus,
            threeToDo: this.state.threeToDo,
            threeStatus: this.state.threeStatus,
            fourToDo: this.state.fourToDo,
            fourStatus: this.state.fourStatus,
            fiveToDo: this.state.fiveToDo,
            fiveStatus: this.state.fiveStatus,
            sixToDo: this.state.sixToDo,
            sixStatus: this.state.sixStatus,
            sevenToDo: this.state.sevenToDo,
            sevenStatus: this.state.sevenStatus,
            eightToDo: this.state.eightToDo,
            eightStatus: this.state.eightStatus,
            nineToDo: this.state.nineToDo,
            nineStatus: this.state.nineStatus,
            tenToDo: this.state.tenToDo,
            tenStatus: this.state.tenStatus
		})
			.then(() => {
				this.setState({
			paragrah: this.state.paragrah,
            oneToDo: this.state.oneToDo,
            oneStatus: this.state.oneStatus,
            twoToDo: this.state.twoToDo,
            twoStatus: this.state.twoStatus,
            threeToDo: this.state.threeToDo,
            threeStatus: this.state.threeStatus,
            fourToDo: this.state.fourToDo,
            fourStatus: this.state.fourStatus,
            fiveToDo: this.state.fiveToDo,
            fiveStatus: this.state.fiveStatus,
            sixToDo: this.state.sixToDo,
            sixStatus: this.state.sixStatus,
            sevenToDo: this.state.sevenToDo,
            sevenStatus: this.state.sevenStatus,
            eightToDo: this.state.eightToDo,
            eightStatus: this.state.eightStatus,
            nineToDo: this.state.nineToDo,
            nineStatus: this.state.nineStatus,
            tenToDo: this.state.tenToDo,
            tenStatus: this.state.tenStatus
				})
				// trigger getData() in Projects.js to retrieve the current list
				// of projects from the server
				this.props.getData();
			})
			.catch(err => console.log(err))
	}
    
    
    handleChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		})
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

                <form onSubmit={this.handleSubmit}>
				<label htmlFor="paragrah">Journal on Mars </label>
				<input
					type="text"
					id="paragrah"
					name="paragrah"
					value={this.state.name}
					onChange={this.handleChange}
				/>
                <label htmlFor="oneToDo">Task 1 </label>
				<input
					type="text"
					id="oneToDo"
					name="oneToDo"
					value={this.state.name}
					onChange={this.handleChange}
				/>
                <select name="oneStatus" defaultValue={this.state.selectValue} 
                onChange={this.handleChange}>
                    <option value="To do">To do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
				<button type="submit">Add for Today</button>
			</form>
            </div>
        )
    }
}
