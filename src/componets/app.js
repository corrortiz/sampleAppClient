import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';

import SearchBar from '../containers/searchBar';
import UsersSegment from '../containers/usersSegment';

class App extends Component {
  render() {
    const style = {
        margin: '20px'
    };

    return (
      <Container style={style}>
        <SearchBar/>
        <UsersSegment/>
      </Container>
    );
  }
}

export default App;
