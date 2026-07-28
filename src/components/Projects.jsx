import { useState } from 'react';
import malaysiaWeatherTodayImg from '../assets/ProjectsImg/msia-weather-today.png';
import malaysiaWeatherTodayBlur from '../assets/ProjectsImg/msia-weather-today-blur.jpeg';
import malaysiaWeatherTodayBg from '../assets/ProjectsImg/msia-weather-today-bg.png';
import tiomanTripGatewayImg from '../assets/ProjectsImg/tioman-trip-gateway.png';
import tiomanTripGatewayBlur from '../assets/ProjectsImg/tioman-trip-gateway-blur.jpg';
import tiomanTripGatewayBg from '../assets/ProjectsImg/tioman-trip-gateway-bg.png';
import figmaIcon from '../assets/ProjectsImg/figma-icon.png';
import htmlIcon from '../assets/ProjectsImg/html-icon.png';
import cssIcon from '../assets/ProjectsImg/css-icon.png';
import jsIcon from '../assets/ProjectsImg/js-icon.png';
import reactIcon from '../assets/ProjectsImg/react-icon.png';
import vscodeIcon from '../assets/ProjectsImg/vscode-icon.png';
import chatgptIcon from '../assets/ProjectsImg/chatgpt-icon.png';
import geminiIcon from '../assets/ProjectsImg/gemini-icon.png';
import githubIcon from '../assets/ProjectsImg/github-icon.png';
import './Projects.css';

export function Projects() {
    const [ title, setTitle ] = useState('Development Tools');

    const projects = [
        {
            title: "Malaysia Weather Today",
            bg: malaysiaWeatherTodayBg,
            img: malaysiaWeatherTodayImg,
            blur: malaysiaWeatherTodayBlur,
            link: "https://shunlinglim.github.io/malaysia-weather-today/",
        },
        {
            title: <>Tioman Gateway <span className="vert-bar">|</span> Demo Project (Remake)</>,
            bg: tiomanTripGatewayBg,
            img: tiomanTripGatewayImg,
            blur: tiomanTripGatewayBlur,
            link: "https://shunlinglim.github.io/tioman-trip-gateway/",
        }
    ];
    const [ hoverStateIndex, setHoverStateIndex ] = useState(
        new Array(projects.length).fill(false)
    );

    const tools = [
        { name: 'Figma', icon: figmaIcon },
        { name: 'HTML', icon: htmlIcon },
        { name: 'CSS', icon: cssIcon },
        { name: 'JavaScript', icon: jsIcon },
        { name: 'React', icon: reactIcon },
        { name: 'Visual Studio Code', icon: vscodeIcon },
        { name: 'ChatGPT', icon: chatgptIcon },
        { name: 'Gemini', icon: geminiIcon },
        { name: 'GitHub', icon: githubIcon },
    ];

    return (
        <section className='projects' id='projects'>
            <div className='projects-display'>
                {projects.map((project, index) => (
                    <a key={project.title} target='_blank' href={project.link}>
                        <img className='bg' src={project.bg} style={{ opacity: hoverStateIndex[index] ? 0.8 : 0.2 }}/>
                        <div className='item' 
                            onMouseEnter={() => setHoverStateIndex(prev => prev.map((state, i) => i === index))} 
                            onMouseLeave={() => setHoverStateIndex(prev => prev.map((state, i) => i === index ? false : state))}>
                            <h2>{project.title}</h2>
                            <div className='photo'>
                                <img className='img' src={project.img} alt="project-img" />
                                <img className='blur' src={project.blur} style={{ opacity: hoverStateIndex[index] ? 1 : 0 }}/>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
            <div className="dev">
                <h2 key={title}>{title}</h2>
                <div>
                    {tools.map((tool) => (
                        <img key={tool.name} 
                            className='icon' 
                            src={tool.icon} 
                            alt='icon' 
                            onMouseEnter={() => setTitle(tool.name)} 
                            onMouseLeave={() => setTitle('Development Tools')} />
                    ))}
                </div>
            </div>
        </section>
    )
}