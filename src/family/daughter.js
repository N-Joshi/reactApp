import React from 'react';

class Daughter extends React.Component {
  render() {
    return (
            <div>
             <i>I am daughter!!!!. My name is {this.props.name}</i>
            </div>
    );
  }
}

export default Daughter;
