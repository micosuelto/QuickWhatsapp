import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/high-res.css";
import "../styles/PhoneNumber.scss";

const PhoneNumber = ({
  phoneValue,
  setphoneValue,
  updateDefaultCountry,
  localStorageCountryCode,
}) => {

  return (
    <div className="container">
      <div className="wrap-phonenumber">
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
              country.countryCode,
              phoneValue
            );
          }}
          onFocus={(phoneValue, country, _) => {
            if (phoneValue.target.value === ``) {
              setphoneValue(`+${country.dialCode}`);
              return;
            }
          }}
        />
      </div>
    </div>
  );
};

export default PhoneNumber;
