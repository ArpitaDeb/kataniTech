//1
class UserForm extends React.Component {
    render() {
        return (
            <form>
                <label>Enter a username:</label>
                <input />
            </form>
        );
    }
}

//2
class Clock extends React.Component {
    state = {time: new Date().toLocaleTimeString()};

    componentDidMount() {
        setInterval(() => {
            this.setState({time: new Date().toLocaleTimeString()}) 
        }, 1000)
    }
    render() {
        return (
            <div className="time">
               <div>{this.state.time}</div>
            </div>
        );
    }
}