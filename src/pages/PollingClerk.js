import React, { Component } from 'react';
import { Table,Input } from 'reactstrap';
import { Voters } from '../db/voters';

export default class PollingClerk extends Component {


    render() {
        const voterList = [];
        for (let voter of Voters) {
            voterList.push(
                <tr>
                    <th scope="row">
                    <Input type="checkbox" />
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
                <div className='d-flex'>Tally Count: 10</div>
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
