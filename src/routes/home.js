import { findByLabelText } from '@testing-library/react';
import { Card } from 'react-bootstrap';
import InternalLink from '../components/InternalLinks.js';

const linksData = [
    {
        route: "/aboutMe",
        description: "My professional long story made short!",
        name: "About Me"
    },
    {
        route: "/projects",
        description: "A sample of my favorite projects. Some from my bootcamp, and others just for fun!",
        name: "My Projects"
    },
    {
        route: "/resume",
        description: "See my Resume.",
        name: "My Resume"
    },
    {
        route: "/contactInfo",
        description: "All the ways to get in contact with me!",
        name: "My Contact Info"
    },
];

const homeStyle={
    margin: "30px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
}

const Home = () => {

    return (
        <div style={ homeStyle }>
            {linksData.map((thisLink) => 
                <InternalLink props={ thisLink }></InternalLink>
            )}
            
        </div>
    )
}

export default Home;