const data = {
    users: [
        {
            id: 1,
            age: 56,
            name: "John",
            sex: "male",
        },
        {
            id: 2,
            age: 20,
            name: "Jacob",
            sex: "male",
        },
        {
            id: 3,
            age: 18,
            name: "Oliver",
            sex: "male",
        },
        {
            id: 4,
            age: 25,
            name: "Michael",
            sex: "male",
        },
        {
            id: 5,
            age: 33,
            name: "Claudia",
            sex: "female",
        },
        {
            id: 6,
            age: 50,
            name: "Daisy",
            sex: "female",
        },
        {
            id: 7,
            age: 22,
            name: "Anna",
            sex: "female",
        },
        {
            id: 8,
            age: 61,
            name: "Gillian",
            sex: "female",
        },
    ],
};

const Item = ({ user }) => (
    <div>
        <h1>{user.name}</h1>
        <p>Info about user</p>
        <p>
            Age: <strong>{user.age}</strong>
        </p>
        <p>
            Sex: <strong>{user.sex}</strong>
        </p>
    </div>
);

class ListItems extends React.Component {
    render() {
        let users = this.props.data.users;
        users = users.filter((user) => user.sex === "female");

        const Items = users.map((user) => <Item key={user.id} user={user} />);

        return <ul>{Items}</ul>;
    }
}

ReactDOM.render(<ListItems data={data} />, document.getElementById("root"));
