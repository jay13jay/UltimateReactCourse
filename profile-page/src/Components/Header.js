import Nav from 'react-bootstrap/Nav'

function Header() {
    return (
        <header className='main-header'>
            <h1>
                <Nav className="justify-content-center" activeKey="/home">
                    <Nav.Item>
                        Profile Page
                    </Nav.Item>
                </Nav>
            </h1>
        </header>
    )
}

export default Header;