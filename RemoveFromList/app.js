const Person = (props) => {
    return (
        <li key={props.id}>
            {props.name}{" "}
            <button onClick={() => props.remove(props.id)}>Remove</button>
        </li>
    );
};

class List extends React.Component {
    state = {
        persons: [
            {
                id: 1,
                name: "Jack",
            },
            {
                id: 2,
                name: "Abigail",
            },
            {
                id: 3,
                name: "John",
            },
            {
                id: 4,
                name: "Michael",
            },
        ],
    };

    handleRemove = (id) => {
        const persons = this.state.persons.filter((person) => person.id !== id);

        this.setState({
            persons,
        });
    };

    render() {
        const persons = this.state.persons.map((person) => (
            <Person
                key={person.id}
                id={person.id}
                name={person.name}
                remove={this.handleRemove}
            />
        ));

        return <ul>{persons}</ul>;
    }
}

ReactDOM.render(<List />, document.getElementById("root"));
