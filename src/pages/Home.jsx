import React from "react";
import { useState, useEffect } from "react";
import InfoApp from "../components/HeaderApp";
import PhoneNumber from "../components/PhoneNumber";
import Keyboard from "../components/Keyboard";
import WhatsappBtn from "../components/WhatsappBtn";
import Closure from "../components/Closure";

const Home = () => {
  // Main Variables
  let localStorageDialCode = localStorage.getItem("defaultDialCode");
  let localStorageCountryCode = localStorage.getItem("defaultCountryCode");
  const [phoneValue, setphoneValue] = useState(`${localStorageDialCode}`);
  const rawPhoneValue = `${phoneValue.replace(/\D/g, "")}`;
  const urlToWhatsapp = `https://wa.me/${rawPhoneValue}`;

  // Enable elements when input is used
  const [isBtnON, setIsBtnON] = useState(false);
  useEffect(() => {
    if (rawPhoneValue.length > localStorage.defaultDialCode.length) {
      setIsBtnON(true);
    } else {
      setIsBtnON(false);
    }
  }, [rawPhoneValue]);
  
  // LOCAL STORAGE
  if (!localStorageDialCode) {
    localStorageDialCode = localStorage.setItem("defaultDialCode", "57");
    return;
  }
  if (!localStorageCountryCode) {
    localStorageCountryCode = localStorage.setItem("defaultCountryCode", "co");
    return;
  }



  // Basic Functions
  const resetPhoneValue = () => {
    setphoneValue(`${localStorageDialCode}`);
  };
  const focusInput = () => {
    document.querySelector(".form-control").focus();
  };
  const updateDefaultCountry = (dialCode, countryCode, phoneValue) => {
    localStorage.setItem("defaultDialCode", dialCode);
    localStorage.setItem("defaultCountryCode", countryCode);
    console.log(
      `Country saved in localstorage: +${localStorage.defaultDialCode} / ${localStorage.defaultCountryCode}`
    );
  };

  // Update Phone from Keyboard - Numbers
  const onClickNumber = (number) => {
    if (rawPhoneValue.length <= 15) {
      const phoneUpdated = rawPhoneValue.toString();
      const phoneUpdatedDel = `${phoneUpdated} ${number}`;
      setphoneValue(`${phoneUpdatedDel}`);
      focusInput();
      return;
    }
  };

  // Update Phone from Keyboard - Delete
  const onClickDelete = () => {
    const phoneUpdated = rawPhoneValue.toString();
    const phoneUpdatedDel = phoneUpdated.slice(0, -1);
    setphoneValue(phoneUpdatedDel);
    focusInput();
  };

  // Clean Phone from X
  const onClickClean = () => {
    resetPhoneValue();
    focusInput();
  };



  // Help Console.log Data
  const showData = true;
  showData &&
    console.log(`
    >> HELP DATA INFO <<
    >> LocalStorage DialCode: ${localStorage.defaultDialCode} (Lenght: ${
      localStorage.defaultDialCode.length
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
      <InfoApp />
      <PhoneNumber
        phoneValue={phoneValue}
        localStorageCountryCode={localStorageCountryCode}
        setphoneValue={setphoneValue}
        updateDefaultCountry={updateDefaultCountry}
      />
      <Keyboard
        isBtnON={isBtnON}
        onClickNumber={onClickNumber}
        onClickClean={onClickClean}
        onClickDelete={onClickDelete}
      />
      <WhatsappBtn isBtnON={isBtnON} urlToWhatsapp={urlToWhatsapp} />
      <Closure />
    </div>
  );
};
export default Home;
