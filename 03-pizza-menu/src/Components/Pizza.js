function Pizza(props) {
    console.log(props.name)
    console.log(props.soldOut)
    return (
        <div className="pizza">
            <img src={props.img} alt="pizza" />
            <div className="pizza-span">
                <h3>{props.title}</h3>
                    {
                        props.soldOut ?
                        "SOLD OUT" :
                        "$" + props.price
                    }
                <p>{props.ingredients}</p>
            </div>
        </div>
    )
}

export default Pizza;