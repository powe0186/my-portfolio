import bookwormPic from '../images/Bookworm.PNG';
import pennyPic from '../images/penny.PNG';
import bgPic from '../images/catan.jpg';
import weatherPic from '../images/Weather.png';
import bootcampForumPic from '../images/BootcapForum.png'

const projectData = [
    {
        projectName: 'Bookworm',
        image: bookwormPic,
        description: 'A website for searching books.',
        tech: ['JS', 'HTML', 'CSS', 'Web API'],
        github: 'https://github.com/powe0186/project1',
        live: 'https://powe0186.github.io/project1/'
    },

    {
        projectName: 'Penny For Your Thoughts',
        image: pennyPic,
        description: 'A social media website allowing users to post interesting quotes',
        tech: ['Node', 'CSS', 'React', 'React-Bootstrap','mongoose', 'apollo' ],
        github: 'https://github.com/smturner/penny_for_your_thoughts',
        live: 'https://penny4yourthoughts.herokuapp.com/'
    },

    {
        projectName: 'Solo Board Gaming',
        image: bgPic,
        description: 'A website with JS powered "automas" used for playing a variety of board games solo.',
        tech: ['JS', 'HTML', 'CSS'],
        github: 'https://github.com/powe0186/boardGameAutomas',
        live: 'https://powe0186.github.io/boardGameAutomas/'
    },

    {
        projectName: 'Weather Checker',
        image: weatherPic,
        description: 'A website for searching searching today\'s weather conditions and an extended forecast in any city.',
        tech: ['JS', 'HTML', 'CSS', 'Web API'],
        github: 'https://github.com/powe0186/weatherChecker',
        live: 'https://powe0186.github.io/weatherChecker/'
    },
    {
        projectName: 'Bootcamp Forum',
        image: bootcampForumPic,
        description: 'A social media site for bootcamp students. Post advice, check in with colleagues, and let everyone know when you have a job offer.',
        tech: ['express', 'handlebars', 'mysql2', 'nodemailer'],
        github: 'https://github.com/midth002/bootcamp-forum',
        live: 'https://quiet-inlet-26349.herokuapp.com/login'
    },
]

export default projectData;