function Main (){
    return (
        <div>
            <section id="about">
                <h2>About Me</h2>
                <img width="300px" height="300px" src={process.env.PUBLIC_URL + '/huseyn_hajiyev.jpeg'}  alt="Huseyn Hajiyev"/>
                <p>I am a dedicated Computer Science student at ADA University, currently pursuing a Bachelor of Science degree.
                    My expertise lies in competitive programming,
                    where I have demonstrated a strong ability to solve complex algorithmic problems
                    and consistently rank in the top percentiles in regional coding competitions.
                    Additionally, I am proficient in web development, excelling in both frontend and backend technologies.
                    I have successfully designed and developed multiple functional and visually appealing websites using languages such as HTML, CSS, JavaScript.
                    I also developed backend systems and microservices. At the moment I am CTO of CodeAny (codeany.org).
                </p>
            </section>

            <section id="portfolio">
                <h2>Portfolio</h2>
                <div className="portfolio-item">
                    <h3>Hey Hajiyevs Chat</h3>
                    <p>URL: https://github.com/computerbox124/Hey-Hajiyevs</p>
                </div>
                <div className="portfolio-item">
                    <h3>Web & Mobile course Assignment 1 - CV Page</h3>
                    <p>URL: https://github.com/computerbox124/cv-page</p>
                </div>
                <div className="portfolio-item">
                    <h3>Web & Mobile course Assignment 2</h3>
                    <p>URL: https://github.com/computerbox124/web-mobile-assignment-2</p>
                </div>
            </section>


        </div>
    );
}


export default Main;