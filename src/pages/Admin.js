import React, { Component } from 'react';
import Candidate from '../components/Candidate';
import Faulty from '../components/Faulty';

export default class Admin extends Component {
    render() {
        return (
            <div >
                <h2>Admin Page</h2>
                <br />
                <Candidate/>
                <hr />

                <Faulty />
            </div>
        )
    }
}
