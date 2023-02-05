import React from "react";
import "../styles/global.scss";
import "../styles/credits.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { SuperSEO } from "react-super-seo";
import logo from "../assets/logo.svg";
import { useTranslation } from "react-i18next";

const Credits = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <SuperSEO
        title="QuickWhatsapp | Web development by micosuelto."
        description="Simple PWA to start chat in Whatsapp to users that are not in our contacts."
        lang="en"
        openGraph={{
          ogImage: {
            ogImage: "https://quickwhatsapp.newsite.co/opengraph.jpg",
            ogImageAlt: "QuickWhatsapp",
            ogImageWidth: 1200,
            ogImageHeight: 630,
            ogImageType: "image/jpg",
          },
        }}
      />
      <div id="credits-page">
        <div className="container">
          <p>
            <img
              src={logo}
              alt="QuickWhatsapp"
              title="QuickWhatsapp"
              width="90px"
              height="90px"
            />
          </p>
          <div dangerouslySetInnerHTML={{ __html: t("about") }} />
          <p>
            <a
              href="https://github.com/micosuelto"
              target="_blank"
              rel="noreferrer"
              className="github-link"
            >
              <FontAwesomeIcon icon={faGithub} />
              /micosuelto
            </a>
          </p>
          <p>
            <a href="/">{t("back")}</a>.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Credits;
