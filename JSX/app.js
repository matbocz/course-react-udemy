const header = <h1>Hello!</h1>;

const handleClick = () => alert("Click!");
const main = (
    <div>
        <h1 onClick={handleClick}>Article</h1>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni quae
            dolorem corrupti possimus voluptatem cupiditate eius autem ad quis
            obcaecati consequatur quas numquam, perferendis, aliquam ipsa
            incidunt. Fugiat, facilis nobis.
        </p>
    </div>
);

const footerClass = "big";
const footerText = "This is footer.";
const footer = (
    <footer>
        <p className={footerClass}>{footerText}</p>
    </footer>
);

const app = [header, main, footer];

ReactDOM.render(app, document.getElementById("root"));
