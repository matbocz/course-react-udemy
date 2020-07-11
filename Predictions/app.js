class App extends React.Component {
    state = {
        prediction: "",
        predictions: ["Prediction 1", "Prediction 2", "Prediction 3"],
        newPrediction: "",
    };

    handleShowPredictionClick = () => {
        const randomPrediction = this.state.predictions[
            Math.floor(Math.random() * this.state.predictions.length)
        ];

        this.setState({
            prediction: randomPrediction,
        });
    };

    handleAddPredictionClick = () => {
        if (this.state.newPrediction != "") {
            const predictions = [...this.state.predictions];
            predictions.push(this.state.newPrediction);

            this.setState({
                predictions,
                newPrediction: "",
            });

            alert("Your predictions: " + predictions);
        } else {
            alert("You must enter something");
        }
    };

    handleInputChange = (e) => {
        this.setState({
            newPrediction: e.target.value,
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.handleShowPredictionClick}>
                    See the prediction
                </button>
                <br />
                {this.state.prediction ? (
                    <h1>{this.state.prediction}</h1>
                ) : null}
                <br />
                <br />

                <input
                    type="text"
                    onChange={this.handleInputChange}
                    value={this.state.newPrediction}
                />
                <button onClick={this.handleAddPredictionClick}>
                    Add prediction
                </button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
