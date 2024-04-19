import Pizza from "./Pizza";
import myData from "../data"

function Menu() {
    return (
        <main className='menu'>
            <h2>Menu</h2>

            <div className="pizzas container">
                {myData.pizzaData.map(item => (
                    <Pizza 
                        className="span"
                        key={item.id}
                        title={item.name}
                        ingredients={item.ingredients}
                        img={item.photoName}
                        price={item.price}
                        available={item.soldOut}
                    />
                ))}
            </div>
        </main>
    )
}

export default Menu;