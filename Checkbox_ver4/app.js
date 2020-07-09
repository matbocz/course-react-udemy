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

    render() {
        const { isConfirmed, isSubmitted } = this.state;

        return (
            <>
                <h1>Buy a movie ticket</h1>
                <OrderForm
                    submit={this.handleSubmit}
                    change={this.handleChange}
                    confirmed={isConfirmed}
                />
                {displayMessage(isConfirmed, isSubmitted)}
            </>
        );
    }
}

const OrderForm = (props) => {
    const { submit, change, confirmed } = props;

    return (
        <form onSubmit={submit}>
            <input
                type="checkbox"
                id="age"
                onChange={change}
                checked={confirmed}
            />
            <label htmlFor="age">I am at least 18 years old</label>
            <br />
            <button type="submit">BUY</button>
        </form>
    );
};

const displayMessage = (isConfirmed, isSubmitted) => {
    if (isSubmitted) {
        if (isConfirmed) {
            return <ValidationMessage txt="You can buy a ticket." />;
        } else {
            return (
                <ValidationMessage txt="You can't buy a ticket. You must be at least 18 years old." />
            );
        }
    } else {
        return null;
    }
};

const ValidationMessage = (props) => {
    return <p>{props.txt}</p>;
};

ReactDOM.render(<TicketShop />, document.getElementById("root"));
