import React, { Component } from 'react';


export default class EditProject extends Component {
	render() {
		return (
			<div>
				<h1>Edit here</h1>
				<form onSubmit={this.props.handleSubmit}>
					<label htmlFor="paragrah">Journal on Mars: </label>
					<input
						id="paragrah"
						type="text"
						name="paragrah"
						value={this.props.paragrah}
						onChange={this.props.handleChange}
					/>
					<label htmlFor="oneToDo">Task 1: </label>
					<input
						id="oneToDo"
						type="text"
						name="oneToDo"
						value={this.props.oneToDo}
						onChange={this.props.handleChange}
					/>
                    <select name="oneStatus" value={this.props.selectValue} 
                onChange={this.handleChange}>
                    <option value="Status">Current Status</option>
                    <option value="To do">To do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
					<button type="submit">Update</button>
				</form>
			</div>
		)
	}
}