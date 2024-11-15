import React from 'react'
//<link rel="stylesheet" to="About.css" />
import './About.css';
const About = () => {
    return (
        <div class="about-section">
            
            <h1>About This Application</h1>
            <p>Welcome to <strong>My Todo's List</strong>, your go-to app for organizing tasks and boosting productivity. This application is designed with simplicity and efficiency in mind, allowing you to seamlessly manage your daily activities.</p>

            <h2>Key Features:</h2>
            <ul>
                <li>Add tasks with ease to stay on top of your schedule.</li>
                <li>Delete completed or unnecessary tasks to keep your list tidy.</li>
                <li>Persistent storage using your browser’s local storage ensures that your tasks are saved even if you close the app.</li>
                <li>A clean and user-friendly interface for a distraction-free experience.</li>
            </ul>

            <p>This project showcases the use of <strong>React.js</strong> and <strong>React Router</strong> to build a modern, single-page application. By leveraging <strong>local storage</strong>, your todos are saved securely in your browser, making it easy to resume where you left off.</p>

            <p>Explore the app, manage your tasks effectively, and experience the satisfaction of staying organized!</p>
        </div>
    )
}

export default About
