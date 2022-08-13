const darkMode = document.getElementsByTagName("button")[0];
const headerSection = document.getElementsByTagName("div")[0];
const paraSection = document.getElementsByTagName("div")[1];

console.log(paraSection.id);

function changeMode() {
  if (headerSection.id == "header_section") {
    headerSection.id = "dark_header_section";
    paraSection.id = "dark-para-section";
    darkMode.id = "dark_mode_black";
  } else if (headerSection.id == "dark_header_section") {
    headerSection.id = "header_section";
    paraSection.id = "para-section";
    darkMode.id = "dark_mode";
  } else {
    console.log("did not work");
  }
}

darkMode.addEventListener("click", function(event) {
  changeMode();
})