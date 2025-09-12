import "../CSS Components/home.css";
import github from "../images/github.png";
import instagram from "../images/instagram.png";
import linkdin from "../images/linkdin.png";
import profile from "../images/profile.png";

export default function Home() {
  const handleDownload = async () => {
    // The path to your CV file. This file MUST be in the `public` folder of your project.
    const pdfPath = "portfolio/public/Sujal_Thapa.pdf";
    const fileName = "Sujal_Thapa CV.pdf";

    try {
      // Use the fetch API to get the PDF file as a blob.
      const response = await fetch(pdfPath);
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const blob = await response.blob();

      // Create a temporary URL for the blob object.
      const url = window.URL.createObjectURL(blob);

      // Create a temporary anchor element to trigger the download.
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName); // Set the desired file name

      // Append the anchor to the document, click it, and then remove it.
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);

      // Clean up the blob URL.
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("There was a problem with the download:", error);
    }
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
              <button className="contactMe" onClick={handleDownload}>
                Download CV
              </button>
              <button className="Resume">See my Resume</button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
