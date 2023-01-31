import React from "react";
import InfoApp from "../components/HeaderApp";
import "../styles/global.scss";
import "../styles/credits.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { SuperSEO } from "react-super-seo";

const Credits = () => {
  return (
    <React.Fragment>
      <SuperSEO
        title="Credits | React Super SEO"
        description="React SEO component with OpenGraph and Twitter Cards support."
        lang="en"
        openGraph={{
          ogImage: {
            ogImage: "http://placekitten.com/1200/630",
            ogImageAlt: "Kittens",
            ogImageWidth: 1200,
            ogImageHeight: 630,
            ogImageType: "image/jpeg",
          },
        }}
      />
      <div id="credits-page">
        <div className="container">
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

      <InfoApp />
    </React.Fragment>
  );
};

export default Credits;
