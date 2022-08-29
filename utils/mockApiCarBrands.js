const mockApiCarBrands = [
  {
    "id": "2253232",
    "name": "AMC"
  },
  {
    "id": "60244",
    "name": "Acura"
  },
  {
    "id": "380854",
    "name": "Agrale"
  },
  {
    "id": "2817419",
    "name": "Aleko"
  },
  {
    "id": "67695",
    "name": "Alfa Romeo"
  },
  {
    "id": "2130482",
    "name": "Am Gen"
  },
  {
    "id": "2103722",
    "name": "Anchi"
  },
  {
    "id": "2220868",
    "name": "Aro"
  },
  {
    "id": "3184339",
    "name": "Asaki"
  },
  {
    "id": "378440",
    "name": "Asia"
  },
  {
    "id": "69160",
    "name": "Aston Martin"
  },
  {
    "id": "40661",
    "name": "Audi"
  },
  {
    "id": "411107",
    "name": "BAW"
  },
  {
    "id": "3184340",
    "name": "BJC"
  },
  {
    "id": "66352",
    "name": "BMW"
  },
  {
    "id": "1119486",
    "name": "BRM"
  },
  {
    "id": "2103733",
    "name": "BYD"
  },
  {
    "id": "2088960",
    "name": "Baic"
  },
  {
    "id": "3184338",
    "name": "Beiney"
  },
  {
    "id": "68451",
    "name": "Bentley"
  },
  {
    "id": "11058681",
    "name": "Bestune"
  },
  {
    "id": "3184341",
    "name": "Blac"
  },
  {
    "id": "3184343",
    "name": "Bognor"
  },
  {
    "id": "2103723",
    "name": "Brilliance"
  },
  {
    "id": "1119487",
    "name": "Buggy"
  },
  {
    "id": "1119488",
    "name": "Bugre"
  },
  {
    "id": "67288",
    "name": "Buick"
  },
  {
    "id": "2130483",
    "name": "CBT Jipe"
  },
  {
    "id": "24050",
    "name": "Cadillac"
  },
  {
    "id": "3640508",
    "name": "Caterham"
  },
  {
    "id": "389166",
    "name": "Chana"
  },
  {
    "id": "389167",
    "name": "Changan"
  },
  {
    "id": "8782166",
    "name": "Changfeng"
  },
  {
    "id": "2103721",
    "name": "Changhe"
  },
  {
    "id": "389168",
    "name": "Chery"
  },
  {
    "id": "58955",
    "name": "Chevrolet"
  },
  {
    "id": "66395",
    "name": "Chrysler"
  },
  {
    "id": "389169",
    "name": "Citroën"
  },
  {
    "id": "1119489",
    "name": "Cross Lander"
  },
  {
    "id": "71467",
    "name": "DFM"
  },
  {
    "id": "5826391",
    "name": "DFM/DFSK"
  },
  {
    "id": "2103629",
    "name": "DFSK"
  },
  {
    "id": "2130485",
    "name": "DS"
  },
  {
    "id": "2220869",
    "name": "Dacia"
  },
  {
    "id": "4208",
    "name": "Daewoo"
  },
  {
    "id": "10075",
    "name": "Daihatsu"
  },
  {
    "id": "8782169",
    "name": "Dfac"
  },
  {
    "id": "66708",
    "name": "Dodge"
  },
  {
    "id": "1253268",
    "name": "Dongfeng"
  },
  {
    "id": "378442",
    "name": "Effa"
  },
  {
    "id": "389170",
    "name": "Engesa"
  },
  {
    "id": "1119490",
    "name": "Envemo"
  },
  {
    "id": "2400402",
    "name": "FSO"
  },
  {
    "id": "70603",
    "name": "Faw"
  },
  {
    "id": "23937",
    "name": "Ferrari"
  },
  {
    "id": "67781",
    "name": "Fiat"
  },
  {
    "id": "1119491",
    "name": "Fibravan"
  },
  {
    "id": "73265",
    "name": "Fisker"
  },
  {
    "id": "66432",
    "name": "Ford"
  },
  {
    "id": "3184342",
    "name": "Forland"
  },
  {
    "id": "396748",
    "name": "Foton"
  },
  {
    "id": "3184344",
    "name": "Fuqi"
  },
  {
    "id": "2400403",
    "name": "Fuqui"
  },
  {
    "id": "8266712",
    "name": "Fuso"
  },
  {
    "id": "1119492",
    "name": "Fyber"
  },
  {
    "id": "3184351",
    "name": "GAC - Trumpchi"
  },
  {
    "id": "60552",
    "name": "GMC"
  },
  {
    "id": "8782168",
    "name": "Gaz"
  },
  {
    "id": "389171",
    "name": "Geely"
  },
  {
    "id": "2617718",
    "name": "Glow"
  },
  {
    "id": "2103724",
    "name": "Gonow"
  },
  {
    "id": "1119493",
    "name": "Great Wall"
  },
  {
    "id": "399558",
    "name": "Gurgel"
  },
  {
    "id": "378443",
    "name": "Hafei"
  },
  {
    "id": "389172",
    "name": "Hafei Towner"
  },
  {
    "id": "2103726",
    "name": "Haima"
  },
  {
    "id": "2103732",
    "name": "Haval"
  },
  {
    "id": "2400401",
    "name": "Higer"
  },
  {
    "id": "60559",
    "name": "Honda"
  },
  {
    "id": "8782167",
    "name": "Huanghai"
  },
  {
    "id": "2400404",
    "name": "Huayang"
  },
  {
    "id": "60407",
    "name": "Hummer"
  },
  {
    "id": "1089",
    "name": "Hyundai"
  },
  {
    "id": "14419",
    "name": "Infiniti"
  },
  {
    "id": "19595",
    "name": "International"
  },
  {
    "id": "3564001",
    "name": "Isuka"
  },
  {
    "id": "60648",
    "name": "Isuzu"
  },
  {
    "id": "396749",
    "name": "Iveco"
  },
  {
    "id": "2839844",
    "name": "JAC"
  },
  {
    "id": "2220871",
    "name": "JMC"
  },
  {
    "id": "2130480",
    "name": "JPX"
  },
  {
    "id": "23629",
    "name": "Jaguar"
  },
  {
    "id": "60395",
    "name": "Jeep"
  },
  {
    "id": "8569062",
    "name": "Jetour"
  },
  {
    "id": "389174",
    "name": "Jinbei"
  },
  {
    "id": "2103628",
    "name": "Kama"
  },
  {
    "id": "8569063",
    "name": "Karry"
  },
  {
    "id": "2103730",
    "name": "Kenbo"
  },
  {
    "id": "374002",
    "name": "Kia"
  },
  {
    "id": "378444",
    "name": "Lada"
  },
  {
    "id": "68762",
    "name": "Lamborghini"
  },
  {
    "id": "70621",
    "name": "Lancia"
  },
  {
    "id": "66655",
    "name": "Land Rover"
  },
  {
    "id": "71552",
    "name": "Lexus"
  },
  {
    "id": "380878",
    "name": "Lifan"
  },
  {
    "id": "66671",
    "name": "Lincoln"
  },
  {
    "id": "389175",
    "name": "Lobini"
  },
  {
    "id": "19640",
    "name": "Lotus"
  },
  {
    "id": "64522",
    "name": "MG"
  },
  {
    "id": "503296",
    "name": "Mack"
  },
  {
    "id": "389176",
    "name": "Mahindra"
  },
  {
    "id": "2848163",
    "name": "Maple"
  },
  {
    "id": "64049",
    "name": "Maserati"
  },
  {
    "id": "64021",
    "name": "Mastretta"
  },
  {
    "id": "2130481",
    "name": "Matra"
  },
  {
    "id": "7358651",
    "name": "Maxus"
  },
  {
    "id": "64540",
    "name": "Maybach"
  },
  {
    "id": "66811",
    "name": "Mazda"
  },
  {
    "id": "63904",
    "name": "McLaren"
  },
  {
    "id": "24852",
    "name": "Mega"
  },
  {
    "id": "75966",
    "name": "Mercedes-Benz"
  },
  {
    "id": "33474",
    "name": "Mercury"
  },
  {
    "id": "3184345",
    "name": "Metro"
  },
  {
    "id": "65127",
    "name": "Mini"
  },
  {
    "id": "1138",
    "name": "Mitsubishi"
  },
  {
    "id": "227543",
    "name": "Miura"
  },
  {
    "id": "3184346",
    "name": "Monde"
  },
  {
    "id": "64039",
    "name": "Morgan"
  },
  {
    "id": "396998",
    "name": "Morris"
  },
  {
    "id": "8782170",
    "name": "Mudan"
  },
  {
    "id": "3184336",
    "name": "NSU"
  },
  {
    "id": "2400400",
    "name": "Nanjing"
  },
  {
    "id": "2707734",
    "name": "Nash"
  },
  {
    "id": "3184349",
    "name": "Neckar"
  },
  {
    "id": "60505",
    "name": "Nissan"
  },
  {
    "id": "2400407",
    "name": "Noble"
  },
  {
    "id": "2400405",
    "name": "Oldsmobile"
  },
  {
    "id": "3184337",
    "name": "Oltcit"
  },
  {
    "id": "61705",
    "name": "Opel"
  },
  {
    "id": "26558",
    "name": "Orient"
  },
  {
    "id": "60279",
    "name": "Peugeot"
  },
  {
    "id": "505277",
    "name": "Piaggio"
  },
  {
    "id": "396999",
    "name": "Plymouth"
  },
  {
    "id": "60495",
    "name": "Pontiac"
  },
  {
    "id": "56870",
    "name": "Porsche"
  },
  {
    "id": "2220870",
    "name": "Proton"
  },
  {
    "id": "2710997",
    "name": "RAM"
  },
  {
    "id": "389178",
    "name": "Rely"
  },
  {
    "id": "9909",
    "name": "Renault"
  },
  {
    "id": "3184348",
    "name": "Rocar"
  },
  {
    "id": "61825",
    "name": "Rolls-Royce"
  },
  {
    "id": "60589",
    "name": "Rover"
  },
  {
    "id": "60268",
    "name": "SEAT"
  },
  {
    "id": "3663698",
    "name": "SMA"
  },
  {
    "id": "61745",
    "name": "Saab"
  },
  {
    "id": "206",
    "name": "Samsung"
  },
  {
    "id": "3184350",
    "name": "Sanfeng"
  },
  {
    "id": "378446",
    "name": "Santa Matilde"
  },
  {
    "id": "2400406",
    "name": "Sanxing"
  },
  {
    "id": "60524",
    "name": "Saturn"
  },
  {
    "id": "3007068",
    "name": "Scion"
  },
  {
    "id": "8247208",
    "name": "Sero Electric"
  },
  {
    "id": "63740",
    "name": "Shelby"
  },
  {
    "id": "380886",
    "name": "Shineray"
  },
  {
    "id": "8266705",
    "name": "Shuanghuan"
  },
  {
    "id": "2317930",
    "name": "Skoda"
  },
  {
    "id": "38765",
    "name": "Smart"
  },
  {
    "id": "5826390",
    "name": "Soueast"
  },
  {
    "id": "8782171",
    "name": "Soyat"
  },
  {
    "id": "378447",
    "name": "Ssangyong"
  },
  {
    "id": "60285",
    "name": "Subaru"
  },
  {
    "id": "43943",
    "name": "Suzuki"
  },
  {
    "id": "7096049",
    "name": "TAC"
  },
  {
    "id": "1218189",
    "name": "Tata"
  },
  {
    "id": "3184347",
    "name": "Tavria"
  },
  {
    "id": "2130484",
    "name": "Tesla"
  },
  {
    "id": "60297",
    "name": "Toyota"
  },
  {
    "id": "12067228",
    "name": "Trike"
  },
  {
    "id": "389179",
    "name": "Troller"
  },
  {
    "id": "8782172",
    "name": "Ufo"
  },
  {
    "id": "2103731",
    "name": "Victory Auto"
  },
  {
    "id": "8782175",
    "name": "Volga"
  },
  {
    "id": "60249",
    "name": "Volkswagen"
  },
  {
    "id": "8295766",
    "name": "Volt Motors"
  },
  {
    "id": "60658",
    "name": "Volvo"
  },
  {
    "id": "1119495",
    "name": "Wake"
  },
  {
    "id": "143291",
    "name": "Walk"
  },
  {
    "id": "2103734",
    "name": "Wuling"
  },
  {
    "id": "2347833",
    "name": "Xinkai"
  },
  {
    "id": "2236981",
    "name": "Yasuki"
  },
  {
    "id": "8782173",
    "name": "Yugo"
  },
  {
    "id": "8782174",
    "name": "Zahav"
  },
  {
    "id": "108389",
    "name": "Zanella"
  },
  {
    "id": "5826392",
    "name": "Zhongxing"
  },
  {
    "id": "2103729",
    "name": "Zna"
  },
  {
    "id": "2370633",
    "name": "Zongshen"
  },
  {
    "id": "2103728",
    "name": "Zotye"
  },
  {
    "id": "2103725",
    "name": "ZxAuto"
  }
]

module.exports = mockApiCarBrands;