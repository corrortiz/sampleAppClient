import React from "react";
import {Button, Icon, Popup} from "semantic-ui-react";
import FormCreate from "../containers/formCreate";

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
            content={<FormCreate />}
            on='click'
            position='left center'
        />
    );
}