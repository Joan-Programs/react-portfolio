import { Link } from 'react-router-dom'

export default function Home() {
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

            {/* Home Page Content */}
            <main>
                <h1>Hi, I'm Joan Emanerame</h1>

                <h2>Software Developer & AI Student</h2>

                <p>
                    I design and develop web applications that are user-friendly,
                    efficient, and visually appealing, while continuously exploring
                    the possibilities of artificial intelligence.
                </p>

                <p>
                    My mission is to turn ideas into meaningful digital solutions
                    through creativity, technology, and continuous learning.
                </p>

                <Link to="/about">
                    <button>Learn More About Me</button>
                </Link>
            </main>
        </div>
    )
}