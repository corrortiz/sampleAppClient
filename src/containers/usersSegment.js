import React, {Component} from "react";
import {Container, Grid, Segment} from "semantic-ui-react";
import {connect} from "react-redux";
import {deleteUser, fetchUsers} from "../action/index";

import ButtonAddUser from "../componets/buttonAddUser";
import UsersAcoordion from "../componets/usersAcoordion";

class UsersSegments extends Component{
    componentWillMount(){
        this.props.fetchUsers();
    }

    onDelete(id){
        this.props.deleteUser(id)
            .then(()=>{
                this.props.fetchUsers();
        });
    }

    renderAcordion(){
        return this.props.users.map((user)=>{
            return(
                <UsersAcoordion user={user} key={user.idUser} onDelete={this.onDelete.bind(this)}/>
            );
        })
    }

    render(){
        return (
            <Segment padded='very' color='blue'>
                <Container>
                    <Grid stackable>
                        <Grid.Row >
                            <Grid.Column width={2}>
                                <h1>Users</h1>
                            </Grid.Column>
                            <Grid.Column  floated='right' width={5}>
                                <ButtonAddUser/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={16}>
                                {this.renderAcordion()}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>
        );
    }
}

function mapStateToProps(state) {
    return {users: state.user.all}
}

export default connect(mapStateToProps, {fetchUsers, deleteUser})(UsersSegments);