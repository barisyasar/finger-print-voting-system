import React, { useState } from 'react';
import { Input, Button } from 'reactstrap';

export default function Candidate(props) {

    const [candidate, setCandidate] = useState('');


    return (
        <div>
            <h5 className='d-flex'>Add Candidate</h5>
            <div className='d-flex justify-content-left'>
                <Input
                    name="candidate"
                    placeholder="Name Surname"
                    type="text"
                    className='m-2'
                    onChange={e => setCandidate(e.target.value)}
                />
                <Button className='m-2' onClick={() => props.addCandidate({name:candidate,totalVote:0})}>
                    Add
                </Button>
            </div>

        </div>
    )
}
