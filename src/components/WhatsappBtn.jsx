import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsappBtn = ({ isBtnON, urlToWhatsapp }) => {
  return (
    <React.Fragment>
      {isBtnON ? (
        <a
          target="_blank"
          rel="noreferrer"
          href={`${urlToWhatsapp}`}
          className={`buttonChat number active`}
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      ) : (
        <div className="buttonChat number"><FontAwesomeIcon icon={faWhatsapp} /></div>
      )}
    </React.Fragment>
  );
};
export default WhatsappBtn;
