import React, {Component} from 'react';
import {Form} from 'semantic-ui-react';

class addUserForm extends Component {
    render() {
        return (
            <Form>
                <Form.Input label='Name' type='text' icon='user outline'/>
                <Form.Input label='ID Number' type='text' icon='id card outline'/>
                <Form.Input label='Home clinic' type='text' icon='hospital'/>
                <Form.Input label='Phone' type='text' icon='phone'/>
                <Form.Input label='Email' type='email' icon='mail' />
                <Form.Button>Submit</Form.Button>
            </Form>
        );
    };
}

export default addUserForm;