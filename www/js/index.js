//var bcremit = "http://localhost/eubcfo/app/";
//var url = "http://localhost/eubcfo/";

var bcremit = "https://eu.bcpaytech.info/app/";
var url = "https://eu.bcpaytech.info/";

//  var bcremit = "https://v2.bcremit.com/APP/";
//  var url = "https://v2.bcremit.com/";

// var bcremit = "https://www.bcremit.com/APP/";
// var url = "https://www.bcremit.com/";

var forbiddenChar = "#";
var storage = window.localStorage;
var allCountries = [
  ["Afghanistan (‫افغانستان‬‎)", "af", "93"],
  ["Albania (Shqipëri)", "al", "355"],
  ["Algeria (‫الجزائر‬‎)", "dz", "213"],
  ["American Samoa", "as", "1", 5, ["684"]],
  ["Andorra", "ad", "376"],
  ["Angola", "ao", "244"],
  ["Anguilla", "ai", "1", 6, ["264"]],
  ["Antigua and Barbuda", "ag", "1", 7, ["268"]],
  ["Argentina", "ar", "54"],
  ["Armenia (Հայաստան)", "am", "374"],
  ["Aruba", "aw", "297"],
  ["Australia", "au", "61", 0],
  ["Austria (Österreich)", "at", "43"],
  ["Azerbaijan (Azərbaycan)", "az", "994"],
  ["Bahamas", "bs", "1", 8, ["242"]],
  ["Bahrain (‫البحرين‬‎)", "bh", "973"],
  ["Bangladesh (বাংলাদেশ)", "bd", "880"],
  ["Barbados", "bb", "1", 9, ["246"]],
  ["Belarus (Беларусь)", "by", "375"],
  ["Belgium (België)", "be", "32"],
  ["Belize", "bz", "501"],
  ["Benin (Bénin)", "bj", "229"],
  ["Bermuda", "bm", "1", 10, ["441"]],
  ["Bhutan (འབྲུག)", "bt", "975"],
  ["Bolivia", "bo", "591"],
  ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"],
  ["Botswana", "bw", "267"],
  ["Brazil (Brasil)", "br", "55"],
  ["British Indian Ocean Territory", "io", "246"],
  ["British Virgin Islands", "vg", "1", 11, ["284"]],
  ["Brunei", "bn", "673"],
  ["Bulgaria (България)", "bg", "359"],
  ["Burkina Faso", "bf", "226"],
  ["Burundi (Uburundi)", "bi", "257"],
  ["Cambodia (កម្ពុជា)", "kh", "855"],
  ["Cameroon (Cameroun)", "cm", "237"],
  [
    "Canada",
    "ca",
    "1",
    1,
    [
      "204",
      "226",
      "236",
      "249",
      "250",
      "289",
      "306",
      "343",
      "365",
      "387",
      "403",
      "416",
      "418",
      "431",
      "437",
      "438",
      "450",
      "506",
      "514",
      "519",
      "548",
      "579",
      "581",
      "587",
      "604",
      "613",
      "639",
      "647",
      "672",
      "705",
      "709",
      "742",
      "778",
      "780",
      "782",
      "807",
      "819",
      "825",
      "867",
      "873",
      "902",
      "905",
    ],
  ],
  ["Cape Verde (Kabu Verdi)", "cv", "238"],
  ["Caribbean Netherlands", "bq", "599", 1, ["3", "4", "7"]],
  ["Cayman Islands", "ky", "1", 12, ["345"]],
  ["Central African Republic (République centrafricaine)", "cf", "236"],
  ["Chad (Tchad)", "td", "235"],
  ["Chile", "cl", "56"],
  ["China (中国)", "cn", "86"],
  ["Christmas Island", "cx", "61", 2],
  ["Cocos (Keeling) Islands", "cc", "61", 1],
  ["Colombia", "co", "57"],
  ["Comoros (‫جزر القمر‬‎)", "km", "269"],
  ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"],
  ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"],
  ["Cook Islands", "ck", "682"],
  ["Costa Rica", "cr", "506"],
  ["Côte d’Ivoire", "ci", "225"],
  ["Croatia (Hrvatska)", "hr", "385"],
  ["Cuba", "cu", "53"],
  ["Curaçao", "cw", "599", 0],
  ["Cyprus (Κύπρος)", "cy", "357"],
  ["Czech Republic (Česká republika)", "cz", "420"],
  ["Denmark (Danmark)", "dk", "45"],
  ["Djibouti", "dj", "253"],
  ["Dominica", "dm", "1", 13, ["767"]],
  [
    "Dominican Republic (República Dominicana)",
    "do",
    "1",
    2,
    ["809", "829", "849"],
  ],
  ["Ecuador", "ec", "593"],
  ["Egypt (‫مصر‬‎)", "eg", "20"],
  ["El Salvador", "sv", "503"],
  ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"],
  ["Eritrea", "er", "291"],
  ["Estonia (Eesti)", "ee", "372"],
  ["Ethiopia", "et", "251"],
  ["Falkland Islands (Islas Malvinas)", "fk", "500"],
  ["Faroe Islands (Føroyar)", "fo", "298"],
  ["Fiji", "fj", "679"],
  ["Finland (Suomi)", "fi", "358", 0],
  ["France", "fr", "33"],
  ["French Guiana (Guyane française)", "gf", "594"],
  ["French Polynesia (Polynésie française)", "pf", "689"],
  ["Gabon", "ga", "241"],
  ["Gambia", "gm", "220"],
  ["Georgia (საქართველო)", "ge", "995"],
  ["Germany (Deutschland)", "de", "49"],
  ["Ghana (Gaana)", "gh", "233"],
  ["Gibraltar", "gi", "350"],
  ["Greece (Ελλάδα)", "gr", "30"],
  ["Greenland (Kalaallit Nunaat)", "gl", "299"],
  ["Grenada", "gd", "1", 14, ["473"]],
  ["Guadeloupe", "gp", "590", 0],
  ["Guam", "gu", "1", 15, ["671"]],
  ["Guatemala", "gt", "502"],
  ["Guernsey", "gg", "44", 1, ["1481", "7781", "7839", "7911"]],
  ["Guinea (Guinée)", "gn", "224"],
  ["Guinea-Bissau (Guiné Bissau)", "gw", "245"],
  ["Guyana", "gy", "592"],
  ["Haiti", "ht", "509"],
  ["Honduras", "hn", "504"],
  ["Hong Kong (香港)", "hk", "852"],
  ["Hungary (Magyarország)", "hu", "36"],
  ["Iceland (Ísland)", "is", "354"],
  ["India (भारत)", "in", "91"],
  ["Indonesia", "id", "62"],
  ["Iran (‫ایران‬‎)", "ir", "98"],
  ["Iraq (‫العراق‬‎)", "iq", "964"],
  ["Ireland", "ie", "353"],
  ["Isle of Man", "im", "44", 2, ["1624", "74576", "7524", "7924", "7624"]],
  ["Israel (‫ישראל‬‎)", "il", "972"],
  ["Italy (Italia)", "it", "39", 0],
  ["Jamaica", "jm", "1", 4, ["876", "658"]],
  ["Japan (日本)", "jp", "81"],
  ["Jersey", "je", "44", 3, ["1534", "7509", "7700", "7797", "7829", "7937"]],
  ["Jordan (‫الأردن‬‎)", "jo", "962"],
  ["Kazakhstan (Казахстан)", "kz", "7", 1, ["33", "7"]],
  ["Kenya", "ke", "254"],
  ["Kiribati", "ki", "686"],
  ["Kosovo", "xk", "383"],
  ["Kuwait (‫الكويت‬‎)", "kw", "965"],
  ["Kyrgyzstan (Кыргызстан)", "kg", "996"],
  ["Laos (ລາວ)", "la", "856"],
  ["Latvia (Latvija)", "lv", "371"],
  ["Lebanon (‫لبنان‬‎)", "lb", "961"],
  ["Lesotho", "ls", "266"],
  ["Liberia", "lr", "231"],
  ["Libya (‫ليبيا‬‎)", "ly", "218"],
  ["Liechtenstein", "li", "423"],
  ["Lithuania (Lietuva)", "lt", "370"],
  ["Luxembourg", "lu", "352"],
  ["Macau (澳門)", "mo", "853"],
  ["Macedonia (FYROM) (Македонија)", "mk", "389"],
  ["Madagascar (Madagasikara)", "mg", "261"],
  ["Malawi", "mw", "265"],
  ["Malaysia", "my", "60"],
  ["Maldives", "mv", "960"],
  ["Mali", "ml", "223"],
  ["Malta", "mt", "356"],
  ["Marshall Islands", "mh", "692"],
  ["Martinique", "mq", "596"],
  ["Mauritania (‫موريتانيا‬‎)", "mr", "222"],
  ["Mauritius (Moris)", "mu", "230"],
  ["Mayotte", "yt", "262", 1, ["269", "639"]],
  ["Mexico (México)", "mx", "52"],
  ["Micronesia", "fm", "691"],
  ["Moldova (Republica Moldova)", "md", "373"],
  ["Monaco", "mc", "377"],
  ["Mongolia (Монгол)", "mn", "976"],
  ["Montenegro (Crna Gora)", "me", "382"],
  ["Montserrat", "ms", "1", 16, ["664"]],
  ["Morocco (‫المغرب‬‎)", "ma", "212", 0],
  ["Mozambique (Moçambique)", "mz", "258"],
  ["Myanmar (Burma) (မြန်မာ)", "mm", "95"],
  ["Namibia (Namibië)", "na", "264"],
  ["Nauru", "nr", "674"],
  ["Nepal (नेपाल)", "np", "977"],
  ["Netherlands (Nederland)", "nl", "31"],
  ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"],
  ["New Zealand", "nz", "64"],
  ["Nicaragua", "ni", "505"],
  ["Niger (Nijar)", "ne", "227"],
  ["Nigeria", "ng", "234"],
  ["Niue", "nu", "683"],
  ["Norfolk Island", "nf", "672"],
  ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"],
  ["Northern Mariana Islands", "mp", "1", 17, ["670"]],
  ["Norway (Norge)", "no", "47", 0],
  ["Oman (‫عُمان‬‎)", "om", "968"],
  ["Pakistan (‫پاکستان‬‎)", "pk", "92"],
  ["Palau", "pw", "680"],
  ["Palestine (‫فلسطين‬‎)", "ps", "970"],
  ["Panama (Panamá)", "pa", "507"],
  ["Papua New Guinea", "pg", "675"],
  ["Paraguay", "py", "595"],
  ["Peru (Perú)", "pe", "51"],
  ["Philippines", "ph", "63"],
  ["Poland (Polska)", "pl", "48"],
  ["Portugal", "pt", "351"],
  ["Puerto Rico", "pr", "1", 3, ["787", "939"]],
  ["Qatar (‫قطر‬‎)", "qa", "974"],
  ["Réunion (La Réunion)", "re", "262", 0],
  ["Romania (România)", "ro", "40"],
  ["Russia (Россия)", "ru", "7", 0],
  ["Rwanda", "rw", "250"],
  ["Saint Barthélemy", "bl", "590", 1],
  ["Saint Helena", "sh", "290"],
  ["Saint Kitts and Nevis", "kn", "1", 18, ["869"]],
  ["Saint Lucia", "lc", "1", 19, ["758"]],
  ["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2],
  ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"],
  ["Saint Vincent and the Grenadines", "vc", "1", 20, ["784"]],
  ["Samoa", "ws", "685"],
  ["San Marino", "sm", "378"],
  ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"],
  ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"],
  ["Senegal (Sénégal)", "sn", "221"],
  ["Serbia (Србија)", "rs", "381"],
  ["Seychelles", "sc", "248"],
  ["Sierra Leone", "sl", "232"],
  ["Singapore", "sg", "65"],
  ["Sint Maarten", "sx", "1", 21, ["721"]],
  ["Slovakia (Slovensko)", "sk", "421"],
  ["Slovenia (Slovenija)", "si", "386"],
  ["Solomon Islands", "sb", "677"],
  ["Somalia (Soomaaliya)", "so", "252"],
  ["South Africa", "za", "27"],
  ["South Korea (대한민국)", "kr", "82"],
  ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"],
  ["Spain (España)", "es", "34"],
  ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"],
  ["Sudan (‫السودان‬‎)", "sd", "249"],
  ["Suriname", "sr", "597"],
  ["Svalbard and Jan Mayen", "sj", "47", 1, ["79"]],
  ["Swaziland", "sz", "268"],
  ["Sweden (Sverige)", "se", "46"],
  ["Switzerland (Schweiz)", "ch", "41"],
  ["Syria (‫سوريا‬‎)", "sy", "963"],
  ["Taiwan (台灣)", "tw", "886"],
  ["Tajikistan", "tj", "992"],
  ["Tanzania", "tz", "255"],
  ["Thailand (ไทย)", "th", "66"],
  ["Timor-Leste", "tl", "670"],
  ["Togo", "tg", "228"],
  ["Tokelau", "tk", "690"],
  ["Tonga", "to", "676"],
  ["Trinidad and Tobago", "tt", "1", 22, ["868"]],
  ["Tunisia (‫تونس‬‎)", "tn", "216"],
  ["Turkey (Türkiye)", "tr", "90"],
  ["Turkmenistan", "tm", "993"],
  ["Turks and Caicos Islands", "tc", "1", 23, ["649"]],
  ["Tuvalu", "tv", "688"],
  ["U.S. Virgin Islands", "vi", "1", 24, ["340"]],
  ["Uganda", "ug", "256"],
  ["Ukraine (Україна)", "ua", "380"],
  ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"],
  ["United Kingdom", "gb", "44", 0],
  ["United States", "us", "1", 0],
  ["Uruguay", "uy", "598"],
  ["Uzbekistan (Oʻzbekiston)", "uz", "998"],
  ["Vanuatu", "vu", "678"],
  ["Vatican City (Città del Vaticano)", "va", "39", 1, ["06698"]],
  ["Venezuela", "ve", "58"],
  ["Vietnam (Việt Nam)", "vn", "84"],
  ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"],
  ["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1, ["5288", "5289"]],
  ["Yemen (‫اليمن‬‎)", "ye", "967"],
  ["Zambia", "zm", "260"],
  ["Zimbabwe", "zw", "263"],
  ["Åland Islands", "ax", "358", 1, ["18"]],
];

var app = {
  initialize: function () {
    document.addEventListener(
      "deviceready",
      this.onDeviceReady.bind(this),
      false
    );
    document.addEventListener(
      "backbutton",
      this.onBackPressed.bind(this),
      false
    );
    document.addEventListener("resume", this.onResume.bind(this), false);
  },

  onBackPressed: function () {
    setTimeout(function () {
      var tokenKey = storage.getItem("tokenKey");
      var cifNo = storage.getItem("cifNumber");
      var nowLoc = storage.getItem("NOW");

      if (nowLoc == "index") {
        window.plugins.appMinimize.minimize();
      } else if (nowLoc == "maintenance_page") {
        window.plugins.appMinimize.minimize();
      } else if (nowLoc == "check_rates") {
        window.location.href = "index.html";
      } else if (nowLoc == "signup") {
        window.location.href = "index.html";
      } else if (nowLoc == "login") {
        window.location.href = "index.html";
      } else if (nowLoc == "name") {
        window.location.href = "login.html";
      } else if (nowLoc == "sms_verification") {
        window.location.href = "login.html";
      } else if (nowLoc == "complete_profile") {
        window.location.href = "login.html";
      } else if (nowLoc == "dashboard") {
        window.plugins.appMinimize.minimize();
      } else if (nowLoc == "bcpay") {
        window.location.href = "dashboard.html";
      } else if (nowLoc == "support") {
        window.location.href = "dashboard.html";
      } else if (nowLoc == "setting") {
        window.location.href = "dashboard.html";
      } else if (nowLoc == "transaction_history") {
        window.location.href = "dashboard.html";
      } else if (nowLoc == "beneficiary") {
        window.location.href = "dashboard.html";
      } else if (nowLoc == "profile") {
        window.location.href = "settings.html";
      } else if (nowLoc == "change_password") {
        window.location.href = "settings.html";
      } else if (nowLoc == "contact") {
        window.location.href = "settings.html";
      } else if (nowLoc == "send_money") {
        window.location.href = "dashboard.html";
      } else if (nowLoc == "send_money_ebt") {
        window.location.href = "send_money.html";
      } else if (nowLoc == "send_money_ebt_receipt") {
        window.location.href = "dashboard.html";
      } else if (nowLoc == "bc_payment") {
        window.location.href = "bcpay.html";
      } else if (nowLoc == "update_beneficiary") {
        window.location.href = "beneficiary_details.html";
      } else if (nowLoc == "beneficiary_details") {
        window.location.href = "dashboard.html";
      } else if (nowLoc == "address") {
        $(".iti__selected-dial-code").html("");
        $(".iti__arrow").css("display", "none");
        storage.removeItem("ctry_code", "");
        storage.setItem("NOW", "name");
        $("#part3").hide();
        $("#part2").show();
      } else {
        logout();
      }
    }, 0);
  },

  onResume: function () {
    setTimeout(function () {
      var tokenKey = storage.getItem("tokenKey");
      var cifNo = storage.getItem("cifNumber");
      if (tokenKey == "" || tokenKey == null) {
        logout();
      }
    }, 0);
  },

  onDeviceReady: function () {
    if (
      storage.getItem("Platform") == "" ||
      storage.getItem("Platform") == undefined
    ) {
      try {
        var uuid = device.uuid;
        var deviceVersion = device.version;
        var devicePlatform = device.platform;

        storage.setItem("DeviceVersion", deviceVersion);
        storage.setItem("MyUUID", uuid);
        storage.setItem("Platform", devicePlatform);
      } catch (err) {
        console.log(err.message);
      }
    }

    var nowLoc = storage.getItem("NOW");
    if (
      storage.getItem("MyLocation") == "" ||
      storage.getItem("MyLocation") == undefined ||
      storage.getItem("MyLocation") == "OFF" ||
      storage.getItem("MyLocation") == null
    ) {
      if (nowLoc == "index" || nowLoc == "signup" || nowLoc == "login") {
        var permissions = cordova.plugins.permissions;
        permissions.requestPermission(
          permissions.ACCESS_COARSE_LOCATION,
          success,
          error
        );
      }
    }

    document.addEventListener("offline", onOffline, false);
    function onOffline() {
      $(".footerConnection").css("display", "block");
      $(".footerConnection ").css("background", "#c32f2f");
      $(".footerConnectionImage").attr(
        "src",
        "./assets/images/no_internet.svg"
      );
      $(".foooterConnectionMsg ").html("Check your internet connection");
    }

    document.addEventListener("online", onOnline, false);
    function onOnline() {
      $(".footerConnection ").css("background", "#007e00");
      $(".foooterConnectionMsg ").html("Back online");
      $(".footerConnectionImage").attr(
        "src",
        "./assets/images/with_internet.svg"
      );
      setTimeout(function () {
        $(".footerConnection ").css("display", "none");
      }, 3000);
    }

    this.receivedEvent("deviceready");
  },

  // Update DOM on a Received Event
  receivedEvent: function (id) {
    //var parentElement = document.getElementById(id);
    //var listeningElement = parentElement.querySelector('.listening');
    //var receivedElement = parentElement.querySelector('.received');

    //listeningElement.setAttribute('style', 'display:none;');
    //receivedElement.setAttribute('style', 'display:block;');
    //console.log('Received Event: ' + id);

    //START ONESIGNAL CODE
    //Remove this method to stop OneSignal Debugging
    window.plugins.OneSignal.setLogLevel({ logLevel: 6, visualLevel: 0 });

    var notificationOpenedCallback = function (jsonData) {
      console.log("notificationOpenedCallback: " + JSON.stringify(jsonData));
    };

    // Set your iOS Settings
    var iosSettings = {};
    iosSettings["kOSSettingsKeyAutoPrompt"] = false;
    iosSettings["kOSSettingsKeyInAppLaunchURL"] = false;

    window.plugins.OneSignal.startInit("af8e3de0-e02a-45c0-8333-43c784f77338")
      .handleNotificationOpened(notificationOpenedCallback)
      .iOSSettings(iosSettings)
      .inFocusDisplaying(
        window.plugins.OneSignal.OSInFocusDisplayOption.Notification
      )
      .endInit();

    // The promptForPushNotificationsWithUserResponse function will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 6)
    window.plugins.OneSignal.promptForPushNotificationsWithUserResponse(
      function (accepted) {
        console.log("User accepted notifications: " + accepted);
      }
    );
    //END ONESIGNAL CODE
  },
};

function error() {
  console.warn("Location permission is not turned on");
}

function success(status) {
  if (status.hasPermission) {
    console.log("has permission");
    var options = {
      enableHighAccuracy: true,
      maximumAge: 3600000,
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError, options);
  } else {
    console.log("DENIED");
    storage.setItem("MyLocation", "DENIED");
  }
}

app.initialize();

function appTest() {
  alert("app test");
}

function handleOpenURL(url) {
  var token = storage.getItem("tokenKey");

  if (token == null || token == "") {
    navigator.app.exitApp();
  } else {
    if (url == "bcremitapp://?view=sm") {
      window.location.href = "send_money.html";
    } else if (url == "bcremitapp://?view=bc") {
      window.location.href = "bcpay.html";
    } else if (url == "bcremitapp://?view=dashboard") {
      window.location.href = "dashboard.html";
    } else {
      window.location.href = "transaction_history.html";
    }
  }
}

function onSuccess(position) {
  var myLoc =
    "Latitute:" +
    position.coords.latitude +
    "|Longitude:" +
    position.coords.longitude;
  storage.setItem("MyLocation", myLoc);
}

function onError(error) {
  storage.setItem("MyLocation", "OFF");
}

/*------------------------------------------------------------------------------
                      BCRemit Pay                               
------------------------------------------------------------------------------*/

function postBCPay(payOption, num) {
  if(payOption === 'showInstantBank' || num == '1'){
    $("#wait").css("display", "none");
    $("#SM1").hide();
    $("#SMInstantBankTransfer").show();
    window.scrollTo(0, 0);
    return false

  } else{
  $("#SMInstantBankTransfer").hide();
  $("#wait").css("display", "block");
  $("#SM1").hide();

  var sendAmt = $("#txtHSAmt").val();
  var recAmt = $("#txtHDAmt").val();
  var remPayment = $("#txtHOBTPay").val();
  var product = $("#txtBCProduct").val();
  var fxRate = $("#txtHFXRate").val();
  var remCifNo = storage.getItem("cifNumber");
  var beneCifNo = storage.getItem("SPID");
  var remCur = $("#txtHCCY1").val();
  var beneCur = $("#txtHCCY2").val();
  var country = storage.getItem("country");
  var corridor = storage.getItem("SPCountry");
  var fee = $("#txtHOBTFee").val();

  var beneBankName = "";
  var beneBIC = "";
  var beneBankBranch = "";
  var beneAcctNo = "";

  var token = storage.getItem("tokenKey");

  if (token == "") {
    logout();
  }

  if (sendAmt == 0) {
    showAlert("Send amount is 0");
    $("#txtGoTo").val("#");

    $("#SM1").show();
    $("#wait").css("display", "none");
    return;
  }

  var payment = "OBT";

  if (payOption == "DC") {
    fbq('track', 'AddPaymentInfo');
    fee = $("#txtHDCFee").val();
    remPayment = $("#txtHDCPay").val();
    payment = "DC";
  }else if("IOBT"){
    fbq('track', 'AddToWishlist');
    payment = "IOBT";
  }else {
    fbq('track', 'AddToCart');
    payment = "OBT";
  }


  $("#lblTotalPay").html(remCur + " " + remPayment);

  var cfVal = "";
  var totalCF = $("#txtTotalCF").val();
  var type;
  var val;
  var id;
  var beneCIF = "";
  var spID = storage.getItem("SPID");

  var isCatalog = $("#txtIsCatalog").val();
  var isProperty = $("#txtIsProperty").val();
  var isVoucher = $("#txtIsVoucher").val();

  var errCount = 0;
  var errMsg = "";
  var ctrl;
  var isMandatory = "";
  var fDesc = "";
  var propBankID = "";
  var propID = "";
  var breakdown = "";

  for (i = 0; i < totalCF; i++) {
    type = document.getElementById("CFType" + i).value;
    id = document.getElementById("CFPK" + i).value;
    isMandatory = document.getElementById("MandatoryFlag" + i).value;
    fDesc = document.getElementById("FDesc" + i).value;

    if (type == "string" || type == "int" || type == "integer") {
      val = document.getElementById("CF" + i).value;
      val = val.replace(/(\r\n|\n|\r)/gm, "_");
      val = val.replace(/,/g, "*");
    } else {
      ctrl = document.getElementById("CF" + i);
      val = ctrl.options[ctrl.selectedIndex].value;
    }

    if (isMandatory == "Y") {
      if (val == "") {
        errCount += 1;
        errMsg += errCount + ". " + fDesc + "<br>";
      }
    }

    if (val.indexOf(forbiddenChar) > -1) {
      errCount += 1;
      errMsg +=
        errCount +
        ". " +
        fDesc +
        " contains invalid character (" +
        forbiddenChar +
        ")<br>";
    }
    cfVal += id + "|" + encodeURIComponent(val) + ",";
  }

  if (isCatalog == "0" && isProperty == "") {
    var payType = $("#txtPayType").val();
    var monthIndicator = $("#txtMonthIndicator").val();
    var monthName = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    var currentYear = new Date().getFullYear();
    var amt = 0;

    if (payType == "2") {
      for (i = 0; i < monthName.length; i++) {
        amt = revformatNumeric(document.getElementById("mnth" + i).value);
        if (amt > 0) {
          cfVal += monthName[i] + " " + currentYear + "|";
          cfVal += amt + ",";
        }
      }
    } else {
      if (monthIndicator == "Y") {
        var ctrl = document.getElementById("fromMonth");
        var fromMonth = ctrl.options[ctrl.selectedIndex].value;

        ctrl = document.getElementById("fromYear");
        var fromYear = ctrl.options[ctrl.selectedIndex].value;

        ctrl = document.getElementById("toMonth");
        var toMonth = ctrl.options[ctrl.selectedIndex].value;

        ctrl = document.getElementById("toYear");
        var toYear = ctrl.options[ctrl.selectedIndex].value;

        var amt = $("#txtBCDestAmt").val();

        cfVal += "Contribution Amount|" + amt + ",";

        breakdown = paymentBreakdown();

        if (breakdown != "ERROR" || breakdown != "INVALID") {
          cfVal += breakdown;
        }
        if (monthIndicator == "Y") {
          if (fromYear == "") {
            fromYear = currentYear;
          }

          if (toYear == "") {
            toYear = currentYear;
          }

          cfVal +=
            "fromMonth|" +
            fromMonth +
            "," +
            "fromYear|" +
            fromYear +
            "," +
            "toMonth|" +
            toMonth +
            "," +
            "toYear|" +
            toYear;
        }
      } else {
        amt = $("#txtBCSendAmt").val();
      }
    }
  } else if (isProperty == "Y") {
    amt = $("#txtBCSendAmt").val();
    propID = $("#txtPropertyID").val();
    propBankID = $("#ddlBank").val();
    beneBIC = propBankID;

    var acctNo = $("#txtAcctNo").val();
    beneAcctNo = acctNo;

    var bankName = $("#ddlBank option:selected").text();
    beneBankName = bankName;

    var branch = $("#txtBranch").val();
    beneBankBranch = branch;

    cfVal += "propID|" + propID + ",";
    cfVal += "SPID|" + spID + ",";
    cfVal +=
      "propAcctNo|" +
      acctNo +
      ",propBIC|" +
      propBankID +
      ",propBankName|" +
      bankName +
      ",propBranch|" +
      branch +
      ",";
  } else {
    recAmt = $("#txtHDAmt").val();

    var selectedID = $("#txtSelectedPackageID").val();
    var arrID = selectedID.split("|");
    var totalFields = allCatalogItem.length;
    cfVal += ",SPID|" + spID + ",";

    for (var j = 0; j < arrID.length - 1; j++) {
      for (i = 0; i < totalFields; i++) {
        var set = allCatalogItem[i];
        if (arrID[j] == set.PackageID) {
          cfVal +=
            arrID[j] +
            "|" +
            encodeURIComponent(set.PackageName) +
            "|" +
            set.Price +
            ",";
        }
      }
    }
  }

  if (errCount > 0) {
    alertUser("Please fill up required payment details <br>" + errMsg);
    if (isCatalog == "1") {
      $("#BCBlock02").show();
    } else {
      $("#txtBCSendAmt").val("");
    }
    window.scrollTo(0, 0);
    $("#wait").css("display", "none");
    $("#SM1").show();

    return false;
  }

  if (breakdown == "ERROR") {
    alertUser(
      "Please check your contribution month, payment month should be up to 12 months only."
    );
    window.scrollTo(0, 0);
    $("#wait").css("display", "none");
    $("#SM1").show();

    return false;
  } else if (breakdown == "INVALID") {
    alertUser('Incorrect format: "From" date cannot be later than "To" date.');
    window.scrollTo(0, 0);
    $("#wait").css("display", "none");
    $("#SM1").show();
    return false;
  } else {
    var strData =
      "product=" +
      product +
      "&country=" +
      country +
      "&hCorridor=" +
      corridor +
      "&amt=" +
      sendAmt +
      "&recAmt=" +
      recAmt +
      "&remCIF=" +
      remCifNo +
      "&beneCIF=" +
      beneCifNo +
      "&remCur=" +
      remCur +
      "&recCur=" +
      beneCur +
      "&fxRate=" +
      fxRate +
      "&fee=" +
      fee +
      "&remPayment=" +
      remPayment +
      "&appRequest=SAVE" +
      "&paymentType=" +
      payment +
      "&beneBankID=" +
      beneBIC +
      "&beneAcctNo=" +
      beneAcctNo +
      "&beneBankName=" +
      beneBankName +
      "&beneBankBranch=" +
      beneBankBranch +
      "&tokenKey=" +
      token +
      "&isCatalog=" +
      isCatalog +
      "&customData=" +
      cfVal +
      "&isProperty=" +
      isProperty +
      "&propertyBankID=" +
      propBankID +
      "&propertyID=" +
      propID +
      "&isVoucher=" +
      isVoucher +
      "&selectedPackage=" +
      $("#txtSelectedPackageID").val() +
      "&random=" +
      new Date().valueOf();

    $("#txtPayType").val(payOption);
    $("#SM1").hide();

    var myURL = bcremit + "new_transaction.aspx";
    console.log(myURL + "?" + strData);

    ajaxCall(myURL, strData, "bcPay");
  }
}
}

function postBCPayResponse(res, payType) {
  if (res.error_code == "0") {
    $("#trxID").html(res.transaction_id);

    $("#tID").val(res.transaction_id);

    var remCIF = storage.getItem("cifNumber");

    if (payType == "DC") {
      var param =
        "tid=" +
        res.transaction_id +
        "&tokenKey=" +
        storage.getItem("tokenKey");
      var link = bcremit + "iframe_card_payment.aspx?appRequest=START&" + param;
      var ref = cordova.InAppBrowser.open(
        link,
        "_blank",
        "location=no",
        "closebuttoncaption=Done"
      );

      ref.addEventListener("loadstop", function (event) {
        if (event.url.match("close.html")) {
          ref.close();
          window.location.href = "transaction_history.html";
        }

        if (event.url.match("return.html")) {
          ref.close();
          window.location.href = "transaction_history.html";
        }
      });
    } else {
      if (payType == "IOBT") {
        var ip = myIP();
        var param =
          "tid=" +
          res.transaction_id +
          "&tokenKey=" +
          storage.getItem("tokenKey") +
          "&myIP=" +
          ip;
        var link = bcremit + "obt_online_payment.aspx?" + param;
        var ref = cordova.InAppBrowser.open(
          link,
          "_system",
          "location=no",
          "closebuttoncaption=Done"
        );

        ref.addEventListener("loadstop", function (event) {
          if (event.url.match("close.html")) {
            ref.close();
            window.location.href = "transaction_history.html";
          }

          if (event.url.match("bcremitapp:")) {
            ref.close();
          }
        });
      } else {
        storage.setItem("NOW", "send_money_ebt_receipt");
        $("#custNo").html(res.obt_refno);
        $("#custNo2").html(res.obt_refno);
        $("#lblBeneName").html(storage.getItem("SPName"));

        if (res.obt_advisory_flag == "1") {
          $("#advisoryMsg").html(res.obt_advisory);
          $("#advisory").show();
        }

        if (res.actName1 == "") {
          $("#accInfo1").hide();
        } else {
          $("#actName1").html(res.actName1);
          $("#sc1").html(res.sCode1);
          $("#ac1").html(res.acctNo1);
          $("#accInfo1").show();
        }

        if (res.actName2 == "") {
          $("#accInfo2").hide();
        } else {
          $("#actName2").html(res.actName2);
          $("#sc2").html(res.sCode2);
          $("#ac2").html(res.acctNo2);
          $("#accInfo2").show();
        }

        $("#SM2").show();
      }
    }
  } else if (res.err_code == "100") {
    logout();
  } else if (res.error_code == "1") {
    $("#SMInstantBankTransfer").hide();
    $("#SMErr1").show();
  } else if (res.error_code == "5") {
    $("#SMInstantBankTransfer").hide();
    $("#SMErr3").show();
    $("#limit").html(res.rem_ccy + " " + formatNumeric(res.max_limit));
    $("#balance").html(res.rem_ccy + " " + formatNumeric(res.rem_balance));
  } else if (res.error_code == "7") {
    $("#SMInstantBankTransfer").hide();
    $("#SMErr5").show();
  } else if (res.error_code == "8") {
    $("#SMInstantBankTransfer").hide();
    $("#txtHTID").val(res.transaction_id);
    $("#SMErr6").show();
  } else {
    $("#SMInstantBankTransfer").hide();
    $("#SMErr2").show();
  }

  $("#totalPackageAmt").val("");
  $("#txtSelectedPackageID").val("");
  $("#txtCatSendAmt").val("");

  $("#wait").css("display", "none");
}

function paymentBreakdown() {
  var payType = $("#txtPayType").val();
  var monthIndicator = $("#txtMonthIndicator").val();
  var monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  var amt = 0;
  var fAmt = 0;
  var breakdown = "";

  if (payType == "2") {
    for (i = 0; i < monthName.length; i++) {
      fAmt = revformatNumeric(document.getElementById("mnth" + i).value);
      amt = eval(amt) + eval(fAmt);
      document.getElementById("mnth" + i).value = formatNumeric(fAmt);
    }
  } else {
    var amt = revformatNumeric($("#txtBCDestAmt").val());

    var ctrl = document.getElementById("fromMonth");
    var firstMonth = ctrl.options[ctrl.selectedIndex].value;

    ctrl = document.getElementById("fromYear");
    var firstYear = ctrl.options[ctrl.selectedIndex].value;

    ctrl = document.getElementById("toMonth");
    var secondMonth = ctrl.options[ctrl.selectedIndex].value;

    ctrl = document.getElementById("toYear");
    var secondYear = ctrl.options[ctrl.selectedIndex].value;

    var currentYear = new Date().getFullYear();
    if (firstYear == "") {
      firstYear = currentYear;
    }

    if (secondYear == "") {
      secondYear = currentYear;
    }

    var d;
    var dt1 = new Date(firstYear, eval(firstMonth) - 1, "01");
    var dt2 = new Date(secondYear, eval(secondMonth) - 1, "01");

    if (secondYear < firstYear) {
      return "INVALID";
    }

    if (dt1 > dt2) {
      return "INVALID";
    }

    var range = monthDiff(dt1, dt2);

    if (range > 12) {
      breakdown = "ERROR";
    } else {
      amt = eval(amt) / eval(range);

      d = new Date(firstYear, eval(firstMonth) - 1, "01");
      var newDate = new Date();

      for (var i = 0; i < range; i++) {
        if (i > 0) {
          newDate = new Date(d.setMonth(d.getMonth() + 1));
        } else {
          newDate = new Date(d.setMonth(d.getMonth()));
        }

        breakdown +=
          monthName[newDate.getMonth()] +
          "/" +
          newDate.getFullYear() +
          "|" +
          amt +
          ",";
      }
    }
  }
  return breakdown;
}

function monthDiff(start, end) {
  var tempDate = new Date(start);
  var monthCount = 0;
  while (
    tempDate.getMonth() + "" + tempDate.getFullYear() !=
    end.getMonth() + "" + end.getFullYear()
  ) {
    monthCount++;
    tempDate.setMonth(tempDate.getMonth() + 1);
  }
  return monthCount + 1;
}

function totalMonth() {
  var ctrl = document.getElementById("fromMonth");
  var firstMonth = ctrl.options[ctrl.selectedIndex].value;
  ctrl = document.getElementById("fromYear");
  var firstYear = ctrl.options[ctrl.selectedIndex].value;

  ctrl = document.getElementById("toMonth");
  var secondMonth = ctrl.options[ctrl.selectedIndex].value;

  ctrl = document.getElementById("toYear");
  var secondYear = ctrl.options[ctrl.selectedIndex].value;

  var dt1 = new Date(firstYear, eval(firstMonth) - 1, "01");
  var dt2 = new Date(secondYear, eval(secondMonth) - 1, "01");

  if (dt1 <= dt2) {
    var cnt = monthDiff(dt1, dt2);
    document.getElementById("totalMth").innerHTML = "Total Months = " + cnt;
    if (cnt > 12) {
      document.getElementById("rangeErr").innerHTML =
        "The month count is more than 12!";
    } else {
      document.getElementById("rangeErr").innerHTML = "";
    }
  } else {
    document.getElementById("rangeErr").innerHTML =
      'Incorrect format: "From" date cannot be later than "To" date.';
    document.getElementById("totalMth").innerHTML = "";
  }
}

function getproviderList() {
  $("#wait").css("display", "block");
  var token = storage.getItem("tokenKey");

  if (token == "") {
    logout();
  }
  var myURL = bcremit + "bcremit_pay.aspx";
  var strData =
    "appRequest=providerList&tokenKey=" +
    token +
    "&country=" +
    storage.getItem("country");
  ajaxCall(myURL, strData, "spList");
}

function responseListOfProvider(res) {
  if (res.err_code == "100") {
    logout();
  } else if (res.err_code == "5") {
    $("#block1").hide();
    $("#block2").show();
  } else {
    var totalSP = res.totalSP;
    if (totalSP == "0") {
      $("#block1").hide();
      $("#block2").show();
    } else {
      var list = "";

      for (var i = 0; i < res.spList.length; i++) {
        var sp = res.spList[i];
        list +=
          '<a href="#" onclick="chooseProvider(\'' +
          sp.spID +
          "','" +
          sp.spName +
          "','" +
          sp.spCountry +
          "','" +
          sp.service_type +
          "','" +
          sp.payment_mode +
          "','" +
          sp.fee_type +
          "','" +
          sp.icon +
          '\');" class="provider-link">' +
          '<div class="image-holder">' +
          '<img src="' +
          sp.icon +
          '" class="provider-icon" alt="" />' +
          "</div>" +
          '<p class="title provider-title">' +
          sp.spName +
          "</p>" +
          "</a>";
      }

      $("#spList").html(list);
    }
  }

  $("#wait").css("display", "none");
}

function chooseProvider(
  id,
  name,
  country,
  serviceType,
  payMode,
  feeType,
  icon
) {
  storage.setItem("SPID", id);
  storage.setItem("SPName", name);
  storage.setItem("SPType", serviceType);
  storage.setItem("PayType", payMode);
  storage.setItem("SPFee", feeType);
  storage.setItem("SPIcon", icon);
  storage.setItem("SPCountry", country);

  window.location.href = "bc_payment.html";
}

function spDetails() {
  $("#wait").css("display", "block");
  $("#SM1").hide();
  var token = storage.getItem("tokenKey");

  var spID = storage.getItem("SPID");
  var spName = storage.getItem("SPName");
  var spCountry = storage.getItem("SPCountry");
  var spType = storage.getItem("SPType");
  var spPayMode = storage.getItem("PayType");

  if (token == "") {
    logout();
  }

  $("#txtBCSPID").val(spID);
  $("#spName").html(spName);
  $("#txtSPCountry").val(spCountry);

  $("#totalPackageAmt").val("0");
  $("#txtSelectedPackageID").val("");
  $("#selectedPackages").html("");

  $("#txtServiceType").val(spType);

  if (spType == "2") {
    $("#txtIsVoucher").val("Y");
    $("#txtIsProperty").val("");
  } else if (spType == "1") {
    $("#txtIsProperty").val("Y");
    $("#txtIsVoucher").val("");
  } else {
    $("#txtIsProperty").val("");
    $("#txtIsVoucher").val("");
  }

  $("#txtPaymentMode").val(spPayMode);

  var myURL = bcremit + "bcremit_pay.aspx";
  var strData = "appRequest=customFields&tokenKey=" + token + "&spID=" + spID;
  ajaxCall(myURL, strData, "customFields");
}

function responseSPCustomFields(response) {
  var label = "";
  var mandatoryFlag = "";
  var frm = "";
  var input = "";
  var totalCF = 0;
  var spID = $("#txtBCSPID").val();
  var paymentType = "";
  var monthIndicator = "";
  var notes = "";
  var bic = "";

  if (response.err_code == "100") {
    logout();
  } else if (response.err_code == "5") {
    showAlert("We are unable to process your request!");
    $("#txtGoTo").val("bcpay.html");
  } else {
    var totalFields = response.totalFields;
    totalCF = totalFields;

    if (totalCF == "0") {
      showAlert("There is a problem with the selected Provider");
      $("#txtGoTo").val("bcpay.html");
    } else {
      for (var i = 0; i < response.cfList.length; i++) {
        var res = response.cfList[i];

        if (res.Mandatory == "Y") {
          mandatoryFlag = "*";
        } else {
          mandatoryFlag = "";
        }

        label =
          '<label class="item-label input-title">' + res.Desc + "</label>";

        if (res.Desc == "Contribution Amount") {
          paymentType = res.PayMode;
          monthIndicator = res.MonthIndicator;
          notes = res.notes;
          totalCF = totalCF - 1;
        } else if (res.Desc == "Account No") {
          $("#txtAcctNo").val(res.Data);
        } else if (res.Desc == "BIC") {
          bic = res.Data;
        } else if (res.Desc == "Bank Branch") {
          $("#txtBranch").val(res.Data);
        } else if (res.Desc == "Bank Name") {
        } else {
          if (res.DTType == "string" || res.DTType == "integer") {
            if (res.Len >= 1 && res.Len <= 20) {
              if (i == 0) {
                input =
                  '<input id="CF' +
                  i +
                  '" maxlength="' +
                  res.Len +
                  '" value="' +
                  res.Data +
                  '" class="input-field input-textbox" type="number" onkeyup="this.value = this.value.replace(/[^0-9]/g, \'\')" />';
              } else {
                input =
                  '<input id="CF' +
                  i +
                  '" maxlength="' +
                  res.Len +
                  '" value="' +
                  res.Data +
                  '" class="input-field input-textbox" />';
              }
            } else if (res.Len >= 21 && res.Len <= 180) {
              if (res.Len == 26) {
                input =
                  '<input id="CF' +
                  i +
                  '" maxlength="' +
                  res.Len +
                  '" value="' +
                  res.Data +
                  '" class="input-field input-textbox" type="number" onkeyup="this.value = this.value.replace(/[^0-9]/g, \'\')" />';
              } else {
                input =
                  '<input id="CF' +
                  i +
                  '" maxlength="' +
                  res.Len +
                  '" value="' +
                  res.Data +
                  '" class="input-field input-textbox" />';
              }
            } else {
              data = res.Data.replace(/_/g, "\n");
              data = data.replace(/\*/g, ",");

              input =
                '<textarea id="CF' +
                i +
                '" cols="20" rows="5" class="input-field input-textbox">' +
                data +
                "</textarea>";
            }

            input +=
              '<input type="hidden" id="CFPK' +
              i +
              '" value="' +
              res.PKID +
              '">' +
              '<input type="hidden" id="MandatoryFlag' +
              i +
              '" value="' +
              res.Mandatory +
              '">' +
              '<input type="hidden" id="FDesc' +
              i +
              '" value="' +
              res.Desc +
              '">' +
              '<input type="hidden" id="CFType' +
              i +
              '" value="' +
              res.DTType +
              '">';
          } else {
            if (!(res.ListData == "")) {
              input =
                '<select id="CF' +
                i +
                '" class="input-select select" id="txtBeneCountry" >' +
                '<optgroup label="Select">';

              var arrList = res.ListData.split(",");
              var val = "";
              var options = "";

              for (var j = 0; j < arrList.length; j++) {
                val = arrList[j].split("|");
                if (val[0] == res.Data) {
                  input +=
                    '<option value="' +
                    val[0] +
                    '" selected>' +
                    val[1] +
                    "</option>";
                } else {
                  input +=
                    '<option value="' + val[0] + '">' + val[1] + "</option>";
                }
              }

              input +=
                "</optgroup></select>" +
                '<input type="hidden" id="CFPK' +
                i +
                '" value="' +
                res.PKID +
                '">' +
                '<input type="hidden" id="MandatoryFlag' +
                i +
                '" value="' +
                res.Mandatory +
                '">' +
                '<input type="hidden" id="FDesc' +
                i +
                '" value="' +
                res.Desc +
                '">' +
                '<input type="hidden" id="CFType' +
                i +
                '" value="' +
                res.DTType +
                '">';
            }
          }

          frm += '<div class="input-holder">' + label + input + "</div>";
        }
        input = "";
      }
    }

    if (totalFields == 0) {
      //$("#cfBlock").hide();
    } else {
      //$("#cfBlock").show();
    }

    totalFields = response.Catalog.length;
    var catalog = "";
    var desc = "";
    var srvType = $("#txtServiceType").val();
    $("#txtBCCCY2").val(response.destCCY);

    for (i = 0; i < totalFields; i++) {
      var set = response.Catalog[i];
      desc = set.Desc.replace(/_/g, ",&nbsp;");

      if (srvType == "2") {
        catalog +=
          '<div  style="text-center;;padding:10px;border:1px solid gray" onclick="populateVoucher(\'' +
          set.PackageName +
          "','" +
          set.Price +
          "','" +
          set.PackageID +
          '\');"  id="' +
          set.PackageID +
          '">' +
          '<div><center><img src="' +
          url +
          "/images/Service%20Provider/Catalog/" +
          spID +
          "/" +
          set.ImageFile +
          '" class="img"/></center></div>' +
          '<div class="catDesc">' +
          "<label>" +
          set.PackageName +
          "</label><br />" +
          '<span style="font-size:small">' +
          desc +
          "</span><br />" +
          '<span class="catPrice"> ' +
          response.destCCY +
          " " +
          formatNumeric(set.Price) +
          "</span>" +
          "</div>" +
          "</div>";
      } else {
        catalog +=
          '<div style="text-center;;padding:10px;border:1px solid gray" onclick="populatePackage(\'' +
          set.PackageName +
          "','" +
          set.Price +
          "','" +
          set.PackageID +
          '\');"  id="' +
          set.PackageID +
          '">' +
          '<div style="text-align:center"><label style="font-weight:600">' +
          set.PackageName +
          " (" +
          response.destCCY +
          " " +
          formatNumeric(set.Price) +
          ")</label><br /></div>" +
          '<div><center><img src="' +
          url +
          "/images/Service%20Provider/Catalog/" +
          spID +
          "/" +
          set.ImageFile +
          '" class="img"/></center></div>' +
          '<div class="catDesc">' +
          '<span style="font-size:small">' +
          desc +
          "</span><br />" +
          "</div>" +
          "</div>";
      }
    }
    var propFields = response.Property.length;

    var spType = storage.getItem("SPType");
    $("#customFields").html(frm);
    $("#txtTotalCF").val(totalCF);

    if (totalFields > 0) {
      $("#txtIsProperty").val("");
      $("#txtIsCatalog").val("Y");
      $("#catalogItem").html(catalog);
      $("#catalog").show();
      allCatalogItem = response.Catalog;
    } else if (spType == "1") {
      $("#txtIsCatalog").val("0");
      $("#catBlock").hide();
      $("#paymentContainer").show();
      populateContributionAmount(paymentType, monthIndicator, notes);
      $("#disclaimer").hide();
      $("#txtIsProperty").val("Y");
      getBankList();
      document.getElementById("ddlBank").value = bic;
      $("#propBank").show();
    } else {
      $("#txtIsCatalog").val("0");
      $("#txtIsProperty").val("");
      $("#catBlock").hide();
      $("#paymentContainer").show();
      populateContributionAmount(paymentType, monthIndicator, notes);
    }
  }
  $("#wait").css("display", "none");
  $("#SM1").show();
}

function populateContributionAmount(type, monthIndicator, notes) {
  var paymentTable = "";
  var monthSelection = "";
  var monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  var currentYear = new Date().getFullYear();
  var ccy = $("#txtBCCCY2").val();

  var monthOption =
    '<option value="01">Jan</option>' +
    '<option value="02">Feb</option>' +
    '<option value="03">Mar</option>' +
    '<option value="04">Apr</option>' +
    '<option value="05">May</option>' +
    '<option value="06">June</option>' +
    '<option value="07">July</option>' +
    '<option value="08">Aug</option>' +
    '<option value="09">Sept</option>' +
    '<option value="10">Oct</option>' +
    '<option value="11">Nov</option>' +
    '<option value="12">Dec</option>';

  if (type == "1") {
    paymentTable =
      '<div class="text-head-rate" id="rate" style="display:none;"><div style="display:flex;padding:5px"><label style="width:100%;">FX Rate </label><label class="colored-text" style="width:100%;text-align:right;">&#163; 1 = <span id="fxRate">P 63.40</span></label></div></div>' +
      '<div class="input-holder">' +
      '<p class="input-title">Total Payment</p>' +
      '<div class="item-holder" style=" align-items:center">' +
      '<label class="item-text">' +
      ccy +
      ":</label>" +
      '<input class="input-textbox" id="txtBCSendAmt" onclick="this.setSelectionRange(0, this.value.length);" class="payInput" onkeyup="this.value = this.value.replace(/[^0-9.]/g,\'\');bcCalculate()" input-field-num" type="tel">' +
      "</div>" +
      "</div>";

    $("#disclaimer").html(notes);
    var breakline =
      "<p>&nbsp;</p>" +
      "<p>&nbsp;</p>" +
      "<p>&nbsp;</p>" +
      "<p>&nbsp;</p>" +
      "<p>&nbsp;</p>" +
      "<p>&nbsp;</p>" +
      "<p>&nbsp;</p>";
    $("#breakLine").html(breakline);
  } else if (type == "2") {
    for (i = 0; i < monthName.length; i++) {
      paymentTable +=
        '<div class="rowType01" style="background-color: #FFFFFF;">' +
        '<div class="colType01">' +
        '<div style="height: 30px">' +
        '<span style="font-size: 14px; font-weight: bold; vertical-align: middle">' +
        monthName[i] +
        " " +
        currentYear +
        "</span>" +
        '<input type=text id="mnth' +
        i +
        '" Font-Size="12pt" value="0.00">' +
        "</div>" +
        "</div>" +
        '<div class="colType02" style="background-color: #FFFFFF;">' +
        '<div style="height: 30px; vertical-align: middle">' +
        '<select name="select3" id="select3' +
        i +
        '">' +
        '<option value="PHP" selected>PHP</option>' +
        "</select>" +
        "</div>" +
        "</div>" +
        "</div>";
    }
  } else {
    paymentTable =
      '<div class="text-head-rate" id="rate" style="display:none"><div style="display:flex"><label style="width:100%;">FX Rate </label><label class="colored-text" style="width:100%;text-align:right;">&#163; 1 = <span id="fxRate">P 63.40</span></label></div></div>' +
      '<div class="input-holder">' +
      '<p class="input-title">Total Payment</p>' +
      '<div class="item-holder" style=" align-items:center">' +
      '<label class="item-text">' +
      ccy +
      ":</label>" +
      '<input class="input-textbox" id="txtBCSendAmt" onclick="this.setSelectionRange(0, this.value.length);" class="payInput" onkeyup="this.value = this.value.replace(/[^0-9.]/g,\'\');bcCalculate()" input-field-num" type="tel">' +
      "</div>" +
      "</div>";
    var breakline =
      "<p>&nbsp;</p>" +
      "<p>&nbsp;</p>" +
      "<p>&nbsp;</p>" +
      "<p>&nbsp;</p>" +
      "<p>&nbsp;</p>" +
      "<p>&nbsp;</p>" +
      "<p>&nbsp;</p>";
    $("#breakLine").html(breakline);
  }

  if (monthIndicator == "Y") {
    var currentYear = new Date().getFullYear();
    var lastYear = new Date().getFullYear() - 1;
    var nextYear = new Date().getFullYear();
    var dt = new Date();
    var curMonth = dt.getMonth();

    var futureY = "";

    for (var i = 1; i <= 5; i++) {
      nextYear = new Date().getFullYear() + i;
      futureY += '<option value="' + nextYear + '">' + nextYear + "</option>";
    }

    monthSelection =
      '<div class="form-group input-holder">' +
      '<div class="text-head-sub">Applicable Month / Year</div>' +
      '<div class="form-group input-holder">' +
      '<label class="item-label input-title">From</label>' +
      '<div class="select-holder">' +
      '<select id="fromMonth" class="input-field input-select" type="text" onchange="totalMonth();" required>' +
      '<optgroup label="Select">' +
      monthOption +
      "</optgroup>" +
      "</select>" +
      '<select id="fromYear" class="input-field input-select" type="text" onchange="totalMonth();" required>' +
      '<optgroup label="Select">';

    if (curMonth == 0) {
      monthSelection +=
        '<option value="' + lastYear + '" selected>' + lastYear + "</option>";
    }

    monthSelection +=
      '<option value="' +
      currentYear +
      '" selected>' +
      currentYear +
      "</option>" +
      futureY +
      "</optgroup>" +
      "</select>" +
      "</div>" +
      "</div>";

    monthSelection +=
      '<div class="form-group input-holder">' +
      '<label class="item-label input-title">To</label>' +
      '<div class="select-holder">' +
      '<select id="toMonth" class="input-field input-select" type="text" onchange="totalMonth();" required>' +
      '<optgroup label="Select">' +
      monthOption +
      "</optgroup>" +
      "</select>" +
      '<select id="toYear" class="input-field input-select" type="text" onchange="totalMonth();" required>' +
      '<optgroup label="Select">';

    if (curMonth == 0) {
      monthSelection +=
        '<option value="' + lastYear + '" selected>' + lastYear + "</option>";
    }

    monthSelection +=
      '<option value="' +
      currentYear +
      '" selected>' +
      currentYear +
      "</option>" +
      futureY +
      "</optgroup>" +
      "</select>" +
      "</div>" +
      "</div>";

    monthSelection +=
      '<div id="totalMth" style="text-align:center;width:100%;font-weight:600"></div>' +
      '<div id="rangeErr" style="font-size:10px;color:red;text-align:center"></div>';
  }

  $("#month").html(monthSelection);
  $("#bcPaymentTable").html(paymentTable);
  $("#txtPayType").val(type);
  $("#txtMonthIndicator").val(monthIndicator);
}

function populateVoucher(set, price, id) {
  var amt = 0;
  var fee = 2.99;
  var selectedPackage = $("#selectedPackages").html();
  var selectedPackageID = $("#txtSelectedPackageID").val();
  var newPackage = "";
  var ccy = $("#txtBCCCY2").val();

  newPackage =
    '<label class="package">' +
    set +
    " " +
    ccy +
    " " +
    formatNumeric(price) +
    '</label>&nbsp;&nbsp;<span style="font-size:small;cursor:pointer" onclick="removePackage(\'' +
    id +
    "','" +
    price +
    "');\">remove</span>" +
    "<br />";

  $("#" + id).css("background-color", "##05294b");

  selectedPackage += newPackage;
  selectedPackageID += id + "|";
  $("#txtSelectedPackageID").val(selectedPackageID);

  calculateTotal(price, "plus");
  $("#selectedPackages").html(selectedPackage);
  $("#catSummary").show();
  window.scrollTo(0, document.body.scrollHeight);
}

function removePackage(id, price) {
  var selectedID = $("#txtSelectedPackageID").val();
  var arrID = selectedID.split("|");

  var newID = "";
  var flagFound = false;

  $("#" + id).css("background-color", "#fff");

  for (var i = 0; i < arrID.length - 1; i++) {
    if (arrID[i] == id) {
      if (flagFound == true) {
        newID += arrID[i] + "|";
      }
      flagFound = true;
    } else {
      newID += arrID[i] + "|";
    }
  }

  $("#totalPackageAmt").val("0");
  $("#catTotal").html("0");
  $("#selectedPackages").html("");
  $("#txtSelectedPackageID").val("");

  arrID = newID.split("|");
  var totalPrice = 0;

  var isVoucher = $("#txtIsVoucher").val();

  var totalFields = allCatalogItem.length;
  for (var j = 0; j < arrID.length - 1; j++) {
    for (i = 0; i < totalFields; i++) {
      var set = allCatalogItem[i];
      if (arrID[j] == set.PackageID) {
        if (isVoucher == "Y") {
          populateVoucher(set.PackageName, set.Price, set.PackageID);
        } else {
          populatePackage(set.PackageName, set.Price, set.PackageID);
        }

        totalPrice = eval(totalPrice) + eval(set.Price);
      }
    }
    if (totalPrice == 0) {
      //reset
      $("#totalPackageAmt").val("0");
      $("#catTotal").html("0");
      $("#selectedPackages").html("");
      $("#txtSelectedPackageID").val("");
    }
  }

  if (totalPrice == 0) {
    $("#catButtonContainer").hide();
    $("#dcPayment").hide();
  } else {
    $("#catButtonContainer").show();
    if (storage.getItem("country") == storage.getItem("SPCountry")) {
      forwardCalculate();
    } else {
      reverseCalculate();
    }
  }

  window.scrollTo(0, document.body.scrollHeight);
}

function populatePackage(set, price, id) {
  var amt = 0;
  var fee = 2.99;
  var selectedPackage = $("#selectedPackages").html();
  var selectedPackageID = $("#txtSelectedPackageID").val();
  var newPackage = "";
  var ccy = $("#txtBCCCY2").val();

  newPackage =
    '<div style="display:flex;justify-content:space-around;align-items:center;width:100%;padding:5px"><div style="width:100%"><label class="package" style="font-size:18px;color: #05294b;font-weight: 500;">' +
    set +
    '</label></div><div style="display:flex;justify-content:space-around;align-items:center;flex-direction:column;font-size:16px;width:50%;text-align:right"><label style=" width:100%"> ' +
    ccy +
    " " +
    formatNumeric(price) +
    '</label><span style=" width:100%;font-size:small;cursor:pointer;color:red;" class="removeLink" onclick="removePackage(\'' +
    id +
    "','" +
    price +
    "');\">Remove</span></div></div>";

  $("#" + id).css("background-color", "#d5e9f7");

  selectedPackage += newPackage;
  selectedPackageID += id + "|";

  calculateTotal(price, "plus");
  $("#txtSelectedPackageID").val(selectedPackageID);
  $("#selectedPackages").html(selectedPackage);
  $("#catSummary").show();
  window.scrollTo(0, 1000);
}

function calculateTotal(amt, action) {
  var totalAmt = $("#totalPackageAmt").val();

  if (action == "plus") {
    totalAmt = eval(totalAmt) + eval(amt);
  } else {
    totalAmt = eval(totalAmt) - eval(amt);
  }

  $("#totalPackageAmt").val(totalAmt);

  var ccy = $("#txtBCCCY2").val();
  $("#catTotal").html(ccy + " " + formatNumeric(totalAmt));
  var ccy1 = $("#txtBCCCY1").val();

  if (totalAmt == 0) {
    //$("#catButtonContainer").hide();
  } else {
    if (storage.getItem("country") == storage.getItem("SPCountry")) {
      forwardCalculate();
    } else {
      reverseCalculate();
    }
  }
}

/*------------------------------------------------------------------------------
                      transaction history                                    
------------------------------------------------------------------------------*/
function getTransactionHistory() {
  $("#wait").css("display", "block");

  var token = storage.getItem("tokenKey");
  var strData = "token=" + token;
  var myURL = bcremit + "transaction_history.aspx";
  ajaxCall(myURL, strData, "history");
}

function displayTransHistory(res) {
  fbq('track', 'Search');
  console.log(JSON.stringify(res));
  if (res.history_list[0].count == "0") {
    $("#noRT").show();
    $("#nrt").css("color", "#5a6d7e");
    $("#nrt").html("No Recent Transaction");
    $("#wait").css("display", "none");
  } else {
    $("#noRT").hide();
    $("#nrt").css("color", "white");
    $("#nrt").html("");

    var transData = "";
    var dataModal = "";
    var row = "01";
    var mod = 0;
    var count = res.history_list[0].count;
    var trans = "";
    var ref = "";
    var beneName = "";
    var desc = "";
    var beneCountryFlag;
    if (res.error_code == "100") {
      $("#wait").css("display", "none");
      logout();
    } else {
      for (i = 0; i < count; i++) {
        trans = res.history_list[i];
        beneCountryFlag =
          "./assets/images/check-rates-flags/" +
          trans.bene_country.toLowerCase() +
          "-flag.svg";
        mod = i % 2;
        if (mod == 0) {
          row = "01";
        } else {
          row = "02";
        }

        if (trans.bene_name.length > 15) {
          beneName = trans.bene_name; //trans.bene_name.substring(0, 13) + ".."
        } else {
          beneName = trans.bene_name;
        }

        if (trans.product == "BCRemit Pay") {
          ref = trans.trans_ID;
          desc = "Paid";
        } else {
          desc = "Send";

          if (trans.product == "Cash Pick up") {
            ref = trans.tracerNo;
          } else {
            ref = trans.trans_ID;
          }
        }

        transData +=
          '<a href="#modal-Details-' +
          i +
          '" class="detail-link js-lock">' +
          '<div class="cards">' +
          '<div class="transaction-card-wrapper">' +
          '<img src="' +
          beneCountryFlag +
          '" class="provider-icon" alt="" style="width: 38px;height: 38px;border-radius: 30px;box-shadow: 0px 0px 2px 2px #bbbbbb75;margin-top: 6px;float:right"/>' +
          '<p class="title transaction-card-title">' +
          beneName +
          "</p>" +
          '<p class="transaction-card-text">' +
          ref +
          " | " +
          trans.trans_date +
          "</p>" +
          '<p class="title transaction-card-total">Total Payment<span class="transaction-card-payment">' +
          trans.rem_ccy +
          " " +
          formatNumeric(trans.rem_payment) +
          "</span></p>" +
          '<p class="transaction-card-text">Status : <span style="color:' +
          trans.color +
          '">' +
          trans.status +
          "</span></p><br>" +
          '<object><a href="#modal-Details-' +
          i +
          '" class="btn btn-border-blue transaction-card-btn js-lock btn-new color-white"><i class="fas fa-info-circle"></i>   View</a></object>' +
          "</div>" +
          "</div>" +
          "</a>";

        dataModal +=
          '<div id="modal-Details-' +
          i +
          '" class="modal bank-details-modal modal-open">' +
          '<div class="content-wrapper">' +
          '<p class="title modal-title">Transaction Details</p>' +
          '<div class="content-holder">';

        var idDisplay = "";
        var payType = "";

        if (trans.product == "Cash Pick up") {
          dataModal +=
            '<div class="modal-details-wrapper">' +
            '<div class="modal-details-holder">' +
            '<p class="modal-details-title">Beneficiary Ref. No</p>' +
            '<p class="title modal-details-text">' +
            trans.tracerNo +
            "</p>" +
            "</div>";
        } else {
          dataModal +=
            '<div class="modal-details-wrapper">' +
            '<div class="modal-details-holder">' +
            '<p class="modal-details-title">Transaction No.</p>' +
            '<p class="title modal-details-text">' +
            trans.trans_ID +
            "</p>" +
            "</div>";
        }

        var textColor = "white";

        if (trans.color == "yellow") {
          textColor = "black";
        }

        dataModal +=
          '<div class="modal-details-holder">' +
          '<p class="modal-details-title">Payment Mode</p>' +
          '<p class="title title-blue modal-details-text">' +
          trans.payment_type +
          "</p>" +
          "</div>" +
          '<div class="modal-details-holder" style="background-color:' +
          trans.color +
          '">' +
          '<p class="title modal-details-text" style="color:' +
          textColor +
          '">' +
          trans.status +
          "</p>" +
          "</div>" +
          '<div class="modal-details-holder">' +
          '<p class="modal-details-title">Delivery Option</p>' +
          '<p class="title modal-details-text">' +
          trans.product +
          "</p>" +
          "</div>" +
          "</div>" +
          '<div class="modal-account-wrapper">' +
          '<div class="modal-account-holder">' +
          '<p class="modal-account-title">Account Name:</p>' +
          '<p class="modal-account-description">' +
          trans.bene_name +
          "</p>" +
          "</div>" +
          '<div class="modal-account-holder">' +
          '<p class="modal-account-title">Send Amount:</p>' +
          '<p class="modal-account-description">' +
          trans.rem_ccy +
          " " +
          formatNumeric(trans.rem_amt) +
          "</p>" +
          "</div>";

        if (trans.fx_rate < 1 || trans.fx_rate > 1) {
          dataModal +=
            '<div class="modal-account-holder">' +
            '<p class="modal-account-title">Exchange Rate:</p>' +
            '<p class="modal-account-description">' +
            formatNumeric(trans.fx_rate) +
            "</p>" +
            "</div>";
        }

        dataModal +=
          '<div class="modal-account-holder">' +
          '<p class="modal-account-title">Receiving Amount:</p>' +
          '<p class="modal-account-description">' +
          trans.rec_ccy +
          " " +
          formatNumeric(trans.rec_amt) +
          "</p>" +
          "</div>" +
          '<div class="modal-account-holder">' +
          '<p class="modal-account-title">Transfer Fee:</p>' +
          '<p class="modal-account-description">' +
          trans.rem_ccy +
          " " +
          formatNumeric(trans.fee) +
          "</p>" +
          "</div>" +
          '<div class="modal-account-holder">' +
          '<p class="modal-account-title">Total Payment:</p>' +
          '<p class="modal-account-description">' +
          trans.rem_ccy +
          " " +
          formatNumeric(trans.rem_payment) +
          "</p>" +
          "</div>" +
          "</div>" +
          '<div class="button-wrapper">' +
          '<a href="#" class="btn btn-border-grey btn-new-radius-red">Close</a>' +
          "</div>" +
          "</div>" +
          "</div>" +
          "</div>" +
          "</main>";
      }

      $("#history-content").html(transData);
      $("#history-modal").html(dataModal);
      $("#wait").css("display", "none");
    }
  }
  // hideProvider();
}
/*------------------------------------------------------------------------------
                      send Money                                    
------------------------------------------------------------------------------*/
function sendMoneyFromSummary() {
  var beneCIF = storage.getItem("ViewBeneNo");
  var beneBankName = storage.getItem("ViewBeneBank");
  var beneAcctNo = storage.getItem("ViewBeneAcctNo");
  var beneBIC = storage.getItem("ViewBeneBIC");
  var beneBankBranch = "";
  var beneName = storage.getItem("ViewBeneName");
  var product = storage.getItem("ViewBeneProduct");
  var country = storage.getItem("ViewBeneCountry");

  storage.setItem("SMBene", beneCIF);
  storage.setItem("SMProduct", product);
  storage.setItem("SMBeneName", beneName);
  storage.setItem("SMBeneBank", beneBankName);
  storage.setItem("SMBeneProduct", product);
  storage.setItem("SMBeneAcctNo", beneAcctNo);
  storage.setItem("SMBIC", beneBIC);
  storage.setItem("SMBranch", beneBankBranch);
  storage.setItem("SMBeneCountry", country);

  window.location.href = "send_money.html";
}

function getRate(strData) {
  var myURL = bcremit + "calculate.aspx";
  console.log("URL>>>>>" + myURL + "?" + strData);
  ajaxCall(myURL, strData, "calculate");
}

function postTransaction() {
  fbq('track', 'InitiateCheckout');
  $("#post_trans").html("processing..");
  $("#SMInstantBankTransfer").hide();
  $("#wait").css("display", "block");
  $("#SM").hide();

  var sendAmt = $("#txtHSAmt").val();
  var recAmt = $("#txtHDAmt").val();
  var remPayment = $("#txtHOBTPay").val();
  var product = storage.getItem("SMProduct");

  var fxRate = $("#txtHFXRate").val();
  var remCifNo = storage.getItem("cifNumber");
  var beneCifNo = storage.getItem("SMBene");
  var remCur = $("#txtHCCY1").val();
  var beneCur = $("#txtHCCY2").val();
  var country = $("#countrySendmoney").val(); //YOU SEND

  // var corridor = $("#corridorSendmoney").val(); //RECIPIENT GETS
  var corridor = getCountryPrefix($(".sm-recipient-gets").html());

  var fee = $("#txtHOBTFee").val();

  var beneBankName = storage.getItem("SMBeneBank");
  var beneBIC = storage.getItem("SMBIC");
  var beneBankBranch = storage.getItem("SMBranch");
  var beneAcctNo = storage.getItem("SMBeneAcctNo");

  var token = storage.getItem("tokenKey");
  var promoCode = $("#txtHPromoCode").val();
  var payType = $("#txtHPayType").val();

  if (token == "") {
    logout();
  }

  if (sendAmt == 0) {
    showAlert("Send amount is 0");
    $("txtGoTo").val("#");

    $("#wait").css("display", "none");
    $("#SM").show();
    return;
  }

  var type = "OBT";

  if (payType == "DC") {
    fee = $("#txtHDCFee").val();
    remPayment = $("#txtHDCPay").val();
    type = "DC";
  } else if (payType == "IOBT") {
    type = "IOBT";
  }

  $("#lblBeneName").html(storage.getItem("SMBeneName"));
  $("#lblDestAmt").html(beneCur + " " + formatNumeric(recAmt));
  $("#lblTotalPay").html(remCur + " " + formatNumeric(remPayment));

  var location = storage.getItem("MyLocation");
  var purpose = $("#ddlPurpose option:selected").val();

  var strData =
    "product=" +
    product +
    "&country=" +
    country +
    "&hCorridor=" +
    corridor +
    "&amt=" +
    sendAmt +
    "&recAmt=" +
    recAmt +
    "&remCIF=" +
    remCifNo +
    "&beneCIF=" +
    beneCifNo +
    "&remCur=" +
    remCur +
    "&recCur=" +
    beneCur +
    "&fxRate=" +
    fxRate +
    "&fee=" +
    fee +
    "&remPayment=" +
    remPayment +
    "&appRequest=SAVE" +
    "&paymentType=" +
    type +
    "&beneBankID=" +
    beneBIC +
    "&beneAcctNo=" +
    beneAcctNo +
    "&beneBankName=" +
    beneBankName +
    "&tokenKey=" +
    token +
    "&location=" +
    location +
    "&promoCode=" +
    promoCode +
    "&purpose=" +
    purpose +
    "&random=" +
    new Date().valueOf();
  $("#SMSummary").hide();
  var myURL = bcremit + "new_transaction.aspx";
  ajaxCall(myURL, strData, "sendMoney");
}

function sendMoneyResponse(res, payType) {
  if (res.error_code == "0") {
    if (res.tracer_no != "") {
      $("#trxID").html(res.tracer_no);
    } else {
      $("#trxID").html(res.transaction_id);
    }

    $("#tID").val(res.transaction_id);

    var remCIF = storage.getItem("cifNumber");

    $("#SMSummary").hide();
    $("#payment").hide();
    $("#rate").hide();

    if (payType == "DC") {
      var param =
        "tid=" +
        res.transaction_id +
        "&tokenKey=" +
        storage.getItem("tokenKey") +
        "&myIP=" +
        storage.getItem("ip");
      var link = bcremit + "iframe_card_payment.aspx?appRequest=START&" + param;

      var ref = cordova.InAppBrowser.open(
        link,
        "_blank",
        "location=no",
        "closebuttoncaption=Done"
      );

      ref.addEventListener("loadstop", function (event) {
        if (event.url.match("close.html")) {
          ref.close();
          window.location.href = "transaction_history.html";
        }

        if (event.url.match("return.html")) {
          ref.close();
          window.location.href = "transaction_history.html";
        }
      });
    } else {
      if (payType == "IOBT") {
        var ip = myIP();
        var param =
          "tid=" +
          res.transaction_id +
          "&tokenKey=" +
          storage.getItem("tokenKey") +
          "&myIP=" +
          storage.getItem("ip");
        var link = bcremit + "obt_online_payment.aspx?" + param;
        var ref = cordova.InAppBrowser.open(
          link,
          "_system",
          "location=no",
          "closebuttoncaption=Done"
        );

        ref.addEventListener("loadstop", function (event) {
          if (event.url.match("close.html")) {
            ref.close();
            window.location.href = "transaction_history.html";
          }

          if (event.url.match("bcremitapp:")) {
            ref.close();
          }
        });
      } else {
        $("#custNo").html(res.obt_refno); //reference #
        $("#custNo2").html(res.obt_refno); //reference #
        $("#custNo3").html(res.obt_refno); //reference #
        id = "sortOrIbanLabel";
        $("#SM2").show();
        if (res.obt_advisory_flag == "1") {
          $("#advisoryMsg").html(res.obt_advisory);
          $("#advisory").show();
        }
        if (res.acctNo1 == null || res.acctNo1 == "") {
          $("#accountnumber").hide();
        }

        if (res.actName1 == "" || res.actName1 == null) {
          $("#accInfo1").hide();
        } else {
          $("#actName1").html(res.actName1);
          $("#sc1").html(res.sCode1);
          $("#sortOrIbanLabel").html(res.desc1);
          $("#ac1").html(res.acctNo1);
          $("#accInfo1").show();
        }

        if (res.actName2 == "" || res.actName2 == null) {
          $("#accInfo2").hide();
        } else {
          $("#actName2").html(res.actName2);
          $("#sc2").html(res.sCode2);
          $("#ac2").html(res.acctNo2);
          $("#sortOrIbanLabel2").html(res.desc2);
          $("#accInfo2").show();
        }

        if (res.actName3 == "" || res.actName3 == null) {
          $("#accInfo3").hide();
        } else {
          $("#actName3").html(res.actName3);
          $("#sc3").html(res.sCode3);
          $("#ac3").html(res.acctNo3);
          $("#sortOrIbanLabel3").html(res.desc3);
          $("#accInfo3").show();
        }
      }
    }
  } else if (res.error_code == "100") {
    logout();
  } else if (res.error_code == "1") {
    $("#SMInstantBankTransfer").hide();
    $("#SMErr1").show();
  } else if (res.error_code == "5") {
    $("#SMInstantBankTransfer").hide();
    $("#SMErr3").show();
    $("#limit").html(res.rem_ccy + " " + formatNumeric(res.max_limit));
    $("#balance").html(res.rem_ccy + " " + formatNumeric(res.rem_balance));
  } else if (res.error_code == "6") {
    $("#SMInstantBankTransfer").hide();
    $("#SMErr4").show();
    $("#beneLimit").html(res.rem_ccy + " " + formatNumeric(res.max_limit));
    $("#beneLimitBalance").html(
      res.rem_ccy + " " + formatNumeric(res.rem_balance)
    );

    var remAmt = $("#txtSendAmt").val();
    $("#beneLimitRemAmt").html(res.rem_ccy + " " + remAmt);
    $("#beneLimitName").html(res.bene_name);
    $("#beneLimitName2").html(res.bene_name);
  } else if (res.error_code == "7") {
    $("#SMInstantBankTransfer").hide();
    $("#SMErr5").show();
  } else if (res.error_code == "8") {
    $("#SMInstantBankTransfer").hide();
    $("#txtHTID").val(res.transaction_id);
    $("#SMErr6").show();
  } else {
    $("#SMInstantBankTransfer").hide();
    $("#SMErr2").show();
  }
  $("#SM").hide();
  $("#SMSummary").hide();
  $("#wait").css("display", "none");
}

function getUserTime() {
  var myURL = bcremit + "parameters.aspx";
  var strData =
    "remCif=" + storage.getItem("cifNumber") + "&reqType=getUserTimeCreated";
  console.log(myURL + "?" + strData);
  ajaxCall(myURL, strData, "getTime");
}

function updateTransaction(status) {
  fbq('track', 'Purchase', {value: 0.00, currency: 'USD'});
  $("#wait").css("display", "block");
  $("#SM2").hide();

  var transID = $("#tID").val();
  var token = storage.getItem("tokenKey");

  if (token == "") {
    logout();
  }

  var myURL = bcremit + "transaction_update.aspx";
  var strData =
    "txtTransID=" +
    transID +
    "&country=" +
    storage.getItem("country") +
    "&txtStatus=" +
    status +
    "&tokenKey=" +
    token;
  ajaxCall(myURL, strData, "updateTrans");
}

function updateTransactionResponse(res) {
  $("#wait").css("display", "none");

  if (res.error_code == "0") {
    if (res.status == "cancel") {
      showAlert("Transaction cancelled! The transaction was not created.");
      $("#txtGoTo").val("dashboard.html");
    } else {
      showAlert(
        "Transaction created! Please complete your online bank transfer. Check your email for details."
      );
      $("#txtGoTo").val("transaction_history.html");
    }
  } else {
    if (res.status == "confirm") {
      $("#SMInstantBankTransfer").hide();
      $("#SMErr1").show();
      $("#SM2").hide();
    } else {
      window.location.href = "transaction_history.html";
    }
  }
}

/*------------------------------------------------------------------------------
                      beneficiary data                                          
------------------------------------------------------------------------------*/
function deleteBeneficiary() {
  $("#wait").css("display", "block");
  $("#MainBlock").hide();

  var token = storage.setItem("tokenKey");

  if (token == "") {
    $("#wait").css("display", "none");
    logout();
  }

  var beneCIF = storage.getItem("ViewBeneNo");
  var myURL = bcremit + "customer.aspx";

  var strData =
    "appRequest=deleteBene" + "&beneCIF=" + beneCIF + "&tokenKey=" + token;

  ajaxCall(myURL, strData, "deleteBene");
}

function deleteBeneficiaryResponse(res) {
  if (res.error_code == "0") {
    showAlert("Beneficiary successfully deleted");
    $("#txtGoTo").val("dashboard.html");
  } else {
    alertUser("Fail to delete beneficiary");
    window.scrollTo(0, 0);
  }

  $("#wait").css("display", "none");
  $("#MainBlock").show();
}

function beneSignUp(section) {
  if (section == "01") {
    beneSignUpPart1();
  } else if (section == "02") {
    beneSignUpPart2();
  } else if (section == "-1") {
    beneSignUpComplete();
  } else {
    beneSignUpPart3();
  }
}

function beneSignUpComplete() {
  getBeneList();
  $("#bene-section03").hide();
  $("#BENE-REGISTRATION").hide();
  $("#HOME").show();
  alertUser("Beneficiary successfully created.");
}

function beneSignUpPart3() {
  $("#wait").css("display", "block");
  $("#step3").hide();

  var errCount = 0;
  var errMsg = "";
  var product = $("#txtProduct").val();
  var selectedCountry = $("#txtBeneCountry").val();
  if (product == 1) {
    if (selectedCountry == "PH") {
      var acctNo = $("#txtAcctNo").val();
      var bankID = $("#txtBeneBank").val();
      var bankName = $("#txtBeneBank option:selected").text();
      var branch = $("#txtBranch").val().trim().replace(/  +/g, " ");
      if (!(bankID == "")) {
        if (!(branch == "")) {
          if (branch.indexOf(forbiddenChar) > -1) {
            errCount++;
            errMsg =
              "Branch contains invalid character (" + forbiddenChar + ")";
            $("#err9").html(errMsg);
          }

          if (branch.length > 50) {
            errCount++;
            errMsg = "Branch should be less than 50 characters";
            $("#err9").html(errMsg);
          }
        }
        if (acctNo == "") {
          errCount += 1;
          errMsg = "Please enter beneficiary's account number.";
          $("#err10").html(errMsg);
        } else {
          var isnum = /^\d+$/.test(acctNo);
          if (isnum == false) {
            errCount += 1;
            errMsg =
              "Invalid Account No. Please enter numbers only and no spaces in between numbers";
            $("#err10").html(errMsg);
          }

          if (acctNo.length > 50) {
            errCount += 1;
            errMsg = "Account no is more than 50 character length";
            $("#err10").html(errMsg);
          }
        }
      }
      acctNo = acctNo.replace(/\s+/g, "");
      if (!(acctNo == "")) {
        if (bankID == "" && selectedCountry == "PH") {
          errCount += 1;
          errMsg = "Please select bank.";
        }
      }

      var IBAN = "";
      var sortCode = "";
    } else if (selectedCountry == "UK") {
      var sortCode = $("#bene_sort_code").val();
      var acctNo = $("#txtAcctNoUKES").val();
      if (sortCode == "" || sortCode == undefined || sortCode == null) {
        errCount += 1;
        errMsg = "Please enter beneficiary's sort code.";
        $("#err12").html(errMsg);
      } else if (acctNo == "" || acctNo == undefined || acctNo == null) {
        errCount += 1;
        errMsg = "Please enter beneficiary's account number.";
        $("#err14").html(errMsg);
      } else {
        var isnum = /^\d+$/.test(acctNo);
        if (isnum == false) {
          errCount += 1;
          errMsg =
            "Invalid Account No. Please enter numbers only and no spaces in between numbers";
          $("#err14").html(errMsg);
        }
        if (acctNo.length > 50) {
          errCount += 1;
          errMsg = "Account no is more than 50 character length";
          $("#err14").html(errMsg);
        }
      }
      var bankID = "";
      var bankName = "";
      var branch = "";
      var IBAN = "";
    } else {
      var IBAN = $("#bene_IBAN").val();

      if (IBAN == "" || IBAN == undefined || IBAN == null) {
        errCount += 1;
        errMsg = "Please enter beneficiary's IBAN.";
        $("#err13").html(errMsg);
      }
      var bankID = "";
      var bankName = "";
      var branch = "";
      var sortCode = "";
      acctNo = "";
    }
  } else {
    var bankID = $("#txtEWBank").val();
    var bankName = $("#txtEWBank option:selected").text();
    var branch = "";
    var acctNo = $("#txtEWAcctNo").val();

    if (!(bankID == "")) {
      if (acctNo == "") {
        errCount += 1;
        errMsg = "Please key in account number.";
        $("#err11").html(errMsg);
      } else {
        var isnum = /^\d+$/.test(acctNo);
        if (isnum == false) {
          errCount += 1;
          errMsg =
            "Invalid Account No. Please enter numbers only and no spaces in between numbers";
          $("#err11").html(errMsg);
        }

        if (acctNo.length > 50) {
          errCount += 1;
          errMsg = "Account no is more than 50 character length";
          $("#err11").html(errMsg);
        }
      }
    }
    var IBAN = "";
    var sortCode = "";
  }

  var beneCIF = $("#txtNewBeneCIF").val();
  var tokenKey = storage.getItem("tokenKey");

  if (tokenKey == "") {
    logout();
  }

  if (sortCode == undefined && IBAN == undefined) {
    sortCode = null;
    IBAN = null;
  }

  if (errCount > 0) {
    $("#msg3").html("Please fill up all required information");
    $("#alertBox3").show();
    $("#wait").css("display", "none");
    $("#step3").show();
    window.scrollTo(0, 0);
    return false;
  }
  var ip = myIP();
  var strData =
    "appRequest=NewBeneficiary&section=03" +
    "&bankID=" +
    bankID +
    "&bankBranch=" +
    encodeURIComponent(branch) +
    "&acctNo=" +
    acctNo +
    "&bankName=" +
    bankName +
    "&tokenKey=" +
    tokenKey +
    "&myIP=" +
    ip +
    "&beneCIF=" +
    beneCIF +
    "&bene_sortCode=" +
    sortCode +
    "&bene_IBAN=" +
    IBAN;
  $.ajax({
    url: bcremit + "customer.aspx",
    type: "Get",
    data: strData,
    dataType: "jsonp",
    jsonp: false,
    jsonpCallback: "myJsonMethod",
    success: function (response) {
      if (response) {
        var strRes = JSON.stringify(response);
        var res = eval("(" + strRes + ")");
        beneResponse(res, 3);
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      alertUser(thrownError);
      $("#wait").css("display", "none");
      $("#step3").show();
    },
    async: false,
  });
}

function beneSignUpPart2() {
  fbq('track', 'SubmitApplication');
  $("#wait").css("display", "block");
  $("#step2").hide();

  var fName = encodeURIComponent(
    $("#txtBeneFName").val().trim().replace(/  +/g, " ")
  );
  var mName = encodeURIComponent(
    $("#txtBeneMName").val().trim().replace(/  +/g, " ")
  );
  var lName = encodeURIComponent(
    $("#txtBeneLName").val().trim().replace(/  +/g, " ")
  );
  var mobile = $("#txtBeneMobile").val().replace(/  +/g, " ");
  var email = storage.getItem("email");
  var remCIF = storage.getItem("cifNumber");

  var addr1 = encodeURIComponent(
    $("#txtBeneAddr1").val().trim().replace(/  +/g, " ")
  );
  var addr2 = encodeURIComponent(
    $("#txtBeneAddr2").val().trim().replace(/  +/g, " ")
  );
  var addr3 = encodeURIComponent(
    $("#txtBeneAddr3").val().trim().replace(/  +/g, " ")
  );
  var postcode = $("#txtBenePostCode").val().trim().replace(/  +/g, " ");
  var country = $("#txtBeneCountry").val();

  var relationship = $("#ddlRelationship option:selected").val();

  var product = $("#txtProduct").val();
  var tokenKey = storage.getItem("tokenKey");

  if (tokenKey == "") {
    logout();
  }

  var errCount = 0;
  var errMsg = "";

  if (addr1 == "") {
    errCount += 1;
    errMsg = "Please enter beneficiary's address line 1.";
    $("#err5").html(errMsg);
  } else {
    if (addr1.indexOf(forbiddenChar) > -1) {
      errCount++;
      errMsg = "Address 1 contains invalid character (" + forbiddenChar + ")";
      $("#err5").html(errMsg);
    }

    if (addr1.length > 50) {
      errCount++;
      errMsg = "Address 1 is more than 50 character length";
      $("#err5").html(errMsg);
    }
  }

  if (!(addr2 == "")) {
    if (addr2.indexOf(forbiddenChar) > -1) {
      errCount++;
      errMsg = "Address 2 contains invalid character (" + forbiddenChar + ")";
      $("#err6").html(errMsg);
    }

    if (addr2.length > 50) {
      errCount++;
      errMsg = "Address 2 is more than 50 character length";
      $("#err6").html(errMsg);
    }
  }

  if (addr3 == "") {
    errCount += 1;
    errMsg = "Please enter beneficiary's city/town.";
    $("#err7").html(errMsg);
  } else {
    if (addr3.indexOf(forbiddenChar) > -1) {
      errCount++;
      errMsg = "City/Town contains invalid character (" + forbiddenChar + ")";
      $("#err7").html(errMsg);
    }

    if (addr3.length > 50) {
      errCount++;
      errMsg = "City/Town is more than 50 character length";
      $("#err7").html(errMsg);
    }
  }

  if (!(postcode == "")) {
    var valid = /^([a-zA-Z0-9 ]+)$/.test(postcode);

    if (valid == false) {
      errCount += 1;
      errMsg = "Special characters are not allowed in zip code.";
      $("#err8").html(errMsg);
    }

    if (postcode.length > 20) {
      errCount += 1;
      errMsg = "Zip code is more than 20 character length";
      $("#err8").html(errMsg);
    }
  }
  if ($("#txtProduct option:selected").val() == -1) {
    errCount += 1;
    errMsg = "No delivery option available";
    $("#errDeliveryOption").html(errMsg);
  }

  if (errCount > 0) {
    $("#msg2").html("Please enter all required fields");
    $("#alertBox2").show();
    $("#wait").css("display", "none");
    $("#step2").show();
    window.scrollTo(0, 0);
    return false;
  }

  var ip = myIP();
  var strData =
    "appRequest=NewBeneficiary&section=01" +
    "&addr1=" +
    addr1 +
    "&addr2=" +
    addr2 +
    "&addr3=" +
    addr3 +
    "&relationship=" +
    relationship +
    "&postcode=" +
    postcode +
    "&tokenKey=" +
    tokenKey +
    "&fName=" +
    fName.trim() +
    "&mName=" +
    mName.trim() +
    "&lName=" +
    lName.trim() +
    "&mobileNo=" +
    mobile +
    "&country=" +
    country +
    "&email=" +
    email +
    "&myIP=" +
    ip +
    "&remCIF=" +
    remCIF;

  var myURL = bcremit + "customer.aspx?" + strData;

  $.ajax({
    url: bcremit + "customer.aspx",
    type: "Get",
    data: strData,
    dataType: "jsonp",
    jsonp: false,
    jsonpCallback: "myJsonMethod",
    success: function (response) {
      if (response) {
        var strRes = JSON.stringify(response);
        var res = eval("(" + strRes + ")");
        beneResponse(res, 1);
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      alertUser(thrownError);
      $("#step2").show();
    },
    async: false,
  });
}

function beneSignUpPart1() {
  $("#wait").css("display", "block");
  $("step1").hide();

  var c_country = storage.getItem("country");

  if (c_country == "PH") {
    $('#txtBeneCountry option[value="UK"]').attr("selected", "selected");
    $("#Beneficiary_Code").html("Post Code (Optional)")
  } else {
    $('#txtBeneCountry option[value="PH"]').attr("selected", "selected");
    $("#Beneficiary_Code").html("Zip Code (Optional)")
  }

  var fName = $("#txtBeneFName").val().trim().replace(/  +/g, " ");
  var mName = $("#txtBeneMName").val().trim().replace(/  +/g, " ");
  var lName = $("#txtBeneLName").val().trim().replace(/  +/g, " ");
  var mobile = $("#txtBeneMobile").val().replace(/  +/g, " ");

  var email = storage.getItem("email");
  var remCIF = storage.getItem("cifNumber");
  var tokenKey = storage.getItem("tokenKey");

  if (tokenKey == "") {
    logout();
  }

  var errCount = 0;
  var errMsg = "";

  if (fName == "") {
    errCount += 1;
    errMsg = "Please enter beneficiary's first name.";
    $("#err1").html(errMsg);
  } else {
    if (fName.indexOf(forbiddenChar) > -1) {
      errCount++;
      errMsg = "First name contains invalid character (" + forbiddenChar + ")";
      $("#err1").html(errMsg);
    }

    if (fName.length > 35) {
      errCount++;
      errMsg = "First name is more than 35 character length";
      $("#err1").html(errMsg);
    }
  }

  if (!(mName == "")) {
    if (mName.indexOf(forbiddenChar) > -1) {
      errCount++;
      errMsg = "Middle name contains invalid character (" + forbiddenChar + ")";
      $("#err2").html(errMsg);
    }

    if (mName.length > 25) {
      errCount++;
      errMsg = "Middle name is more than 25 character length";
      $("#err2").html(errMsg);
    }
  }

  if (lName == "") {
    errCount += 1;
    errMsg = "Please enter beneficiary's last name.";
    $("#err3").html(errMsg);
  } else {
    if (lName.indexOf(forbiddenChar) > -1) {
      errCount++;
      errMsg = "Last name contains invalid character (" + forbiddenChar + ")";
      $("#err3").html(errMsg);
    }

    if (lName.length > 35) {
      errCount++;
      errMsg = "Last name is more than 35 character length";
      $("#err3").html(errMsg);
    }

    if (lName.trim() == "") {
      errCount++;
      errMsg = "Please enter beneficiary's last name.";
      $("#err3").html(errMsg);
    }
  }

  if (!(mobile == "")) {
    var valid = /^[0-9\- ]*$/.test(mobile);
    if (valid == false) {
      errCount += 1;
      errMsg = "Invalid phone number. No special character is allowed.";
      $("#err4").html(errMsg);
    }

    if (mobile.length > 50) {
      errCount += 1;
      errMsg = "Phone number is more than 50 character length";
      $("#err4").html(errMsg);
    }
  }

  $("#wait").css("display", "none");

  if (errCount > 0) {
    $("#msg").html("Please enter all required fields");
    $("#alertBox").show();
    $("#wait").css("display", "none");
    $("#step1").show();
    window.scrollTo(0, 0);
    return false;
  }
  getDeliveryOptionBasedOnCountryCreate();
  $("#step2").show();
  $("#step1").hide();
}

function beneResponse(res, section) {
  if (section == 1) {
    if (res.err_code == "0") {
      window.scrollTo(0, 0);
      $("#alertContent").html("Beneficiary successfully created.");
      $("#txtNewBeneCIF").val(res.cifNumber);
      $("#step2").hide();

      var product = $("#txtProduct").val();
      if (product == 1 && res.country == "UK") {
        $("#step3").show();
        $("#bankInfoUKandES").show();
        $(".IBANtxtIBAN").hide();
        $("#bankInfo").hide();
        $("#eWalletInfo").hide();
      } else if (product == 1 && res.country == "PH") {
        $("#step3").show();
        $("#bankInfo").show();
        $("#eWalletInfo").hide();
        $("#bankInfoUKandES").hide();
      } else if (product == 4 && res.country == "PH") {
        $("#step3").show();
        $("#eWalletInfo").show();
        $("#bankInfo").hide();
        $("#bankInfoUKandES").hide();
      } else if (product == 1) {
        $("#step3").show();
        $(".SortCodetxtSortCode").hide();
        $("#bankInfo").hide();
        $("#eWalletInfo").hide();
        $(".uk_es_accountnumber").hide();
        $("#bankInfoUKandES").show();
      } else {
        showAlert("Beneficiary successfully created.");
        $("#txtGoTo").val("dashboard.html");
      }
    } else if (res.err_code == "6") {
      showAlert(res.err_message);
      $("#txtGoTo").val("dashboard.html");
    } else if (res.err_code == "100") {
      logout();
    } else {
      $("#msg").html("Error creating beneficiary!");
      $("#alertBox").show();
      $("#step1").show();
      window.scrollTo(0, 0);
    }

    storage.setItem("CJ_bene_cifNumber", res.cifNumber);
    storage.setItem("CJ_bene_country", res.country);
  } else if (section == 2) {
    if (res.err_code == "0") {
      window.scrollTo(0, 0);

      var product = $("#txtProduct").val();
      $("#step2").hide();

      if (product == 1) {
        $("#step3").show();
      } else {
        showAlert("Beneficiary successfully created");
        $("#txtGoTo").val("dashboard.html");
      }
    } else if (res.err_code == "100") {
      logout();
    } else {
      $("#msg2").html("Error updating beneficiary address!");
      $("#alertBox2").show();
      $("#step2").show();
      window.scrollTo(0, 0);
    }
  } else {
    if (res.err_code == "0") {
      window.scrollTo(0, 0);
      showAlert("Beneficiary successfully created.");
      $("#txtGoTo").val("dashboard.html");
    } else if (res.err_code == "100") {
      logout();
    } else {
      $("#msg3").html("Error creating beneficiary account!");
      $("#alertBox3").show();
      $("#step3").show();
      window.scrollTo(0, 0);
    }
  }

  $("#wait").css("display", "none");
}

function updateBene(section) {
  $("#wait").css("display", "block");
  $("#MainBlock").hide();

  var token = storage.getItem("tokenKey");
  var cif = storage.getItem("ViewBeneNo");

  var product = $("#txtBDProduct").val();

  var errCount = 0;
  var errMsg = "";

  var fName = encodeURIComponent(
    $("#txtBDFName").val().trim().replace(/  +/g, " ")
  );
  var mName = encodeURIComponent(
    $("#txtBDMName").val().trim().replace(/  +/g, " ")
  );
  var lName = encodeURIComponent(
    $("#txtBDLName").val().trim().replace(/  +/g, " ")
  );
  var mobile = $("#txtBDMobile").val().replace(/  +/g, " ");
  var addr1 = encodeURIComponent(
    $("#txtBDAddr1").val().trim().replace(/  +/g, " ")
  );
  var addr2 = encodeURIComponent(
    $("#txtBDAddr2").val().trim().replace(/  +/g, " ")
  );
  var addr3 = encodeURIComponent(
    $("#txtBDAddr3").val().trim().replace(/  +/g, " ")
  );
  var relationship = $("#ddlRelationship_update").val();

  var postcode = $("#txtBDPostCode").val().trim().replace(/  +/g, " ");
  var country = $("#txtBDCountry").val();

  var BIC = "";
  var branch = "";
  if (product == "1" && country == "UK") {
    var sortCode = $("#UpdateBeneSortCode").val();
    var acctNo = $("#txtAcctNo").val();
    acctNo = acctNo.replace(/\s/g, "");
    if (acctNo == "") {
      errCount += 1;
      errMsg = "Please enter beneficiary's account number.";
      $("#errUKSEan").html(errMsg);
    } else {
      var isnum = /^\d+$/.test(acctNo);
      if (isnum == false) {
        errCount += 1;
        errMsg =
          "Invalid Account Number. Please enter numbers only and no spaces between numbers.";
        $("#errUKSEan").html(errMsg);
      }

      if (acctNo.length > 50) {
        errCount += 1;
        errMsg = "Account Number is more than 50 character length.";
        $("#errUKSEan").html(errMsg);
      }
    }

    if (sortCode == "" || sortCode == null || sortCode == undefined) {
      errCount += 1;
      errMsg = "Please enter beneficiary's sort code.";
      $("#errisortCode").html(errMsg);
    } else {
      $("#errisortCode").html("");
    }

    var IBAN = "";
  } else if (product == "1" && country == "PH") {
    var BIC = $("#txtBDBank").val();
    var branch = $("#txtBDBranch").val().trim().replace(/  +/g, " ");
    var acctNo = $("#txtBDAcctNo").val();
    acctNo = acctNo.replace(/\s/g, "");

    var selectedBank = $("#txtBDBank option:selected").text();

    if (!(acctNo == "")) {
      if (BIC == "") {
        errCount += 1;
        errMsg = "Please select bank";
        $("#err6").html(errMsg);
      }
    }

    if (acctNo == "") {
      errCount += 1;
      errMsg = "Please enter beneficiary's account number.";
      $("#err6").html(errMsg);
    } else {
      var isnum = /^\d+$/.test(acctNo);
      if (isnum == false) {
        errCount += 1;
        errMsg =
          "Invalid Account Number. Please enter numbers only and no spaces between numbers.";
        $("#err6").html(errMsg);
      }

      if (acctNo.length > 50) {
        errCount += 1;
        errMsg = "Account Number is more than 50 character length.";
        $("#err6").html(errMsg);
      }
    }

    if (!(branch == "")) {
      if (branch.indexOf(forbiddenChar) > -1) {
        errCount++;
        errMsg = "Branch contains invalid character (" + forbiddenChar + ").";
        $("#err7").html(errMsg);
      }
    }
    var IBAN = "";
    var sortCode = "";
  } else if (product == "4" && country == "PH") {
    var BIC = $("#txtEWBank").val();
    var acctNo = $("#txtEWAcctNo").val();
    acctNo = acctNo.replace(/\s/g, "");

    var selectedBank = $("#txtEWBank option:selected").text();

    if (!(acctNo == "")) {
      if (BIC == "") {
        errCount += 1;
        errMsg = "Please select bank";
        $("#err8").html(errMsg);
      }
    }

    if (acctNo == "") {
      errCount += 1;
      errMsg = "Please enter beneficiary's account number.";
      $("#err8").html(errMsg);
    } else {
      var isnum = /^\d+$/.test(acctNo);
      if (isnum == false) {
        errCount += 1;
        errMsg =
          "Invalid Account Number. Please enter numbers only and no spaces between numbers.";
        $("#err8").html(errMsg);
      }

      if (acctNo.length > 50) {
        errCount += 1;
        errMsg = "Account Number is more than 50 character length.";
        $("#err8").html(errMsg);
      }
    }
    var sortCode = "";
    var IBAN = "";
  } else if (product == "1") {
    var IBAN = $("#UpdateBeneIBAN").val();

    if (IBAN == "" || IBAN == null || IBAN == undefined) {
      errCount += 1;
      errMsg = "Please enter beneficiary's IBAN.";
      $("#erriban").html(errMsg);
    } else {
      $("#erriban").html("");
    }

    var sortCode = "";
  } else if (product == "0" && country == "PH") {
    var sortCode = "";
    var IBAN = "";
  }

  if (fName == "") {
    errCount += 1;
    errMsg = "Please enter beneficiary's first name.";
    $("#err1").html(errMsg);
  } else {
    if (fName.indexOf(forbiddenChar) > -1) {
      errCount++;
      errMsg = "First name contains invalid character (" + forbiddenChar + ").";
      $("#err1").html(errMsg);
    }

    if (fName.length > 35) {
      errCount++;
      errMsg = "First name is more than 35 character length.";
      $("#err1").html(errMsg);
    }
  }

  if (lName == "") {
    errCount += 1;
    errMsg = "Please enter beneficiary's last name.";
    $("#err2").html(errMsg);
  } else {
    if (lName.indexOf(forbiddenChar) > -1) {
      errCount++;
      errMsg = "Last name contains invalid character (" + forbiddenChar + ").";
      $("#err2").html(errMsg);
    }

    if (lName.length > 35) {
      errCount++;
      errMsg = "Last name is more than 35 character length.";
      $("#err2").html(errMsg);
    }
  }

  if (!(mobile == "")) {
    var valid = /^[0-9+\- ]*$/.test(mobile);
    if (valid == false) {
      errCount += 1;
      errMsg =
        "Invalid phone number. Only numbers, '+' and '-' sign are allowed.";
      $("#err9").html(errMsg);
    }

    if (mobile.length > 50) {
      errCount += 1;
      errMsg = "Phone number is more than 50 character length.";
      $("#err9").html(errMsg);
    }
  }

  if (addr1 == "") {
    errCount += 1;
    errMsg = "Please enter beneficiary's address line 1.";
    $("#err3").html(errMsg);
  } else {
    if (addr1.indexOf(forbiddenChar) > -1) {
      errCount++;
      errMsg = "Address 1 contains invalid character (" + forbiddenChar + ").";
      $("#err3").html(errMsg);
    }

    if (addr1.length > 50) {
      errCount++;
      errMsg = "Address 1 is more than 50 character length.";
      $("#err3").html(errMsg);
    }
  }

  if (!(addr2 == "")) {
    if (addr2.indexOf(forbiddenChar) > -1) {
      errCount++;
      errMsg = "Address 2 contains invalid character (" + forbiddenChar + ").";
      $("#err10").html(errMsg);
    }

    if (addr2.length > 50) {
      errCount++;
      errMsg = "Address 2 is more than 50 character length.";
      $("#err10").html(errMsg);
    }
  }

  if (addr3 == "") {
    errCount += 1;
    errMsg = "Please enter beneficiary's city/town.";
    $("#err4").html(errMsg);
  } else {
    if (addr3.indexOf(forbiddenChar) > -1) {
      errCount++;
      errMsg = "City/Town contains invalid character (" + forbiddenChar + ").";
      $("#err4").html(errMsg);
    }

    if (addr3.length > 50) {
      errCount++;
      errMsg = "City/Town is more than 50 character length.";
      $("#err4").html(errMsg);
    }
  }

  if (!(postcode == "")) {
    var valid = /^([a-zA-Z0-9 ]+)$/.test(postcode);

    if (valid == false) {
      errCount += 1;
      errMsg = "Special characters are not allowed in zip code.";
      $("#err11").html(errMsg);
    }

    if (postcode.length > 20) {
      errCount += 1;
      errMsg = "Zip code is more than 20 character length.";
      $("#err11").html(errMsg);
    }
  }

  if ($("#txtBDProduct option:selected").val() == -1) {
    errCount += 1;
    errMsg = "No delivery option available";
    $("#errDeliveryOptionUpdate").html(errMsg);
  }

  var strData =
    "appRequest=updateCustomer" +
    "&custType=bene" +
    "&tokenKey=" +
    token +
    "&fName=" +
    fName +
    "&mName=" +
    mName +
    "&relationship=" +
    relationship +
    "&lName=" +
    lName +
    "&mobileNo=" +
    mobile +
    "&addr1=" +
    addr1 +
    "&addr2=" +
    addr2 +
    "&addr3=" +
    addr3 +
    "&bene_sortCode=" +
    sortCode +
    "&bene_IBAN=" +
    IBAN +
    "&postcode=" +
    postcode +
    "&country=" +
    country +
    "&section=03" +
    "&bic=" +
    BIC +
    "&bankname=" +
    selectedBank +
    "&branch=" +
    branch +
    "&acctNo=" +
    acctNo +
    "&cifNo=" +
    cif;

  if (errCount > 0) {
    alertUser(errMsg);
    $("#wait").css("display", "none");
    window.scrollTo(0, 0);
    $("#MainBlock").show();
    return false;
  }
  var myURL = bcremit + "customer.aspx";
  console.log(myURL + strData);
  ajaxCall(myURL, strData, "updateBeneDetail");
}

function responseUpdateBeneDetail(res) {
  if (res.error_code == "0") {
    var fName = $("#txtBDFName").val();
    var mName = $("#txtBDMName").val();
    var lName = $("#txtBDLName").val();
    var mobile = $("#txtBDMobile").val();
    var addr1 = $("#txtBDAddr1").val();
    var addr2 = $("#txtBDAddr2").val();
    var addr3 = $("#txtBDAddr3").val();
    var postcode = $("#txtBDPostCode").val();
    var country = $("#txtBDCountry").val();
    var product = $("#txtBDProduct").val();
    var beneIBAN = $("#UpdateBeneIBAN").val();
    var beneSortCode = $("#UpdateBeneSortCode").val();
    if (product == "1" && country == "UK") {
      storage.setItem("ViewBeneSortCode", beneSortCode);
      var acctNo = $("#txtAcctNo").val();
      storage.setItem("ViewBeneAcctNo", acctNo);
    } else if (product == "1" && country == "PH") {
      var BIC = $("#txtBDBank").val();
      var branch = $("#txtBDBranch").val();
      var acctNo = $("#txtBDAcctNo").val();
      acctNo = acctNo.replace(/\s/g, "");
      var selectedBank = $("#txtBDBank option:selected").text();

      storage.setItem("ViewBeneBank", selectedBank);
      storage.setItem("ViewBeneAcctNo", acctNo);
      storage.setItem("ViewBeneProduct", product);
      storage.setItem("ViewBeneTransType", "Credit to Bank Account");
    } else if (product == 4 && country == "PH") {
      var BIC = $("#txtEWBank").val();
      var acctNo = $("#txtEWAcctNo").val();
      acctNo = acctNo.replace(/\s/g, "");
      var selectedBank = $("#txtEWBank option:selected").text();

      storage.setItem("ViewBeneBank", selectedBank);
      storage.setItem("ViewBeneAcctNo", acctNo);
      storage.setItem("ViewBeneProduct", 1);
      storage.setItem("ViewBeneTransType", "E-Wallet");
      storage.setItem("ViewBeneBIC", BIC);
    } else if (product == "1") {
      storage.setItem("ViewBeneIBAN", beneIBAN);
      var acctNo = $("#txtAcctNo").val();
      storage.setItem("ViewBeneAcctNo", acctNo);
    } else {
      storage.setItem("ViewBeneProduct", product);
      storage.setItem("ViewBeneBank", "");
      storage.setItem("ViewBeneAcctNo", "");
      storage.setItem("ViewBeneTransType", "Cash Pickup");
    }

    storage.setItem("ViewBeneName", fName + " " + mName + " " + lName);
    storage.setItem("ViewBeneCountry", country);

    showAlert("Successfully updated beneficiary");
    $("#txtGoTo").val("beneficiary_details.html");
  } else {
    alertUser("Update beneficiary detail was not successful.");
    window.scrollTo(0, 0);
  }

  $("#wait").css("display", "none");
  $("#MainBlock").show();
}

function viewBeneDetailFromSummary() {
  window.location.href = "update_beneficiary.html";
}

function viewBeneDetail() {
  $("#wait").css("display", "block");
  $("#MainBlock").hide();

  var beneCIF = storage.getItem("ViewBeneNo");
  var token = storage.getItem("tokenKey");

  var myURL = bcremit + "customer.aspx";
  $("#txtBDCIF").val(beneCIF);

  var strData =
    "appRequest=viewBeneDetail&tokenKey=" + token + "&cifNo=" + beneCIF;
  ajaxCall(myURL, strData, "viewBeneDetail");
}

function responseBeneDetail(res) {
  if(res.country == "PH"){
    $("#UpdateBeneCode").html("Post Code (Optional)")
  } else{
    $("#UpdateBeneCode").html("Zip Code (Optional)")
  }
  if (res.err_code == "0") {
    if (res.country == "UK") {
      $("#UpdateBeneSortCode").val(res.bene_sortCode);
      $("#txtAcctNo").val(res.accountno);
    } else {
      $("#UpdateBeneIBAN").val(res.bene_IBAN);
    }
    $("#txtBDFName").val(res.firstName);
    $("#txtBDMName").val(res.middleName);
    $("#txtBDLName").val(res.lastName);
    $("#txtBDMobile").val(res.mobile);
    $("#txtBDAddr1").val(res.addr1);
    $("#txtBDAddr2").val(res.addr2);
    $("#txtBDAddr3").val(res.addr3);
    $("#txtBDPostCode").val(res.postcode);

    $("#ddlRelationship_update selected").val(res.relationship);
    $('#ddlRelationship_update option[value="' + res.relationship + '"]').attr(
      "selected",
      "selected"
    );

    $("#txtBDCountry selected").val(res.country);
    $('#txtBDCountry option[value="' + res.country + '"]').attr(
      "selected",
      "selected"
    );
    var beneProduct = document.getElementById("txtBDProduct");
    var bdBank = document.getElementById("txtBDBank");

    var option;
    var selectedIndex = 0;

    var bdList = bdBank.options.length;

    for (var i = 0; i <= res.bank_list.length - 1; i++) {
      bank = res.bank_list[i];
      bdBank.options[bdBank.options.length] = new Option(
        bank.bank_name,
        bank.bic
      );
    }

    bdBank = document.getElementById("txtEWBank");
    for (var i = 0; i <= res.ew_list.length - 1; i++) {
      bank = res.ew_list[i];
      bdBank.options[bdBank.options.length] = new Option(
        bank.bank_name,
        bank.bic
      );
    }
    if (!(res.bank_bic == "")) {
      if (res.bank_type == "EW") {
        var ctrl = document.getElementById("txtEWBank");

        for (var j = 0; j < ctrl.options.length; j++) {
          if (ctrl.options[j].value == res.bank_bic) {
            ctrl.options[j].selected = true;
          }
        }

        $("#txtEWAcctNo").val(res.accountno);
        $("#txtBDAccountID").val(res.bankID);
        $("#eWalletInfo").show();
        beneProduct.options.selectedIndex = 2;
      } else {
        $("#txtBDBranch").val(res.bank_branch);
        $("#txtBDAcctNo").val(res.accountno);
        $("#txtBDAccountID").val(res.bankID);

        var ctrl = document.getElementById("txtBDBank");
        for (var j = 0; j < ctrl.options.length; j++) {
          if (ctrl.options[j].value == res.bank_bic) {
            ctrl.options[j].selected = true;
          }
        }

        beneProduct.options.selectedIndex = 1;
        $("#bankInfo").show();
      }
    } else {
      beneProduct.options.selectedIndex = 0;
      $("#bankInfo").hide();
    }
    storage.setItem("banktype", res.bank_type);
    getDeliveryOptionBasedOnCountry();
  } else if (res.err_code == "100") {
    logout();
  } else {
    alertUser("Error retrieving customer detail.");
    window.scrollTo(0, 0);
  }

  storage.setItem("CJbeneCifNumber", res.cifnumber);
  storage.setItem("CJbeneCountry", res.country);
  $("#wait").css("display", "none");
  $("#MainBlock").show();
}
function backToSummary() {
  window.location.href = "beneficiary_details.html";
}

function beneSummary(
  beneCIF,
  beneBankID,
  product,
  bankName,
  acctNo,
  BIC,
  bankBranch,
  beneName,
  transferType,
  beneIBAN,
  beneSortCode,
  country
) {
  $("#summaryBeneName").html(beneName);
  $("#summaryProduct").html(transferType);

  if (country == "PH") {
    if (transferType == "Cash Pick-up") {
      $("#summaryBank").hide();
      $("#separator").hide();
      $("#summaryAcctNo").hide();
    } else if (transferType == "Credit to Bank Account") {
      $("#summaryBank").html(bankName);
      $("#summaryAcctNo").html(acctNo);
    } else if (transferType == "E-Wallet") {
      $("#summaryBank").html(bankName);
      $("#summaryAcctNo").html(acctNo);
    }
  } else if (country == "UK") {
    $("#summaryBank").html(beneSortCode);
    $("#summaryAcctNo").html(acctNo);
  } else {
    $("#summaryBank").html(beneIBAN);
    $("#separator").hide();
  }

  var token = storage.getItem("tokenKey");
  var myURL = bcremit + "transaction_history.aspx";
  var strData =
    "appRequest=beneTransHistory" + "&beneCIF=" + beneCIF + "&token=" + token;
  ajaxCall(myURL, strData, "beneSummary");
}

function beneSummaryResponse(res) {
  var transData = "";
  var dataModal = "";
  var row = "01";
  var mod = 0;
  var count = res.history_list[0].count;
  var trans = "";

  if (count < 0) {
    logout();
  }

  for (i = 0; i < count; i++) {
    trans = res.history_list[i];

    mod = i % 2;
    if (mod == 0) {
      row = "1";
    } else {
      row = "2";
    }

    if (trans.product == "Cash Pick up") {
      ref = trans.tracerNo;
    } else {
      ref = trans.trans_ID;
    }

    transData +=
      '<div class="transaction-box card">' +
      '<div class="content">' +
      '<p class="text-bold">' +
      ref +
      "</p>" +
      '<p class="text-payment">Total Payment : ' +
      '<span class="text-blue">' +
      trans.rem_ccy +
      " " +
      formatNumeric(trans.rem_payment) +
      "</span>" +
      "</p>" +
      '<p class="text-status">' +
      trans.status +
      "</p>" +
      '<p class="text-date">' +
      trans.trans_date +
      "</p>" +
      "</div>" +
      "</div>";
  }

  $("#summaryBeneTrans").html(transData);
  $("#wait").css("display", "none");
  $("#MainBlock").show();
}

function getBeneList() {
  $("#wait").css("display", "block");
  $("#MainBlock").hide();

  $("#beneNext").hide();
  $("#beneFirst").hide();

  var remCIF;
  var callType;
  var token;

  remCIF = storage.getItem("cifNumber");
  token = storage.getItem("tokenKey");

  if (token == "") {
    window.location.href = "index.html";
  }

  var ip = myIP();
  var strData =
    "appRequest=beneList" +
    "&callType=" +
    callType +
    "&tokenKey=" +
    token +
    "&remCIF=" +
    remCIF;
  console.log(bcremit + "?" + "beneficiary.aspx?" + strData);
  var myURL = bcremit + "beneficiary.aspx";

  ajaxCall(myURL, strData, "beneList");
}

function populateBene(res) {
  var beneData = "";
  var row = "01";
  var mod = 0;
  var imgName = "&nbsp;";
  var bankInfo;
  var product = 0;
  var max = 4;
  var max2 = 8;
  var moreBeneData = "";
  var lastBeneData = "";
  var beneCount = res.beneList[0].beneCount;
  var bene;
  var beneCountryFlag;
  JSONBene = res;
  var beneData2 = "";
  if (beneCount == 0) {
    $("#addBeneMessage").show();
    alertUser(
      "No beneficary available. Please add beneficiary to get started!"
    );
    $("#wait").css("display", "none");
    $("#MainBlock").show();
  } else if (beneCount < 0) {
    logout();
  } else {
    for (var i = 0; i < beneCount; i++) {
      bene = res.beneList[i];
   
      mod = i % 2;
      if (mod > 0) {
        row = "02";
      } else {
        row = "01";
      }
      beneCountryFlag =
        "./assets/images/check-rates-flags/" +
        bene.beneCountry.toLowerCase() +
        "-flag.svg";

      if (bene.transferType.includes("Cash Pick-up")) {
        bankInfo = "&nbsp;";
        product = 0;
      } else if ( bene.beneCountry == "UK" &&  bene.beneSortCode == "" && bene.beneAcctNo == "" ) {
        bankInfo = "&nbsp;";
        product = 1;
      } else if (bene.beneCountry == "UK") {
        bankInfo = bene.beneSortCode + " | " + bene.beneAcctNo;
        product = 1;
      }else if (bene.beneCountry == "PH" && bene.transferType.includes("E-Wallet")) {
        bankInfo = bene.beneBankName + " | " + bene.beneAcctNo;
        product = 4;
      } else if (bene.beneCountry == "PH" && bene.transferType.includes("Credit to Bank Account")) {
        bankInfo = bene.beneBankName + " | " + bene.beneAcctNo;
        product = 1;
      }  else {
        bankInfo = bene.beneIBAN;
        product = 1;
      }

      beneData +=
        '<div class="cards" style="cursor:pointer">' +
        '<div class="viewBenDetails" style="display: flex;flex-direction: row-reverse;" onclick="viewDetail(\'' +
        bene.beneCIF +
        "','" +
        bene.beneName +
        "','" +
        bene.beneBankName +
        "','" +
        bene.beneAcctNo +
        "','" +
        product +
        "','" +
        bene.transferType +
        "','" +
        bene.beneBIC +
        "','" +
        bene.beneCountry +
        "','" +
        bene.beneIBAN +
        "','" +
        bene.beneSortCode +
        "');\">" +
        '<img src="' +
        beneCountryFlag +
        '" class="provider-icon" alt="" style="width: 38px;height: 38px;border-radius: 30px;box-shadow: 0px 0px 2px 2px #bbbbbb75;margin-top: 6px;"/>' +
        '<div class="dashboard-card-wrapper" style="width: 100%;margin-right:20px">' +
        '<p class="title dashboard-card-title" style="word-break: break-all;">' +
        bene.beneName +
        "</p>" +
        '<p class="dashboard-card-text">' +
        bene.transferType +
        "</p>" +
        '<p class="title dashboard-card-number" style="word-break: break-all;">' +
        bankInfo +
        "</p>" +
        '<div style="margin-left:-9px"><a href="#" onclick="smToBene(\'' +
        bene.beneCIF +
        "'," +
        product +
        ",'" +
        bene.beneName +
        "','" +
        bene.beneBankName +
        "','" +
        bene.beneAcctNo +
        "','" +
        bene.beneBIC +
        "','" +
        bene.beneBankBranch +
        "','" +
        bene.beneCountry +
        '\');" class="btn btn-border-blue dashboard-card-btn btn-new color-white df dashboard-card-wrapper"><i class="fas fa-paper-plane mr-3"></i>  Send</a></div>' +
        "</div>" +
        "</div>" +
        "</div>";

      beneData2 +=
        '<div class="card" style="mouse:pointer">' +
        '<div class="dashboard-card-wrapper detail-link">' +
        '<p class="title dashboard-card-title">Dona Gin</p>' +
        '<p class="dashboard-card-text">Credit to Bank Account</p>' +
        '<p class="title dashboard-card-number">Land Bank | 23569874566</p>' +
        "</div>" +
        '<object><a href="#" class="btn btn-border-blue dashboard-card-btn">Send</a></object>' +
        "</div>";
    }

    $("#beneData").html(beneData);
  }
  storage.setItem("lblmsg", "");
  $("#wait").css("display", "none");
  $("#MainBlock").show();
}

function viewDetail(
  beneNo,
  beneName,
  bankName,
  acctNo,
  product,
  transType,
  bic,
  beneCountry,
  beneIBAN,
  beneSortCode
) {
  storage.setItem("ViewBeneNo", beneNo);
  storage.setItem("ViewBeneName", beneName);
  storage.setItem("ViewBeneBank", bankName);
  storage.setItem("ViewBeneProduct", product);
  storage.setItem("ViewBeneAcctNo", acctNo);
  storage.setItem("ViewBeneTransType", transType);
  storage.setItem("ViewBeneBIC", bic);
  storage.setItem("ViewBeneCountry", beneCountry);
  storage.setItem("ViewBeneIBAN", beneIBAN);
  storage.setItem("ViewBeneSortCode", beneSortCode);
  window.location.href = "beneficiary_details.html";
}

function smToBene( beneNo, product, beneName, bankName, acctNo, bic, branch, beneCountry) {
  storage.setItem("SMBene", beneNo);
  storage.setItem("SMProduct", product);
  storage.setItem("SMBeneName", beneName);
  storage.setItem("SMBeneBank", bankName);
  storage.setItem("SMBeneAcctNo", acctNo);
  storage.setItem("SMBIC", bic);
  storage.setItem("SMBranch", branch);
  storage.setItem("SMBeneCountry", beneCountry);
  $(".viewBenDetails").removeAttr("onclick");
  window.location.href = "send_money.html";
}
/*------------------------------------------------------------------------------
                      customer data                                           
------------------------------------------------------------------------------*/
function getCustomerDetail(type) {
  $("#wait").css("display", "block");
  $("#MainBlock").hide();

  var token = storage.getItem("tokenKey");

  var myURL = bcremit + "customer.aspx";
  var strData = "appRequest=viewRemDetail&tokenKey=" + token;
  ajaxCall(myURL, strData, "myDetail");
}

function responseMyDetail(res) {
  if (res.err_code == "0") {
    if (res.err_message == "Incomplete") {
      if(res.country == "PHILIPPINES"){
        $("#CompleteProfileCode").html("Zip Code")
      }else{
        $("#CompleteProfileCode").html("Post Code")
      }
      $("#txtFDFirstName").val(res.firstName);
      $("#txtFDMiddleName").val(res.middleName);
      $("#txtFDLastName").val(res.lastName);
      $("#txtFDDOB").val(res.dob);
      if (res.dob == "01/01/1900" || res.dob == "") {
        setDate();
      }
      $("#txtFDMobile").val(res.mobile);
      $("#txtFDPostCode").val(res.postcode);
      $("#txtFDAddr1").val(res.addr1);
      $("#txtFDAddr2").val(res.addr2);
      $("#txtFDAddr3").val(res.addr3);
      $("#txtFDCountry").html(res.country);

      if (res.country === "UNITED KINGDOM") {
        $("#CompleteCountryOfResidences option[value='UK']").prop(
          "selected",
          true
        );
        $("#txtCountry").html(res.country);
      } else if (res.country === "SPAIN") {
        $("#CompleteCountryOfResidences option[value='ES']").prop(
          "selected",
          true
        );
        $("#txtCountry").html(res.country);
      } else if (res.country == "" || res.country == null) {
        var iniCountry = $(
          "#CompleteCountryOfResidences option:selected"
        ).text();
        $("#txtCountry").html(iniCountry);
      }
    } else {
      if(res.country == "PHILIPPINES"){
        $("#profile_code").html("Zip Code")
      }else{
        $("#profile_code").html("Post Code")
      }
      $("#lblName").val(
        res.firstName + " " + res.middleName + " " + res.lastName
      );
      $("#lblDOB").val(res.dob);
      $("#txtOldnumber").val(res.mobile);
      $("#lblMobileNo").val(res.mobile);
      $("#lblCifNo").val(res.cifnumber);
      $("#txtMDAddr1").val(res.addr1);
      $("#txtMDAddr2").val(res.addr2);
      $("#txtMDAddr3").val(res.addr3);
      $("#txtMDPostcode").val(res.postcode);
      $("#txtMDCountry").html(res.country);

      var result = res.mobile.startsWith("07");
      if (result == true) {
        storage.setItem("initCountry", "GB");
        console.log("The number starts with 07");
      } else {
        searchCountry(res.country, allCountries);
      }
      getCountryFlagsCcy();
    }
    window.scrollTo(0, 0);
  } else if (res.err_code == "100") {
    logout();
  } else {
    alertUser("Error retrieving customer detail.");
    window.scrollTo(0, 0);
  }

  $("#wait").css("display", "none");
  $("#MainBlock").show();
}

//This function gets the prefix of the country based on the customers registered country if the old customer's number does not start with 7|07.
function searchCountry(country, arrCountry) {
  for (var i = 0; i < arrCountry.length; i++) {
    if (arrCountry[i][0].toUpperCase() == country) {
      storage.setItem("initCountry", arrCountry[i][1]);
      console.log("Country Pref is: " + arrCountry[i][1]);
    }
  }
}

function signup(section) {
  if (section == "01") {
    registerPart1();
  } else if (section == "02") {
    registerPart2();
  } else {
    registerPart3();
  }
}

function registerPart1() {
  $("#wait").css("display", "block");
  $("#part1").hide();

  var email1 = $("#txtEmail1").val();
  email1 = email1.replace(/\s+/g, "");
  email1 = email1.replace(/  +/g, " ");

  var email2 = $("#txtEmail2").val();
  email2 = email2.replace(/\s+/g, "");
  email2 = email2.replace(/  +/g, " ");

  var pwd1 = $("#txtPwd1").val();
  pwd1 = pwd1.trimEnd();

  var pwd2 = $("#txtPwd2").val();
  pwd2 = pwd2.trimEnd();

  var errCount = 0;
  var errMsg = "";

  if (email1 == "") {
    errCount += 1;
    errMsg = "Please enter your email. <br />";
    $("#err1").html(errMsg);
  } else {
    if (email1.indexOf(forbiddenChar) > -1) {
      errCount++;
      errMsg = "Email contains invalid character (" + forbiddenChar + ").<br/>";
      $("#err1").html(errMsg);
    } else {
      if (validateEmail(email1) == false) {
        errCount += 1;
        errMsg = "Please enter a valid email address. <br />";
        $("#err1").html(errMsg);
      }
    }
  }

  if (email2 == "") {
    errCount += 1;
    errMsg = "Please confirm your email. <br />";
    $("#err2").html(errMsg);
  }

  if (email1 != email2) {
    errCount += 1;
    errMsg += "Your email does not match. <br />";
    $("#err2").html(errMsg);
  }

  if (pwd1 == "") {
    errCount += 1;
    errMsg = "Please enter your password. <br />";
    $("#err3").html(errMsg);
  } else {
    if (pwd1.indexOf(forbiddenChar) > -1) {
      errCount++;
      errMsg =
        "Password contains invalid character (" + forbiddenChar + ").<br/>";
      $("#err3").html(errMsg);
    }

    var message = checkStrength(pwd1);

    if (message == "Weak") {
      errCount += 1;
      errMsg = "Your password is weak, please change.<br />";
      errMsg += "Your password should be mininum of 8 characters.<br>";
      $("#err3").html(errMsg);
    }

    if (message == "Too short") {
      errCount += 1;
      errMsg = "Your password is too short, please change. <br />";
      errMsg += "Your password should be mininum of 8 characters.<br>";
      $("#err3").html(errMsg);
    }
  }

  if (pwd2 == "") {
    errCount += 1;
    errMsg = "Please confirm your password. <br />";
    $("#err4").html(errMsg);
  }

  if (pwd1 != pwd2) {
    errCount += 1;
    errMsg = "Your password does not match. <br />";
    $("#err4").html(errMsg);
  }
  if (errCount > 0) {
    $("#wait").css("display", "none");
    $("#part1").show();
    window.scrollTo(0, 0);
    return false;
  }

  var myLocation = storage.getItem("MyLocation");
  var myDeviceID = storage.getItem("Platform") + "-" + storage.getItem("UUID");
  var version = storage.getItem("DeviceVersion");

  var strData =
    "appRequest=NewCustomer&txtType=v2&email=" +
    encodeURIComponent(email1.toLowerCase()) +
    "&password=" +
    pwd1 +
    "&section=01&txtMyLoc=" +
    myLocation +
    "&txtDeviceID=" +
    myDeviceID +
    "&txtVersion=" +
    version;
  var myURL = bcremit + "customer.aspx";
  ajaxCall(myURL, strData, "custRegister1");
}

function responsePart1(res) {
  if (res.err_code != 0) {
    $("#msg").html(res.err_message);
    $("#alertBox").show();
    $("#part1").show();
  } else {
    $("#msg2").html(
      "Account successfully created! Please continue to update your personal details."
    );
    $("#alertBox2").show();
    window.scrollTo(0, 0);

    remCIF = res.cifNumber;
    tokenKey = res.tokenKey;
    country = res.country;

    var storage = window.localStorage;
    storage.setItem("SALT", res.salt);
    storage.setItem("txtDtlStatus", "Incomplete");
    storage.setItem("email", $("#txtEmail1").val());
    storage.setItem("tokenKey", tokenKey);
    storage.setItem("cifNumber", remCIF);

    $("#part1").hide();
    $("#part2").show();
    storage.setItem("NOW", "name");
    if (
      storage.getItem("country") !== "ES" &&
      storage.getItem("country") !== "UK"
    ) {
      $("#countryOfResidences option[value='UK']").prop("selected", true);
    } else {
      $(
        "#countryOfResidences option[value='" +
          storage.getItem("country") +
          "']"
      ).prop("selected", true);
    }
  }
  $("#wait").css("display", "none");
}

function registerPart2() {
  $("#wait").css("display", "block");
  $("#step2").hide();

  var remCIF = storage.getItem("cifNumber");
  var fName = encodeURIComponent(
    $("#txtFirstName").val().trim().replace(/  +/g, " ")
  );
  var mName = encodeURIComponent(
    $("#txtMiddleName").val().trim().replace(/  +/g, " ")
  );
  var lName = encodeURIComponent(
    $("#txtLastName").val().trim().replace(/  +/g, " ")
  );
  var country = $("#countryOfResidences option:selected").val();
  var purpose = $("#sourceOfFundsDD option:selected").text();
  var dob = $("#txtDOB").val();

  dob = dob.replace(/\s+/g, "");
  var fullname = fName + "," + mName + "," + lName;
  storage.setItem("fullname", fullname);
  var errCount = 0;
  var errMsg = "";

  if (fName == "") {
    errCount += 1;
    errMsg = "Please enter your first name. <br />";
    $("#err5").html(errMsg);
  } else {
    if (fName.indexOf(forbiddenChar) > -1) {
      errCount++;
      errMsg =
        "First name contains invalid character (" + forbiddenChar + ").<br/>";
      $("#err5").html(errMsg);
    }

    if (fName.length > 100) {
      errCount++;
      errMsg = "First name with greater than 100 characters length is invalid.";
      $("#err5").html(errMsg);
    }
  }

  if (lName == "") {
    errCount += 1;
    errMsg = "Please enter your last name. <br />";
    $("#err6").html(errMsg);
  } else {
    if (lName.indexOf(forbiddenChar) > -1) {
      errCount++;
      errMsg =
        "Last name contains invalid character (" + forbiddenChar + ").<br/>";
      $("#err6").html(errMsg);
    }

    if (lName.length > 100) {
      errCount++;
      errMsg = "Last name with greater than 100 characters length is invalid.";
      $("#err6").html(errMsg);
    }
  }

  if (mName.length > 100) {
    errCount++;
    errMsg = "Middle name with greater than 100 characters length is invalid.";
    $("#err101").html(errMsg);
  } else {
    $("#err101").html("");
  }

  if (dob == "") {
    errCount += 1;
    errMsg = "Please enter your date of birth. <br />";
    $("#err7").html(errMsg);
  } else {
    var newDOB = $("#txtDOB").val();
    newDOB = newDOB.replace(/\s+/g, "");
    var valid = /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(newDOB); ///^\d{2}[/]\d{2}[/]\d{4}$/.test(newDOB);

    if (valid == false) {
      errCount += 1;
      errMsg = "Invalid date of birth, valid date format is DD/MM/YYYY";
      $("#err7").html(errMsg);
    } else {
      var newDate = newDOB.split("/");
      dob = newDate[1] + "-" + newDate[0] + "-" + newDate[2];

      if (newDate[0] < 1 || newDate[0] > 31) {
        errCount += 1;
        errMsg = "Invalid date of birth (day)";
        $("#err7").html(errMsg);
      }
      if (newDate[1] < 1 || newDate[1] > 12) {
        errCount += 1;
        errMsg = "Invalid date of birth (month)";
        $("#err7").html(errMsg);
      }

      if (newDate[2] < 1902 || newDate[2] > new Date().getFullYear()) {
        errCount += 1;
        errMsg = "Invalid date of birth (year).<br/>";
        $("#err7").html(errMsg);
      }
    }
  }

  if (country == "") {
    errMsg = "Please select a Country of Residence";
    $("#err775").html(errMsg);
  }

  if (purpose == "") {
    errMsg = "Please select a purpose code";
    $("#err77").html(errMsg);
  }

  if (errCount > 0) {
    // $("#msg2").html("Please enter all required fields");
    // $("#alertBox2").show();
    $("#wait").css("display", "none");

    $("#part2").show();

    window.scrollTo(0, 0);
    return false;
  }
  var strData =
    "appRequest=NewCustomer&section=02" +
    "&fName=" +
    fName.trim() +
    "&mName=" +
    mName.trim() +
    "&lName=" +
    lName.trim() +
    "&dob=" +
    dob +
    "&country=" +
    country +
    "&purpose=" +
    purpose +
    "&remCIF=" +
    remCIF;

  storage.setItem("dateofbirth", dob);
  var myURL = bcremit + "customer.aspx";
  ajaxCall(myURL, strData, "custRegister2");
}

function responsePart2(res) {
  if (res.err_code != "0") {
    $("#msg2").html(res.err_message);
    $("#alertBox2").show();
    $("#part2").show();
  } else {
    $("#msg3").html(
      "Your personal details are created. Please input your address to complete."
    );
    $("#alertBox3").show();

    $("#ddlCountry").html($("#countryOfResidences option:selected").text());
    if($("#countryOfResidences option:selected").text() == "PHILIPPINES"){
      $("#SignUpCode").html("Zip Code")
    }else{
      $("#SignUpCode").html("Post Code")
    }
    var ccode = $("#countryOfResidences option:selected").val();
    if (ccode == "UK") {
      ccode = "GB";
    } else if (ccode == "ES") {
      $("#add_lookup").hide();
      $("#txtPostCode").removeAttr("onblur");
    }

    storage.setItem("ctry_code", ccode);
    storage.setItem("NOW", "address");

    getCountryFlagsCcy();
    $("#part2").hide();
    $("#part3").show();

    window.scrollTo(0, 0);
  }

  $("#wait").css("display", "none");
}

function registerPart3() {
  fbq('track', 'CompleteRegistration');
  $("#wait").css("display", "block");
  $("#part3").hide();

  var dob = storage.getItem("dateofbirth");
  var postcode = storage.getItem("cust_postcode").trim();
  var addr1 = storage.getItem("cust_add1").trim();
  var addr2 = storage.getItem("cust_add2").trim();
  var addr3 = storage.getItem("cust_add3").trim();
  var remCIF = storage.getItem("cifNumber");
  var country = storage.getItem("country");
  var source = storage.getItem("sop");
  var mobile = storage.getItem("cust_mob_num");
  var addrID = storage.getItem("cust_addId");
  var token = storage.getItem("tokenKey");

  var strData =
    "appRequest=NewCustomer&section=03" +
    "&dob=" +
    dob +
    "&fullname=" +
    storage.getItem("fullname") +
    "&addr1=" +
    addr1.trim() +
    "&addr2=" +
    addr2.trim() +
    "&addr3=" +
    addr3.trim() +
    "&source=" +
    source +
    "&postcode=" +
    postcode +
    "&tokenKey=" +
    token +
    "&mobileNo=" +
    mobile.trim() +
    "&addrID=" +
    addrID +
    "&country=" +
    country +
    "&remCIF=" +
    remCIF;

  var myURL = bcremit + "customer.aspx";
  ajaxCall(myURL, strData, "custRegister3");
}

function responsePart3(res) {
  if (res.err_code != "0") {
    $("#msg3").html(res.err_message);
    $("#alertBox3").show();
  } else {
    $("#part3").hide();
    storage.setItem("txtDtlStatus", "");

    vCSendCode(storage.getItem("cust_mob_num"));
  }

  $("#wait").css("display", "none");
}

function checkStrength(password) {
  var strength = 0;
  if (password.length < 6) {
    return "Too short";
  }
  if (password.length > 7) {
    strength += 1;
  }
  if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
    strength += 1;
  }
  if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) {
    strength += 1;
  }
  if (password.match(/([!,%,&,@,$,^,*,?,_,~])/)) {
    strength += 1;
  }
  if (password.match(/(.*[!,%,&,@,$,^,*,?,_,~].*[!,%,&,@,$,^,*,?,_,~])/)) {
    strength += 1;
  }
  if (strength < 2) {
    return "Weak";
  } else if (strength == 2) {
    return "Good";
  } else {
    return "Strong";
  }
}
/*------------------------------------------------------------------------------
                      beneficiary                                           
------------------------------------------------------------------------------*/
function deleteBeneficiary() {
  $("#wait").css("display", "block");
  $("#MainBlock").hide();

  var token = storage.getItem("tokenKey");

  if (token == "") {
    $("#wait").css("display", "none");
    logout();
  }

  var beneCIF = storage.getItem("ViewBeneNo");
  var myURL = bcremit + "customer.aspx";

  var strData =
    "appRequest=deleteBene" + "&beneCIF=" + beneCIF + "&tokenKey=" + token;

  ajaxCall(myURL, strData, "deleteBene");
}

function deleteBeneficiaryResponse(res) {
  if (res.error_code == "0") {
    showAlert("Successfully deleted beneficiary");
    $("#txtGoTo").val("dashboard.html");
  } else {
    alertUser("Fail to delete beneficiary");
    window.scrollTo(0, 0);
  }
  $("#wait").css("display", "none");
  $("#MainBlock").show();
}

/*------------------------------------------------------------------------------
                      profile                                           
------------------------------------------------------------------------------*/
function updateMyDetail(updateType) {
  window.scrollTo(0, 0);
  var token = storage.getItem("tokenKey");

  var errCount = 0;
  var errMsg = "";

  if (updateType == "myDetail") {
    var regex = /^0+(?!$)/;

    $("#txtFDCallFrom").val("P");
    var addr1 = encodeURIComponent(
      $("#txtMDAddr1").val().trim().replace(/  +/g, " ")
    );
    var addr2 = encodeURIComponent(
      $("#txtMDAddr2").val().trim().replace(/  +/g, " ")
    );
    var addr3 = encodeURIComponent(
      $("#txtMDAddr3").val().trim().replace(/  +/g, " ")
    );
    var postcode = $("#txtMDPostcode").val().trim().replace(/  +/g, " ");
    var country = storage.getItem("country");
    var old_mobile = $("#txtOldnumber").val();

    var mobile = $("#lblMobileNo").val();
    var dialCode = window.intlTelInputGlobals
      .getInstance(input)
      .getSelectedCountryData().dialCode; //get prefix

    if (mobile == "" || mobile == null) {
      errCount += 1;
      $("#err1").html("Please enter your mobile number.<br />");
    } else {
      var valid = /^[0-9+\ ]*$/.test(mobile);
      var resMobile = mobile.startsWith("0");

      if (valid == false) {
        errCount += 1;
        $("#err1").html("Invalid phone number. Only numbers are allowed.");
      }

      if (dialCode == "34") {
        if (mobile.length > 10) {
          errCount += 1;
          $("#err1").html(
            "Mobile number with greater than 10 digits long is invalid."
          );
        } else if (mobile.length < 9) {
          errCount += 1;
          $("#err1").html(
            "Mobile number with less than 9 digits long is invalid."
          );
        } else {
          var regex = /^0+(?!$)/;
          mobile = mobile.replace(regex, "");
          mobile = "+" + dialCode + mobile;
        }
      } else {
        if (mobile.length > 11) {
          errCount += 1;
          $("#err1").html(
            "Mobile number with greater than 11 digits long is invalid."
          );
        } else if (mobile.length < 10) {
          errCount += 1;
          $("#err1").html(
            "Mobile number with less than 10 digits long is invalid."
          );
        } else if (mobile.length == 11 && resMobile == false) {
          errCount += 1;
          $("#err1").html("Incorrect mobile number, please check your number.");
        } else if (dialCode == "undefined" || dialCode == null) {
          errCount += 1;
          $("#err1").html("Please select mobile country code.");
        } else {
          $("#err1").html("");
          var regex = /^0+(?!$)/;
          mobile = mobile.replace(regex, "");
          mobile = "+" + dialCode + mobile;
        }
      }
    }
    if (addr1.trim() == "") {
      errCount += 1;
      errMsg = "Please enter your address line 1.<br />";
      $("#err2").html(errMsg);
    } else {
      if (addr1.indexOf(forbiddenChar) > -1) {
        errCount++;
        errMsg =
          "Address 1 contains invalid character (" + forbiddenChar + ").";
        $("#err2").html(errMsg);
      }
    }

    if (!(addr2 == "")) {
      if (addr2.indexOf(forbiddenChar) > -1) {
        errCount++;
        errMsg =
          "Address 2 contains invalid character (" + forbiddenChar + ").";
        $("#err2").html(errMsg);
      }
    }

    if (addr3.trim() == "") {
      errCount += 1;
      errMsg = "Please enter your city/town.<br />";
      $("#err4").html(errMsg);
    } else {
      if (addr3.indexOf(forbiddenChar) > -1) {
        errCount++;
        errMsg =
          "Address 1 contains invalid character (" + forbiddenChar + ").";
        $("#err4").html(errMsg);
      }
    }

    if (postcode == "" || postcode == null || postcode == undefined) {
      errMsg = "Please enter your post code. <br />";
      $("#err5").html(errMsg);
      errCount += 1;
    }
    if (postcode.length > 10) {
      errMsg = "Post code with greater than 10 characters long is invalid.";
      $("#err5").html(errMsg);
      errCount += 1;
    }

    if (errCount > 0) {
      $("#save_cust_data").removeAttr("rel");
    }

    if (old_mobile !== mobile.replace(/\s+/g, "").trim() && errCount == 0) {
      $("#numberToVerify").html(mobile.replace(/\s+/g, "").trim());
      $("#save_cust_data").attr("rel", "modal:open");
    } else {
      if (errCount == 0) {
        $("#save_cust_data").removeAttr("rel");

        var strData =
          "appRequest=updateCustomer&tokenKey=" +
          token +
          "&addr1=" +
          addr1.trim() +
          "&addr2=" +
          addr2.trim() +
          "&addr3=" +
          addr3.trim() +
          "&postcode=" +
          postcode.trim() +
          "&country=" +
          country +
          "&mobile=" +
          mobile.replace(/\s+/g, "").trim() +
          "&cusType=rem";

        var myURL = bcremit + "customer.aspx";
        ajaxCall(myURL, strData, "updateMyDetail");
      }
    }

    $("#wait").css("display", "none");
    $("#part3").show();
  } else if (updateType == "newNumber") {
    var regex = /^0+(?!$)/;
    $("#txtFDCallFrom").val("FD");
    var addr1 = encodeURIComponent($("#txtMDAddr1").val().trim());
    addr1 = addr1.replace(/  +/g, " ");
    var addr2 = encodeURIComponent($("#txtMDAddr2").val().trim());
    addr2 = addr2.replace(/  +/g, " ");
    var addr3 = encodeURIComponent($("#txtMDAddr3").val().trim());
    addr3 = addr3.replace(/  +/g, " ");
    var dob = $("#lblDOB").val();
    var newDate = dob.split("/");
    dob = newDate[1] + "-" + newDate[0] + "-" + newDate[2];

    var postcode = $("#txtMDPostcode").val().trim();
    postcode = postcode.replace(/  +/g, " ");
    var country = storage.getItem("country");

    var mobile = $("#lblMobileNo").val();
    var dialCode = window.intlTelInputGlobals
      .getInstance(input)
      .getSelectedCountryData().dialCode;
    mobile = mobile.replace(/\s+/g, "").trim();
    mobile = mobile.replace("+", "");
    mobile = mobile.replace(regex, "");
    mobile = "+" + dialCode + mobile;

    if (addr1.trim() == "") {
      errCount += 1;
      errMsg = "Please enter address line 1. <br />";
      $("#err1").html(errMsg);
    } else {
      if (addr1.indexOf(forbiddenChar) > -1) {
        errCount++;
        errMsg = "Address 1 contains invalid character (" + forbiddenChar + ")";
        $("#err1").html(errMsg);
      }
    }

    if (!(addr2 == "")) {
      if (addr2.indexOf(forbiddenChar) > -1) {
        errCount++;
        errMsg = "Address 2 contains invalid character (" + forbiddenChar + ")";
        $("#err2").html(errMsg);
      }
    }

    if (!(addr3 == "")) {
      if (addr3.indexOf(forbiddenChar) > -1) {
        errCount++;
        errMsg = "City/Town contains invalid character (" + forbiddenChar + ")";
        $("#err3").html(errMsg);
      }
    }

    if (postcode == "" || postcode == null || postcode == undefined) {
      errMsg = "Please enter your post code. <br />";
      $("#err4").html(errMsg);
      errCount += 1;
    }
    if (postcode.length > 10) {
      errMsg = "Post code with greater than 10 characters long is invalid.";
      $("#err4").html(errMsg);
      errCount += 1;
    }

    storage.setItem("cp_postcode", postcode);
    storage.setItem("cp_add1", addr1);
    storage.setItem("cp_add2", addr2);
    storage.setItem("cp_add3", addr3);
    storage.setItem("cp_country", country);
    storage.setItem("cust_mob_num", mobile);
    storage.setItem("dateofbirth", dob);

    var strData =
      "appRequest=updateCustomer&tokenKey=" +
      token +
      "&addr1=" +
      addr1.trim() +
      "&addr2=" +
      addr2.trim() +
      "&addr3=" +
      addr3.trim() +
      "&postcode=" +
      postcode.trim() +
      "&country=" +
      country +
      "&mobile=" +
      mobile.replace(/\s+/g, "").trim() +
      "&cusType=rem";

    var myURL = bcremit + "customer.aspx";
    ajaxCall(myURL, strData, "updateMyDetail");
  } else if (updateType == "fullDetail") {
    var dialCode = window.intlTelInputGlobals
      .getInstance(input)
      .getSelectedCountryData().dialCode;
    var fName = encodeURIComponent(
      $("#txtFDFirstName").val().trim().replace(/  +/g, " ")
    );
    var mName = encodeURIComponent(
      $("#txtFDMiddleName").val().trim().replace(/  +/g, " ")
    );
    var lName = encodeURIComponent(
      $("#txtFDLastName").val().trim().replace(/  +/g, " ")
    );
    var dob = $("#txtFDDOB").val();
    dob = dob.replace(/\s+/g, "");
    var addr1 = encodeURIComponent(
      $("#txtFDAddr1").val().trim().replace(/  +/g, " ")
    );
    var addr2 = encodeURIComponent(
      $("#txtFDAddr2").val().trim().replace(/  +/g, " ")
    );
    var addr3 = encodeURIComponent(
      $("#txtFDAddr3").val().trim().replace(/  +/g, " ")
    );
    var addrID = $("#txtFDAddrID").val();
    var postcode = $("#txtFDPostCode").val().trim().replace(/  +/g, " ");
    var country = $("#CompleteCountryOfResidences option:selected").val();

    var mobile = $("#txtFDMobile").val();

    if (fName.trim() == "") {
      errCount += 1;
      errMsg = "Please enter your first name.";
      $("#err1").html(errMsg);
    } else {
      if (fName.indexOf(forbiddenChar) > -1) {
        errCount++;
        errMsg =
          "First name contains invalid character (" + forbiddenChar + ").";
        $("#err1").html(errMsg);
      }
      if (fName.length > 100) {
        errCount++;
        errMsg =
          "First name with greater than 100 characters length is invalid.";
        $("#err1").html(errMsg);
      }
    }

    if (mName.length > 100) {
      errCount++;
      errMsg =
        "Middle name with greater than 100 characters length is invalid.";
      $("#err102").html(errMsg);
    }

    if (lName.trim() == "") {
      errCount += 1;
      errMsg = "Please enter your last name.";
      $("#err2").html(errMsg);
    } else {
      if (lName.indexOf(forbiddenChar) > -1) {
        errCount++;
        errMsg =
          "Last name contains invalid character (" + forbiddenChar + ").";
        $("#err2").html(errMsg);
      }
      if (lName.length > 100) {
        errCount++;
        errMsg =
          "Last name with greater than 100 characters length is invalid.";
        $("#err2").html(errMsg);
      }
    }

    if (addr1.trim() == "") {
      errCount += 1;
      errMsg = "Please enter your address line 1.";
      $("#err6").html(errMsg);
    } else {
      if (addr1.indexOf(forbiddenChar) > -1) {
        errCount++;
        errMsg =
          "Address 1 contains invalid character (" + forbiddenChar + ").";
        $("#err6").html(errMsg);
      }
    }

    if (!(addr2 == "")) {
      if (addr2.indexOf(forbiddenChar) > -1) {
        errCount++;
        errMsg =
          "Address 2 contains invalid character (" + forbiddenChar + ").";
        $("#err7").html(errMsg);
      }
    }

    if (addr3.trim() == "") {
      errCount += 1;
      errMsg = "Please enter your city/town.";
      $("#err8").html(errMsg);
    } else {
      if (addr3.indexOf(forbiddenChar) > -1) {
        errCount++;
        errMsg =
          "City/Town contains invalid character (" + forbiddenChar + ").";
        $("#err8").html(errMsg);
      }
    }

    if ($("#txtCountry").text() == "SPAIN") {
      if (postcode == "" || postcode == null || postcode == undefined) {
        $("#err5").html("Please enter your post code");
        errCount += 1;
      } else if (postcode.length > 10) {
        $("#err5").html(
          "Post code with greater than 10 characters long is invalid."
        );
        errCount += 1;
      }
    } else if ($("#txtCountry").text() == "UNITED KINGDOM") {
      if (postcode == "" || postcode == null || postcode == undefined) {
        $("#err5").html("Please enter your post code.");
        errCount += 1;
      } else if (postcode.length > 10) {
        $("#err5").html(
          "Post code with greater than 10 characters long is invalid."
        );
        errCount += 1;
      }
    }

    if (mobile == "" || mobile == null) {
      errCount += 1;
      errMsg = "Please enter your mobile number. <br />";
      $("#err4").html(errMsg);
    } else {
      var valid = /^[0-9+\ ]*$/.test(mobile);
      var resMobile = mobile.startsWith("0");

      if (valid == false) {
        errCount += 1;
        errMsg = "Invalid phone number. Only numbers are allowed.";
        $("#err4").html(errMsg);
      }

      if (dialCode == "34") {
        if (mobile.length > 10) {
          errCount += 1;
          errMsg =
            "Mobile number with greater than 10 digits long is invalid. <br/>";
          $("#err4").html(errMsg);
        } else if (mobile.length < 9) {
          errCount += 1;
          errMsg =
            "Mobile number with less than 9 digits long is invalid. <br/>";
          $("#err4").html(errMsg);
        }
      } else {
        if (mobile.length > 11) {
          errCount += 1;
          errMsg = "Mobile number with greater than 11 digits long is invalid.";
          $("#err4").html(errMsg);
        } else if (mobile.length < 10) {
          errCount += 1;
          errMsg = "Mobile number with greater than 10 digits long is invalid.";
          $("#err4").html(errMsg);
        } else if (mobile.length == 11 && resMobile == false) {
          errCount += 1;
          $("#err4").html("Incorrect mobile number, please check your number.");
        } else {
          $("#err4").html("");
        }
      }
      var regex = /^0+(?!$)/;
      mobile = mobile.replace(regex, "");
    }

    if (dob == "") {
      errCount += 1;
      errMsg = "Please enter your date of birth." + "<br/>";
      $("#err3").html(errMsg);
    } else {
      var newDOB = $("#txtFDDOB").val();
      newDOB = newDOB.replace(/\s+/g, "");
      var valid = /^\d{1,2}\/\d{1,2}\/\d{4}$/.test(newDOB);

      if (valid == false) {
        errCount += 1;
        errMsg =
          ".Invalid date of birth format, valid format is DD/MM/YYYY." +
          "<br/>";
        $("#err3").html(errMsg);
      } else {
        var newDate = newDOB.split("/");
        dob = newDate[1] + "-" + newDate[0] + "-" + newDate[2];

        if (newDate[0] < 1 || newDate[0] > 31) {
          errCount += 1;
          errMsg = "Invalid date of birth (day)." + "<br/>";
          $("#err3").html(errMsg);
        }
        if (newDate[1] < 1 || newDate[1] > 12) {
          errCount += 1;
          errMsg += "Invalid date of birth (month)." + "<br/>";
          $("#err3").html(errMsg);
        }

        if (newDate[2] < 1902 || newDate[2] > new Date().getFullYear()) {
          errCount += 1;
          errMsg += "Invalid date of birth (year)." + "<br/>";
          $("#err3").html(errMsg);
        }
      }
    }
    if (errCount > 0) {
      alertUser(errMsg);
      $("#wait").css("display", "none");
      $("#MainBlock").show();
      window.scrollTo(0, 0);
      $("#save_cust_data").removeAttr("rel");
    } else {
      var dialCode = window.intlTelInputGlobals
        .getInstance(input)
        .getSelectedCountryData().dialCode;
      if (dialCode != "" || dialCode != undefined || dialCode != null) {
        console.log("Dial code is: " + dialCode);
        $("#numberToVerify").html("+" + dialCode + mobile);
        var toVerify = $("#numberToVerify").text();
        storage.setItem("cust_mob_num", toVerify);

        $("#save_cust_data").attr("rel", "modal:open");
      } else {
        console.log("Dial code is empty");
        $("#alertBoxCompleteProfile").style.display = "block";
        $("#msg").html("Please check all your information");
      }
    }

    storage.setItem("cp_fname", fName);
    storage.setItem("cp_mname", mName);
    storage.setItem("cp_lname", lName);
    storage.setItem("cp_postcode", postcode);
    storage.setItem("cp_add1", addr1);
    storage.setItem("cp_add2", addr2);
    storage.setItem("cp_add3", addr3);
    storage.setItem("dateofbirth", dob);
    storage.setItem("cp_country", country);
    storage.setItem("cp_addId", addrID);
  } else if (updateType == "saveFullDetail") {
    $("#wait").css("display", "block");
    $("#MainBlock").hide();
    $("#txtFDCallFrom").val("FD");
    var strData =
      "appRequest=updateCustomer&tokenKey=" +
      token +
      "&addr1=" +
      storage.getItem("cp_add1").trim() +
      "&addr2=" +
      storage.getItem("cp_add2").trim() +
      "&addr3=" +
      storage.getItem("cp_add3").trim() +
      "&postcode=" +
      storage.getItem("cp_postcode").trim() +
      "&country=" +
      storage.getItem("cp_country") +
      "&fName=" +
      storage.getItem("cp_fname").trim() +
      "&mName=" +
      storage.getItem("cp_mname").trim() +
      "&remCIF=" +
      storage.getItem("cifNumber") +
      "&lName=" +
      storage.getItem("cp_lname").trim() +
      "&dob=" +
      storage.getItem("dateofbirth") +
      "&mobile=" +
      storage.getItem("cust_mob_num").trim() +
      "&addrID=" +
      storage.getItem("cp_addId") +
      "&section=02" +
      "&cusType=rem";

    var myURL = bcremit + "customer.aspx";
    ajaxCall(myURL, strData, "updateMyDetail");
  }
}

function responseUpdateMyDetail(res) {
  storage.setItem("lblmsg", "Change mobile number or address was successful!");
  if (res.error_code == "0") {
    storage.setItem("txtDtlStatus", "complete");
    var callFrom = $("#txtFDCallFrom").val();

    if (callFrom == "FD") {
      showAlert(
        "Profile update was successful. Please verify your mobile number."
      );
      $("#txtGoTo").val("smsver");
    } else {
      showAlert("Profile update was successful");
      $("#txtGoTo").val("settings.html");
    }
  } else {
    alertUser("Update detail failed");
    window.scrollTo(0, 0);
  }
  $("#wait").css("display", "none");
  $("#MainBlock").show();
}
/*------------------------------------------------------------------------------
                      Remove Account                                           
------------------------------------------------------------------------------*/

function removeAccount(reason) {
  console.log( "reqType=removeAccount&cust_Number=" +storage.getItem("cifNumber")+"&reason=" + reason );
  var myURL = bcremit + "parameters.aspx";
  var strData = "reqType=removeAccount&cust_Number=" +storage.getItem("cifNumber")+"&reason=" + reason
  ajaxCall(myURL, strData, "removeAccount");
}

function responseRemoveAccount(res){
  console.log(res)
  if (res.status == "0" && res.msg == "Successfully removed account") {
    logout()
  }else{
    console.log("Failed to remove account")
  }
}

/*------------------------------------------------------------------------------
                      login                                           
------------------------------------------------------------------------------*/
function login() {
  $("#wait").css("display", "block");
  $("#MainBlock").hide();

  $("#err2").html("");
  $("#err1").html("");

  var email = $("#txtEmail").val();
  var pwd = $("#txtPwd").val();

  email = email.replace(/\s+/g, "");
  pwd = pwd.trimEnd();

  var errCount = 0;
  var errMsg = "";

  if (email == "") {
    errCount += 1;
    errMsg += "Please enter your email.<br />";
    $("#err1").html(errMsg);
  } else {
    if (email.indexOf(forbiddenChar) > -1) {
      errCount++;
      errMsg = "Email contains invalid character (" + forbiddenChar + ").<br/>";
      $("#err1").html(errMsg);
    }
  }

  if (pwd == "") {
    errCount += 1;
    errMsg = "Please enter your password.<br />";
    $("#err2").html(errMsg);
  } else {
    if (pwd.indexOf(forbiddenChar) > -1) {
      errCount++;
      errMsg =
        "Password contains invalid character (" + forbiddenChar + ").<br/>";
      $("#err2").html(errMsg);
    }
  }

  if (errCount > 0) {
    $("#msg").html("Please enter all required fields");
    $("#alertBox").show();
    $("#wait").css("display", "none");
    $("#MainBlock").show();
    return;
  }

  var myURL = bcremit + "getChallengeCode.aspx";
  var strData = "txtEmail=" + email.toLowerCase();
  ajaxCall(myURL, strData, "loginToken");
}

function responseLoginToken(res) {
  var errMsg = "";
  var email = $("#txtEmail").val();
  email = email.replace(/\s+/g, "");
  var appVersion = storage.getItem("mobileVersion");
  var token = "";

  if (res.error_code == "-2") {
    errMsg = "Error to Log-in. Please Reset your Password.";
  } else if (res.error_code == "-1") {
    errMsg = "Exception occured, unable to login!";
  } else if (res.error_code == "-5") {
    errMsg =
      "E-mail address/Username not found. Please check if correct or Sign-up!";
  } else if (res.error_code == "-3") {
    errMsg = "Authentication failed!";
  } else if (res.error_code == "-6") {
    errMsg =
      'Error to login, please <a href="tel:+441515413333">contact us</a> for assistance. We are happy to assist you!';
  } else if (res.error_code == "0") {
    var clearPwd = $("#txtPwd").val();
    clearPwd = clearPwd.trimEnd();
    var hashedPwd = hex_md5(clearPwd + res.salt);
    storage.setItem("SALT", res.salt);
    token = hex_md5(email.toLowerCase() + hashedPwd + res.challenge_code);
  } else {
    errMsg = "Failed to login!";
  }

  if (!(errMsg == "")) {
    alertUser(errMsg);
    $("#wait").css("display", "none");
    $("#MainBlock").show();
    return;
  }

  var myLocation = storage.getItem("MyLocation");
  var myDevice = storage.getItem("Platform") + "-" + storage.getItem("MyUUID");
  var version = storage.getItem("DeviceVersion");
  var countryCodeLogin = storage.getItem("countryCodeLogin");

  var myURL = bcremit + "login.aspx";
  var strData =
    "appRequest=login&txtType=v2&txtEmail=" +
    email.toLowerCase() +
    "&txtPassword=" +
    token +
    "&txtMyLoc=" +
    myLocation +
    "&txtMyDevice=" +
    myDevice +
    "&txtDeviceVersion=" +
    version +
    "&countryCode=" +
    countryCodeLogin +
    "&appVersion=" +
    appVersion;
  console.log(myURL + "?" + strData);
  ajaxCall(myURL, strData, "login");
}

function loginResponse(res) {
  if (res.err_code == "0") {
    var remCIF = res.rem_cif;
    var tokenKey = res.tokenKey;
    var country = res.country;
    var email = res.email.toLowerCase();
    var num = res.mobile_num;
    var dob = res.dob;
    var add1 = res.add1;
    var add2 = res.add2;
    var add3 = res.add3;
    var addId = res.addId;
    var postcode = res.postcode;

    var storage = window.localStorage;

    storage.setItem("add1", add1);
    storage.setItem("add2", add2);
    storage.setItem("add3", add3);
    storage.setItem("addId", addId);
    storage.setItem("postcode", postcode);

    storage.setItem("email", email);
    storage.setItem("tokenKey", tokenKey);
    storage.setItem("cifNumber", remCIF);
    storage.setItem("fullname", res.name);
    storage.setItem("country", country);
    storage.setItem("cust_mob_num", num);

    if (dob != undefined) {
      storage.setItem("dob", dob.replaceAll("/", "-"));
    }

    if (res.err_message == "Incomplete") {
      storage.setItem("txtDtlStatus", "Incomplete");
      showAlert("Please complete your details to get started!");
      $("#txtGoTo").val("complete_profile.html");
    } else if (res.err_message == "Not Verified") {
      showAlert("Please complete your verification code to get started!");
      $("#txtGoTo").val("sms_verification.html");
    } else {
      storage.setItem("txtDtlStatus", "complete");
      window.location.href = "dashboard.html";
    }
  } else if (res.err_code == "2") {
    alertUser(
      "You have exceeded your login attempts. Please reset your password by clicking on Forgort Password? button."
    );
  } else if (res.err_code == "4") {
    alertUser(
      "E-mail address/Username not found. Please check if correct or Sign-up"
    );
  } else if (res.err_code == "5") {
    alertUser("Error to login. Please reset your password.");
  } else if (res.err_code == "6") {
    alertUser("Error to login. User authentication code has expired.");
  } else if (res.err_code == "7") {
    alertUser(
      "Error to login, please contact us for assistance. We are happy to assist you!"
    );
  } else {
    alertUser(
      "You have entered incorrect username or password. You have " +
        res.err_message +
        " more retries."
    );
  }

  $("#wait").css("display", "none");
  $("#MainBlock").show();
}

/*------------------------------------------------------------------------------
                      logout                                  
------------------------------------------------------------------------------*/
function logout() {
  $("#wait").css("display", "block");
  var storage = window.localStorage;
  var token = storage.getItem("tokenKey");

  JSONBene = "";
  JSONBank = "";

  storage.removeItem("tokenKey");
  storage.removeItem("cifNumber");
  storage.removeItem("country");
  storage.removeItem("txtDtlStatus");
  storage.removeItem("SMBene");
  storage.removeItem("SMProduct");
  storage.removeItem("SMBeneName");
  storage.removeItem("SMBeneBank");
  storage.removeItem("SMBeneProduct");
  storage.removeItem("SMBeneAcctNo");
  storage.removeItem("SMBIC");
  storage.removeItem("SMBranch");
  storage.removeItem("ViewBeneNo");
  storage.removeItem("ViewBeneBank");
  storage.removeItem("ViewBeneProduct");
  storage.removeItem("ViewBeneAcctNo");
  storage.removeItem("ViewBeneTransType");

  if (storage.getItem("MyLocation") != "DENIED") {
    storage.setItem("MyLocation", "OFF");
  }

  storage.removeItem("tPlatform");
  storage.removeItem("MyUUID");
  storage.removeItem("DeviceVersion");
  storage.removeItem("ip");

  var myURL = bcremit + "login.aspx";
  var strData = "appRequest=logout&tokenKey=" + token;
  ajaxCall(myURL, strData, "logout");
}

function logoutResponse(res) {
  $("#wait").css("display", "none");
  window.location.href = "index.html";
}
/*------------------------------------------------------------------------------
                      change password                                  
------------------------------------------------------------------------------*/
function changePassword() {
  $("#wait").css("display", "block");
  $("#MainBlock").hide();

  var oldPwd = $("#txtOldPassword").val();
  oldPwd = oldPwd.trimEnd();

  var pwd1 = $("#txtNewPassword").val();
  pwd1 = pwd1.trimEnd();

  var pwd2 = $("#txtNewPassword2").val();
  pwd2 = pwd2.trimEnd();

  var token = storage.getItem("tokenKey");

  if (token == "") {
    logout();
  }

  var errCount = 0;
  var errMsg = "";

  if (oldPwd == "") {
    errCount += 1;
    errMsg = "Please enter your current password.<br>";
    $("#err1").html(errMsg);
  } else {
    if (oldPwd.indexOf(forbiddenChar) > -1) {
      errCount++;
      errMsg =
        "Your current Password contains invalid character (" +
        forbiddenChar +
        ").<br/>";
      $("#err1").html(errMsg);
    }
  }

  if (pwd1 == "") {
    errCount += 1;
    errMsg = "Please enter your new password.<br>";
    $("#err2").html(errMsg);
  } else {
    if (pwd1.indexOf(forbiddenChar) > -1) {
      errCount++;
      errMsg =
        "Password contains invalid character (" + forbiddenChar + ").<br/>";
      $("#err2").html(errMsg);
    }
  }

  if (pwd2 == "") {
    errCount += 1;
    errMsg = "Please confirm your new password.<br>";
    $("#err3").html(errMsg);
  }

  var message = checkStrength(pwd1);

  if (message == "Weak") {
    errCount += 1;
    errMsg = "Your password is weak, please change.<br />";
    alertUser(errMsg);
  }

  if (message == "Too short") {
    errCount += 1;
    errMsg = "Your password is too short, please change. <br />";
    alertUser(errMsg);
  }

  if (!(pwd1 == pwd2)) {
    errCount += 1;
    errMsg = "Your password does not match.<br>";
    alertUser(errMsg);
  }

  if (errCount > 0) {
    $("#wait").css("display", "none");
    $("#MainBlock").show();
    return;
  }

  var encOldPwd = encryptPwd(oldPwd);
  var enc_pwd = encryptPwd(pwd1);

  var myURL = bcremit + "login.aspx";
  var strData =
    "appRequest=changePwd&strNewPwd=" +
    enc_pwd +
    "&tokenKey=" +
    token +
    "&strOldPwd=" +
    encOldPwd;

  ajaxCall(myURL, strData, "changePwd");
}

function changePwdResponse(res) {
  if (res.error_code == "0") {
    showAlert(
      "Your password successfully changed. Please log in again using your new password"
    );
    $("#txtGoTo").val("x");
  } else if (res.error_code == "100") {
    logout();
  } else if (res.error_code == "3") {
    alertUser("Invalid current password.");
  } else {
    alertUser("Change password failed.");
  }

  $("#wait").css("display", "none");
  $("#MainBlock").show();
}

function reset_password() {
  $("#wait").css("display", "block");
  $("#MainBlock").hide();

  var email = $("#txtFPEmail").val();

  if (email == "") {
    $("#err3").html("Please enter your email address.");
    $("#wait").css("display", "none");
    $("#MainBlock").show();
    return false;
  } else {
    if (email.indexOf(forbiddenChar) > -1) {
      errCount++;
      errMsg = "Email contains invalid character (" + forbiddenChar + ").<br/>";
      $("#MainBock").show();
      $("#err3").html(errMsg);
    } else {
      if (validateEmail(email) == false) {
        $("#err3").html("Please enter a valid email address.");
        $("#wait").css("display", "none");
        $("#MainBlock").show();
        return false;
      }
    }
  }

  email = email.replace(/\s+/g, "");
  var myURL = bcremit + "login.aspx";
  var strData = "appRequest=forgortPwd&email=" + email;

  ajaxCall(myURL, strData, "forgotpwd");
}

function responseForgotPassword(res) {
  $("#wait").css("display", "none");
  $("#MainBlock").show();

  if (res.err_code == "0") {
    showAlert(
      "Request to Reset Password has been sent to your email. Please check your Inbox (or Spam) folder."
    );
    $("#txtGoTo").val("index.html");
  } else {
    showAlert(res.err_message);
    "#txtGoTo".val("#");
  }
}

function encryptPwd(pwd) {
  var SALT = storage.getItem("SALT");
  return hex_md5(pwd + SALT);
}

/*------------------------------------------------------------------------------
                      Parameters
------------------------------------------------------------------------------*/
function getAcctNo() {
  $("#wait").css("display", "block");
  $("#MainBlock").hide();

  var token = storage.getItem("tokenKey");

  var myURL = bcremit + "parameters.aspx";
  var strData = "tokenKey=" + token;
  ajaxCall(myURL, strData, "acctNo");
}

function getAcctNoResponse(res) {
  $("#wait").css("display", "none");

  if (res.err_code == "0") {
    $("#sCode").html(res.sortCode);
    $("#acctNo").html(res.acctNo);
    $("#actName").html(res.actName);
  }
}

//--create beneficiary delivery options
function getDeliveryOptionBasedOnCountryCreate() {
  var selectedCountry = $("#txtBeneCountry option:selected").val();
  if(selectedCountry == "PH"){
    $("#Beneficiary_Code").html("Zip Code (Optional)")
  }else{
    $("#Beneficiary_Code").html("Post Code (Optional)")
  }
  var custCountry = storage.getItem("country");
  var myURL = bcremit + "parameters.aspx";
  var strData =
    "reqType=getDeliveryOptionBasedOnCountry&selectedCountry=" +
    selectedCountry +
    "&customerCountry=" +
    custCountry;
  ajaxCall(myURL, strData, "getDeliveryOptionBasedOnCountryCreateCall");
}

function getDeliveryOptionBasedOnCountryCreateResponse(res) {
  $("#txtProduct").empty();
  var obj = "";
  var ctrl = document.getElementById("txtProduct");
  if (res.pCode != undefined) {
    for (var i = 0; i <= res.pCode.length - 1; i++) {
      obj = res.pCode[i];
      ctrl.options[ctrl.options.length] = new Option(
        obj.productDesc,
        obj.productCode
      );
    }
  }
  var selectedDeliveryOption = $("#txtProduct option:selected").val();
  $('#txtProduct option[value="' + 1 + '"]').attr("selected", "selected");
  if (
    selectedDeliveryOption != "" ||
    selectedDeliveryOption != -1 ||
    selectedDeliveryOption != null ||
    selectedDeliveryOption != undefined
  ) {
    $("#errDeliveryOption").html("");
  }
}
//--create beneficiary delivery options END

function getDeliveryOptionBasedOnCountry() {
  var selectedCountry = $("#txtBDCountry option:selected").val();
  var custCountry = storage.getItem("country");
  var myURL = bcremit + "parameters.aspx";
  var strData =
    "reqType=getDeliveryOptionBasedOnCountry&selectedCountry=" +
    selectedCountry +
    "&customerCountry=" +
    custCountry;
  ajaxCall(myURL, strData, "getDeliveryOptionBasedOnCountryCall");
}

function getDeliveryOptionBasedOnCountryResponse(res) {
  $("#txtBDProduct").empty();

  var obj = "";
  var ctrl = document.getElementById("txtBDProduct");
  if (res.pCode != undefined) {
    for (var i = 0; i <= res.pCode.length - 1; i++) {
      obj = res.pCode[i];
      ctrl.options[ctrl.options.length] = new Option(
        obj.productDesc,
        obj.productCode
      );
    }
  }

  var selectedDeliveryOption = $("#txtBDProduct option:selected").val();
  if (storage.getItem("banktype") == "BK") {
    $('#txtBDProduct option[value="' + 1 + '"]').attr("selected", "selected"); //preselect credit to bank account on load on update beneficiary
  } else if (storage.getItem("banktype") == "EW") {
    $('#txtBDProduct option[value="' + 4 + '"]').attr("selected", "selected"); //preselect e-wallet on load on update beneficiary
  } else {
    $('#txtBDProduct option[value="' + 0 + '"]').attr("selected", "selected"); //preselect cash pick up on load on update beneficiary
  }

  if (
    selectedDeliveryOption != "" ||
    selectedDeliveryOption != -1 ||
    selectedDeliveryOption != null ||
    selectedDeliveryOption != undefined
  ) {
    $("#errDeliveryOptionUpdate").html("");
  }
  loadAcctInfo();
}

function getCountryFlagsCcy() {
  var myURL = bcremit + "parameters.aspx";
  var strData = "reqType=getflags";
  ajaxCall(myURL, strData, "getCountryFlags");
}

function getAppVersion() {
  var myURL = bcremit + "parameters.aspx";
  var strData = "reqType=appVersion";

  ajaxCall(myURL, strData, "appVersion");
}

function getAppVersionResponse(res) {
  var ver = storage.getItem("appVersion");

  if (Number.isInteger(ver)) {
    if (ver < res.version) {
      $("#alertMe").show();
    } else {
      $("#alertMe").hide();
    }
  } else {
    if (ver == res.version) {
      $("#alertMe").hide();
    } else {
      $("#alertMe").show();
    }
  }
}
function instantButton(){
  if (storage.getItem("SMBeneCountry") == "PH") {
    $("#post_transaction").attr("onclick", "postTransaction()");
  } else {
    $("#post_transaction").attr("onclick", "checkBeneficiaryDetails()");
  }
}

function getPurposeCode() {
  var myURL = bcremit + "parameters.aspx";
  var strData = "reqType=purposeCode";

  ajaxCall(myURL, strData, "purposeCode");
}

function getPurposeCodeResponse(res) {
  var ctrl = document.getElementById("ddlPurpose");
  var obj = "";

  for (var i = 0; i <= res.pCode.length - 1; i++) {
    obj = res.pCode[i];

    ctrl.options[ctrl.options.length] = new Option(obj.desc, obj.code);
  }

  if (storage.getItem("SMBeneCountry") == "PH") {
    $("#post_trans").attr("onclick", "postTransaction()");
  } else {
    $("#post_trans").attr("onclick", "checkBeneficiaryDetails()");
  }
}

function checkBeneficiaryDetails() {
  $("#post_transaction").attr("onclick", "")
  $("#post_trans").html("processing..");
  var beneCif = storage.getItem("SMBene");
  var beneCountry = storage.getItem("SMBeneCountry");
  var custNumber = storage.getItem("cifNumber");
  var myURL = bcremit + "parameters.aspx";

  $("#disableCJ").attr("disabled", true);
  var strData =
    "reqType=checkBeneDetails&sm_beneCif=" +
    beneCif +
    "&sm_bene_Country=" +
    beneCountry +
    "&sm_cust_Cif=" +
    custNumber;
  ajaxCall(myURL, strData, "checkBeneficiaryDetailsCall");
}

function checkBeneficiaryDetailsResponse(res) {
  $("#post_transaction").attr("onclick", "postTransaction()")
  console.log(JSON.stringify(res));
  if (res.status == 0) {
    postTransaction();
  } else if (res.status == 99) {
    $("#SMInstantBankTransfer").hide();
    $("#SMErr7").show();
    $("#checkingTitle").html("Incomplete Beneficiary Details.");
    $("#SMSummary").hide();
  } else if (res.status == -3) {
    $("#SMInstantBankTransfer").hide();
    $("#SMErr7").show();
    $("#checkingTitle").html("Invalid Account Number Or Sort Code");
    $("#SMSummary").hide();
  } else if (res.status == -1) {
    $("#SMInstantBankTransfer").hide();
    $("#SMErr7").show();
    $("#checkingTitle").html("Invalid Account Number");
    $("#SMSummary").hide();
  } else if (res.status == -2) {
    $("#SMInstantBankTransfer").hide();
    $("#SMErr7").show();
    $("#checkingTitle").html("Invalid Sort Code");
    $("#SMSummary").hide();
  }
}

function getSourceofFunds() {
  var myURL = bcremit + "parameters.aspx";
  var strData = "reqType=sourceOfFunds";
  ajaxCall(myURL, strData, "sourceOfFunds");
}

function getSourceofFundsResponse(res) {
  console.log("getpurposecoderesponse");
  console.log(JSON.stringify(res.pCode));
  var ctrl = document.getElementById("sourceOfFundsDD");
  var obj = "";

  for (var i = 0; i <= res.pCode.length - 1; i++) {
    obj = res.pCode[i];

    ctrl.options[ctrl.options.length] = new Option(obj.desc, obj.code);
  }
}

function getRelationShip() {
  var myURL = bcremit + "parameters.aspx?";
  var strData = "reqType=relationshipbene";
  ajaxCall(myURL, strData, "relationshipbenecallback");
}

function abv(res) {
  if ($("#relationship_update").val() == "relupdate") {
    storage.setItem("getBeneDetails", "getBeneDetails");
    console.log("getpurposecoderesponse");
    console.log(JSON.stringify(res.pCode));
    var ctrl = document.getElementById("ddlRelationship_update");
    var obj = "";

    if (res.pCode != undefined) {
      for (var i = 0; i <= res.pCode.length - 1; i++) {
        obj = res.pCode[i];

        ctrl.options[ctrl.options.length] = new Option(obj.desc, obj.code);
      }
    }

    GetCountryListUpdateBene();
  } else {
    console.log("getpurposecoderesponse");
    console.log(JSON.stringify(res.pCode));
    var ctrl = document.getElementById("ddlRelationship");
    var obj = "";

    for (var i = 0; i <= res.pCode.length - 1; i++) {
      obj = res.pCode[i];

      ctrl.options[ctrl.options.length] = new Option(obj.desc, obj.code);
    }
    getBankList();
  }
}

function getCountryOfResidence() {
  var myURL = bcremit + "parameters.aspx";
  var strData = "reqType=countryOfResidence";

  ajaxCall(myURL, strData, "countryOfResidence");
}

function getCountryOfResidenceResponse(res) {
  var ctrl = document.getElementById("countryOfResidences");
  var obj = "";
  getSourceofFunds();
  for (var i = 0; i <= res.pCountry.length; i++) {
    obj = res.pCountry[i];
    ctrl.options[ctrl.options.length] = new Option(obj.desc, obj.code);
  }
}

function completeProfileGetCountryList() {
  var myURL = bcremit + "parameters.aspx";
  var strData = "reqType=countryOfResidence";
  ajaxCall(myURL, strData, "completeProfileCountryOfResidence");
}

function completeProfileGetCountryListResponse(res) {
  var ctrl = document.getElementById("CompleteCountryOfResidences");
  var obj = "";

  getCountryBasedOnIp();

  for (var i = 0; i <= res.pCountry.length; i++) {
    obj = res.pCountry[i];
    ctrl.options[ctrl.options.length] = new Option(obj.desc, obj.code);
  }
}

function GetCountryListBene() {
  var myURL = bcremit + "parameters.aspx";
  var strData = "reqType=countryOfResidence&beneCountryList=beneAllCountryList";
  ajaxCall(myURL, strData, "completeProfileCountryOfResidenceBene");
}

function GetCountryListBeneResponse(res) {
  var ctrl = document.getElementById("txtBeneCountry");
  var obj = "";

  for (var i = 0; i <= res.pCountry.length; i++) {
    obj = res.pCountry[i];
    ctrl.options[ctrl.options.length] = new Option(obj.desc, obj.code);
  }
}

function GetCountryListUpdateBene() {
  var myURL = bcremit + "parameters.aspx";
  var strData = "reqType=countryOfResidence&beneCountryList=beneAllCountryList";
  ajaxCall(myURL, strData, "completeProfileCountryOfResidenceUpdateBene");
}

function GetCountryListUpdateBeneResponse(res) {
  var ctrl = document.getElementById("txtBDCountry");
  var obj = "";

  for (var i = 0; i <= res.pCountry.length - 1; i++) {
    obj = res.pCountry[i];
    ctrl.options[ctrl.options.length] = new Option(obj.desc, obj.code);
  }

  viewBeneDetail();
}

function getContact(country_code) {
  var myURL = bcremit + "region_contact.aspx";
  var strData = "txtRegion=GL&txtID=" + country_code;
  console.log(myURL + strData);
  ajaxCall(myURL, strData, "getContacts");
}

function getContactResponse(res) {
  if (storage.getItem("NOW") == "support") {
    document.getElementById("supportContact").href = "tel:" + res.contact_no_1;
  } else {
    $("#tel1").html(res.contact_no_1);
    $("#tel2").html(res.contact_no_2);

    document.getElementById("tel1").href = "tel:" + res.contact_no_1;
    document.getElementById("tel2").href = "tel:" + res.contact_no_2;

    $("#tel1").prepend('<span class="fas fa-phone"></span>');
    $("#tel2").prepend('<span class="fas fa-phone"></span>');
    checkIfContactUseIsEmpty()
  }
}

function getCurrency(rates) {
  var myURL = bcremit + "parameters.aspx";
  var strData = "&reqType=check_rates" + "&checkRates=" + rates;
  ajaxCall(myURL, strData, "currencyCode");
}

function vCSendCode(mobile_number) {
  storage.setItem("cust_mob_num", mobile_number);
  var myURL = bcremit + "parameters.aspx";
  var strData =
    "mobileNumber=" +
    mobile_number +
    "&remCif=" +
    storage.getItem("cifNumber") +
    "&reqType=sendVerCode";

  console.log(myURL + strData);
  ajaxCall(myURL, strData, "send_code");
}

function vCSendCodeResponse(res) {
  storage.setItem("vcMsg", res.msg);
  var q = $("#txtFDCallFrom").val();
  if (q == "FD") {
    console.log("user_mobile_number::: " + res.mobile_num);
    document.location.href = "sms_verification.html";
  } else {
    console.log("user_mobile_number::: " + res.mobile_num);
    document.location.href = "sms_verification.html";
  }
}

function resendVerificationCode(mobile_number) {
  storage.setItem("cust_mob_num", mobile_number);
  var myURL = bcremit + "parameters.aspx";

  var strData =
    "mobileNumber=" +
    mobile_number +
    "&remCif=" +
    storage.getItem("cifNumber") +
    "&reqType=reSendVerCode";

  console.log(myURL + strData);
  ajaxCall(myURL, strData, "re_send_code");
}

function resendVerificationCodeResponse(res) {
  $("#smsInfoMsgs").html("");
  storage.setItem("vcMsg", res.msg);
  document.location.href = "sms_verification.html";
}

function verifySMSCode(smsCode, cusNumber) {
  //sign up
  if (storage.getItem("statusVerification") == 1) {
    var dob = storage.getItem("dateofbirth");
    var fName = storage.getItem("cust_fname");
    var mName = storage.getItem("cust_mname");
    var lName = storage.getItem("cust_lname");
    var name = fName + "," + mName + "," + lName;

    var postcode = storage.getItem("cust_postcode");
    var addr1 = storage.getItem("cust_add1");
    var addr2 = storage.getItem("cust_add2");
    var addr3 = storage.getItem("cust_add3");
    var remCIF = storage.getItem("cifNumber");
    var country = storage.getItem("country");
    var addrID = storage.getItem("cust_addId");
    var email = storage.getItem("cust_email");
    var myURL = bcremit + "parameters.aspx";
    var strData =
      "smsCode=" +
      smsCode +
      "&dob=" +
      dob +
      "&addr1=" +
      addr1.trim() +
      "&addr2=" +
      addr2.trim() +
      "&addr3=" +
      addr3.trim() +
      "&postcode=" +
      postcode +
      "&email=" +
      email +
      "&addrID=" +
      addrID +
      "&country=" +
      country +
      "&remCIF=" +
      remCIF +
      "&name=" +
      name +
      "&txtRequest=changeDetails" +
      "&mobileNumber=" +
      cusNumber +
      "&reqType=VerSMSCode";
  }
  //profile update
  else if (storage.getItem("statusVerification") == 3) {
    var dob = storage.getItem("dateofbirth");
    var fName = storage.getItem("cp_fname");
    var mName = storage.getItem("cp_mname");
    var lName = storage.getItem("cp_lname");
    var name = fName + "," + mName + "," + lName;
    var postcode = storage.getItem("cp_postcode");
    var addr1 = storage.getItem("cp_add1");
    var addr2 = storage.getItem("cp_add2");
    var addr3 = storage.getItem("cp_add3");
    var remCIF = storage.getItem("cifNumber");
    var country = storage.getItem("cp_country");
    var addrID = storage.getItem("cp_addId");

    storage.setItem("country", country);
    var myURL = bcremit + "parameters.aspx";
    var strData =
      "smsCode=" +
      smsCode +
      "&dob=" +
      dob +
      "&addr1=" +
      addr1.trim() +
      "&addr2=" +
      addr2.trim() +
      "&addr3=" +
      addr3.trim() +
      "&postcode=" +
      postcode +
      "&addrID=" +
      addrID +
      "&country=" +
      country +
      "&remCIF=" +
      remCIF +
      "&name=" +
      name +
      "&txtRequest=changeDetail" +
      "&mobileNumber=" +
      cusNumber +
      "&reqType=VerSMSCode";

    if (storage.getItem("changenumbersms") == "changeNo") {
      strData = strData + "&changeNo=change";
    }
  } else if (storage.getItem("statusVerification") == 5) {
    var myURL = bcremit + "parameters.aspx";
    var strData =
      "smsCode=" +
      smsCode +
      "&remCIF=" +
      storage.getItem("cifNumber") +
      "&addr1=" +
      storage.getItem("add1") +
      "&addr2=" +
      storage.getItem("add2") +
      "&addr3=" +
      storage.getItem("add3") +
      "&postcode=" +
      storage.getItem("postcode") +
      "&country=" +
      storage.getItem("country") +
      "&addrID=" +
      storage.getItem("addId") +
      "&dob=" +
      storage.getItem("dob") +
      "&name=" +
      storage.getItem("fullname") +
      "&mobileNumber=" +
      cusNumber +
      "&reqType=VerSMSCode";
  }

  //complete profile
  else {
    var dob = storage.getItem("dateofbirth");
    var fName = storage.getItem("cp_fname");
    var mName = storage.getItem("cp_mname");
    var lName = storage.getItem("cp_lname");
    var name = fName + "," + mName + "," + lName;

    var postcode = storage.getItem("cp_postcode");
    var addr1 = storage.getItem("cp_add1");
    var addr2 = storage.getItem("cp_add2");
    var addr3 = storage.getItem("cp_add3");
    var remCIF = storage.getItem("cifNumber");
    var country = storage.getItem("cp_country");
    var addrID = storage.getItem("cp_addId");

    storage.setItem("country", country);
    var myURL = bcremit + "parameters.aspx";
    var strData =
      "smsCode=" +
      smsCode +
      "&dob=" +
      dob +
      "&addr1=" +
      addr1.trim() +
      "&addr2=" +
      addr2.trim() +
      "&addr3=" +
      addr3.trim() +
      "&postcode=" +
      postcode +
      "&addrID=" +
      addrID +
      "&country=" +
      country +
      "&remCIF=" +
      remCIF +
      "&name=" +
      name +
      "&txtRequest=changeDetails" +
      "&mobileNumber=" +
      cusNumber +
      "&reqType=VerSMSCode";
  }

  console.log(myURL + strData);
  ajaxCall(myURL, strData, "ver_SMS_code");
}

function verifySMSCodeResponse(res) {
  storage.setItem("vcMsg", res.msg);
  if (res.msg == undefined) {
    console.log("undefined message");
  }
  storage.removeItem("changenumbersms");
  console.log("---verifySMSCodeResponse ::: " + res.verifyCode);
  console.log("---verifySMSCodeResponse ::: " + typeof res.verifyCode);

  if (res.verifyCode == "0") {
    $(".check-icon").removeClass("hide");
    $(".loading-icon").addClass("hide");
    $(".btn-txt").text("Verified!");
    $("#verCodebtn").attr("disabled", false);
    $("#reSendCode").attr("disabled", false);
    $("#wrong_number").attr("rel", "modal:open");
    storage.setItem("txtDtlStatus", "complete");
    setTimeout(function () {
      window.location.href = "dashboard.html";
    }, 1500);
  } else {
    $(".loading-icon").addClass("hide");
    $(".btn-txt").text("Verify");
    $("#verCodebtn").attr("disabled", false);
    $("#reSendCode").attr("disabled", false);
    $("#wrong_number").attr("rel", "modal:open");
    $("#wrongVerfCode").html("Invalid verification code. Please try again.");
  }
}

function getCurrencyDashboard(country) {
  var myURL = bcremit + "parameters.aspx";
  var strData = "countryCode=" + country + "&reqType=getCurrency";
  console.log(myURL + strData);
  ajaxCall(myURL, strData, "currencyCodeDashboard");
}

function responseGetCurrencyDashboard(res) {
  if (res.rCode == "UK") {
    $("#dashboard_CCY").html("&#163;");
  } else if (res.rCode == "ES") {
    $("#dashboard_CCY").html("&#8364;");
  } else if (res.rCode == "PH") {
    $("#dashboard_CCY").html("&#8369;");
  }
  storage.setItem("currency_country", res.ccy);
  // hideProvider();
}

function fetchBankAccountDetailsSettings(country) {
  var myURL = bcremit + "parameters.aspx";
  var strData = "reqType=getBankDetails" + "&countryCode=" + country;
  console.log(myURL + strData);
  ajaxCall(myURL, strData, "fetchBankAccountDetailsSettingsResponses");
}

function fetchBankAccountDetailsSettingsResponse(res) {
  if (res.bank_name == "" || res.bank_name == null) {
    $("#Name").hide();
    $("#actNameSettings").removeClass("text-detail");
  }
  if (res.desc_value == "" || res.desc_value == null) {
    $("#Code").hide();
    $("#sCodeSettings").removeClass("text-detail");
  }
  if (res.account_no == "" || res.account_no == null) {
    $("#Number").hide();
    $("#acctNoSettings").removeClass("text-detail");
  }

  $("#actNameSettings").html(res.bank_name);
  $("#sCodeSettings").html(res.desc_value);
  $("#acctNoSettings").html(res.account_no);
  // hideProvider();
}

/*------------------------------------------------------------------------------
                      AJAX                                  
------------------------------------------------------------------------------*/
function ajaxCall(myURL, strData, callFrom) {
  var ip = myIP();
  strData += "&myIP=" + ip;
  console.log(myURL + "?" + strData);
  $.ajax({
    url: myURL,
    type: "Get",
    data: strData,
    dataType: "jsonp",
    jsonp: false,
    jsonpCallback: "myJsonMethod",
    success: function (response) {
      checkMaintenance();
      if (response) {
        var strRes = JSON.stringify(response);
        var res = eval("(" + strRes + ")");
        manageResponse(res, callFrom);
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
      checkMaintenance();
      $("#wait").css("display", "none");
    },
    async: false,
  });
}

function checkMaintenance() {
  $.ajax({
    url: url + "maintenance/",
    cors: true,
    secure: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
      "Content-Type": "application/json",
    },
    statusCode: {
      404: function () {
        console.log("Maintenance page is not found.");
      },
      200: function () {
        console.log("Maintenance page is found.");
        window.location.href = "maintenance_page.html";
      },
    },
  });
}

function manageResponse(res, callFrom) {
  if (callFrom == "history") {
    displayTransHistory(res);
  } else if (callFrom == "sendMoney") {
    var payType = $("#txtHPayType").val();
    sendMoneyResponse(res, payType);
  } else if (callFrom == "chgPwd") {
    changePwdResponse(res);
  } else if (callFrom == "logout") {
    logoutResponse(res);
  } else if (callFrom == "login") {
    loginResponse(res);
  } else if (callFrom == "myDetail") {
    responseMyDetail(res);
  } else if (callFrom == "updateMyDetail") {
    responseUpdateMyDetail(res);
  } else if (callFrom == "viewBeneDetail") {
    responseBeneDetail(res);
  } else if (callFrom == "updateBeneDetail") {
    responseUpdateBeneDetail(res);
  } else if (callFrom == "forgotpwd") {
    responseForgotPassword(res);
  } else if (callFrom == "postcode") {
    responsePostcodeLookup(res);
  } else if (callFrom == "custRegister3") {
    responsePart3(res);
  } else if (callFrom == "custRegister2") {
    responsePart2(res);
  } else if (callFrom == "custRegister1") {
    responsePart1(res);
  } else if (callFrom == "listOfBank") {
    responseBank(res);
  } else if (callFrom == "countryList") {
    responseCountry(res);
  } else if (callFrom == "beneList") {
    populateBene(res);
  } else if (callFrom == "deleteBene") {
    deleteBeneficiaryResponse(res);
  } else if (callFrom == "getTime") {
    getUserTimeResponse(res);
  } else if (callFrom == "beneSummary") {
    beneSummaryResponse(res);
  } else if (callFrom == "loginToken") {
    responseLoginToken(res);
  }else if (callFrom == "removeAccount") {
    responseRemoveAccount(res);
  } else if (callFrom == "spList") {
    responseListOfProvider(res);
  } else if (callFrom == "removebcpay") {
    responsehideProvider(res);
  } else if (callFrom == "checkCJ") {
    checkFromClearJunctionResponse(res);
  } else if (callFrom == "checkCJUpdate") {
    checkFromClearJunctionUpdateResponse(res);
  } else if (callFrom == "customFields") {
    responseSPCustomFields(res);
  } else if (callFrom == "bcPay") {
    var payType = $("#txtPayType").val();
    postBCPayResponse(res, payType);
  } else if (callFrom == "updateTrans") {
    updateTransactionResponse(res);
  } else if (callFrom == "calculate") {
    getRateResponse(res);
  } else if (callFrom == "acctNo") {
    getAcctNoResponse(res);
  } else if (callFrom == "appVersion") {
    getAppVersionResponse(res);
  } else if (callFrom == "currencyCode") {
    responseGetCurrency(res);
  } else if (callFrom == "send_code") {
    vCSendCodeResponse(res);
  } else if (callFrom == "re_send_code") {
    resendVerificationCodeResponse(res);
  } else if (callFrom == "getContacts") {
    getContactResponse(res);
  } else if (callFrom == "ver_SMS_code") {
    verifySMSCodeResponse(res);
  } else if (callFrom == "currencyCodeDashboard") {
    responseGetCurrencyDashboard(res);
  } else if (callFrom == "fetchBankAccountDetailsSettingsResponses") {
    fetchBankAccountDetailsSettingsResponse(res);
  } else if (callFrom == "sourceOfFunds") {
    getSourceofFundsResponse(res);
  } else if (callFrom == "checkBeneficiaryDetailsCall") {
    checkBeneficiaryDetailsResponse(res);
  } else if (callFrom == "relationshipbenecallback") {
    abv(res);
  } else if (callFrom == "countryOfResidence") {
    getCountryOfResidenceResponse(res);
  } else if (callFrom == "purposeCode") {
    getPurposeCodeResponse(res);
  } else if (callFrom == "completeProfileCountryOfResidence") {
    completeProfileGetCountryListResponse(res);
  } else if (callFrom == "completeProfileCountryOfResidenceBene") {
    GetCountryListBeneResponse(res);
  } else if (callFrom == "completeProfileCountryOfResidenceUpdateBene") {
    GetCountryListUpdateBeneResponse(res);
  } else if (callFrom == "getCountryFlags") {
    getCountryFlagsCcyResponse(res);
  } else if (callFrom == "getDeliveryOptionBasedOnCountryCall") {
    getDeliveryOptionBasedOnCountryResponse(res);
  } else if (callFrom == "getDeliveryOptionBasedOnCountryCreateCall") {
    getDeliveryOptionBasedOnCountryCreateResponse(res);
  } else {
    changePwdResponse(res);
  }
}

/*------------------------------------------------------------------------------
                      Misc                   
------------------------------------------------------------------------------*/
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function revformatNumeric(n) {
  return n.replace(/,/g, "");
}

function formatNumeric(n) {
  n = Number(n);
  n = Math.round(n * 100) / 100;

  return n.toFixed(2).replace(/./g, function (c, i, a) {
    return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
  });
}

function validateEmail(email) {
  var re =
    /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
  return re.test(email);
}

function alertUser(msg) {
  $("#msg").html(msg);
  $("#alertBox").css("display", "block");
}

function openWin(page) {
  var link = "";
  if (page == "terms") {
    link = url + "terms.aspx";
    cordova.InAppBrowser.open(link, "_blank", "location=yes");
  } else if (page == "tl_terms") {
    link = 'https://truelayer.com/enduser_tos'
    cordova.InAppBrowser.open(link, "_blank", "location=yes");
  } else if (page == "tl_privacy") {
    link = "https://truelayer.com/privacy"
    cordova.InAppBrowser.open(link, "_blank", "location=yes");
  } else if (page == "privacy") {
    link = url + "privacy.aspx";
    cordova.InAppBrowser.open(link, "_blank", "location=yes");
  } else if (page == "faq") {
    link = url + "faq.aspx";
    cordova.InAppBrowser.open(link, "_blank", "location=yes");
  } else if (page == "fb") {
    link = "https://m.me/bcremit";
    cordova.InAppBrowser.open(link, "_system", "location=yes");
  } else if (page == "gPlay") {
    link = "https://play.google.com/store/apps/details?id=my.com.ncore.bcremit&hl=en";
    cordova.InAppBrowser.open(link, "_system", "location=yes");
    $("#alertMe").hide();
  }
}

function myIP() {
  var ip = storage.getItem("ip");
  if (ip == "" || ip == null) {
    $.getJSON("https://api.ipify.org?format=jsonp&callback=?", function (data) {
      storage.setItem("ip", data.ip);
      console.log("index_myip::: " + storage.getItem("ip"));
    });
  }
  return ip;
}

function setDate() {
  var d = new Date();

  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var n = weekday[d.getDay()];
  var dateFormat =
    n +
    ", " +
    d
      .toLocaleDateString("en-au", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
      .replace(/\s/g, " ");
  return dateFormat;
}

function getPostCodeLookup(callFrom) {
  $("#wait").css("display", "block");
  $("#part3").hide();
  $("#MainBlock").hide();

  if (callFrom == "registration") {
    var postcode = $("#txtPostCode").val();
  } else {
    var postcode = $("#txtFDPostCode").val();
  }

  var errCount = 0;
  var errMsg = "";

  if (postcode.indexOf(forbiddenChar) > -1) {
    errCount++;
    errMsg +=
      errCount +
      ". Post code contains invalid character (" +
      forbiddenChar +
      ").<br/>";
  }

  if (errCount > 0) {
    alertUser(errMsg);
    $("#wait").css("display", "none");
    return;
  }

  var myURL = bcremit + "PostcodeLookup.aspx";
  var strData = "postcode=" + postcode;

  ajaxCall(myURL, strData, "postcode");
}

function toggle_password(target) {
  var d = document;
  var ctrl = d.getElementById(target);
  var img = d.getElementById(target + "-show");

  if (ctrl.type == "password") {
    ctrl.setAttribute("type", "text");
    img.setAttribute("src", "assets/images/eye-closed.png");
  } else {
    ctrl.setAttribute("type", "password");
    img.setAttribute("src", "assets/images/show-pass.png");
  }
}

function clearInputError(obj) {
  $("#" + obj).html("");
}

function closeAlert() {
  $("#alertMe").hide();
}

function showAlert(msg) {
  $("#alertMsg").html(msg);
  $("#alertMe").show();
}

function redirectMe() {
  var url = $("#txtGoTo").val();
  if (url == "#") {
    closeAlert();
  } else if (url == "x") {
    logout();
  } else if (url == "smsver") {
    vCSendCode(storage.getItem("cust_mob_num"));
  } else if (url == "sms_verification.html") {
    vCSendCode(storage.getItem("cust_mob_num"));
  } else {
    window.location.href = url;
  }
}

function closeAdvisory() {
  $("#advisory").hide();
}

function docCheck() {
  var tid = $("#txtHTID").val();
  var param =
    "txtTransID=" +
    tid +
    "&tokenKey=" +
    storage.getItem("tokenKey") +
    "&myIP=" +
    storage.getItem("ip");
  var link = url + "identity/zignsec_documentcheck.aspx?" + param;

  var ref = cordova.InAppBrowser.open(link, "_system", "location=yes");
  ref.addEventListener("loadstop", function (event) {
    if (event.url.match("close.html")) {
      ref.close();
      window.location.href = "transaction_history.html";
    }

    if (event.url.match("return.html")) {
      ref.close();
      window.location.href = "transaction_history.html";
    }
  });
}

function responsehideProvider(res) {
  var totalSP = res.totalSP;
  if (totalSP == "0") {
    console.log("zero");
    $(".n-bcpay").css("display", "none");
  }
}

function checkFromClearJunction() {
  var token = storage.getItem("tokenKey");
  var bene_Number = storage.getItem("CJ_bene_cifNumber");
  var bene_country = storage.getItem("CJ_bene_country");
  var cust_Number = storage.getItem("cifNumber");
  var sort_CodeOrIban = "";
  var bene_account_number = $("#txtAcctNoUKES").val();
  var bene_full_name =
    $("#txtBeneFName").val().trim() +
    "," +
    $("#txtBeneMName").val().trim() +
    "," +
    $("#txtBeneLName").val().trim();

  if (bene_country == "UK") {
    sort_CodeOrIban = $("#bene_sort_code").val();
  } else {
    sort_CodeOrIban = $("#bene_IBAN").val();
  }
  if (bene_account_number == "") {
    bene_account_number = "";
  }
  $("#disableCJ").attr("disabled", true);
  $(".btn-txt").text("Saving..");

  var myURL = bcremit + "parameters.aspx";
  var strData =
    "reqType=checkClearJunction&tokenKey=" +
    token +
    "&bene_country=" +
    bene_country +
    "&cust_Number=" +
    cust_Number +
    "&sort_Code=" +
    sort_CodeOrIban +
    "&bene_account_number=" +
    bene_account_number +
    "&bene_full_name=" +
    bene_full_name;
  ajaxCall(myURL, strData, "checkCJ");
}

function checkFromClearJunctionResponse(res) {
  if (res.status == 0 || res.msg == "Account number verified") {
    $(".loading-icon").addClass("hide");
    $(".btn-txt").text("Saved");
    $(".benetitle").html(res.msg);
    $(".benetitle").css("color", "green");
    setTimeout(function () {
      beneSignUp("03");
    }, 1500);
  } else if (res.status == -1) {
    $("#disableCJ").attr("disabled", false);
    $(".loading-icon").addClass("hide");
    $(".checkorSave").attr("onclick", "beneSignUp('03')");
    $(".btn-txt").text("Still save?");
    $(".benetitle").html("Invalid Account Number");
    $("#err14").html("Please enter beneficiary's account number.");
    $(".benetitle").css("color", "red");
  } else if (res.status == -2) {
    $("#disableCJ").attr("disabled", false);
    $(".loading-icon").addClass("hide");
    $(".checkorSave").attr("onclick", "beneSignUp('03')");
    $(".btn-txt").text("Still save?");
    $(".benetitle").html("Invalid Sort Code");
    $("#err12").html("Please enter beneficiary's sort code.");
    $(".benetitle").css("color", "red");
  } else if (res.status == -3) {
    $("#disableCJ").attr("disabled", false);
    $(".loading-icon").addClass("hide");
    $(".checkorSave").attr("onclick", "beneSignUp('03')");
    $(".btn-txt").text("Still save?");
    $(".benetitle").html("Invalid Account Number And Sort Code");
    $(".benetitle").css("color", "red");
  }
}

function checkFromClearJunctionUpdate() {
  var token = storage.getItem("tokenKey");
  var bene_country = storage.getItem("CJbeneCountry");
  var cust_Number = storage.getItem("cifNumber");
  var sort_CodeOrIban;
  var bene_account_number = $("#txtAcctNo").val();
  var bene_full_name =
    $("#txtBDFName").val().trim() +
    "," +
    $("#txtBDMName").val().trim() +
    "," +
    $("#txtBDLName").val().trim();

  if (bene_country == "UK") {
    sort_CodeOrIban = $("#UpdateBeneSortCode").val();
  } else {
    sort_CodeOrIban = $("#UpdateBeneIBAN").val();
  }
  if (bene_account_number == "") {
    bene_account_number = "";
  }
  $("#disableCJ").removeAttr("onclick");
  $(".btn-txt").text("Saving..");

  var myURL = bcremit + "parameters.aspx";
  var strData =
    "reqType=checkClearJunction&tokenKey=" +
    token +
    "&bene_country=" +
    bene_country +
    "&cust_Number=" +
    cust_Number +
    "&sort_Code=" +
    sort_CodeOrIban +
    "&bene_account_number=" +
    bene_account_number +
    "&bene_full_name=" +
    bene_full_name;

  ajaxCall(myURL, strData, "checkCJUpdate");
}

function checkFromClearJunctionUpdateResponse(res) {
  if (res.status == 0 || res.msg == "Account number verified") {
    $(".btn-txt").text("Saved");
    $(".benetitle").html(res.msg);
    $(".benetitle").css("color", "green");
    setTimeout(function () {
      updateBene("01");
    }, 1500);
  } else if (res.status == -1) {
    $("#disableCJ").attr("disabled", false);
    $(".btn-txt").text("Saved");
    $(".benetitle").html("Invalid Account Number");
    $("#errUKSEan").html("Please enter beneficiary's account number.");
    $(".benetitle").css("color", "red");
  } else if (res.status == -2) {
    $("#disableCJ").attr("disabled", false);
    $(".btn-txt").text("Saved");
    $(".benetitle").html("Invalid Sort Code");
    $("#errisortCode").html("Please enter beneficiary's sort code.");
    $(".benetitle").css("color", "red");
  } else if (res.status == -3) {
    $("#disableCJ").attr("disabled", false);
    $(".btn-txt").text("Saved");
    $(".benetitle").html("Invalid Account Number And Sort Code");
    $(".benetitle").css("color", "red");
  }
}
