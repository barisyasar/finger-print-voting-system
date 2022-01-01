import React from 'react';
import { Input, Button } from 'reactstrap';

export default function Candidate() {
    return (
        <div>
            <h5 className='d-flex'>Add Candidate</h5>
            <div className='d-flex justify-content-left'>
                <Input
                    name="candidate"
                    placeholder="Name Surname"
                    type="text"
                    className='m-2'
                />
                <Button className='m-2'>
                    Add
                </Button>
            </div>

        </div>
    )
}
