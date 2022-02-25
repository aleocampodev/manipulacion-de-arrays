const words = ["spray,limit", "elite", "exuberant"];

const newArray = [];

for (let i = 0; i < words.length; i++) {
  const item = words[i];

  if (item.length >= 6) {
    newArray.push(item);
  }
}

console.log(newArray, "newArray");
console.log(word, "original");

const rta = words.filter((item) => item.length >= 6);
console.log("rta", rta);
console.log("original", words);
