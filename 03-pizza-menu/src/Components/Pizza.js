function Pizza(props) {
    return (
        <div className="pizza">
            <img src={props.img} alt="pizza" />
            <div className="pizza-span">
                <h3>{props.title}</h3>
                <p>{"$" + props.price}</p>
                <p>{props.ingredients}</p>
            </div>
        </div>
    )
}

export default Pizza;