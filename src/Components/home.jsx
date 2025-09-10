import "../CSS Components/home.css";
import github from "../images/github.png";
import instagram from "../images/instagram.png";
import linkdin from "../images/linkdin.png";
import profile from "../images/profile.png";

export default function Home() {
  const handleDownloadCV = () => {
    // The path to your CV file located in the `public` folder.
    const cvFile = "/Sujal Thapa.pdf";

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = cvFile;
    // ADD THIS LINE: This helps on mobile by opening a new tab
    link.target = "_blank";

    // Some browsers also need this for cross-origin security
    link.rel = "noopener noreferrer";

    // Set the download attribute with a desired filename
    link.setAttribute("download", "Sujal Thapa CV.pdf");

    // Append the link to the body, click it, and then remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
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
              <a // The path to your CV in the public folder
                href="/Sujal Thapa.pdf"
                className="contactMe" // Style this class in your CSS to look like a button
                target="_blank" // This is KEY for mobile devices
                rel="noopener noreferrer"
                download="Sujal Thapa CV.pdf" // This will work for most desktop browsers
              >
                <button className="contactMe" onClick={handleDownloadCV}>
                  Download CV
                </button>
              </a>
              <button className="Resume">See my Resume</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
