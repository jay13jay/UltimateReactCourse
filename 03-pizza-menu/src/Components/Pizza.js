function Pizza(props) {
    return (
        <div className="pizza">
            <img src={props.img} alt="pizza" />
            <div className="pizza-span">
                <h3>{props.title}</h3>
                    {
                        props.available ?
                        "SOLD OUT" :
                        "$" + props.price
                    }
                <p>{props.ingredients}</p>
            </div>
        </div>
    )
}

export default Pizza;