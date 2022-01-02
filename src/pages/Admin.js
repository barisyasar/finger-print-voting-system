import React, { Component } from 'react';
import Candidate from '../components/Candidate';
import Faulty from '../components/Faulty';
import Results from '../components/Results';
import {Candidates} from '../db/candidates';

export default class Admin extends Component {
    constructor(props) {
        super(props);
        this.addCandidate = this.addCandidate.bind(this);
        this.state={candidates: Candidates};
    };

    addCandidate(candi) {
        Candidates.push(candi);
        this.setState({candidates: Candidates});
    };

    render() {
        
        return (
            <div >
                <h2>Admin Page</h2>
                <br />
                <Candidate addCandidate={this.addCandidate}/>
                <hr />
                <Results candidates={this.state.candidates}/>
                <hr />
                <Faulty />
            </div>
        )
    }
}
