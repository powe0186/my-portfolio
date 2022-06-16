import { Link } from 'react-router-dom'
import { Card, Button, ListGroup } from 'react-bootstrap';
import { DiGithubBadge } from 'react-icons/di';


const buttonsStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '20px',
}

const cardStyle = {
    width: '18rem', 
    height: '40rem', 
    margin: 20,
    backgroundColor: '#063049',
    color: 'white',
    border: '#77a5bf 3px solid'
}
const Project = (props) => {

    return (

        <Card style={ cardStyle }>
            <Card.Img variant="top" src={props.props.image} />
            <Card.Body>
                {console.log(props)}
                <Card.Title>{props.props.projectName}</Card.Title>
                <Card.Text>
                    {props.props.description}
                </Card.Text>
                <Card.Header style={{fontSize: 20}}>Technology Used:</Card.Header>
                <ListGroup variant="flush" style={{ border: 'white solid 1px', borderRadius: 5}}>
                    {props.props.tech.map((type) => <ListGroup.Item style={ {backgroundColor: '#063049', color: 'white', }}>{type}</ListGroup.Item>)}
                    <ListGroup.Item style={ {backgroundColor: '#063049'}}></ListGroup.Item>
                </ListGroup>
            <div style={buttonsStyle}>
                <a href={props.props.github}><Button variant="primary"><DiGithubBadge /></Button></a>
                <a href={props.props.live}><Button variant="primary">Live</Button></a>
            </div>
        </Card.Body>
        </Card >

        
    )
}

export default Project;