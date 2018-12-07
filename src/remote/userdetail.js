import React from 'react'
import "./style.css"


class UserDetail extends React.Component {

  render() {
    return (
      
        
            <tr>
              <td >{this.props.id}</td>
              <td>{this.props.name}</td>
              <td>{this.props.email}</td>
            </tr>
      
    
    );
  }
}

export default UserDetail;