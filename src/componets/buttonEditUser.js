import React from "react";
import {Button, Grid, Icon, Popup} from "semantic-ui-react";

import ModalDelete from "./modalDelete";

import FormEdit from "../containers/formEdit";

const ButtonAddUser = (
    <Button animated='fade' color='olive' fluid>
        <Button.Content hidden>Edit User</Button.Content>
        <Button.Content visible>
            <Icon name='edit'/>
        </Button.Content>
    </Button>
);

export default ({onDelete, user}) => {
    return (
        <Grid stackable columns={1}>
            <Grid.Row>
                <Grid.Column>
                    <Popup
                        trigger={ButtonAddUser}
                        content={<FormEdit user={user}/>}
                        on='click'
                        position='top center'
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <ModalDelete onDelete={onDelete} user={user}/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

