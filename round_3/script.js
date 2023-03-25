// Q 13
// Panagram string checker

function checkPanagram(str) {
  const arr = new Array(26).fill(false);

  let index;

  for (let i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z")
      index = str.charCodeAt(i) - "A".charCodeAt(0);
    else if (str[i] >= "a" && str[i] <= "z")
      index = str.charCodeAt(i) - "a".charCodeAt(0);
    else continue;

    arr[index] = true;
  }
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === false) return false;
  }

  return true;
}

// console.log(checkPanagram("The quick brown fox jumps over a lazy dog"));

// Q 14
// Convert 12 h to 24h
const convert12to24 = (time12h) => {
  const [time, modifier] = time12h.split(" ");

  let [hours, minutes] = time.split(":");

  if (hours === "12") hours = "00";

  if (modifier === "PM") hours = parseInt(hours) + 12;

  return `${hours}:${minutes}`;
};

// console.log(convert12to24("02:02 PM"));
// console.log(convert12to24("12:00 PM"));
// console.log(convert12to24("12:00 AM"));
