import { Link } from 'react-router-dom'
import profileImg from './assets/profile.jpg'

export default function About() {
    return (
        <div>
            {/* Navigation Bar */}
            <nav>
                <div>JE</div>

                <div>
                    <Link to="/">Home</Link>
                    <Link to="/about">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/education">Education</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact Me</Link>
                </div>
            </nav>

            {/* About Me Section */}
            <main>
                <h1>About Me</h1>

                <img
    src={profileImg}
    alt="Joan Emanerame"
    className="profile-image"
/>

                <h2>Joan Emanerame</h2>

                <p>
                    I'm a Software Engineering - Artificial Intelligence student
                    with a passion for technology, problem-solving, and creating
                    engaging digital experiences.
                </p>

                <p>
                    I enjoy developing web applications and exploring how artificial
                    intelligence can be used to build smarter and more useful
                    solutions. I'm continuously expanding my technical skills through
                    hands-on projects and new challenges.
                </p>

                <a href="/Joan-Emanerame-Resume.pdf" target="_blank">
                    <button>View My Resume</button>
                </a>
            </main>
        </div>
    )
}