import { Link } from 'react-router-dom';
import 'bootstrap';
import { Card, Button } from 'react-bootstrap';



const cardStyle = {
    width: '18rem',
    height: '15rem', 
    margin: "30",
    backgroundColor: '#77a5bf'
}

const InternalLink = (props) => {

    return (
                <Card style={cardStyle}>
                    <Card.Body>
                        <Card.Title>{props.props.name}</Card.Title>
                        <Card.Text>
                            {props.props.description}
                        </Card.Text>
                        <Link to={props.props.route}><Button variant="primary"> Go </Button></Link>
                    </Card.Body>
                </Card>
            )
        
}

export default InternalLink;
