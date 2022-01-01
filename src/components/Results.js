import React from 'react';
import { Progress } from 'reactstrap';

export default function Results(props) {
    
    return (
        <div className='d-flex flex-column'>
            <h5 className='align-self-start'>Results</h5>
            <div className='m-2'>
                {props.candidates.map(candidate => {
                    console.log(props.candidates);
                    return (
                        <div className='mb-1' >
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
