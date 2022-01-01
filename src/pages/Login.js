import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Voters } from '../db/voters';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { isCitizen: 'Voter' , name:' ', login:false};
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onLogIn = this.onLogIn.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
    };

    onChangeHandler(sel) {
        const value = sel.options[sel.selectedIndex].text;
        this.setState({ isCitizen: value });
    };

    onLogIn() {
        if (this.state.isCitizen === 'Voter') {
            window.location.replace('/voter');
        } else {
            for (let index = 0; index < Voters.length; index++) {
                const element = Voters[index];
                if(element.name === this.state.name && element.job !== 'Voter') {
                    window.location.replace(`/${element.job}`);
                    this.setState({login:true});
                    console.log(this.state.login);
                }
            }
        }
    };

    onChangeInput(e) {
        this.setState({name: e.target.value});
    }

    render() {
        const isCititizen = this.state.isCitizen;

        return (
            <div className='d-flex justify-content-center'>
                <Form>
                    <FormGroup>
                        <Label for="exampleSelect">
                            Login As
                        </Label>
                        <Input
                            id="loginSelect"
                            name="select"
                            type="select"
                            onChange={e => this.onChangeHandler(e.target)}
                        >
                            <option>
                                Voter
                            </option>
                            <option>
                                Pollingclerk
                            </option>
                            <option>
                                Admin
                            </option>
                        </Input>
                    </FormGroup>
                    <div>
                        {
                            isCititizen != 'Voter' ?
                                <FormGroup>
                                    <Label for="examplePassword">
                                        Name Surname
                                    </Label>
                                    <Input
                                        name="name"
                                        placeholder="Name Surname"
                                        type="text"
                                        onChange={e => this.onChangeInput(e)}
                                    />
                                </FormGroup>
                                : null
                        }
                    </div>
                    <Button onClick={this.onLogIn}>
                        Login
                    </Button>
                </Form>
            </div>
        )
    }
}
