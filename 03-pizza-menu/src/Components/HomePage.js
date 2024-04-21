import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
import myData from "../data"

function HomePage() {
    const menu = myData.pizzaData;
    const orderAvail = myData.pizzaData.length
    console.log("ordering available?: " + orderAvail)
    return (
        <>
            <Header />
            <Menu data={menu} />
            <Footer orderAvail={orderAvail}/>
        </>
    )
}

export default HomePage;