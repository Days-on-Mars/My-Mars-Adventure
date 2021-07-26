import React, { Component } from 'react';
import './Dashboard.css';
import axios from 'axios'

export default class Dashboard extends Component {

    state = {
        search: '',
        task: false,
        journal: false,
        month: 'all',
        day: 'all',
        year: 'all'
      }
    
      handleInputChange = e => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

      componentDidMount() {
		axios.get('/mars-journal')
        .then((result) => {
            console.log('result', result);
        })
    }

    render() {
        return (
            <div>
                <h1><b></b></h1>
                <p>Search archived Days on Mars journal entries and tasks</p>

                <label htmlFor="search"></label>
                <input
                type="search"
                name="search"
                id="search"
                value={this.state.search}
                onChange={this.handleChange}
                />

            <label>
              Journal Entry
              <input
                name="journal-entry"
                type="checkbox"
                checked={this.state.journal}/>
            </label>

            <label>
             Task
              <input
                name="task"
                type="checkbox"
                checked={this.state.task}/>
            </label>

            <div>
            </div>

            </div>
        )
    }
}
