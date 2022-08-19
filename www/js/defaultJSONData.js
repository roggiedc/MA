﻿function getCountry() {
    var jsonData = "{'country_list':[" +
                   "{'country_name':'Afghanistan','country_code':'AF'}," +
                   "{'country_name':'Åland Islands','country_code':'AX'}," +
                   "{'country_name':'Albania','country_code':'AL'}," +
                   "{'country_name':'Algeria','country_code':'DZ'}," +
                   "{'country_name':'American Samoa','country_code':'AS'}," +
                   "{'country_name':'Andorra','country_code':'AD'}," +
                   "{'country_name':'Angola','country_code':'AO'}," +
                   "{'country_name':'Anguilla','country_code':'AI'}," +
                   "{'country_name':'Antarctica','country_code':'AQ'}," +
                   "{'country_name':'Antigua and Barbuda','country_code':'AG'}," +
                   "{'country_name':'Argentina','country_code':'AR'}," +
                   "{'country_name':'Armenia','country_code':'AM'}," +
                   "{'country_name':'Aruba','country_code':'AW'}," +
                   "{'country_name':'Australia','country_code':'AU'}," +
                   "{'country_name':'Austria','country_code':'AT'}," +
                   "{'country_name':'Azerbaijan','country_code':'AZ'}," +
                   "{'country_name':'Bahamas','country_code':'BS'}," +
                   "{'country_name':'Bahrain','country_code':'BH'}," +
                   "{'country_name':'Bangladesh','country_code':'BD'}," +
                   "{'country_name':'Barbados','country_code':'BB'}," +
                   "{'country_name':'Belarus','country_code':'BY'}," +
                   "{'country_name':'Belgium','country_code':'BE'}," +
                   "{'country_name':'Belize','country_code':'BZ'}," +
                   "{'country_name':'Benin','country_code':'BJ'}," +
                   "{'country_name':'Bermuda','country_code':'BM'}," +
                   "{'country_name':'Bhutan','country_code':'BT'}," +
                   "{'country_name':'Bolivia','country_code':'BO'}," +
                   "{'country_name':'Bonaire','country_code':'BQ'}," +
                   "{'country_name':'Bosnia and Herzegovina','country_code':'BA'}," +
                   "{'country_name':'Botswana','country_code':'BW'}," +
                   "{'country_name':'Bouvet Island','country_code':'BV'}," +
                   "{'country_name':'Brazil','country_code':'BR'}," +
                   "{'country_name':'British Indian Ocean Territory','country_code':'IO'}," +
                   "{'country_name':'Brunei Darussalam','country_code':'BN'}," +
                   "{'country_name':'Bulgaria','country_code':'BG'}," +
                   "{'country_name':'Burkina Faso','country_code':'BF'}," +
                   "{'country_name':'Burundi','country_code':'BI'}," +
                   "{'country_name':'Cambodia','country_code':'KH'}," +
                   "{'country_name':'Cameroon','country_code':'CM'}," +
                   "{'country_name':'Canada','country_code':'CA'}," +
                   "{'country_name':'Cape Verde','country_code':'CV'}," +
                   "{'country_name':'Cayman Islands','country_code':'KY'}," +
                   "{'country_name':'Central African Republic','country_code':'CF'}," +
                   "{'country_name':'Chad','country_code':'TD'}," +
                   "{'country_name':'Chile','country_code':'CL'}," +
                   "{'country_name':'China','country_code':'CN'}," +
                   "{'country_name':'Christmas Island','country_code':'CX'}," +
                   "{'country_name':'Cocos (Keeling) Islands','country_code':'CC'}," +
                   "{'country_name':'Colombia','country_code':'CO'}," +
                   "{'country_name':'Comoros','country_code':'KM'}," +
                   "{'country_name':'Congo','country_code':'CG'}," +
                   "{'country_name':'Congo the Democratic Republic','country_code':'CD'}," +
                   "{'country_name':'Cook Islands','country_code':'CK'}," +
                   "{'country_name':'Costa Rica','country_code':'CR'}," +
                   "{'country_name':'Côte d*Ivoire','country_code':'CI'}," +
                   "{'country_name':'Croatia','country_code':'HR'}," +
                   "{'country_name':'Cuba','country_code':'CU'}," +
                   "{'country_name':'Curaçao','country_code':'CW'}," +
                   "{'country_name':'Cyprus','country_code':'CY'}," +
                   "{'country_name':'Czech Republic','country_code':'CZ'}," +
                   "{'country_name':'Denmark','country_code':'DK'}," +
                   "{'country_name':'Djibouti','country_code':'DJ'}," +
                   "{'country_name':'Dominica','country_code':'DM'}," +
                   "{'country_name':'Dominican Republic','country_code':'DO'}," +
                   "{'country_name':'Ecuador','country_code':'EC'}," +
                   "{'country_name':'Egypt','country_code':'EG'}," +
                   "{'country_name':'El Salvador','country_code':'SV'}," +
                   "{'country_name':'Equatorial Guinea','country_code':'GQ'}," +
                   "{'country_name':'Eritrea','country_code':'ER'}," +
                   "{'country_name':'Estonia','country_code':'EE'}," +
                   "{'country_name':'Ethiopia','country_code':'ET'}," +
                   "{'country_name':'Falkland Islands (Malvinas)','country_code':'FK'}," +
                   "{'country_name':'Faroe Islands','country_code':'FO'}," +
                   "{'country_name':'Fiji','country_code':'FJ'}," +
                   "{'country_name':'Finland','country_code':'FI'}," +
                   "{'country_name':'France','country_code':'FR'}," +
                   "{'country_name':'French Guiana','country_code':'GF'}," +
                   "{'country_name':'French Polynesia','country_code':'PF'}," +
                   "{'country_name':'French Southern Territories','country_code':'TF'}," +
                   "{'country_name':'Gabon','country_code':'GA'}," +
                   "{'country_name':'Gambia','country_code':'GM'}," +
                   "{'country_name':'Georgia','country_code':'GE'}," +
                   "{'country_name':'Germany','country_code':'DE'}," +
                   "{'country_name':'Ghana','country_code':'GH'}," +
                   "{'country_name':'Gibraltar','country_code':'GI'}," +
                   "{'country_name':'Greece','country_code':'GR'}," +
                   "{'country_name':'Greenland','country_code':'GL'}," +
                   "{'country_name':'Grenada','country_code':'GD'}," +
                   "{'country_name':'Guadeloupe','country_code':'GP'}," +
                   "{'country_name':'Guam','country_code':'GU'}," +
                   "{'country_name':'Guatemala','country_code':'GT'}," +
                   "{'country_name':'Guernsey','country_code':'GG'}," +
                   "{'country_name':'Guinea','country_code':'GN'}," +
                   "{'country_name':'Guinea-Bissau','country_code':'GW'}," +
                   "{'country_name':'Guyana','country_code':'GY'}," +
                   "{'country_name':'Haiti','country_code':'HT'}," +
                   "{'country_name':'Heard Island and McDonald Islands','country_code':'HM'}," +
                   "{'country_name':'Holy See (Vatican City State)','country_code':'VA'}," +
                   "{'country_name':'Honduras','country_code':'HN'}," +
                   "{'country_name':'Hong Kong','country_code':'HK'}," +
                   "{'country_name':'Hungary','country_code':'HU'}," +
                   "{'country_name':'Iceland','country_code':'IS'}," +
                   "{'country_name':'India','country_code':'IN'}," +
                   "{'country_name':'Indonesia','country_code':'ID'}," +
                   "{'country_name':'Iran','country_code':'IR'}," +
                   "{'country_name':'Iraq','country_code':'IQ'}," +
                   "{'country_name':'Ireland','country_code':'IE'}," +
                   "{'country_name':'Isle of Man','country_code':'IM'}," +
                   "{'country_name':'Italy','country_code':'IT'}," +
                   "{'country_name':'Jamaica','country_code':'JM'}," +
                   "{'country_name':'Japan','country_code':'JP'}," +
                   "{'country_name':'Jersey','country_code':'JE'}," +
                   "{'country_name':'Jordan','country_code':'JO'}," +
                   "{'country_name':'Kazakhstan','country_code':'KZ'}," +
                   "{'country_name':'Kenya','country_code':'KE'}," +
                   "{'country_name':'Kiribati','country_code':'KI'}," +
                   "{'country_name':'Korea, Democratic People*s Republic of','country_code':'KP'}," +
                   "{'country_name':'Korea, Republic of','country_code':'KR'}," +
                   "{'country_name':'Kuwait','country_code':'KW'}," +
                   "{'country_name':'Kyrgyzstan','country_code':'KG'}," +
                   "{'country_name':'Lao People*s Democratic Republic','country_code':'LA'}," +
                   "{'country_name':'Latvia','country_code':'LV'}," +
                   "{'country_name':'Lebanon','country_code':'LB'}," +
                   "{'country_name':'Lesotho','country_code':'LS'}," +
                   "{'country_name':'Liberia','country_code':'LR'}," +
                   "{'country_name':'Libya','country_code':'LY'}," +
                   "{'country_name':'Liechtenstein','country_code':'LI'}," +
                   "{'country_name':'Lithuania','country_code':'LT'}," +
                   "{'country_name':'Luxembourg','country_code':'LU'}," +
                   "{'country_name':'Macao','country_code':'MO'}," +
                   "{'country_name':'Macedonia, the Former Yugoslav Republic of','country_code':'MK'}," +
                   "{'country_name':'Madagascar','country_code':'MG'}," +
                   "{'country_name':'Malawi','country_code':'MW'}," +
                   "{'country_name':'Malaysia','country_code':'MY'}," +
                   "{'country_name':'Maldives','country_code':'MV'}," +
                   "{'country_name':'Mali','country_code':'ML'}," +
                   "{'country_name':'Malta','country_code':'MT'}," +
                   "{'country_name':'Marshall Islands','country_code':'MH'}," +
                   "{'country_name':'Martinique','country_code':'MQ'}," +
                   "{'country_name':'Mauritania','country_code':'MR'}," +
                   "{'country_name':'Mauritius','country_code':'MU'}," +
                   "{'country_name':'Mayotte','country_code':'YT'}," +
                   "{'country_name':'Mexico','country_code':'MX'}," +
                   "{'country_name':'Micronesia, Federated States of','country_code':'FM'}," +
                   "{'country_name':'Moldova, Republic of','country_code':'MD'}," +
                   "{'country_name':'Monaco','country_code':'MC'}," +
                   "{'country_name':'Mongolia','country_code':'MN'}," +
                   "{'country_name':'Montenegro','country_code':'ME'}," +
                   "{'country_name':'Montserrat','country_code':'MS'}," +
                   "{'country_name':'Morocco','country_code':'MA'}," +
                   "{'country_name':'Mozambique','country_code':'MZ'}," +
                   "{'country_name':'Myanmar','country_code':'MM'}," +
                   "{'country_name':'Namibia','country_code':'NA'}," +
                   "{'country_name':'Nauru','country_code':'NR'}," +
                   "{'country_name':'Nepal','country_code':'NP'}," +
                   "{'country_name':'Netherlands','country_code':'NL'}," +
                   "{'country_name':'New Caledonia','country_code':'NC'}," +
                   "{'country_name':'New Zealand','country_code':'NZ'}," +
                   "{'country_name':'Nicaragua','country_code':'NI'}," +
                   "{'country_name':'Niger','country_code':'NE'}," +
                   "{'country_name':'Nigeria','country_code':'NG'}," +
                   "{'country_name':'Niue','country_code':'NU'}," +
                   "{'country_name':'Norfolk Island','country_code':'NF'}," +
                   "{'country_name':'Northern Mariana Islands','country_code':'MP'}," +
                   "{'country_name':'Norway','country_code':'NO'}," +
                   "{'country_name':'Oman','country_code':'OM'}," +
                   "{'country_name':'Pakistan','country_code':'PK'}," +
                   "{'country_name':'Palau','country_code':'PW'}," +
                   "{'country_name':'Palestine, State of','country_code':'PS'}," +
                   "{'country_name':'Panama','country_code':'PA'}," +
                   "{'country_name':'Papua New Guinea','country_code':'PG'}," +
                   "{'country_name':'Paraguay','country_code':'PY'}," +
                   "{'country_name':'Peru','country_code':'PE'}," +
                   "{'country_name':'Philippines','country_code':'PH'}," +
                   "{'country_name':'Pitcairn','country_code':'PN'}," +
                   "{'country_name':'Poland','country_code':'PL'}," +
                   "{'country_name':'Portugal','country_code':'PT'}," +
                   "{'country_name':'Puerto Rico','country_code':'PR'}," +
                   "{'country_name':'Qatar','country_code':'QA'}," +
                   "{'country_name':'Réunion','country_code':'RE'}," +
                   "{'country_name':'Romania','country_code':'RO'}," +
                   "{'country_name':'Russian Federation','country_code':'RU'}," +
                   "{'country_name':'Rwanda','country_code':'RW'}," +
                   "{'country_name':'Saint Barthélemy','country_code':'BL'}," +
                   "{'country_name':'Saint Helena, Ascension and Tristan da Cunha','country_code':'SH'}," +
                   "{'country_name':'Saint Kitts and Nevis','country_code':'KN'}," +
                   "{'country_name':'Saint Lucia','country_code':'LC'}," +
                   "{'country_name':'Saint Martin (French part)','country_code':'MF'}," +
                   "{'country_name':'Saint Pierre and Miquelon','country_code':'PM'}," +
                   "{'country_name':'Saint Vincent and the Grenadines','country_code':'VC'}," +
                   "{'country_name':'Samoa','country_code':'WS'}," +
                   "{'country_name':'San Marino','country_code':'SM'}," +
                   "{'country_name':'Sao Tome and Principe','country_code':'ST'}," +
                   "{'country_name':'Saudi Arabia','country_code':'SA'}," +
                   "{'country_name':'Senegal','country_code':'SN'}," +
                   "{'country_name':'Serbia','country_code':'RS'}," +
                   "{'country_name':'Seychelles','country_code':'SC'}," +
                   "{'country_name':'Sierra Leone','country_code':'SL'}," +
                   "{'country_name':'Singapore','country_code':'SG'}," +
                   "{'country_name':'Sint Maarten (Dutch part)','country_code':'SX'}," +
                   "{'country_name':'Slovakia','country_code':'SK'}," +
                   "{'country_name':'Slovenia','country_code':'SI'}," +
                   "{'country_name':'Solomon Islands','country_code':'SB'}," +
                   "{'country_name':'Somalia','country_code':'SO'}," +
                   "{'country_name':'South Africa','country_code':'ZA'}," +
                   "{'country_name':'South Georgia and the South Sandwich Islands','country_code':'GS'}," +
                   "{'country_name':'South Sudan','country_code':'SS'}," +
                   "{'country_name':'Spain','country_code':'ES'}," +
                   "{'country_name':'Sri Lanka','country_code':'LK'}," +
                   "{'country_name':'Sudan','country_code':'SD'}," +
                   "{'country_name':'Suriname','country_code':'SR'}," +
                   "{'country_name':'Svalbard and Jan Mayen','country_code':'SJ'}," +
                   "{'country_name':'Swaziland','country_code':'SZ'}," +
                   "{'country_name':'Sweden','country_code':'SE'}," +
                   "{'country_name':'Switzerland','country_code':'CH'}," +
                   "{'country_name':'Syrian Arab Republic','country_code':'SY'}," +
                   "{'country_name':'Taiwan, Province of China','country_code':'TW'}," +
                   "{'country_name':'Tajikistan','country_code':'TJ'}," +
                   "{'country_name':'Tanzania, United Republic of','country_code':'TZ'}," +
                   "{'country_name':'Thailand','country_code':'TH'}," +
                   "{'country_name':'Timor-Leste','country_code':'TL'}," +
                   "{'country_name':'Togo','country_code':'TG'}," +
                   "{'country_name':'Tokelau','country_code':'TK'}," +
                   "{'country_name':'Tonga','country_code':'TO'}," +
                   "{'country_name':'Trinidad and Tobago','country_code':'TT'}," +
                   "{'country_name':'Tunisia','country_code':'TN'}," +
                   "{'country_name':'Turkey','country_code':'TR'}," +
                   "{'country_name':'Turkmenistan','country_code':'TM'}," +
                   "{'country_name':'Turks and Caicos Islands','country_code':'TC'}," +
                   "{'country_name':'Tuvalu','country_code':'TV'}," +
                   "{'country_name':'Uganda','country_code':'UG'}," +
                   "{'country_name':'Ukraine','country_code':'UA'}," +
                   "{'country_name':'United Arab Emirates','country_code':'AE'}," +
                   "{'country_name':'United Kingdom','country_code':'UK'}," +
                   "{'country_name':'United States','country_code':'US'}," +
                   "{'country_name':'United States Minor Outlying Islands','country_code':'UM'}," +
                   "{'country_name':'Uruguay','country_code':'UY'}," +
                   "{'country_name':'Uzbekistan','country_code':'UZ'}," +
                   "{'country_name':'Vanuatu','country_code':'VU'}," +
                   "{'country_name':'Venezuela, Bolivarian Republic of','country_code':'VE'}," +
                   "{'country_name':'VietNam','country_code':'VN'}," +
                   "{'country_name':'Virgin Islands, British','country_code':'VG'}," +
                   "{'country_name':'Virgin Islands, U.S.','country_code':'VI'}," +
                   "{'country_name':'Wallis and Futuna','country_code':'WF'}," +
                   "{'country_name':'Western Sahara','country_code':'EH'}," +
                   "{'country_name':'Yemen','country_code':'YE'}," +
                   "{'country_name':'Zambia','country_code':'ZM'}," +
                   "{'country_name':'Zimbabwe','country_code':'ZW'}" +
                   "]}";

    return jsonData;
}

