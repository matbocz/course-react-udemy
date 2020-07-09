class CheckboxAgeConfirmation extends React.Component {
    state = {
        isConfirmed: false,
    };

    handleChange = () => {
        this.setState({
            isConfirmed: !this.state.isConfirmed,
        });
    };

    displayMessage = () => {
        if (this.state.isConfirmed) {
            return <PositiveMessage />;
        } else {
            return <NegativeMessage />;
        }
    };

    render() {
        return (
            <>
                <h1>Buy a movie ticket</h1>
                <input
                    type="checkbox"
                    id="age"
                    onChange={this.handleChange}
                    checked={this.state.isConfirmed}
                />
                <label htmlFor="age">I am at least 18 years old</label>
                {this.displayMessage()}
            </>
        );
    }
}

const PositiveMessage = () => <p>You can buy a ticket.</p>;
const NegativeMessage = () => (
    <p>You can't buy a ticket. You must be at least 18 years old.</p>
);

ReactDOM.render(<CheckboxAgeConfirmation />, document.getElementById("root"));
