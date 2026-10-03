import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Contact() {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: ''
    })

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        // Redirect user to the Home page after submitting the form
        navigate('/')
    }

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

            {/* Contact Section */}
            <main>
                <h1>Contact Me</h1>

                <p>
                    Have a project, opportunity, or idea you'd like to discuss?
                    Feel free to get in touch.
                </p>

                {/* Contact Information */}
                <section>
                    <h2>Let's Connect</h2>
                    <p>Email: emaneramejoan@gmail.com</p>
                    <p>Location: Toronto, Ontario</p>
                </section>

                {/* Contact Form */}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label>Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label>Contact Number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label>Email Address</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div>
                        <label>Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <button type="submit">Send Message</button>
                </form>
            </main>
        </div>
    )
}