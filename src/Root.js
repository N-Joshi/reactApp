import React from 'react';
import Parent from './family/parent';

class Root extends React.Component {
  render() {
    return (
            <div>
                <h1>Hello React Component</h1>
                <hr></hr>
                <Parent></Parent>
            </div>
    
    );
  }
}

export default Root;
