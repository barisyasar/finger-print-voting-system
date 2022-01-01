import React, { Component } from 'react';
import { Form,FormGroup,Label,Input, Button } from 'reactstrap';

export default class Login extends Component {
    render() {
        return (
            <div className='d-flex justify-content-center'>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">
                            Email
                        </Label>
                        <Input
                            id="exampleEmail"
                            name="email"
                            placeholder="your email"
                            type="email"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">
                            Password
                        </Label>
                        <Input
                            id="examplePassword"
                            name="password"
                            placeholder="your password"
                            type="password"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">
                            Login As
                        </Label>
                        <Input
                            id="exampleSelect"
                            name="select"
                            type="select"
                        >
                            <option>
                                Admin
                            </option>
                            <option>
                                Polling Clerk
                            </option>
                            <option>
                                Admin
                            </option>
                        </Input>
                    </FormGroup>
                    <Button>
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}
