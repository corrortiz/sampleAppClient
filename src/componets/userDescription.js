import React from "react";
import {Grid, Label} from "semantic-ui-react";

export default ({user}) => {
    return (
        <Grid columns={1} divided>
            <Grid.Row stretched>
                <Grid.Column>
                    <Label
                        as='a'
                        color='teal'
                        size="large"
                        icon='user'
                        content={user.name}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row stretched>
                <Grid.Column>
                    <Label
                        as='a'
                        color='teal'
                        size="large"
                        icon='id card outline'
                        content={user.idCard}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row stretched>
                <Grid.Column>
                    <Label
                        as='a'
                        color='teal'
                        size="large"
                        icon='hospital'
                        content={user.homeClinic}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row stretched>
                <Grid.Column>
                    <Label
                        as='a'
                        color='teal'
                        size="large"
                        icon='phone'
                        content={user.phone}
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row stretched>
                <Grid.Column>
                    <Label
                        as='a'
                        color='teal'
                        size="large"
                        icon='mail'
                        content={user.mail}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
}

