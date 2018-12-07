import React from 'react';
import ChildForm from './childform';

class ParentForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            nameValue: ""
        }
    }

    captureInput = this.captureInput.bind(this)
    SayHello = this.SayHello.bind(this)


    captureInput(e) {
        console.log(e.target.value)
        this.setState({
            nameValue: e.target.value
        })
    }

    SayHello() {
        alert(this.state.nameValue)
    }


    render() {
        return (
            <div>
                <br></br>
                <hr></hr>
                ParentForm &nbsp;
                <input type="text" onChange={this.captureInput}></input>&nbsp;
                <button onClick={this.SayHello}>Hello</button>
                <hr></hr>
                <br></br>
                Child Form:
                <ChildForm callHello={
                        this.captureInput}>
                </ChildForm>
            </div>
        );
    }
}
export default ParentForm;