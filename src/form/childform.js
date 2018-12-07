import React from 'react'
class ChildForm extends React.Component {
   
    render() { 
        return ( 
            <div>
                <input type="text" onChange={this.props.callHello}></input>
            </div>
         );
    }
}
 
export default ChildForm;