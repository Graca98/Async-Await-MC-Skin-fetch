let obsahDiv = document.getElementById("root")

const customParams = "?overlay&default=MHF_Steve"
const baseUrl = "https://crafatar.com/renders/body/"

const aTeam = [
  {
    id: 1,
    name: "Davisiiiik",
    role: "Správce",
    uuid: "ed2dab89-4441-4acc-a7ac-b948dc6862c8",
    descr: "Majitel, správce pluginů, webový developer",
  },
  {
    id: 2,
    name: "Gracous",
    role: "Správce",
    uuid: "10db14fb-2492-48c2-85c0-c9f393d1987b",
    descr: "Správce pluginů/discordu, webový developer",
  },
  {
    id: 3,
    name: "Matobodo",
    role: "Developer",
    uuid: "11445559-171a-454e-a5ce-a482116e0cdf",
    descr: "Developer, správce VDS a systému Pterodactyl",
  },
  {
    id: 4,
    name: "AsmynTexi",
    role: "Hlavní admin",
    uuid: "85bc2ca9-c3c4-4c3f-a6aa-413d1654be65",
    descr: "Hlavní Admin Skyblock serveru",
  },
  {
    id: 5,
    name: "Kat02",
    role: "Adminka",
    uuid: "fd9ffc48-e893-47d0-8473-cfb9893c3161",
    descr: "",
  },
  {
    id: 6,
    name: "Azazel",
    role: "Admin",
    uuid: "7a80f349-03db-4fc4-8384-092177f945ed",
    descr: "",
  },
  {
    id: 7,
    name: "AlmostPanda",
    role: "Hlavní Eventer",
    uuid: "6a39c8dc-b16d-40eb-9dba-97470b9a4940",
    descr: "",
  },
  {
    id: 8,
    name: "nazdarekparek",
    role: "Helper",
    uuid: "28b6a4b4-8a92-4864-a2f2-3033763d7d83",
    descr: "",
  },
  {
    name: "Nimue__",
    role: "EventMaster",
    uuid: "9006efa2-4352-4610-a750-caca9515942d",
    descr: "",
  },
  {
    name: "Jelkaki",
    role: "EventMaster",
    uuid: "9006efa2-4352-4610-a750-caca9515942b",
    descr: "",
  },
  {
    name: "Yuniegard",
    role: "Hlavní Builderka",
    uuid: "2e62b5bd-3514-4ea2-b209-92d47ea46208",
    descr: "",
  },
  {
    name: "ScreenShooot",
    role: "Architect",
    uuid: "0e5d7c22-cfed-407c-9b1d-e4125311f195",
    descr: "",
  },
];

const fetchData = async (uuid) => {
  try {
    let response = await fetch(baseUrl + uuid + customParams);
    if (response.ok) {
      const data = response.url;
      return data;
    } else {
      throw new Error("Chyba při načítání dat.");
    }
  } catch (err) {
    console.log("Fetch dat se nepovedl: " + err);
  }
};

function getElement(id) {
  return document.querySelectorAll(id);
}

const displayData = async () => {
  for (jedenClen of aTeam) {
    let src = await fetchData(jedenClen.uuid);

    let imgSrc = getElement("." + jedenClen.name);
    let jmeno = getElement("." + jedenClen.name + "-name");
    let descr = getElement("." + jedenClen.name + "-descr");

    if (imgSrc && jmeno /* && descr */) {
      for (let i = 0; i < imgSrc.length; i++) {
        imgSrc[i].src = src;
        jmeno[i].innerHTML = jedenClen.name;
        descr[i].innerHTML = jedenClen.descr;
      }
    }
  }
};

displayData();



