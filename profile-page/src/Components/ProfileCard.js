import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';


function ProfileCard() {
    return(
        <Card>
            {/* <Card.Header>
                boop
            </Card.Header> */}
            {/* <Card.Img className="card-img" variant="top" src="5-4_profile_pic.jpg" /> */}
            {/* <Card.Img src="https://placehold.co/400x250" /> */}
            <Card.Body>
                <Card.Title>Josh Hackney</Card.Title>
                <Card.Subtitle>DevOps | SRE | Infrastructure</Card.Subtitle>
                {/* <hr /> */}
                <h5 className='pad-top'>
                    Skills
                    <hr className='text-divider' />
                </h5>
                <Row>
                    <Col>
                        <Card.Text>
                            <p>Golang</p>
                            <p>React</p>
                            <p>Python</p>
                            <p>C++</p>
                        </Card.Text>
                    </Col>
                    <Col>
                        <Card.Text>

                            <p className='skill-progress'><ProgressBar variant='success' now={80} /></p>
                            <p className='skill-progress'><ProgressBar variant='warning' now={60} /></p>
                            <p className='skill-progress'><ProgressBar variant='success' now={90} /></p>
                            <p className='skill-progress'><ProgressBar variant='danger' now={20} /></p>
                        </Card.Text>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default ProfileCard;