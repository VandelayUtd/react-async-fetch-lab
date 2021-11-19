// create your App component here
import React from "react" 
class App extends React.Component {

    state = {
        spacePeople: []
    }

    render(){
        return <div>{this.state.spacePeople.map(people => people.name)}</div>
    }
    

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    spacePeople: data.people
                })
            })
    }

}

export default App