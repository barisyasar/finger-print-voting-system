import React, { Component } from 'react';
import { Table,Input } from 'reactstrap';
import { Voters } from '../db/voters';

export default class PollingClerk extends Component {
    constructor(props) {
        super(props);
        this.state={tallyCount:0}
        this.onChecked= this.onChecked.bind(this);
        
    };
    
    onChecked(e) {
       
        if(e.target.checked) {
            Voters.map(voter => voter.Id === parseInt(e.target.id) ? voter.situaion=true : voter.situaion);
            window.alert(e.target.id +' is here. And now voting')
            if(window.confirm('Approve the vote') === true) 
                this.setState({tallyCount:this.state.tallyCount+1})
        }
        console.log(Voters);
        
    };

    render() {
       
        const voterList = [];
        for (let voter of Voters) {
            voterList.push(
                <tr>
                    <th scope="row">
                    <Input type="checkbox" id={voter.Id} onChange={e => {
                        this.onChecked(e)
                    }} />
                    </th>
                    <td>
                        {voter.Id}
                    </td>
                    <td>
                    {voter.name}
                    </td>
                    <td>
                    {voter.Age}
                    </td>
                </tr>
                )
        }
        return (
            <div>
                <h2>Polling Clerk Page</h2>
                <hr />
                <div className='d-flex'>Tally Count: {this.state.tallyCount}</div>
                <hr />
                <Table
                    bordered
                    borderless
                    dark
                    hover
                >
                    <thead>
                        <tr>
                            <th>
                                Situation
                            </th>
                            <th>
                                Id
                            </th>
                            <th>
                                Name-Surname
                            </th>
                            <th>
                                Age
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {voterList}
                    </tbody>
                </Table>
            </div>
        )
    }
}
