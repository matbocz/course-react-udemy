const data = {
    users: [
        {
            id: 1,
            age: 56,
            name: "John",
        },
        {
            id: 2,
            age: 20,
            name: "Jacob",
        },
        {
            id: 3,
            age: 19,
            name: "Oliver",
        },
        {
            id: 4,
            age: 24,
            name: "Michael",
        },
    ],
};

const Item = ({ user }) => (
    <div>
        <h1>User: {user.name}</h1>
        <h2>Age: {user.age}</h2>
    </div>
);

class ListItems extends React.Component {
    render() {
        const users = this.props.data.users;
        const Items = users.map((user) => <Item key={user.id} user={user} />);

        return <ul>{Items}</ul>;
    }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById("root"));
