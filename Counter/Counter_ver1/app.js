class Counter extends React.Component {
    state = {
        count: 0,
        result: this.props.result,
    };

    handleClick(type, number) {
        if (type === "sub") {
            this.setState((prevState) => ({
                count: prevState.count + 1,
                result: prevState.result - number,
            }));
        } else if (type === "add") {
            this.setState((prevState) => ({
                count: prevState.count + 1,
                result: prevState.result + number,
            }));
        } else if (type === "reset") {
            this.setState((prevState) => ({
                count: prevState.count + 1,
                result: this.props.result,
            }));
        }
    }

    render() {
        return (
            <>
                <button onClick={this.handleClick.bind(this, "sub", 10)}>
                    -10
                </button>
                <button onClick={this.handleClick.bind(this, "sub", 1)}>
                    -1
                </button>

                <button onClick={() => this.handleClick("reset")}>RESET</button>

                <button onClick={() => this.handleClick("add", 1)}>+1</button>
                <button onClick={() => this.handleClick("add", 10)}>+10</button>

                <h1>Clicks: {this.state.count}</h1>
                <h1>Result: {this.state.result}</h1>
            </>
        );
    }
}

ReactDOM.render(<Counter result={0} />, document.getElementById("root"));
