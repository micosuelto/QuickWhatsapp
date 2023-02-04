import React from "react";
import "../styles/NotFound.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { SuperSEO } from "react-super-seo";

const NotFound = () => {
  return (
    <div className="page404">
      <SuperSEO
        title="QuickWhatsapp | Page not found"
        description="Simple PWA to start chat in Whatsapp to users that are not in our contacts."
        lang="en"
        openGraph={{
          ogImage: {
            ogImage: 'https://quickwhatsapp.newsite.co/opengraph.jpg',
            ogImageAlt: "QuickWhatsapp",
            ogImageWidth: 1200,
            ogImageHeight: 630,
            ogImageType: "image/png",
          },
        }}
      />
      <FontAwesomeIcon icon={faXmark} size="3x" />
      <h2>Page not found.</h2>
      <p>
        <a href="/">Back to home</a>.
      </p>
    </div>
  );
};

export default NotFound;
