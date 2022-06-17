import { ListGroup } from 'react-bootstrap';

const contactInfoStyle = {
    backgroundColor: '#77a5bf', 
    color: "white"
}

const ContactInfo = () => {

    return (
        <ListGroup style={ { margin: "5rem" }}>
            <ListGroup.Item style={ contactInfoStyle }>Email: <a href="mailto:powe0186@gmail.com">powe0186@gmail.com</a></ListGroup.Item>
            <ListGroup.Item style={ contactInfoStyle }>Phone: 651-324-3241</ListGroup.Item>
            <ListGroup.Item style={ contactInfoStyle }>GitHub: <a href="https://github.com/powe0186">https://github.com/powe0186</a></ListGroup.Item>
            <ListGroup.Item style={ contactInfoStyle }>LinkedIn: <a href="https://www.linkedin.com/in/benjamin-powell10/">https://www.linkedin.com/in/benjamin-powell10/</a></ListGroup.Item>
        </ListGroup>
    )
}

export default ContactInfo;