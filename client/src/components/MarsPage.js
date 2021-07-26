import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import EditJournal from './EditJournal'

//const toDo = [oneToDo, twoToDo, threeToDo, fourToDo, fiveToDo, sixToDo, sevenToDo, eightToDo, nineToDo, tenToDo]
export default class MarsPage extends Component {
    state = {
        apod: [],
        weather: [],
        article: {},
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
        tenStatus: '',
        editModeEnabled: true
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

    
    
    handleChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		})
	}

    // toggleEditForm = () => {
	// 	this.setState(state => ({
	// 		editForm: !state.editForm
	// 	}))
	// }
    handleAddClick() {
        this.setState({ editModeEnabled: !this.state.editModeEnabled });
      }

    // handleEditClick() {
    //     this.setState({ editModeEnabled: !this.state.editModeEnabled });
    //   }

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
			.then(response => {
				this.setState({
            article: response.data,
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
				//this.props.getData();
			})
			.catch(err => console.log(err))
	}

    handleEditSubmit = event => {
		event.preventDefault();
        const { paragrah, oneToDo, oneStatus, twoToDo, twoStatus, threeToDo, threeStatus, fourToDo, fourStatus, fiveToDo, fiveStatus, sixToDo, sixStatus, sevenToDo, sevenStatus, eightToDo, eightStatus, nineToDo, nineStatus, tenToDo, tenStatus } = this.state;

		axios.post(`/mars-journal/${this.state.article._id}`, {
			paragrah,
            oneToDo,
            oneStatus,
            twoToDo,
            twoStatus,
            threeToDo,
            threeStatus,
            fourToDo,
            fourStatus,
            fiveToDo,
            fiveStatus,
            sixToDo,
            sixStatus,
            sevenToDo,
            sevenStatus,
            eightToDo,
            eightStatus,
            nineToDo,
            nineStatus,
            tenToDo,
            tenStatus
		})
			.then(response => {
				this.setState({
            updatedJournal: response.data,
			paragrah: response.data.paragrah,
            oneToDo: response.data.oneToDo,
            oneStatus: response.data.oneStatus,
            twoToDo: response.data.twoToDo,
            twoStatus: response.data.twoStatus,
            threeToDo: response.data.threeToDo,
            threeStatus: response.data.threeStatus,
            fourToDo: response.data.fourToDo,
            fourStatus: response.data.fourStatus,
            fiveToDo: response.data.fiveToDo,
            fiveStatus: response.data.fiveStatus,
            sixToDo: response.data.ixToDo,
            sixStatus: response.data.sixStatus,
            sevenToDo: response.data.sevenToDo,
            sevenStatus: response.data.sevenStatus,
            eightToDo: response.data.eightToDo,
            eightStatus: response.data.eightStatus,
            nineToDo: response.data.nineToDo,
            nineStatus: response.data.nineStatus,
            tenToDo: response.data.tenToDo,
            tenStatus: response.data.tenStatus
				})
				// trigger getData() in Projects.js to retrieve the current list
				// of projects from the server
				//this.props.getData();
			})
			.catch(err => console.log(err))
	}

    deleteProject = () => {
		// delete the project in the database
		axios.delete(`/mars-journal/${this.state.article._id}`)
			.then(() => {
				this.props.history.push('/mars-journal/');
			})
			.catch(err => console.log(err))
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
                    disabled={!this.state.editModeEnabled}
				/>
                <label htmlFor="oneToDo">Task 1 </label>
				<input
					type="text"
					id="oneToDo"
					name="oneToDo"
					value={this.state.name}
					onChange={this.handleChange}
                    disabled={!this.state.editModeEnabled}
				/>
                <select name="oneStatus" value={this.state.selectValue} 
                onChange={this.handleChange} disabled={!this.state.editModeEnabled}>
                    <option value="Status">Current Status</option>
                    <option value="To do">To do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>

                <label htmlFor="twoToDo">Task 2 </label>
				<input
					type="text"
					id="twoToDo"
					name="twoToDo"
					value={this.state.name}
					onChange={this.handleChange}
                    disabled={!this.state.editModeEnabled}
				/>
                <select name="twoStatus" value={this.state.selectValue} 
                onChange={this.handleChange} disabled={!this.state.editModeEnabled}>
                    <option value="Status">Current Status</option>
                    <option value="To do">To do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>

                <label htmlFor="threeToDo">Task 3 </label>
				<input
					type="text"
					id="threeToDo"
					name="threeToDo"
					value={this.state.name}
					onChange={this.handleChange}
                    disabled={!this.state.editModeEnabled}
				/>
                <select name="threeStatus" value={this.state.selectValue} 
                onChange={this.handleChange} disabled={!this.state.editModeEnabled}>
                    <option value="Status">Current Status</option>
                    <option value="To do">To do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>

                <label htmlFor="fourToDo">Task 4 </label>
				<input
					type="text"
					id="fourToDo"
					name="fourToDo"
					value={this.state.name}
					onChange={this.handleChange}
                    disabled={!this.state.editModeEnabled}
				/>
                <select name="fourStatus" value={this.state.selectValue} 
                onChange={this.handleChange} disabled={!this.state.editModeEnabled}>
                    <option value="Status">Current Status</option>
                    <option value="To do">To do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>

                <label htmlFor="fiveToDo">Task 5 </label>
				<input
					type="text"
					id="fiveToDo"
					name="fiveToDo"
					value={this.state.name}
					onChange={this.handleChange}
                    disabled={!this.state.editModeEnabled}
				/>
                <select name="fiveStatus" value={this.state.selectValue} 
                onChange={this.handleChange} disabled={!this.state.editModeEnabled}>
                    <option value="Status">Current Status</option>
                    <option value="To do">To do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>

                <label htmlFor="sixToDo">Task 6 </label>
				<input
					type="text"
					id="sixToDo"
					name="sixToDo"
					value={this.state.name}
					onChange={this.handleChange}
                    disabled={!this.state.editModeEnabled}
				/>
                <select name="sixStatus" value={this.state.selectValue} 
                onChange={this.handleChange} disabled={!this.state.editModeEnabled}>
                    <option value="Status">Current Status</option>
                    <option value="To do">To do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>

                <label htmlFor="sevenToDo">Task 7 </label>
				<input
					type="text"
					id="sevenToDo"
					name="sevenToDo"
					value={this.state.name}
					onChange={this.handleChange}
                    disabled={!this.state.editModeEnabled}
				/>
                <select name="sevenStatus" value={this.state.selectValue} 
                onChange={this.handleChange} disabled={!this.state.editModeEnabled}>
                    <option value="Status">Current Status</option>
                    <option value="To do">To do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>

                <label htmlFor="eightToDo">Task 8 </label>
				<input
					type="text"
					id="eightToDo"
					name="eightToDo"
					value={this.state.name}
					onChange={this.handleChange}
                    disabled={!this.state.editModeEnabled}
				/>
                <select name="eightStatus" value={this.state.selectValue} 
                onChange={this.handleChange} disabled={!this.state.editModeEnabled}>
                    <option value="Status">Current Status</option>
                    <option value="To do">To do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>

                <label htmlFor="nineToDo">Task 9 </label>
				<input
					type="text"
					id="nineToDo"
					name="nineToDo"
					value={this.state.name}
					onChange={this.handleChange}
                    disabled={!this.state.editModeEnabled}
				/>
                <select name="nineStatus" value={this.state.selectValue} 
                onChange={this.handleChange} disabled={!this.state.editModeEnabled}>
                    <option value="Status">Current Status</option>
                    <option value="To do">To do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>

                <label htmlFor="tenToDo">Task 10 </label>
				<input
					type="text"
					id="tenToDo"
					name="tenToDo"
					value={this.state.name}
					onChange={this.handleChange}
                    disabled={!this.state.editModeEnabled}
				/>
                <select name="tenStatus" value={this.state.selectValue} 
                onChange={this.handleChange} disabled={!this.state.editModeEnabled}>
                    <option value="Status">Current Status</option>
                    <option value="To do">To do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>

				<button type="submit" onClick={this.handleAddClick.bind(this)} >Add</button>
            </form>
            <button onClick={this.handleAddClick.bind(this)}>Edit</button>
            <button onClick={this.handleEditSubmit} type="submit">Re-submit</button>
            <button onClick={this.deleteProject}>Forget about it, I am off today 🗑</button>
            </div>
        )
    }
}
