export default function ProfileSection() {
  return (
    <section id="profile--section" className="profile--section">
      <div className="profile--section--content--box">
        <div className="profile--section--content">
          <p className="section--title">Hey, I'm Kathy</p>
          <h1 className="profile--section-title">
            <span className="profile--section--title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="profile--section--description">
            Full stack developer, machine learning enthusiast
            <br />
            Associate Professor Ross Smith is a member of the Australian
            Research Centre for Interactive and Virtual Environments (IVE)
            leadership
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="profile--section--img">
        <img src="src/img/profile.jpg" alt="Profile Picture"></img>
      </div>
    </section>
  );
}
