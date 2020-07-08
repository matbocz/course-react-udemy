class App extends React.Component {
    state = {
        value: "",
    };

    handleChange(e) {
        this.setState({
            value: e.target.value,
        });
    }

    handleClick = () => {
        this.setState({
            value: "",
        });
    };

    render() {
        return (
            <React.Fragment>
                <input
                    value={this.state.value}
                    placeholder="Enter the text"
                    onChange={this.handleChange.bind(this)}
                    type="text"
                />
                <button onClick={this.handleClick}>Reset</button>
                <h1 className="title">{this.state.value.toUpperCase()}</h1>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
