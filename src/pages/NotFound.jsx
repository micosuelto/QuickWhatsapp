import React from "react";
import "../styles/NotFound.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { SuperSEO } from "react-super-seo";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();
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
            ogImageType: "image/jpg",
          },
        }}
      />
      <FontAwesomeIcon icon={faXmark} size="3x" />
      <h2>{t("notFound")}</h2>
      <p>
      <a href="/">{t("back")}</a>.
      </p>
    </div>
  );
};

export default NotFound;
