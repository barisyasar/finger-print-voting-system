import React, { Component } from 'react';
import Candidate from '../components/Candidate';
import Faulty from '../components/Faulty';
import Results from '../components/Results';

export default class Admin extends Component {

    render() {
        return (
            <div >
                <h2>Admin Page</h2>
                <br />
                <Candidate />
                <hr />

                <Results />
                <hr />
                <Faulty />
            </div>
        )
    }
}
