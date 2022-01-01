import React from 'react';
import { Candidates } from '../db/candidates';
import { Progress } from 'reactstrap';

export default function Results() {


    return (
        <div className='d-flex flex-column'>
            <h5 className='align-self-start'>Results</h5>
            <div className='m-2'>
                {Candidates.map(candidate => {
                    return (
                        <div className='mb-1'>
                            <div className='d-flex'>
                            <b>{candidate.name}</b>: {candidate.totalVote}%
                            </div>
                            <Progress value={candidate.totalVote} />
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}
