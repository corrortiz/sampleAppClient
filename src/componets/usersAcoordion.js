import React from "react";
import {Accordion, Grid, Icon, Segment} from "semantic-ui-react";

import UserDescription from "./userDescription";
import ButtonEditUser from "./buttonEditUser";

export default ({user, onDelete, onClick}) => {
    return (
        <Accordion fluid onTitleClick={()=>onClick(user)}>
            <Accordion.Title >
                <Icon name='dropdown' />
                {user.name}
            </Accordion.Title>
            <Accordion.Content>
                <Segment padded='very'>
                    <Grid columns={2} divided stackable>
                        <Grid.Row>
                            <Grid.Column width={13}>
                                <UserDescription user={user}/>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <ButtonEditUser onDelete={onDelete} user={user}/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Accordion.Content>
        </Accordion>
    );
}
