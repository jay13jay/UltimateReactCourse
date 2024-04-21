
function Footer(props) {
    const openHour = 9
    const closeHour = 22
    const currentHour = new Date().getHours()
    const currentYear = new Date().getFullYear()
    const currentlyOpen = function() {
        if (currentHour >= openHour && currentHour <= closeHour) {
            return true
        } else {
            return false
        }
    }
    const amPM = function(hour) {
        if (hour > 12) {
            return hour - 12 + " PM"
        } else {
            return hour + " AM"
        }
    }
    return (
        <>
        <div className="order">
            {
                currentlyOpen() ?
                    <>
                        {
                            props.orderAvail ? 
                                <>
                                    <h2 className="open"> We're currently open!</h2>
                                    <h3 className="btn"> <a href="/">Order Now!</a></h3>
                                </>
                        :
                            <h3 className="btn unavail"> <p>Ordering Unavailable!</p></h3>
                        }
                    </>
                    :
                    <>
                        <div className="align-items-center">
                        <h2 className="closed"> Closed. <br /> {'Hours:\t'}
                            {amPM(openHour)} - {amPM(closeHour)}
                        </h2>
                        </div>
                    </>
            }
        </div>
            <footer className="footer">
                <p>{"Copyright\t" + currentYear +"\t jHax, LLC"}</p>
            </footer>
        </>
    )
}

export default Footer;