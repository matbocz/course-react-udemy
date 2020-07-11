class Form extends React.Component {
    state = {
        city: "",
        description: "",
        isLiked: false,
        number: "0",
    };

    handleChange = (e) => {
        if (e.target.type === "checkbox") {
            this.setState({
                [e.target.name]: e.target.checked,
            });
        } else {
            this.setState({
                [e.target.name]: e.target.value,
            });
        }
    };

    render() {
        return (
            <div>
                <label>
                    City name:{" "}
                    <input
                        name="city"
                        value={this.state.city}
                        onChange={this.handleChange}
                        type="text"
                    />
                </label>
                <br />
                <label>
                    City description:{" "}
                    <textarea
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                    ></textarea>
                </label>
                <br />
                <label>
                    Do you like this city?{" "}
                    <input
                        name="isLiked"
                        value={this.state.isLiked}
                        onChange={this.handleChange}
                        type="checkbox"
                    />
                </label>
                <br />
                <label>
                    How many times have you visited this city?{" "}
                    <select
                        name="number"
                        value={this.state.number}
                        onChange={this.handleChange}
                    >
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="more">more</option>
                    </select>
                </label>
            </div>
        );
    }
}

ReactDOM.render(<Form />, document.getElementById("root"));
