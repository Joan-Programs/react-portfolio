import { Link } from 'react-router-dom'
import movieImg from './assets/movie-project.png'
import weatherImg from './assets/weather-project.png'
import databaseImg from './assets/database-project.png'

export default function Projects() {
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

            {/* Projects Section */}
            <main>
    <h1>My Projects</h1>

    <p>
        A selection of projects I've worked on while developing my skills
        in web development, software engineering, and database design.
    </p>

    {/* Project 1 */}
    <section>
        <h2>Movie Website</h2>
        <img src={movieImg} alt="Movie Website Project" className="project-image" />
        <p><strong>Web Development Project</strong></p>

        <p>
            A movie-focused website designed to provide users with an
            engaging and easy-to-navigate experience for exploring movie content.
        </p>

        <p>
            <strong>My Role:</strong> Designed and developed the website
            interface and implemented the main front-end features.
        </p>

        <p>
            <strong>Outcome:</strong> Created a responsive and visually
            appealing movie website with a focus on usability and clean design.
        </p>
    </section>

    {/* Project 2 */}
    <section>
        <h2>Weather App</h2>
        <img src={weatherImg} alt="Weather App Project" className="project-image" />
        <p><strong>Web Application • In Progress</strong></p>

        <p>
            A weather application designed to present weather information
            through a clean and user-friendly interface.
        </p>

        <p>
            <strong>My Role:</strong> Designed and developed the application's
            interface and front-end structure.
        </p>

        <p>
            <strong>Current Progress:</strong> The user interface has been
            developed, with additional functionality currently in progress.
        </p>
    </section>

    {/* Project 3 */}
    <section>
        <h2>Database Management Project</h2>
        <img src={databaseImg} alt="Database Project" className="project-image" />
        <p><strong>Database Development</strong></p>

        <p>
            A database project focused on organizing, storing, and managing
            information efficiently using structured database design.
        </p>

        <p>
            <strong>My Role:</strong> Worked on the database structure,
            data organization, and queries used to manage and retrieve information.
        </p>

        <p>
            <strong>Outcome:</strong> Developed a structured database solution
            that demonstrates my understanding of database design and data management.
        </p>
    </section>
</main>
        </div>
    )
}