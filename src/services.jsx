import { Link } from 'react-router-dom'

export default function Services() {
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

            {/* Services Section */}
            <main>
                <h1>My Services</h1>

                <p>
                    I create practical and user-focused digital solutions,
                    combining technical skills with creativity and attention to detail.
                </p>

                {/* Service 1 */}
                <section>
                    <h2>Web Development</h2>
                    <p>
                        Building responsive and user-friendly websites and web
                        applications using modern web technologies.
                    </p>
                </section>

                {/* Service 2 */}
                <section>
                    <h2>Software Development</h2>
                    <p>
                        Developing practical software solutions with a focus on
                        clean, organized, and efficient code.
                    </p>
                </section>

                {/* Service 3 */}
                <section>
                    <h2>AI Solutions</h2>
                    <p>
                        Exploring and developing intelligent solutions using
                        artificial intelligence and machine learning concepts.
                    </p>
                </section>
            </main>
        </div>
    )
}