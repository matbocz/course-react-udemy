class Counter extends React.Component {
    state = {
        count: 0,
        result: this.props.result,
    };

    handleClick = (type, number) => {
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
    };

    render() {
        return (
            <>
                <MathButton
                    name="-10"
                    type="sub"
                    number="10"
                    click={this.handleClick}
                />
                <MathButton
                    name="-1"
                    type="sub"
                    number="1"
                    click={this.handleClick}
                />

                <MathButton
                    name="RESET"
                    type="reset"
                    click={this.handleClick}
                />

                <MathButton
                    name="+1"
                    type="add"
                    number="1"
                    click={this.handleClick}
                />
                <MathButton
                    name="+10"
                    type="add"
                    number="10"
                    click={this.handleClick}
                />

                <ResultPanel
                    count={this.state.count}
                    result={this.state.result}
                />
            </>
        );
    }
}

const MathButton = (props) => {
    const number = parseInt(props.number);

    return (
        <button onClick={() => props.click(props.type, number)}>
            {props.name}
        </button>
    );
};

const ResultPanel = (props) => {
    return (
        <>
            <h1>
                Clicks: {props.count}{" "}
                {props.count > 10 ? <span>Many clicks!</span> : null}
            </h1>
            <h1>Result: {props.result}</h1>
        </>
    );
};

ReactDOM.render(<Counter result={0} />, document.getElementById("root"));
