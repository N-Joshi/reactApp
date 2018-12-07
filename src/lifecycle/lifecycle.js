import React from 'react';
import ReactDOM from 'react-dom';
class Lifecycle extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            dummyVariable: 0
        }
        this.changeState = this.changeState.bind(this)//this refers to class
    }

    componentWillMount() {
        console.log("component will change for any state!!!!!!")
        console.log(this.state.dummyVariable);
        this.setState({
            dummyVariable:this.state.dummyVariable+1
        })
    }

    componentDidMount() {
        console.log("component updated cuse of state change ")
    }

    componentWillUnmount() {
        console.log("this component will unmount from view!!!")
    }
    componentDidUpdate() {
        console.log("component updated cuse of state change ")
    }

    componentWillUpdate() {
        console.log("this component will unmount from view!!!")
    }


    changeState() {
        this.setState({
            dummyVariable: this.state.dummyVariable + 1
        })
        if(this.state.dummyVariable>10){
            ReactDOM.unmountComponentAtNode(document.getElementById("life"))
        }
    }

    render() {
        return (
            <div>Exploring Componenet Lifecycle
            <br></br>
                <button onClick={this.changeState}>Change State {this.state.dummyVariable}</button>
            </div>
        );
    }
}

export default Lifecycle;