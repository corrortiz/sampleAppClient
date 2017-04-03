import React from 'react';
import {Button, Icon, Popup} from 'semantic-ui-react'

import AddUserForm from '../containers/addUserForm';


const ButtonAddUser = (
    <Button animated='fade' color='blue' size='massive' floated='right'>
        <Button.Content visible>Add User</Button.Content>
        <Button.Content hidden>
            <Icon name='add user'/>
        </Button.Content>
    </Button>
);

export default () => {
    return (
        <Popup
            trigger={ButtonAddUser}
            content={<AddUserForm />}
            on='click'
            position='left center'
        />
    );
}