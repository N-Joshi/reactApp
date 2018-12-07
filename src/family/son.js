import React from 'react';

class Son extends React.Component {
  render() {
    return (
            <div>
               <b>I am Son. My name is {this.props.name}</b>
            </div>
    
    );
  }
}

export default Son;
