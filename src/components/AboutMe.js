import "../styles/aboutme.css"

const AboutMe = () => {
    return (
        <div className="aboutComponent">
            <div className="about">
                <div className="aboutBorder" >
                    <h1 className="aboutTitle">Technologies</h1>
                    <div className="aboutTextDiv">
                        <h2 className="aboutText">React JS</h2>
                        <h2 className="aboutText">Node JS</h2>
                        <h2 className="aboutText">Express JS</h2>
                        <h2 className="aboutText">Jest</h2>
                        <h2 className="aboutText">MySQL</h2>
                        <h2 className="aboutText">MongoDB</h2>
                        <h2 className="aboutText">IndexedDB</h2>
                    </div>
                </div>
                <div className="aboutBorder">
                    <h1 className="aboutTitle">Languages</h1>
                    <div className="aboutTextDiv">
                        <h2 className="aboutText">HTML</h2>
                        <h2 className="aboutText">CSS</h2>
                        <h2 className="aboutText">JavaScript</h2>
                    </div>
                </div>
                <div className="aboutBorder">
                    <h1 className="aboutTitle">Tools</h1>
                    <div className="aboutTextDiv">
                        <h2 className="aboutText">Github</h2>
                        <h2 className="aboutText">Git Bash</h2>
                        <h2 className="aboutText">JQuery</h2>
                        <h2 className="aboutText">VS Code</h2>
                        <h2 className="aboutText">Bootstrap</h2>
                        <h2 className="aboutText">Graph QL</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AboutMe