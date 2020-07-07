class App extends React.Component {
    state = {
        counter: 0,
    };

    render() {
        return (
            <div>
                <h1>Hello World!</h1>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
