import "./styles.css";

function testIt(val, defaultValue) {
  if (typeof val === "undefined") {
    return defaultValue;
  } else {
    return val;
  }
}

function isDefined(val) {
  return typeof val === "undefined" ? false : true;
}

// Try edit message
const data = {
  message: "Hi world"
};

let x = {
  lat: 40,
  lon: -112
};

document.getElementById("app").innerHTML = testIt(data.message, "Hola");
