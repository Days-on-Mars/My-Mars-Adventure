import React, { Component } from 'react';
import './Dashboard.css';
import axios from 'axios'

export default class Dashboard extends Component {

    state = {
        search: '',
        task: false,
        journal: false,
        journaladded: [],
        error: false,
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
		    axios.get('/dashboard')
        .then((result) => {
          console.log('result.data', result.data);
          this.setState({
            journaladded: result.data.journaladded,
          })
        })
    }

    render() {
      
        return (

          
            <div style={{ 
              backgroundImage: "url(/rust-dunes.png)",
              backgroundSize: 'cover', 
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              height: '100vh',
              width: '100vw'
              }}>

                <h1>Search archived Days on Mars journal entries</h1>
            
                <input
                type="text"
                name="search"
                value={this.state.search}
                placeholder="Search your archive"
                onChange={this.handleInputChange}
                />
                <label htmlFor="search"></label>

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

          {this.state.journaladded.map(singleEntry => {
            return (

              <div>

                <h3>{singleEntry.createdAt}</h3>
                <p>{singleEntry.paragrah}</p>

                <ul>

                <li> {singleEntry.oneToDo} </li>
                <li> {singleEntry.twoToDo} </li>
                <li> {singleEntry.threeToDo} </li>
                <li> {singleEntry.fourToDo} </li>
                <li> {singleEntry.fiveToDo} </li>
                <li> {singleEntry.sixToDo} </li>
                <li> {singleEntry.sevenToDo} </li>
                <li> {singleEntry.eightToDo} </li>
                <li> {singleEntry.nineToDo} </li>
                <li> {singleEntry.tenToDo} </li>

                </ul>
               
              </div>
            )
          })}

            </div>
        )
    }
}
