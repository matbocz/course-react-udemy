class ListItems extends React.Component {
    state = {
        items: ["apple", "orange", "strawberry"],
    };

    render() {
        return (
            <ul>
                {this.state.items.map((item) => (
                    <li key={item}>{`Fruit: ${item}`}</li>
                ))}
            </ul>
        );
    }
}

ReactDOM.render(<ListItems />, document.getElementById("root"));
