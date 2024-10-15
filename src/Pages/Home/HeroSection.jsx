export default function HeroSection(){
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Kathy</p>
                    <h1 className="hero--section-title">
                        <span className="hero--section--title--color">Full Stack
                            </span>{" "}
                            <br/>
                            Developer
                    </h1>
                    <p className="hero--section--description">
                        Full stack developer, machine learning enthusiast
                        <br/>
                        Associate Professor Ross Smith is a member of the Australian Research Centre for Interactive and Virtual Environments (IVE) leadership 
                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className="hero--section--img">
                <img src="src/img/profile.jpg" alt="Profile Picture"></img>
            </div>
        </section>
    )
}