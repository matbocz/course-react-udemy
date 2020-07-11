class Exchange extends React.Component {
    state = {
        amount: "",
        product: "gas",
    };

    static defaultProps = {
        currencies: [
            {
                id: 0,
                name: "PLN",
                ratio: 1,
                title: "Value in PLN:",
            },
            {
                id: 1,
                name: "USD",
                ratio: 3.6,
                title: "Value in USD:",
            },
            {
                id: 2,
                name: "EUR",
                ratio: 4.1,
                title: "Value in EUR:",
            },
            {
                id: 3,
                name: "GBP",
                ratio: 4.55,
                title: "Value in GBP:",
            },
        ],
        prices: {
            electricity: 0.51,
            gas: 4.76,
            oranges: 3.79,
        },
    };

    handleSelect = (e) => {
        this.setState({
            product: e.target.value,
            amount: "",
        });
    };

    handleChange = (e) => {
        this.setState({
            amount: e.target.value,
        });
    };

    insertSuffix(select) {
        if (select === "electricity") return <em>kWh</em>;
        else if (select === "gas") return <em>litre</em>;
        else if (select === "oranges") return <em>kilo</em>;
        else return null;
    }

    selectPrice(select) {
        const price = this.props.prices[select];
        return price;
    }

    render() {
        const { amount, product } = this.state;
        const price = this.selectPrice(product);

        const calculators = this.props.currencies.map((currency) => (
            <Cash
                key={currency.id}
                title={currency.title}
                ratio={currency.ratio}
                amount={amount}
                price={price}
            />
        ));

        return (
            <div>
                <label>
                    Choose product:
                    <select value={product} onChange={this.handleSelect}>
                        <option value="electricity">Electricity</option>
                        <option value="gas">Gas</option>
                        <option value="oranges">Oranges</option>
                    </select>
                </label>
                <br />
                <label>
                    <input
                        type="number"
                        value={amount}
                        onChange={this.handleChange}
                    />
                    {this.insertSuffix(product)}
                </label>
                {calculators}
            </div>
        );
    }
}

const Cash = (props) => {
    const value = ((props.amount / props.ratio) * props.price).toFixed(2);
    return (
        <div>
            {props.title} {props.amount <= 0 ? "" : value}
        </div>
    );
};

ReactDOM.render(<Exchange />, document.getElementById("root"));
