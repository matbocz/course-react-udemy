class TicketShop extends React.Component {
    state = {
        isConfirmed: false,
        isSubmitted: false,
    };

    handleChange = () => {
        this.setState({
            isConfirmed: !this.state.isConfirmed,
            isSubmitted: false,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        if (!this.state.isSubmitted) {
            this.setState({
                isSubmitted: true,
            });
        }
    };

    displayMessage = () => {
        if (this.state.isSubmitted) {
            if (this.state.isConfirmed) {
                return <PositiveMessage />;
            } else {
                return <NegativeMessage />;
            }
        } else {
            return null;
        }
    };

    render() {
        return (
            <>
                <h1>Buy a movie ticket</h1>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="checkbox"
                        id="age"
                        onChange={this.handleChange}
                        checked={this.state.isConfirmed}
                    />
                    <label htmlFor="age">I am at least 18 years old</label>
                    <br />
                    <button type="submit">BUY</button>
                </form>
                {this.displayMessage()}
            </>
        );
    }
}

const PositiveMessage = () => <p>You can buy a ticket.</p>;
const NegativeMessage = () => (
    <p>You can't buy a ticket. You must be at least 18 years old.</p>
);

ReactDOM.render(<TicketShop />, document.getElementById("root"));
