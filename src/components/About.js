import logo from '../images/John-Doe.jpg'
function About(){
    return(
        <div className="about-me">
        <h1>
          Hello, my name is
          <span className="rotate text-important">John doe</span>,<br />
          and i make horrible websites.
        </h1>
        <img className="avatar" src={logo} alt="jhon-doe" />
      </div>
    );
}

export default About;