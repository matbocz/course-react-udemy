class App extends React.Component {
    state = {
        text: "",
        buttonText: "START",
    };

    handleClick = () => {
        // this.state.text += "a";

        const number = Math.floor(Math.random() * 10) + " "; // 0 - 9
        this.setState({
            text: this.state.text + number,
        });
    };

    render() {
        return (
            <React.Fragment>
                <button onClick={this.handleClick}>
                    {this.state.buttonText}
                </button>
                <ResultPanel text={this.state.text} />
            </React.Fragment>
        );
    }
}

const ResultPanel = (props) => {
    return <h1>{props.text}</h1>;
};

ReactDOM.render(<App />, document.getElementById("root"));
