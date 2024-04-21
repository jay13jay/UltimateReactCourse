function Pizza(props) {
    return (
        <div className="pizza">
            <img src={props.img} alt="pizza" />
            <div className="pizza-span">
                <h3>{props.title}</h3>
                    {
                        props.available ? (
                        <p className="pizza sold-out">SOLD OUT</p>
                        ) : (
                            <p>{"$" +props.price}</p>
                        )
                    }
                <p>{props.ingredients}</p>
            </div>
        </div>
    )
}

export default Pizza;