const Header = () => {
    return <h1>Hello!</h1>;
};

class Article extends React.Component {
    state = {
        number: 0,
    };

    render() {
        return (
            <section>
                <h2>Article</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Earum laboriosam blanditiis nam quis aliquam doloremque
                    sapiente hic perspiciatis veniam eveniet omnis doloribus
                    expedita saepe numquam cum voluptatem cumque, iusto aut.
                </p>
            </section>
        );
    }
}

const Blog = () => {
    return (
        <>
            <Header />
            <Article />
        </>
    );
};

ReactDOM.render(<Blog />, document.getElementById("root"));
