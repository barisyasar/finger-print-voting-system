import React, { Component } from 'react';
import { Card, Label, CardGroup, CardImg, CardBody, CardTitle, Button, Input } from 'reactstrap';
import { Candidates } from '../db/candidates';

export default class Voter extends Component {
    constructor(props) {
        super(props);
        this.state = { selected: '' };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onApprove = this.onApprove.bind(this);
    }

    onChangeHandler(e) {
        this.setState({ selected: e.target.id });
    };
    onApprove() {
        Candidates.map(candidate =>
            candidate.name === this.state.selected 
            ? candidate.totalVote++ 
            : candidate.totalVote
        );
        window.alert('Vote Approved');
        console.log(Candidates);
        // window.location.replace('/');
    };
    render() {
        return (
            <div>
                <h2>Voter Page</h2>
                <CardGroup >
                    {Candidates.map(candidate => {
                        return (
                            <Card className='m-3 bg-dark'>
                                <CardImg
                                    alt="Card image cap"
                                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.R3AMbzb_yXvoNqT2wU_-awAAAA%26pid%3DApi&f=1"
                                    top
                                    width="100%"
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        {candidate.name}
                                    </CardTitle>
                                    <Input type="radio" name='radioButton' id={candidate.name} onChange={e => this.onChangeHandler(e)} />
                                    {' '}
                                    <Label for={candidate.name}>
                                        Select {candidate.name}
                                    </Label>
                                </CardBody>
                            </Card>
                        )
                    })
                    }

                </CardGroup>
                <div className="d-flex justify-content-end m-3" onClick={this.onApprove}><Button >Approve Your Vote</Button></div>

            </div>
        )
    }
}