function getEWalletBank() {
    var bankData = "{'bank_list':[" +
        "{'bic':'109-181213-009215','bank_name':'GCASH (G-XHANGE INC)'}," +
        "{'bic':'109-181213-009225','bank_name':'PAYMAYA PHILS INC'}," +
        "{'bic':'109-200610-009223','bank_name':'COINS.PH'}," +
        "]}";

    return bankData;
}

function getBank() {
    var bankData = "{'bank_list':[" +
        "{'bic':'109-100510-001054','bank_name':'METROBANK'}," +
        "{'bic':'109-010101-009204','bank_name':'BDO - BANCO DE ORO'}," +
        "{'bic':'109-181230-009235','bank_name':'BDO KABAYAN SAVINGS'}," +
        "{'bic':'109-120113-000077','bank_name':'BPI - BANK OF THE PHILIPPINE ISLANDS'}," +
        "{'bic':'109-120113-000078','bank_name':'BPI FAMILY BANK'}," +
        "{'bic':'109-120113-000087','bank_name':'CHINA BANK'}," +
        "{'bic':'109-010101-009206','bank_name':'CHINA BANK SAVINGS'}," +
        "{'bic':'109-120116-000494','bank_name':'RCBC - RIZAL COMMERCIAL BANKING CORPORATION'}," +
        "{'bic':'109-120116-000462','bank_name':'PNB - PHILIPPINE NATIONAL BANK'}," +
        "{'bic':'109-120116-000406','bank_name':'LBP - LAND BANK OF THE PHILIPPINES'}," +
        "{'bic':'109-120113-000241','bank_name':'UNION BANK OF THE PHILIPPINES'}," +
        "{'bic':'109-120113-000348','bank_name':'AL AMANAH ISLAMIC INVESTMENT BANK'}," +
        "{'bic':'109-200610-009226','bank_name':'ALLBANK'}," +
        "{'bic':'109-181213-009208','bank_name':'ANZ BANK'}," +
        "{'bic':'109-120116-000522','bank_name':'ASIA UNITED BANK'}," +
        "{'bic':'109-181213-009211','bank_name':'BANGKOK BANK PUBLIC CO LTD'}," +
        "{'bic':'109-181213-009209','bank_name':'BANK OF AMERICA'}," +
        "{'bic':'109-181213-009210','bank_name':'BANK OF CHINA'}," +
        "{'bic':'109-120113-000345','bank_name':'BDO NETWORK BANK'}," +
        "{'bic':'109-181213-009212','bank_name':'BDO PRIVATE BANK'}," +
        "{'bic':'109-120113-000063','bank_name':'BOC - BANK OF COMMERCE'}," +
        "{'bic':'109-200610-009220','bank_name':'BOF, INC  (A Rural Bank) - (BANK OF Florida)'}," +
        "{'bic':'109-200610-009224','bank_name':'BPI DIRECT BANKO'}," +
        "{'bic':'109-200610-009227','bank_name':'CEBUANA LHUILLIER RURAL BANK INC'}," +
        "{'bic':'109-120113-000085','bank_name':'CENTURY SAVINGS BANK'}," +
        "{'bic':'109-200610-009225','bank_name':'CIMB BANK PHILIPPINES, INC.'}," +
        "{'bic':'109-120113-000282','bank_name':'CITIBANK'}," +
        "{'bic':'109-120113-000091','bank_name':'CITY SAVINGS BANK'}," +
        "{'bic':'109-120113-000088','bank_name':'CTBC BANK ( FORMER CHINA TRUST)'}," +
        "{'bic':'109-110915-000002','bank_name':'DBP - DEVELOPMENT BANK OF THE PHILIPPINES'}," +
        "{'bic':'109-200610-009223','bank_name':'COINS.PH'}," +
        "{'bic':'109-181213-009213','bank_name':'DEUTSCHE BANK'}," +
        "{'bic':'109-200610-009222','bank_name':'DUNGGANON BANK'}," +
        "{'bic':'109-120113-000284','bank_name':'EAST WEST BANK'}," +
        "{'bic':'109-200610-009228','bank_name':'EASTWEST RURAL BANK'}," +
        "{'bic':'109-010101-009205','bank_name':'EQUICOM SAVINGS BANK INC'}," +
        "{'bic':'109-181213-009214','bank_name':'FIRST CONSOLIDATED BANK'}," +
        "{'bic':'109-181213-009215','bank_name':'GCASH (G-XHANGE INC)'}," +
        "{'bic':'109-120116-000382','bank_name':'HSBC - HONGKONG AND SHANGHAI BANKING CORPORATION'}," +
        "{'bic':'109-181213-009216','bank_name':'INDUSTRIAL BANK OF KOREA'}," +
        "{'bic':'109-181213-009217','bank_name':'ING BANK N.V.'}," +
        "{'bic':'109-181213-009218','bank_name':'ISLA BANK INC.'}," +
        "{'bic':'109-181213-009220','bank_name':'JP MORGAN CHASE BANK'}," +
        "{'bic':'109-181213-009219','bank_name':'KEB HANA'}," +
        "{'bic':'109-181213-009221','bank_name':'MALAYAN BANK SAVINGS AND MORTGAGE BANK INC (MALAYAN SVGS)'}," +
        "{'bic':'109-120116-000418','bank_name':'MAYBANK PHILIPPINES INC (PNB Republic)'}," +
        "{'bic':'109-181213-009222','bank_name':'MEGA INTL COMML BANK CO LTD (ICBC)'}," +
        "{'bic':'109-181213-009223','bank_name':'MIZUHO BANK LTD  (FUJI BANK)'}," +
        "{'bic':'109-181213-009231','bank_name':'MUFG BANK LTD (BANK OF TOKYO)'}," +
        "{'bic':'109-181213-009224','bank_name':'OMNIPAY INC'}," +
        "{'bic':'109-181213-009226','bank_name':'PARTNER RURAL BANK (COTABATO) INC'}," +
        "{'bic':'109-181213-009225','bank_name':'PAYMAYA PHILS INC'}," +
        "{'bic':'109-120116-000440','bank_name':'PBCOM - PHILIPPINE BANK OF COMMUNICATIONS'}," +
        "{'bic':'109-120113-000285','bank_name':'PHIL BUSINESS BANK'}," +
        "{'bic':'109-120116-000453','bank_name':'PHILIPPINE VETERANS BANK'}," +
        "{'bic':'109-120116-000452','bank_name':'PHILTRUST CO'}," +
        "{'bic':'109-170727-009207','bank_name':'PNB SAVINGS BANK (FIRST ALLIED DEVT BANK)'}," +
        "{'bic':'109-120116-000467','bank_name':'PREMIERE BANK'}," +
        "{'bic':'109-120113-000302','bank_name':'PRODUCERS SAVINGS BANK CORP'}," +
        "{'bic':'109-120117-000540','bank_name':'PSBANK - PHILIPPINE SAVINGS BANK'}," +
        "{'bic':'109-200610-009221','bank_name':'QUEZON CAPITAL RURAL BANK INC'}," +
        "{'bic':'109-120116-00048','bank_name':'RANG-AY RURAL Bank'}," +
        "{'bic':'109-120113-000257','bank_name':'ROBINSONS BANK CORPORATION'}," +
        "{'bic':'109-120113-000215','bank_name':'SECURITY BANK CORPORATION'}," +
        "{'bic':'109-181213-009227','bank_name':'SHINHAN BANK'}," +
        "{'bic':'109-120113-000357','bank_name':'STERLING BANK OF ASIA'}," +
        "{'bic':'109-181213-009228','bank_name':'SUMITOMO MITSUI BANKING CORP'}," +
        "{'bic':'109-181213-009229','bank_name':'SUN SAVINGS BANK INC'}," +
        "{'bic':'109-181213-009230','bank_name':'THE STANDARD CHARTERED BANK'}," +
        "{'bic':'109-120113-000239','bank_name':'UCPB - UNITED COCONUT PLANTERS BANK'}," +
        "{'bic':'109-120113-000240','bank_name':'UCPB SAVINGS BANK'}," +
        "{'bic':'109-181213-009232','bank_name':'UNITED OVERSEAS BANK PHILIPPINES'}," +
        "{'bic':'109-181213-009233','bank_name':'WEALTH DEVELOPMENT BANK'}," +
        "{'bic':'109-181213-009234','bank_name':'YUANTA SAVINGS BANK PHILS INC (Tongyang)'}" +
        "]}";

    return bankData;
}