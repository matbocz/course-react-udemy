class App extends React.Component {
    state = {
        result: 1,
        ratio: 2,
    };

    handleClick = () => {
        this.setState({
            result: this.state.result * this.state.ratio,
        });
    };

    componentDidUpdate() {
        if (this.state.result > 1000 && this.state.ratio === 2) {
            this.setState({
                ratio: 0.5,
            });
        } else if (this.state.result < 1 && this.state.ratio === 0.5) {
            this.setState({
                ratio: 2,
            });
        }
    }

    render() {
        return (
            <>
                <button
                    onClick={this.handleClick}
                >{`Multiply by ${this.state.ratio}`}</button>

                <h1>{this.state.result}</h1>
            </>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
