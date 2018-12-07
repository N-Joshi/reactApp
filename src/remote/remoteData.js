import React from 'react'
import axios from 'axios'
import UserDetail from './userdetail';


class RemoteAPI extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users: []
        }
    }

    getRemoteData() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((received) => {
                this.setState({ users: received.data })
                console.log(this.state.users)
            })
    }

    componentWillMount() {
        this.getRemoteData()
    }

    renderUserDetail() {
        return this.state.users.map((user) => {
            return (<UserDetail
                key={user.id}
                id={user.id}
                name={user.name}
                email={user.email}>
            </UserDetail>)
        })
    }

    render() {
        return (
            <div>
            <h1>Fetching Data!!!</h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>{ this.renderUserDetail()}</tbody>
            </table> 
            </div >
         );
    }
}

export default RemoteAPI;