import "../CSS Components/home.css";
import github from "../images/github.png";
import instagram from "../images/instagram.png";
import linkdin from "../images/linkdin.png";
import profile from "../images/profile.png";

export default function Home() {
  return (
    <>
      <main className="mainContainer" id="home">
        <div className="container">
          {/* Profile Section - Now First */}
          <div className="profile-section">
            <div className="profile">
              <div className="photo">
                <div className="redCircle"></div>
                <img src={profile} alt="Sujal Thapa Profile Photo" />
              </div>
            </div>
          </div>

          {/* Content Section - Now Second */}
          <div className="content-section">
            <h1>
              Hello, I'm Sujal <br /> a Student
            </h1>
            <p className="intro">
              A passionate student currently pursuing BCA in cloud computing and
              Information Technology at Medhavi Skills University in Sikkim.
              Love to explore new things and upgrade myself in time.
            </p>

            <div className="social_Applications">
              <ul className="apps">
                <li>
                  <a
                    href="https://github.com/Sujal-Thapa1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="logo" src={github} alt="GitHub" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/be_uni.que__/profilecard/?igsh=bmVjN2p3eG9yN210"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="instagram"
                      src={instagram}
                      alt="Instagram"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://t.ly/GlHbn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="logo" src={linkdin} alt="LinkedIn" />
                  </a>
                </li>
              </ul>
            </div>

            <div className="links">
              <a
                href="/Sujal_Thapa.pdf"
                className="contactMe"
                target="_blank"
                rel="noopener noreferrer"
                download="Sujal Thapa CV.pdf"
              >
                <button className="contactMe">Download CV</button>
              </a>
              <button className="Resume">See my Resume</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
