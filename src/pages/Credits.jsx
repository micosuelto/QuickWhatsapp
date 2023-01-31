import React from "react";
import "../styles/global.scss";
import "../styles/credits.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { SuperSEO } from "react-super-seo";

const Credits = () => {
  return (
    <React.Fragment>
      <SuperSEO
        title="QuickWhatsapp | Web development by micosuelto."
        description="Simple PWA to start chat in Whatsapp to users that are not in our contacts."
        lang="en"
        openGraph={{
          ogImage: {
            ogImage: "https://quickwhatsapp.newsite.co/open-graph-image.png",
            ogImageAlt: "QuickWhatsapp",
            ogImageWidth: 1200,
            ogImageHeight: 630,
            ogImageType: "image/png",
          },
        }}
      />
      <div id="credits-page">
        <div className="container">
          <p>
            <img src="logo.svg" alt="QuickWhatsapp" title="QuickWhatsapp" width="90px" />
          </p>
          <h2>
            My mom detests saving contacts just so she can write to them on 
            <span className="text-secondary"> Whatsapp</span>.
          </h2>
          <h2>
            This is a simple app<br />
            for those who are suffering from the same.
          </h2>

          <p>
            It's my first PWA with ReactJS.<br />
            Feel free to punish those lines.
          </p>
          <p>
            This is my GitHub.
          </p>
          <p>
            <a href="https://github.com/micosuelto" target="_blank" rel="noreferrer" className="github-link">
              <FontAwesomeIcon icon={faGithub} />
               /micosuelto
            </a>
          </p>
          <p>
            <a href="/">Back to app</a>.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Credits;
