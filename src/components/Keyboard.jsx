import React from "react";
import "../styles/keyboard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft, faXmark } from "@fortawesome/free-solid-svg-icons";
import WhatsappBtn from "./WhatsappBtn";

const Keyboard = ({
  onClickNumber,
  onClickClean,
  onClickDelete,
  isBtnON,
  urlToWhatsapp,
}) => {
  return (
    <React.Fragment>
      <section className="wrap-numbers container">
        <div className="number number-1" onClick={() => onClickNumber(1)}>
          1
        </div>
        <div className="number number-2" onClick={() => onClickNumber(2)}>
          2
        </div>
        <div className="number number-3" onClick={() => onClickNumber(3)}>
          3
        </div>
        <div className="number number-4" onClick={() => onClickNumber(4)}>
          4
        </div>
        <div className="number number-5" onClick={() => onClickNumber(5)}>
          5
        </div>
        <div className="number number-6" onClick={() => onClickNumber(6)}>
          6
        </div>
        <div className="number number-7" onClick={() => onClickNumber(7)}>
          7
        </div>
        <div className="number number-8" onClick={() => onClickNumber(8)}>
          8
        </div>
        <div className="number number-9" onClick={() => onClickNumber(9)}>
          9
        </div>
        <div className="number number-0" onClick={() => onClickNumber(0)}>
          0
        </div>

        {isBtnON && (
          <div id="cleanInput" onClick={() => onClickClean()}>
            <FontAwesomeIcon icon={faXmark} />
          </div>
        )}

        {isBtnON && (
          <div className="number number-delete" onClick={() => onClickDelete()}>
            <FontAwesomeIcon icon={faDeleteLeft} />
          </div>
        )}

        <WhatsappBtn isBtnON={isBtnON} urlToWhatsapp={urlToWhatsapp} />
      </section>
    </React.Fragment>
  );
};
export default Keyboard;
