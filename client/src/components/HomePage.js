import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'

export default class HomePage extends Component {
    render() {
        return (
            <div>

                <h1><b>Days on Mars</b></h1>

                <b>Martian: </b>
                <i>/ˈmɑːʃ(ə)n/</i>
                <p>
                relating to the planet Mars or its supposed inhabitants.
                </p>
            
                <Link to='/Sign-up'>
                <button>Signup</button>
                </Link>
                <p>Become a user and begin to archive your marvelous days on Mars through our daily journal template. you
                    can keep track of your martian to-do's through our task manager.</p>

                <Link to='/Log-in'>
                <button>Login</button>
                </Link>

                <p>Login to continue your Days on Mars experience.</p>
               
               <h2>About</h2>

                <p> Welcome Martian, we know that belonging to the first of the red plant's dwellers, you've embarked upon an incredible journey. Getting to know 
                    this brilliant terrain is spectacular, yet distracting. It can be challenging to stay on track with so many 
                    craters to explore, and canyons to trek. Days on Mars would like to keep you on task! We invite you to dust off that volcanic 
                    residue and start planning your days on Mars. With our Days on Mars task manager, you can list your most pressing to-do’s, 
                    as well as edit and update their status. Our martian users are also encouraged to write in their daily journal with our diary template. 
                    Our solar flare-proof vault will house our server that stores your diary entries. Your archive will only be accessed 150 years after your death, 
                    and we will share your daily musings in our Days on Mars museum. </p>

            </div>
        )
    }
}

