import Project from '../components/Project';
import projectData from '../assets/data';

const projectsStyle={
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    margin: 40,
    width: '100%'
}

const Projects = () => {

    return (
        <div style={ projectsStyle }>
            {projectData.map((project) => <Project props={ project }/>)}
        </div>
    )
}

export default Projects;