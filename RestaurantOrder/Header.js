const Header = (props) => {
    const activeItem = props.items.filter((item) => item.active);
    const number = activeItem.length;

    return (
        <header>
            <h2>Order quantity: {number}</h2>
            <h2>
                Order price:{" "}
                {number ? `${number * 5}$` : "You are not buying anything"}
            </h2>
        </header>
    );
};
