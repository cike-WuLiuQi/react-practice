import React from 'react';
import ReactDom from 'react-dom'

class Roadhog extends React.Component {
    state = {
        users: [4, 5]
    }

    componentDidMount() {
        fetch('/api/users1').then((res) => {
            return res.json()
        }).then((data) => {
            console.log(data);
            this.setState({
                users: data.users
            })
        })
    }
    render() {
        return (
            <div>
                {this.state.users.map(i => <li key={i}>{i}</li>)}
            </div>
        )
    }
}

ReactDom.render(<Roadhog />, document.getElementById('root'))