import React from "react";
import { useState, useEffect } from "react";
import InfoApp from "../components/InfoApp";
import PhoneNumber from "../components/PhoneNumber";
import Keyboard from "../components/Keyboard";
import { SuperSEO } from "react-super-seo";


const Home = () => {
  let [localStorageDialCode, setLocalStorageDialCode] = useState(
    localStorage.getItem("defaultDialCode")
  );
  let [localStorageCountryCode, setLocalStorageCountryCode] = useState(
    localStorage.getItem("defaultCountryCode")
  );
  //**** Main Variables ****//
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
  // Update Local Storage
  const updateDefaultCountry = (dialCode, countryCode) => {
    localStorage.setItem("defaultDialCode", dialCode);
    localStorage.setItem("defaultCountryCode", countryCode);
    console.log(
      `Country saved in localstorage: +${localStorage.defaultDialCode} / ${localStorage.defaultCountryCode}`
    );
  };

  if (!localStorageDialCode && !localStorageCountryCode) {
    setLocalStorageDialCode("57");
    setLocalStorageCountryCode("co");
    updateDefaultCountry("57", "co");
    setphoneValue(`${localStorage.defaultDialCode}`);
    return;
  }


  //**** Basic Functions ****//

  // Reset phone value
  const resetPhoneValue = () => {
    const resetPhoneCalc = rawPhoneValue.length - localStorageDialCode.length;
    const phoneUpdated = rawPhoneValue.toString();
    const phoneUpdatedDel = phoneUpdated.slice(0, -resetPhoneCalc);
    setphoneValue(phoneUpdatedDel);
    return;
  };

  // Update Phone from Keyboard - Add Numbers
  const onClickNumber = (number) => {
    if (rawPhoneValue.length <= 15) {
      const phoneUpdated = rawPhoneValue.toString();
      const phoneUpdatedDel = `${phoneUpdated} ${number}`;
      setphoneValue(`${phoneUpdatedDel}`);
      return;
    }
  };
  // Update Phone from Keyboard - Delete Numbers
  const onClickDelete = () => {
    const phoneUpdated = rawPhoneValue.toString();
    const phoneUpdatedDel = phoneUpdated.slice(0, -1);
    setphoneValue(phoneUpdatedDel);
  };
  // Clean Phone from X
  const onClickClean = () => {
    resetPhoneValue();
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
    <div id="home-page" className={`${localStorage.defaultCountryCode}`}>
      <InfoApp />

      <SuperSEO
        title="QuickWhatsapp | Chat with unsaved contacts."
        description="Simple PWA to start chat in Whatsapp to users that are not in our contacts."
        lang="en"
        openGraph={{
          ogImage: {
            ogImage: 'https://quickwhatsapp.newsite.co/open-graph-image.jpg',
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
    </div>
  );
};
export default Home;
