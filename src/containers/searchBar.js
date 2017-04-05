import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Input, Button} from 'semantic-ui-react'
import {fetchLike, fetchUsers} from '../action/index';


class searchBar extends Component {
    constructor(props) {
        super(props);
        this.state ={
            term: ''
        }
    }

    onChangeValue(term){
        this.setState({term});
    }

    onClick(e){
        e.preventDefault();
        if(this.state.term === '' || this.state.term === 'all'){
            this.props.fetchUsers();
        }else {
            this.props.fetchLike(this.state.term);
        }
        this.setState({term:''});
    }

    render() {


        return (
            <form >
                <div>
                    <Input
                        fluid
                        value={this.state.term}
                        onChange={(e)=>this.onChangeValue(e.target.value)}
                        icon='search'
                        iconPosition='left'
                        placeholder="Search..."
                        action={
                        <Button
                            type="submit"
                            size="massive"
                            color="violet"
                            onClick={(e)=> this.onClick(e)}
                        >Search</Button>}
                        size='massive'
                    />
                </div>
            </form>
        );
    };
}

export default connect(null, {fetchLike, fetchUsers})(searchBar);