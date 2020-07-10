class App extends React.Component {
    state = {
        items: [
            { id: 1, name: "tea", active: false },
            { id: 2, name: "cookies", active: false },
            { id: 3, name: "potatoes", active: false },
            { id: 4, name: "soup", active: false },
            { id: 5, name: "bread", active: false },
            { id: 6, name: "coffee", active: false },
        ],
    };

    handleChangeStatus = (id) => {
        const items = this.state.items.map((item) => {
            if (id === item.id) {
                item.active = !item.active;
            }

            return item;
        });

        this.setState({
            items,
        });
    };

    render() {
        return (
            <>
                <Header items={this.state.items} />
                <ListItems
                    items={this.state.items}
                    changeStatus={this.handleChangeStatus}
                />
            </>
        );
    }
}
