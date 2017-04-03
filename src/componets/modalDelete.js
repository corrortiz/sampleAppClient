import React, {Component} from 'react';
import {Modal, Header, Button, Icon} from 'semantic-ui-react';

class ModalDelete extends Component {
    state = { open: false };

    show = () => this.setState({ open: true });

    close = () => {
        this.setState({ open: false })
    };

    render() {
        return (
            <Modal trigger={
                <Button animated='fade' color='red' fluid onClick={this.show} >
                    <Button.Content hidden>Delete User</Button.Content>
                    <Button.Content visible>
                        <Icon name='user delete'/>
                    </Button.Content>
                </Button>
            }
                   basic size='large'
                   closeIcon="close"
                   open={this.state.open}
                   onClose={this.close}
            >
                <Header icon='remove user' content={`Delete User: ${this.props.user.name}`} />
                <Modal.Content>
                    <p>Do you want to delete thes user {this.props.user.name}?</p>
                </Modal.Content>
                <Modal.Actions>
                    <Button basic color='blue' inverted onClick={this.close}>
                        <Icon name='remove' /> No
                    </Button>
                    <Button color='red' inverted onClick={(e) => this.props.onDelete(this.props.user.idUser)}>
                        <Icon name='checkmark' /> Yes
                    </Button>
                </Modal.Actions>
            </Modal>
        );
    };
}

export default ModalDelete;