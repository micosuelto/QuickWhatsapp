import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/high-res.css";
import "../styles/PhoneNumber.scss";

const PhoneNumber = ({
  phoneValue,
  setphoneValue,
  updateDefaultCountry,
  localStorageCountryCode,
  handleKeyDown
}) => {



  return (
      <div className="wrap-phonenumber container">
        <PhoneInput
          placeholder="Phone number"
          value={phoneValue}
          country={localStorageCountryCode}
          preferredCountries={["co", "us", "br"]}
          required={true}
          autoFocus={true}
          autoFormat={true}
          enableLongNumbers={false}
          countryCodeEditable={true}
          enableSearch={true}
          disableSearchIcon={false}
          onChange={(phoneValue, country, _) => {
            setphoneValue(`${phoneValue}`);
            updateDefaultCountry(
              country.dialCode,
              country.countryCode
            );
          }}
          onFocus={(phoneValue, country, _) => {
            if (phoneValue.target.value === ``) {
              setphoneValue(`+${country.dialCode}`);
              return;
            }
          }}
          onKeyDown={handleKeyDown}
        />
    </div>
  );
};

export default PhoneNumber;
