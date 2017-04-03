import React from "react";
import {Button, Grid, Icon, Modal, Header} from "semantic-ui-react";

import ModalDelete from './modalDelete';

export default ({onDelete, user}) => {
    return (
        <Grid stackable columns={1}>
            <Grid.Row>
                <Grid.Column>
                    <Button animated='fade' color='olive' fluid>
                        <Button.Content hidden>Edit User</Button.Content>
                        <Button.Content visible>
                            <Icon name='edit'/>
                        </Button.Content>
                    </Button>
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

