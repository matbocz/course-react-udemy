class Message extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messageIsActive: false,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            messageIsActive: !this.state.messageIsActive,
        });
    }

    render() {
        const text =
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nihil rem voluptatum molestiae? Veniam animi eveniet quibusdam modi sunt perferendis assumenda molestias, neque saepe nostrum in quisquam eius necessitatibus aliquam?";

        return (
            <>
                <button onClick={this.handleClick}>
                    {this.state.messageIsActive ? "Hide" : "Show"}
                </button>

                {/* {this.state.messageIsActive ? <p>{text}</p> : null} */}
                {this.state.messageIsActive && <p>{text}</p>}
            </>
        );
    }
}

ReactDOM.render(<Message />, document.getElementById("root"));
