class App extends React.Component {
    state = {
        text: "",
    };

    handleClick = () => {
        // this.state.text += "a";

        const letter = "a";
        this.setState({
            text: this.state.text + letter,
        });
    };

    render() {
        return (
            <React.Fragment>
                <button onClick={this.handleClick}>Add "a"</button>
                <h1>{this.state.text}</h1>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
