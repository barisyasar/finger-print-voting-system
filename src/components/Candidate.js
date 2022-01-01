import React, { useState } from 'react';
import { Input, Button } from 'reactstrap';

export default function Candidate(props) {

    const [candidate, setCandidate] = useState('');
    const [list, setlist] = useState(props.candidates);

    const addCandidate = (candidate) => {
        const can = {name: candidate,totalVote:0};
        setlist(prevList => {
            return {
                name:candidate, totalVote: 0,
                ...prevList,
                
            }
        })
    };

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
                <Button className='m-2' onClick={() => addCandidate(candidate)}>
                    Add
                </Button>
            </div>

        </div>
    )
}
