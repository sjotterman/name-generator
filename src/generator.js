const prefixes = [
  "nam",
  "runn",
  "crunch",
  "shop",
  "swip",
  "pet",
  "dog",
  "food",
  "cash",
  "book",
  "chef",
  "cod",
  "programm",
  "concert",
  "music",
  "cook"
];
const suffixes = ["ify", "ly", "r"];
function randomPrefix() {
  const randomIndex = Math.floor(Math.random() * prefixes.length);
  return prefixes[randomIndex];
}

function randomSuffix() {
  const randomIndex = Math.floor(Math.random() * suffixes.length);
  return suffixes[randomIndex];
}

function randomName() {
  return `${randomPrefix()}${randomSuffix()}`;
}

exports.randomName = randomName;
