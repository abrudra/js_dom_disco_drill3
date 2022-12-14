//.....Header.....//

let headerDive = document.createElement("div");
headerDive.style.background = "#e9ecf5";
document.body.appendChild(headerDive);
headerDive.style.width = "100vw";
headerDive.style.height = "10vh";
headerDive.innerText = "🤯 Disco Grid 🤩";
headerDive.style.fontSize = "1.7rem";
headerDive.style.display = "flex";
headerDive.style.justifyContent = "center";
headerDive.style.alignItems = "center";
//headerDive.style.position = "fixed"

// ...........Section Squar Container............//

let sectionContainer = document.createElement("div");
document.body.appendChild(sectionContainer);
sectionContainer.style.width = "100vw";
sectionContainer.style.height = "100%";
sectionContainer.style.display = "flex";
sectionContainer.style.flexWrap = "wrap";
sectionContainer.className = "main-section";

// ...................Section Box 500..............//

for (let index = 0; index < 504; index++) {
  let boxDiv = document.createElement("div");
  sectionContainer.appendChild(boxDiv);
  boxDiv.style.width = "80px";
  boxDiv.style.height = "80px";
  boxDiv.style.border = "1px solid black";
  boxDiv.innerText = Math.floor(Math.random() * 500);
  boxDiv.style.fontSize = "1.3rem";
  boxDiv.className = "box";
}

//..........Section Box 500 Effect...............///////

let sectionSelector = document.querySelector(".main-section");
let boxDiv = document.querySelectorAll(".box");
sectionSelector.addEventListener("mousemove", runEvent);
function runEvent(cursor) {
  for (let index = 0; index < 504; index++) {
    boxDiv[index].style.backgroundColor =
      "rgb(" +
      Math.random() * 255 +
      "," +
      Math.random() * 255 +
      "," +
      Math.random() * 255 +
      ")";

    boxDiv[index].innerText = Math.floor(Math.random() * 500);
    boxDiv[index].style.fontSize = "1.3rem";
  }
}
