function getCountryCurrency(country_currency) {
  var countryCurrency = {
    UK: "GBP",
    ES: "EUR",
    PH: "PHP",
  };

  if (country_currency == "PH" || country_currency == "UK") {
    return countryCurrency[country_currency];
  } else {
    return countryCurrency["ES"];
  }
}

function getCountryPrefix(country_currency) {
  var countryPrefix = {
    GBP: "UK",
    EUR: "ES",
    PHP: "PH",
  };

  return countryPrefix[country_currency];
}

function getCountryName(country_currency) {
  var countryPrefix = {
    UK: "United Kingdom",
    ES: "Spain",
    PH: "Philippines",
    AT: "Austria",
    BE: "Belgium",
    CY: "Cyprus",
    EE: "Estonia",
    FI: "Finland",
    FR: "France",
    DE: "Germany",
    GR: "Greece",
    IE: "Ireland",
    IT: "Italy",
    LV: "Latvia",
    LT: "Lithuania",
    LU: "Luxembourg",
    MT: "Malta",
    NL: "Netherlands",
    ET: "Portugal",
    SK: "Slovakia",
    SI: "Slovenia",
  };

  return countryPrefix[country_currency];
}

function getCountryCurrencySymbol(country_currency) {
  var countryCurrencySymbol = {
    UK: "&#163;",
    ES: "&#8364;",
    PH: "&#8369;",
  };
  if (country_currency == "PH" || country_currency == "UK") {
    return countryCurrencySymbol[country_currency];
  } else {
    return countryCurrencySymbol["ES"];
  }
}

function getCountryCurrencySymbolFromCcyLabel(country_currency) {
  var countryCurrencySymbol = {
    GBP: "&#163;",
    EUR: "&#8364;",
    PHP: "&#8369;",
  };
  return countryCurrencySymbol[country_currency];
}

function setInitialSendmoneyCountry(yCountry, rCountry) {
  $('#sendmoney_CCY option[value="' + yCountry + '"]').attr(
    "selected",
    "selected"
  );
  $(".sm-recipient-gets").html(
    getCountryCurrency(storage.getItem("SMBeneCountry"))
  );

  var rg;
  var ys;
  var beneCountry = storage.getItem("SMBeneCountry").toLowerCase();

  if (beneCountry == "ph" || beneCountry == "uk") {
    rg = storage.getItem("SMBeneCountry").toLowerCase();
  } else {
    rg = "euro";
  }

  if (yCountry.toLowerCase() == "es") {
    ys = "euro";
  } else {
    ys = yCountry.toLowerCase();
  }

  $("#SM_ys_countryFlag").attr(
    "src",
    "./assets/images/check-rates-flags/" + ys + "-flag.svg"
  );
  $("#SM_rg_countryFlag").attr(
    "src",
    "./assets/images/check-rates-flags/" + rg + "-flag.svg"
  );
}

function removeDuplicates(originalArray, attribute) {
  var newArray = [];
  var lookupObject = {};

  for (var i in originalArray) {
    lookupObject[originalArray[i][attribute]] = originalArray[i];
  }

  for (i in lookupObject) {
    newArray.push(lookupObject[i]);
  }
  return newArray;
}
