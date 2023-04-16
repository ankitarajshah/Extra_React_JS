import React, { Component } from 'react';

class Start extends Component {
    render() {
        return (
            <div>
                <h4>This Is first  Start program</h4>
                <input type='text' placeholder='Enter first name'/> 
                <br/>
                <input type='text' placeholder='Enter last name'/>
                <br/>
                <button type='submit'>submit</button>
            </div>
        );
    }
}

export default Start;



