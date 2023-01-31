import React from "react";
import { useState, useEffect } from "react";
import InfoApp from "../components/HeaderApp";
import PhoneNumber from "../components/PhoneNumber";
import Keyboard from "../components/Keyboard";
import { SuperSEO } from "react-super-seo";

const Home = () => {
  //**** Main Variables ****//
  let [localStorageDialCode, setLocalStorageDialCode] = useState(
    localStorage.getItem("defaultDialCode")
  );
  let [localStorageCountryCode, setLocalStorageCountryCode] = useState(
    localStorage.getItem("defaultCountryCode")
  );
  const [phoneValue, setphoneValue] = useState(`${localStorageDialCode}`);
  const rawPhoneValue = `${phoneValue.replace(/\D/g, "")}`;
  const urlToWhatsapp = `https://wa.me/${rawPhoneValue}`;

  //**** Enable elements when input is used ****//

  const [isBtnON, setIsBtnON] = useState(false);
  useEffect(() => {
    if (rawPhoneValue.length > localStorageDialCode.length) {
      setIsBtnON(true);
    } else {
      setIsBtnON(false);
    }
  }, [rawPhoneValue, localStorageDialCode]);

  //**** Default Local Storage ****//
  if (!localStorageDialCode) {
    setLocalStorageDialCode("57");
    localStorageDialCode = localStorage.setItem("defaultDialCode", "57");
    return;
  }
  if (!localStorageCountryCode) {
    setLocalStorageCountryCode("co");
    localStorageCountryCode = localStorage.setItem("defaultCountryCode", "co");
    return;
  }

  //**** Basic Functions ****//

  // Update Local Storage
  const updateDefaultCountry = (dialCode, countryCode) => {
    localStorage.setItem("defaultDialCode", dialCode);
    localStorage.setItem("defaultCountryCode", countryCode);
    console.log(
      `Country saved in localstorage: +${localStorage.defaultDialCode} / ${localStorage.defaultCountryCode}`
    );
  };

  // Reset phone value
  const resetPhoneValue = () => {
    const resetPhoneCalc = rawPhoneValue.length - localStorageDialCode.length;
    const phoneUpdated = rawPhoneValue.toString();
    const phoneUpdatedDel = phoneUpdated.slice(0, -resetPhoneCalc);
    setphoneValue(phoneUpdatedDel);
    return;
  };
  // Focus input
  const focusInput = () => {
    document.querySelector(".form-control").focus();
  };

  // Update Phone from Keyboard - Add Numbers
  const onClickNumber = (number) => {
    if (rawPhoneValue.length <= 15) {
      const phoneUpdated = rawPhoneValue.toString();
      const phoneUpdatedDel = `${phoneUpdated} ${number}`;
      setphoneValue(`${phoneUpdatedDel}`);
      //focusInput();
      return;
    }
  };
  // Update Phone from Keyboard - Delete Numbers
  const onClickDelete = () => {
    const phoneUpdated = rawPhoneValue.toString();
    const phoneUpdatedDel = phoneUpdated.slice(0, -1);
    setphoneValue(phoneUpdatedDel);
    //focusInput();
  };
  // Clean Phone from X
  const onClickClean = () => {
    resetPhoneValue();
    //focusInput();
  };

  // Keyboard Functions - Enter - Escape - Suprim
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && isBtnON) {
      console.log("Lets chat!");
      window.open(urlToWhatsapp, "_blank");
      return;
    }
    if (event.key === "Escape" && isBtnON) {
      console.log("Phone value cleaned");
      resetPhoneValue();
      return;
    }
  };

  //**** Help Console.log Data ****//
  const showData = false;
  showData &&
    console.log(`
    >> HELP DATA INFO <<
    >> LocalStorage DialCode: ${localStorage.defaultDialCode} (Lenght: ${
      localStorageDialCode.length
    })
    >> LocalStorage CountryCode: ${localStorage.defaultCountryCode} 
    >> Current raw phoneValue is: ${rawPhoneValue} (Lenght: ${
      rawPhoneValue.length
    })
    >> Current phoneValue is: +${phoneValue}
    >> ${isBtnON ? "Action's buttons are ON" : "Action's buttons are OFF"}
  `);

  return (
    <div id="home-page">
      <SuperSEO
        title="QuickWhatsapp | Chat with unsaved numbers."
        description="Simple PWA to start chat in Whatsapp to users that are not in our contacts."
        lang="en"
        openGraph={{
          ogImage: {
            ogImage: "open-graph-image.png",
            ogImageAlt: "QuickWhatsapp",
            ogImageWidth: 1200,
            ogImageHeight: 630,
            ogImageType: "image/png",
          },
        }}
      />
      <PhoneNumber
        phoneValue={phoneValue}
        localStorageCountryCode={localStorageCountryCode}
        setphoneValue={setphoneValue}
        updateDefaultCountry={updateDefaultCountry}
        handleKeyDown={handleKeyDown}
      />
      <Keyboard
        isBtnON={isBtnON}
        onClickNumber={onClickNumber}
        onClickClean={onClickClean}
        onClickDelete={onClickDelete}
        urlToWhatsapp={urlToWhatsapp}
      />
      <InfoApp />
    </div>
  );
};
export default Home;
