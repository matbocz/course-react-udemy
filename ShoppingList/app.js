class ShoppingList extends React.Component {
    state = {
        item1: "bread",
        item2: "milk",
        item3: "eggs",
    };

    render() {
        return (
            <>
                <h1>ShoppingList</h1>
                <ul>
                    <ItemList name={this.state.item1} amount={2 + 2} />
                    <ItemList name={this.state.item2} amount={6 - 3} />
                    <ItemList name={this.state.item3} amount={5} />
                </ul>
            </>
        );
    }
}

// const ItemList = (props) => {
//     return (
//         <li>
//             {props.name} - {props.amount}
//         </li>
//     );
// };

class ItemList extends React.Component {
    render() {
        return (
            <li>
                {this.props.name} - {this.props.amount}
            </li>
        );
    }
}

ReactDOM.render(<ShoppingList />, document.getElementById("root"));
