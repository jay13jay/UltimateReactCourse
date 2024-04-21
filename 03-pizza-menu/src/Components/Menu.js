import Pizza from "./Pizza";

function Menu(props) {
    const numPizzas = props.data.length
    return (
        <main className='menu container'>
            <h2>Menu</h2>

            <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
            </p>

            {numPizzas > 0 ? (
                 <ul className="pizzas">
                    {props.data.map(item => 
                        (
                            <li key={item.name}>
                            <Pizza 
                                className="span"
                                title={item.name}
                                ingredients={item.ingredients}
                                img={item.photoName}
                                price={item.price}
                                available={item.soldOut}
                            />
                            </li>
                        ))}
                </ul>
                )
                : (
                    <p>There are no pizzas available at this time.</p>
                )
            }
        </main>
    )
}

export default Menu;