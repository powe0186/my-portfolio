import { ListGroup } from 'react-bootstrap';

const contactInfoStyle = {
    backgroundColor: '#77a5bf', 
    color: "white"
}

const ContactInfo = () => {

    return (
        <ListGroup style={ { margin: "5rem" }}>
            <ListGroup.Item style={ contactInfoStyle }>Email: powe0186@gmail.com</ListGroup.Item>
            <ListGroup.Item style={ contactInfoStyle }>Phone: 651-324-3241</ListGroup.Item>
            <ListGroup.Item style={ contactInfoStyle }>GitHub: https://github.com/powe0186</ListGroup.Item>
            <ListGroup.Item style={ contactInfoStyle }>LinkedIn: https://www.linkedin.com/in/benjamin-powell10/</ListGroup.Item>
        </ListGroup>
    )
}

export default ContactInfo;