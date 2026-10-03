import { Link } from 'react-router-dom'

export default function Education() {
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

            {/* Education Section */}
            <main>
    <h1>Education & Certifications</h1>

    <p>
        My education and certifications reflect my growing experience across
        software development, artificial intelligence, web development, and design.
    </p>

    {/* College Education */}
    <section>
        <h2>Software Engineering Technology - Artificial Intelligence</h2>
        <h3>[Centennial College]</h3>
        <p>[2025] - Present</p>

        <p>
            Building practical skills in software development, artificial
            intelligence, web development, databases, and software design.
        </p>
    </section>

    {/* Graphic Design Certificate */}
    <section>
        <h2>Certificate in Graphic Design</h2>
        <h3>[MyTeacher Institute]</h3>
        <p>[2024]</p>

        <p>
            Developed skills in visual design, creativity, and creating
            engaging digital content.
        </p>
    </section>

    {/* Front-End Certificate */}
    <section>
        <h2>Front-End Programming Certificate</h2>
        <h3>[MyTeacher Institute]</h3>
        <p>[2024]</p>

        <p>
            Developing practical skills in building responsive and
            user-friendly web interfaces using front-end technologies.
        </p>
    </section>
</main>
        </div>
    )
}