import React, {Component} from 'react';
import {Input} from 'semantic-ui-react'

class searchBar extends Component {
    render() {


        return (
            <form >
                <div>
                    <Input
                        fluid
                        icon='search'
                        iconPosition='left'
                        placeholder="Search..."
                        action={{color:'violet', content:'Search', size:'massive'}}
                        size='massive'
                    />
                </div>
            </form>
        );
    };
}

export default searchBar;