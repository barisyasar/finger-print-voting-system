import React, { Component } from 'react';
import { Card, Label, CardGroup, CardImg, CardBody, CardTitle, Button, Input } from 'reactstrap';

export default class Voter extends Component {
    render() {
        return (
            <div>
                <h2>Voter Page</h2>
                <CardGroup >
                    <Card className='m-3 bg-dark'>
                        <CardImg
                            alt="Card image cap"
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.R3AMbzb_yXvoNqT2wU_-awAAAA%26pid%3DApi&f=1"
                            top
                            width="100%"
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                Person A
                            </CardTitle>
                            <Input type="checkbox" />
                            {' '}
                            <Label check>
                                Select Person A
                            </Label>
                        </CardBody>
                    </Card>
                    <Card className='m-3 bg-dark'>
                        <CardImg
                            alt="Card image cap"
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.R3AMbzb_yXvoNqT2wU_-awAAAA%26pid%3DApi&f=1"
                            top
                            width="100%"
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                Person A
                            </CardTitle>
                            <Input type="checkbox" />
                            {' '}
                            <Label check>
                                Select Person A
                            </Label>
                        </CardBody>
                    </Card>
                    <Card className='m-3 bg-dark'>
                        <CardImg
                            alt="Card image cap"
                            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.R3AMbzb_yXvoNqT2wU_-awAAAA%26pid%3DApi&f=1"
                            top
                            width="100%"
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                Person A
                            </CardTitle>
                            <Input type="checkbox" />
                            {' '}
                            <Label check>
                                Select Person A
                            </Label>
                        </CardBody>
                    </Card>
                </CardGroup>
                <div className="d-flex justify-content-end m-3"><Button >Approve Your Vote</Button></div>
                
            </div>
        )
    }
}
