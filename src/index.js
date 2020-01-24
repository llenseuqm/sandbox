import "./styles.css";

function testIt(val, defaultValue) {
  if (typeof val === "undefined") {
    return defaultValue;
  } else {
    return val;
  }
}

// Tests to see if a given value is defined.
// If so, the value passed in no is returned, otherwise the
// value passed in yes is returned.
function isDefined(val, yes, no) {
  return typeof val === "undefined" ? no : yes;
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
document.getElementById("app").innerHTML +=
  "<br/>Is it defined? " + isDefined(data.message, "yup", "nope");
