import React, { Component } from 'react';
import './Dashboard.css';
import axios from 'axios'

export default class Dashboard extends Component {

    state = {
        search: '',
        date: '',
        entryData: []
      }
    
       handleChange = e => {
         const name = e.target.name;
         const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
         this.setState({
         [name]: value
         });
       }

      componentDidMount() {
		axios.get(`/dashboard/${this.props.user._id}`)
    .then(response => {
      console.log('1st checking data retrieving from mongodb:',response.data.journaladded[0].paragrah);
      this.setState({
         entryData: response.data.journaladded
      
       })
    })
    .catch(err => console.log(err))
}

    render() {
       //if state is not empty, then
       if (this.state.entryData.length === 0) return <> </>
      //console.log('2nd checking newly created data array:', this.state.createdAt)
      //let dataFilter = this.state.paragrah;
     // console.log('3rd checking newly created data array:', dataFilter.paragrah)
        let filteredData = this.state.entryData.filter(data => 
          ((data.paragrah.toLowerCase().includes(this.state.search.toLowerCase())) 
           || (data.oneToDo.toLowerCase().includes(this.state.search.toLowerCase()))
           || (data.twoToDo.toLowerCase().includes(this.state.search.toLowerCase()))
           || (data.threeToDo.toLowerCase().includes(this.state.search.toLowerCase()))
           || (data.fourToDo.toLowerCase().includes(this.state.search.toLowerCase()))
           || (data.fiveToDo.toLowerCase().includes(this.state.search.toLowerCase()))
           || (data.sixToDo.toLowerCase().includes(this.state.search.toLowerCase()))
           || (data.sevenToDo.toLowerCase().includes(this.state.search.toLowerCase()))
           || (data.eightToDo.toLowerCase().includes(this.state.search.toLowerCase()))
           || (data.nineToDo.toLowerCase().includes(this.state.search.toLowerCase()))
           || (data.tenToDo.toLowerCase().includes(this.state.search.toLowerCase())))
           && (data.createdAt.slice(0,10) === this.state.date) 

        )
        return (
          <>
      <label htmlFor="search"></label>
                 <input
                 type="text"
                 name="search"
                 id="search"
                 placeholder="Search text..."
                 value={this.state.search}
                 onChange={this.handleChange}
      />
    <label htmlFor="date">Date: </label>
    <select name="date" onChange={this.handleChange}>
					{/* <select name="createdAt" onChange={this.handleChange}>
					{this.state.entryData.map(day => (
            <option value={day.createdAt}>{day.createdAt}</option>
            )
          } */}
          <option value={this.state.entryData[0].createdAt.slice(0, 10)}>{this.state.entryData[0].createdAt.slice(0, 10)}</option>
          <option value='2021-07-20'>2021-07-20</option>

          </select>
<div>
 <table>
					<thead>
						<tr>
              <th>Date</th>
							<th>Journal</th>
              <th>Task</th>
              <th>Status</th>
              <th>Task</th>
              <th>Status</th>
              <th>Task</th>
              <th>Status</th>
              <th>Task</th>
              <th>Status</th>
              <th>Task</th>
              <th>Status</th>
              <th>Task</th>
              <th>Status</th>
              <th>Task</th>
              <th>Status</th>
							<th>Task</th>
              <th>Status</th>
              <th>Task</th>
              <th>Status</th>
              <th>Task</th>
              <th>Status</th>
						</tr>
					</thead>
					<tbody>
						{filteredData.map(data => (
						<tr key={data._id}>
            <td>{data.createdAt.slice(0, 10)}</td>
							<td>{data.paragrah}</td>
							<td>{data.oneToDo}</td>
							<td>{data.oneStatus}</td>
              <td>{data.twoToDo}</td>
							<td>{data.twoStatus}</td>
              <td>{data.threeToDo}</td>
              <td>{data.threeStatus}</td>
              <td>{data.fourToDo}</td>
              <td>{data.fourStatus}</td>
              <td>{data.fiveToDo}</td>
              <td>{data.fiveStatus}</td>
              <td>{data.sixToDo}</td>
              <td>{data.sixStatus}</td>
              <td>{data.sevenToDo}</td>
              <td>{data.sevenStatus}</td>
              <td>{data.eightToDo}</td>
              <td>{data.eightStatus}</td>
              <td>{data.nineToDo}</td>
              <td>{data.nineStatus}</td>
              <td>{data.tenToDo}</td>
              <td>{data.tenStatus}</td>
						</tr>
						))}
					</tbody>
				</table> 
</div>
      </>

        )
    }
}
