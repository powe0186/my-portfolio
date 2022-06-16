import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import pic from '../images/BenAndAdelina.jpg'

const aboutMeStyle = {
    border: '3px solid black',
    borderRadius: 10,
    backgroundColor: '#77a5bf',
    width: '60%',
    height: '60%',
    margin: '40px'
}

const picStyle = {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '30px',
    borderRadius: '50%',
    width: '30%'
}

const AboutMe = () => {

    return (
        <div style={ aboutMeStyle }>
            <Card style={{ backgroundColor: '#77a5bf' }}>
            <Card.Title style={{ fontSize: 40}}>About Me</Card.Title>
                <Card.Img variant="top" src={pic} style={ picStyle }/>
                <Card.Body>
                    
                    <Card.Text style={{fontSize: 30}}>
                        <p>I graduated from the University of Minnesota with a B.A. in Mathematics and a Masters in Mathematics
                        education. I have spent the last 17 years teaching high school and middle school Math, Tech Ed, and 
                        Computer Science.</p>
                        <br />
                        <p>I am a father of two - Finnley(12) and Adelina(7). </p>
                        <br />
                        <p>While teaching computer science, I discovered a love for coding. I began learning coding languages in my 
                        spare time and working on projects just for fun. I soon realized that my love of coding went far beyond a 
                        simple hobby.</p>
                        <br />
                        <p>In February of 2022, I left teaching to pursue a career in web development. In June, I completed the Full Stack 
                        Web Development Bootcamp at the University of Minnesota.</p>
                        <br />
                        <p>I am a somewhat obsessive board game collector. My collection is somewhere over 700 games and expansions.</p>
                    </Card.Text>
                </Card.Body>
                {/* <ListGroup className="list-group-flush">
                    <ListGroupItem>Cras justo odio</ListGroupItem>
                    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                    <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup> */}
                {/* <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body> */}
            </Card>

        </div>
    )
}

export default AboutMe;