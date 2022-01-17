
const airports = [
  {
    code: "AGP",
    lat: "36.6749",
    lon: "-4.49298",
    name: "Malaga Airport",
    direct_flights: "106"
  },
  {
    code: "AKL",
    lat: "-37.0085",
    lon: "174.782",
    name: "Auckland International Airport",
    direct_flights: "52"
  },
  {
    code: "ALC",
    lat: "38.2844",
    lon: "-0.5576",
    name: "Alicante Airport",
    direct_flights: "91"
  },
  {
    code: "ALG",
    lat: "36.6993",
    lon: "3.21935",
    name: "Houari Boumediene Airport",
    direct_flights: "62"
  },
  {
    code: "AMM",
    lat: "31.7231",
    lon: "35.9936",
    name: "Queen Alia International Airport",
    direct_flights: "62"
  },
  {
    code: "AMS",
    lat: "52.3122",
    lon: "4.77511",
    name: "Schiphol Airport",
    direct_flights: "284"
  },
  {
    code: "ANC",
    lat: "61.1767",
    lon: "-149.961",
    name: "Anchorage International Airport",
    direct_flights: "62"
  },
  {
    code: "ARN",
    lat: "59.6521",
    lon: "17.9317",
    name: "Arlanda Airport",
    direct_flights: "126"
  },
  {
    code: "ATH",
    lat: "37.8937",
    lon: "23.7235",
    name: "Eleftherios Venizelos International Airport",
    direct_flights: "117"
  },
  {
    code: "ATL",
    lat: "33.6558",
    lon: "-84.4333",
    name: "Hartsfield-Jackson Atlanta International Airport",
    direct_flights: "253"
  },
  {
    code: "AUH",
    lat: "24.4331",
    lon: "54.6489",
    name: "Abu Dhabi International Airport",
    direct_flights: "76"
  },
  {
    code: "AUS",
    lat: "30.2027",
    lon: "-97.6653",
    name: "Austin-Bergstrom International Airport",
    direct_flights: "50"
  },
  {
    code: "AYT",
    lat: "36.9022",
    lon: "30.7917",
    name: "Antalya Airport",
    direct_flights: "51"
  },
  {
    code: "BAH",
    lat: "26.2736",
    lon: "50.6234",
    name: "Bahrain International Airport",
    direct_flights: "56"
  },
  {
    code: "BCN",
    lat: "41.3006",
    lon: "2.07976",
    name: "Barcelona International Airport",
    direct_flights: "145"
  },
  {
    code: "BEY",
    lat: "33.825",
    lon: "35.4925",
    name: "Beirut International Airport",
    direct_flights: "51"
  },
  {
    code: "BGY",
    lat: "45.6664",
    lon: "9.699",
    name: "Orio Al Serio Airport",
    direct_flights: "70"
  },
  {
    code: "BHX",
    lat: "52.4531",
    lon: "-1.73847",
    name: "Birmingham International Airport",
    direct_flights: "103"
  },
  {
    code: "BKK",
    lat: "13.9144",
    lon: "100.608",
    name: "Bangkok International Airport",
    direct_flights: "132"
  },
  {
    code: "BLQ",
    lat: "44.5345",
    lon: "11.2903",
    name: "Bologna Airport",
    direct_flights: "52"
  },
  {
    code: "BNA",
    lat: "36.1342",
    lon: "-86.6682",
    name: "Nashville International Airport",
    direct_flights: "53"
  },
  {
    code: "BNE",
    lat: "-27.3589",
    lon: "153.122",
    name: "Brisbane International Airport",
    direct_flights: "62"
  },
  {
    code: "BOG",
    lat: "4.69895",
    lon: "-74.1435",
    name: "Eldorado International Airport",
    direct_flights: "64"
  },
  {
    code: "BOM",
    lat: "19.0932",
    lon: "72.8654",
    name: "Chhatrapati Shivaji International Airport",
    direct_flights: "86"
  },
  {
    code: "BOS",
    lat: "42.3717",
    lon: "-71.0281",
    name: "Gen E L Logan International Airport",
    direct_flights: "113"
  },
  {
    code: "BRS",
    lat: "51.3848",
    lon: "-2.70526",
    name: "Bristol International Airport",
    direct_flights: "73"
  },
  {
    code: "BRU",
    lat: "50.899",
    lon: "4.4859",
    name: "Brussels Airport",
    direct_flights: "186"
  },
  {
    code: "BSL",
    lat: "47.5998",
    lon: "7.532",
    name: "Euroairport Basel-Mulhouse-Freiburg",
    direct_flights: "67"
  },
  {
    code: "BUD",
    lat: "47.4453",
    lon: "19.2195",
    name: "Ferihegy Airport",
    direct_flights: "102"
  },
  {
    code: "BWI",
    lat: "39.1841",
    lon: "-76.6745",
    name: "Baltimore-Washington International Thurgood Mars",
    direct_flights: "79"
  },
  {
    code: "CAI",
    lat: "30.1206",
    lon: "31.4078",
    name: "Cairo International Airport",
    direct_flights: "92"
  },
  {
    code: "CAN",
    lat: "23.3925",
    lon: "113.299",
    name: "Baiyun Airport",
    direct_flights: "111"
  },
  {
    code: "CCS",
    lat: "10.6053",
    lon: "-66.9881",
    name: "Simon Bolivar International Airport",
    direct_flights: "59"
  },
  {
    code: "CDG",
    lat: "49.0175",
    lon: "2.5564",
    name: "Charles de Gaulle International Airport",
    direct_flights: "310"
  },
  {
    code: "CGK",
    lat: "-6.11964",
    lon: "106.656",
    name: "Jakarta International Airport",
    direct_flights: "51"
  },
  {
    code: "CGN",
    lat: "50.8784",
    lon: "7.12293",
    name: "Cologne Bonn Airport",
    direct_flights: "129"
  },
  {
    code: "CLE",
    lat: "41.4115",
    lon: "-81.8339",
    name: "Hopkins International Airport",
    direct_flights: "102"
  },
  {
    code: "CLT",
    lat: "35.2226",
    lon: "-80.946",
    name: "Douglas International Airport",
    direct_flights: "133"
  },
  {
    code: "CMN",
    lat: "33.365",
    lon: "-7.5817",
    name: "Mohamed V Airport",
    direct_flights: "74"
  },
  {
    code: "CPH",
    lat: "55.6205",
    lon: "12.6495",
    name: "Copenhagen Airport",
    direct_flights: "136"
  },
  {
    code: "CTU",
    lat: "30.5775",
    lon: "103.941",
    name: "Chengdushuang Liu Airport",
    direct_flights: "62"
  },
  {
    code: "CUN",
    lat: "21.0406",
    lon: "-86.8744",
    name: "Cancun Airport",
    direct_flights: "68"
  },
  {
    code: "CVG",
    lat: "39.0571",
    lon: "-84.6625",
    name: "Greater Cincinnati International Airport",
    direct_flights: "115"
  },
  {
    code: "DAM",
    lat: "33.4139",
    lon: "36.5178",
    name: "Damascus International Airport",
    direct_flights: "52"
  },
  {
    code: "DCA",
    lat: "38.849",
    lon: "-77.0438",
    name: "Washington National Airport",
    direct_flights: "77"
  },
  {
    code: "DEL",
    lat: "28.5603",
    lon: "77.1027",
    name: "Indira Gandhi International Airport",
    direct_flights: "95"
  },
  {
    code: "DEN",
    lat: "39.8396",
    lon: "-104.672",
    name: "Denver International Airport",
    direct_flights: "162"
  },
  {
    code: "DFW",
    lat: "32.9222",
    lon: "-97.0409",
    name: "Fort Worth International Airport",
    direct_flights: "179"
  },
  {
    code: "DME",
    lat: "55.4025",
    lon: "37.9136",
    name: "Domodedovo Airport",
    direct_flights: "165"
  },
  {
    code: "DOH",
    lat: "25.2592",
    lon: "51.5658",
    name: "Doha International Airport",
    direct_flights: "87"
  },
  {
    code: "DTW",
    lat: "42.2327",
    lon: "-83.3412",
    name: "Detroit Metropolitan Wayne County Airport",
    direct_flights: "161"
  },
  {
    code: "DUB",
    lat: "53.4272",
    lon: "-6.24418",
    name: "Dublin Airport",
    direct_flights: "167"
  },
  {
    code: "DUS",
    lat: "51.2794",
    lon: "6.76481",
    name: "Dusseldorf International Airport",
    direct_flights: "167"
  },
  {
    code: "DXB",
    lat: "25.2509",
    lon: "55.3629",
    name: "Dubai International Airport",
    direct_flights: "170"
  },
  {
    code: "EDI",
    lat: "55.9486",
    lon: "-3.36431",
    name: "Edinburgh International Airport",
    direct_flights: "87"
  },
  {
    code: "EMA",
    lat: "52.8258",
    lon: "-1.33094",
    name: "East Midlands International Airport",
    direct_flights: "67"
  },
  {
    code: "ESB",
    lat: "40.1289",
    lon: "32.9961",
    name: "Esenboga Airport",
    direct_flights: "50"
  },
  {
    code: "EWR",
    lat: "40.6924",
    lon: "-74.1843",
    name: "Newark International Airport",
    direct_flights: "220"
  },
  {
    code: "FAO",
    lat: "37.0154",
    lon: "-7.97197",
    name: "Faro Airport",
    direct_flights: "58"
  },
  {
    code: "FCO",
    lat: "41.8026",
    lon: "12.2551",
    name: "Leonardo da Vinci International Airport",
    direct_flights: "181"
  },
  {
    code: "FLL",
    lat: "26.0722",
    lon: "-80.1354",
    name: "Fort Lauderdale Hollywood International Airport",
    direct_flights: "108"
  },
  {
    code: "FRA",
    lat: "50.0483",
    lon: "8.57041",
    name: "Frankfurt International Airport",
    direct_flights: "337"
  },
  {
    code: "GLA",
    lat: "55.8646",
    lon: "-4.43234",
    name: "Glasgow International Airport",
    direct_flights: "67"
  },
  {
    code: "GRO",
    lat: "41.8992",
    lon: "2.7646",
    name: "Gerona Airport",
    direct_flights: "63"
  },
  {
    code: "GRU",
    lat: "-23.435",
    lon: "-46.4728",
    name: "Governador Andre Franco Montoro International Ai",
    direct_flights: "63"
  },
  {
    code: "GVA",
    lat: "46.2329",
    lon: "6.10682",
    name: "Geneva Airport",
    direct_flights: "122"
  },
  {
    code: "GYD",
    lat: "40.3781",
    lon: "49.8028",
    name: "Azerbaijan",
    direct_flights: "58"
  },
  {
    code: "HAJ",
    lat: "52.4586",
    lon: "9.69459",
    name: "Hannover International Airport",
    direct_flights: "86"
  },
  {
    code: "HAM",
    lat: "53.6321",
    lon: "10.0042",
    name: "Hamburg Airport",
    direct_flights: "112"
  },
  {
    code: "HEL",
    lat: "60.3243",
    lon: "24.9688",
    name: "Helsinki Vantaa Airport",
    direct_flights: "104"
  },
  {
    code: "HER",
    lat: "35.3397",
    lon: "25.1836",
    name: "Iraklion Airport",
    direct_flights: "50"
  },
  {
    code: "HHN",
    lat: "49.9454",
    lon: "7.26851",
    name: "Frankfurt-Hahn Airport",
    direct_flights: "63"
  },
  {
    code: "HKG",
    lat: "22.3124",
    lon: "113.929",
    name: "Hong Kong International Airport",
    direct_flights: "131"
  },
  {
    code: "HND",
    lat: "35.5533",
    lon: "139.771",
    name: "Tokyo International Airport",
    direct_flights: "55"
  },
  {
    code: "IAD",
    lat: "38.9556",
    lon: "-77.4484",
    name: "Dulles International Airport",
    direct_flights: "150"
  },
  {
    code: "IAH",
    lat: "29.9784",
    lon: "-95.3424",
    name: "George Bush Intercontinental Airport",
    direct_flights: "210"
  },
  {
    code: "IBZ",
    lat: "38.8755",
    lon: "1.36851",
    name: "Ibiza Airport",
    direct_flights: "57"
  },
  {
    code: "ICN",
    lat: "37.4534",
    lon: "126.657",
    name: "New Incheon International Airport",
    direct_flights: "139"
  },
  {
    code: "ILN",
    lat: "39.4348",
    lon: "-83.7982",
    name: "Airborne Airpark",
    direct_flights: "71"
  },
  {
    code: "IST",
    lat: "40.9857",
    lon: "28.8163",
    name: "Ataturk Hava Limani Airport",
    direct_flights: "157"
  },
  {
    code: "JED",
    lat: "21.706",
    lon: "39.1386",
    name: "King Abdul Aziz International Airport",
    direct_flights: "106"
  },
  {
    code: "JFK",
    lat: "40.6437",
    lon: "-73.79",
    name: "John F Kennedy International Airport",
    direct_flights: "233"
  },
  {
    code: "JNB",
    lat: "-26.1219",
    lon: "28.2467",
    name: "OR Tambo International Airport",
    direct_flights: "89"
  },
  {
    code: "KBP",
    lat: "50.3405",
    lon: "30.9025",
    name: "Borispol Airport",
    direct_flights: "83"
  },
  {
    code: "KIX",
    lat: "34.4295",
    lon: "135.244",
    name: "Kansai International Airport",
    direct_flights: "78"
  },
  {
    code: "KMG",
    lat: "24.966",
    lon: "102.733",
    name: "Wuchia Pa Airport",
    direct_flights: "62"
  },
  {
    code: "KUL",
    lat: "2.77859",
    lon: "101.689",
    name: "Kuala Lumpur International Airport",
    direct_flights: "101"
  },
  {
    code: "KWI",
    lat: "29.2442",
    lon: "47.9748",
    name: "Kuwait International Airport",
    direct_flights: "67"
  },
  {
    code: "LAS",
    lat: "36.0806",
    lon: "-115.143",
    name: "Mccarran International Airport",
    direct_flights: "130"
  },
  {
    code: "LAX",
    lat: "33.9456",
    lon: "-118.391",
    name: "Los Angeles International Airport",
    direct_flights: "200"
  },
  {
    code: "LBA",
    lat: "53.8685",
    lon: "-1.66123",
    name: "Leeds Bradford Airport",
    direct_flights: "61"
  },
  {
    code: "LCA",
    lat: "34.8789",
    lon: "33.6303",
    name: "Larnaca Airport",
    direct_flights: "56"
  },
  {
    code: "LED",
    lat: "59.9667",
    lon: "30.3",
    name: "Pulkuvo 2 Airport",
    direct_flights: "121"
  },
  {
    code: "LGA",
    lat: "40.7731",
    lon: "-73.8756",
    name: "LaGuardia Airport",
    direct_flights: "82"
  },
  {
    code: "LGG",
    lat: "50.64",
    lon: "5.44035",
    name: "Bierset Airport",
    direct_flights: "99"
  },
  {
    code: "LGW",
    lat: "51.1568",
    lon: "-0.16988",
    name: "London Gatwick Airport",
    direct_flights: "227"
  },
  {
    code: "LHR",
    lat: "51.4703",
    lon: "-0.45342",
    name: "London Heathrow Airport",
    direct_flights: "227"
  },
  {
    code: "LIS",
    lat: "38.7701",
    lon: "-9.13775",
    name: "Lisbon Airport",
    direct_flights: "92"
  },
  {
    code: "LPA",
    lat: "27.9372",
    lon: "-15.3828",
    name: "Las Palmas Airport",
    direct_flights: "71"
  },
  {
    code: "LPL",
    lat: "53.3371",
    lon: "-2.85746",
    name: "Liverpool John Lennon Airport",
    direct_flights: "61"
  },
  {
    code: "LTN",
    lat: "51.8796",
    lon: "-0.37548",
    name: "London Luton Airport",
    direct_flights: "78"
  },
  {
    code: "LUX",
    lat: "49.6269",
    lon: "6.20685",
    name: "Luxembourg Airport",
    direct_flights: "119"
  },
  {
    code: "LYS",
    lat: "45.7198",
    lon: "5.08245",
    name: "Lyon Airport",
    direct_flights: "89"
  },
  {
    code: "MAD",
    lat: "40.4684",
    lon: "-3.56769",
    name: "Barajas Airport",
    direct_flights: "186"
  },
  {
    code: "MAN",
    lat: "53.365",
    lon: "-2.27089",
    name: "Manchester International Airport",
    direct_flights: "129"
  },
  {
    code: "MCI",
    lat: "39.2992",
    lon: "-94.7171",
    name: "Kansas City International Airport",
    direct_flights: "64"
  },
  {
    code: "MCO",
    lat: "28.4418",
    lon: "-81.3115",
    name: "Orlando International Airport",
    direct_flights: "106"
  },
  {
    code: "MDW",
    lat: "41.7875",
    lon: "-87.7416",
    name: "Chicago Midway International Airport",
    direct_flights: "55"
  },
  {
    code: "MEL",
    lat: "-37.6759",
    lon: "144.844",
    name: "Melbourne International Airport",
    direct_flights: "53"
  },
  {
    code: "MEM",
    lat: "35.047",
    lon: "-89.9823",
    name: "Memphis International Airport",
    direct_flights: "96"
  },
  {
    code: "MEX",
    lat: "19.4344",
    lon: "-99.0742",
    name: "Lic Benito Juarez International Airport",
    direct_flights: "98"
  },
  {
    code: "MIA",
    lat: "25.7953",
    lon: "-80.2727",
    name: "Miami International Airport",
    direct_flights: "167"
  },
  {
    code: "MKE",
    lat: "42.9471",
    lon: "-87.9051",
    name: "General Mitchell International Airport",
    direct_flights: "59"
  },
  {
    code: "MLA",
    lat: "35.8586",
    lon: "14.4781",
    name: "Luqa Airport",
    direct_flights: "56"
  },
  {
    code: "MNL",
    lat: "14.5114",
    lon: "121.016",
    name: "Ninoy Aquino International Airport",
    direct_flights: "77"
  },
  {
    code: "MRS",
    lat: "43.4411",
    lon: "5.22087",
    name: "Marignane Airport",
    direct_flights: "81"
  },
  {
    code: "MSP",
    lat: "44.8793",
    lon: "-93.1987",
    name: "Minneapolis St Paul International Airport",
    direct_flights: "171"
  },
  {
    code: "MUC",
    lat: "48.354",
    lon: "11.7816",
    name: "Franz-Josef-Strauss Airport",
    direct_flights: "213"
  },
  {
    code: "MXP",
    lat: "45.6314",
    lon: "8.72284",
    name: "Malpensa International Airport",
    direct_flights: "163"
  },
  {
    code: "NAP",
    lat: "40.8837",
    lon: "14.2815",
    name: "Naples International Airport",
    direct_flights: "56"
  },
  {
    code: "NBO",
    lat: "-1.31697",
    lon: "36.9222",
    name: "Jomo Kenyatta International Airport",
    direct_flights: "55"
  },
  {
    code: "NCE",
    lat: "43.6638",
    lon: "7.21286",
    name: "Nice-Cote d'Azur Airport",
    direct_flights: "97"
  },
  {
    code: "NCL",
    lat: "55.0374",
    lon: "-1.70962",
    name: "Newcastle International Airport",
    direct_flights: "56"
  },
  {
    code: "NGO",
    lat: "34.8624",
    lon: "136.811",
    name: "Chubu International Airport",
    direct_flights: "55"
  },
  {
    code: "NKG",
    lat: "32.0833",
    lon: "118.8",
    name: "Nanjing Lukou International Airport",
    direct_flights: "51"
  },
  {
    code: "NRT",
    lat: "35.7491",
    lon: "140.389",
    name: "Narita International Airport",
    direct_flights: "97"
  },
  {
    code: "NUE",
    lat: "49.4946",
    lon: "11.0785",
    name: "Nurnberg Airport",
    direct_flights: "69"
  },
  {
    code: "ORD",
    lat: "41.9796",
    lon: "-87.8825",
    name: "Chicago O'Hare International Airport",
    direct_flights: "222"
  },
  {
    code: "ORY",
    lat: "48.7261",
    lon: "2.36411",
    name: "Paris Orly Airport",
    direct_flights: "138"
  },
  {
    code: "OSL",
    lat: "60.1947",
    lon: "11.1005",
    name: "Oslo Gardermoen Airport",
    direct_flights: "116"
  },
  {
    code: "OTP",
    lat: "44.5656",
    lon: "26.1029",
    name: "Otopeni Airport",
    direct_flights: "52"
  },
  {
    code: "OVB",
    lat: "55.0078",
    lon: "82.6508",
    name: "Tolmachevo Airport",
    direct_flights: "51"
  },
  {
    code: "PDX",
    lat: "45.5867",
    lon: "-122.587",
    name: "Portland International Airport",
    direct_flights: "74"
  },
  {
    code: "PEK",
    lat: "40.0724",
    lon: "116.583",
    name: "Beijing Capital Airport",
    direct_flights: "165"
  },
  {
    code: "PHL",
    lat: "39.8768",
    lon: "-75.2419",
    name: "Philadelphia International Airport",
    direct_flights: "133"
  },
  {
    code: "PHX",
    lat: "33.4376",
    lon: "-112.03",
    name: "Sky Harbor International Airport",
    direct_flights: "108"
  },
  {
    code: "PMI",
    lat: "39.5495",
    lon: "2.73188",
    name: "Palma de Mallorca Airport",
    direct_flights: "109"
  },
  {
    code: "PRG",
    lat: "50.1079",
    lon: "14.2675",
    name: "Prague Ruzyne Airport",
    direct_flights: "131"
  },
  {
    code: "PSA",
    lat: "43.6959",
    lon: "10.3976",
    name: "Pisa Airport",
    direct_flights: "57"
  },
  {
    code: "PTY",
    lat: "9.07",
    lon: "-79.3836",
    name: "Tocumen International Airport",
    direct_flights: "53"
  },
  {
    code: "PVG",
    lat: "31.1156",
    lon: "121.803",
    name: "Pudong International Airport",
    direct_flights: "131"
  },
  {
    code: "RIX",
    lat: "56.9231",
    lon: "23.9717",
    name: "Riga Airport",
    direct_flights: "76"
  },
  {
    code: "RUH",
    lat: "24.9625",
    lon: "46.7078",
    name: "King Khalid International Airport",
    direct_flights: "71"
  },
  {
    code: "SAN",
    lat: "32.7299",
    lon: "-117.195",
    name: "San Diego International Airport",
    direct_flights: "51"
  },
  {
    code: "SEA",
    lat: "47.4405",
    lon: "-122.296",
    name: "Tacoma International Airport",
    direct_flights: "109"
  },
  {
    code: "SFO",
    lat: "37.6148",
    lon: "-122.392",
    name: "San Francisco International Airport",
    direct_flights: "147"
  },
  {
    code: "SHA",
    lat: "31.1865",
    lon: "121.34",
    name: "Hongqiao Airport",
    direct_flights: "60"
  },
  {
    code: "SHJ",
    lat: "25.3297",
    lon: "55.5178",
    name: "Sharjah International Airport",
    direct_flights: "66"
  },
  {
    code: "SIN",
    lat: "1.3578",
    lon: "103.991",
    name: "Singapore Changi Airport",
    direct_flights: "108"
  },
  {
    code: "SJU",
    lat: "18.4367",
    lon: "-66.0095",
    name: "Luis Munoz Marin Airport",
    direct_flights: "60"
  },
  {
    code: "SKG",
    lat: "40.5208",
    lon: "22.9722",
    name: "Thessaloniki Airport",
    direct_flights: "57"
  },
  {
    code: "SLC",
    lat: "40.7862",
    lon: "-111.982",
    name: "Salt Lake City International Airport",
    direct_flights: "104"
  },
  {
    code: "STL",
    lat: "38.7414",
    lon: "-90.3647",
    name: "Lambert St Louis International Airport",
    direct_flights: "78"
  },
  {
    code: "STN",
    lat: "51.8894",
    lon: "0.26151",
    name: "London Stansted International Airport",
    direct_flights: "168"
  },
  {
    code: "STR",
    lat: "48.6895",
    lon: "9.19298",
    name: "Stuttgart Airport",
    direct_flights: "116"
  },
  {
    code: "SVO",
    lat: "55.9621",
    lon: "37.4189",
    name: "Sheremtyevo Airport",
    direct_flights: "140"
  },
  {
    code: "SXF",
    lat: "52.3886",
    lon: "13.5188",
    name: "Berlin-Schonefeld International Airport",
    direct_flights: "85"
  },
  {
    code: "SYD",
    lat: "-33.9344",
    lon: "151.168",
    name: "Kingsford Smith Airport",
    direct_flights: "84"
  },
  {
    code: "SZX",
    lat: "22.5333",
    lon: "113.967",
    name: "Shenzhen Airport",
    direct_flights: "81"
  },
  {
    code: "TAS",
    lat: "41.2552",
    lon: "69.2846",
    name: "Tashkent South Airport",
    direct_flights: "61"
  },
  {
    code: "TFS",
    lat: "28.0474",
    lon: "-16.5705",
    name: "Sur-Reina Sofia Airport",
    direct_flights: "76"
  },
  {
    code: "THR",
    lat: "35.6908",
    lon: "51.3144",
    name: "Mehrabad International Airport",
    direct_flights: "55"
  },
  {
    code: "TIP",
    lat: "31",
    lon: "15",
    name: "International",
    direct_flights: "53"
  },
  {
    code: "TLV",
    lat: "32.0117",
    lon: "34.8861",
    name: "Ben Gurion Airport",
    direct_flights: "87"
  },
  {
    code: "TOL",
    lat: "41.5923",
    lon: "-83.8072",
    name: "Toledo Express Airport",
    direct_flights: "56"
  },
  {
    code: "TPA",
    lat: "27.9744",
    lon: "-82.5356",
    name: "Tampa International Airport",
    direct_flights: "74"
  },
  {
    code: "TPE",
    lat: "25.081",
    lon: "121.237",
    name: "Taiwan Taoyuan International Airport",
    direct_flights: "52"
  },
  {
    code: "TUN",
    lat: "36.8435",
    lon: "10.2348",
    name: "Aeroport Tunis",
    direct_flights: "62"
  },
  {
    code: "TXL",
    lat: "52.5548",
    lon: "13.289",
    name: "Berlin-Tegel International Airport",
    direct_flights: "101"
  },
  {
    code: "VCE",
    lat: "45.505",
    lon: "12.3433",
    name: "Marco Polo International Airport",
    direct_flights: "70"
  },
  {
    code: "VIE",
    lat: "48.1036",
    lon: "16.5804",
    name: "Vienna Schwechat International Airport",
    direct_flights: "183"
  },
  {
    code: "VKO",
    lat: "55.5978",
    lon: "37.285",
    name: "Ynukovo Airport",
    direct_flights: "79"
  },
  {
    code: "VLC",
    lat: "39.4929",
    lon: "-0.47617",
    name: "Valencia Airport",
    direct_flights: "75"
  },
  {
    code: "WAW",
    lat: "52.17",
    lon: "20.9725",
    name: "Okecie International Airport",
    direct_flights: "102"
  },
  {
    code: "XMN",
    lat: "24.5333",
    lon: "118.117",
    name: "Xiamen Airport",
    direct_flights: "55"
  },
  {
    code: "YUL",
    lat: "45.4562",
    lon: "-73.7473",
    name: "Aéroport International Pierre-Elliott-Trudeau d",
    direct_flights: "104"
  },
  {
    code: "YVR",
    lat: "49.1931",
    lon: "-123.172",
    name: "Vancouver International Airport",
    direct_flights: "92"
  },
  {
    code: "YYC",
    lat: "51.1343",
    lon: "-114.007",
    name: "Calgary International Airport",
    direct_flights: "64"
  },
  {
    code: "YYZ",
    lat: "43.685",
    lon: "-79.6142",
    name: "Toronto Lester B Pearson International Airport",
    direct_flights: "176"
  },
  {
    code: "ZRH",
    lat: "47.454",
    lon: "8.56137",
    name: "Zurich International Airport",
    direct_flights: "161"
  }
];