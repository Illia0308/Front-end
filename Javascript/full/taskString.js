const splitText = (text, num = 10) => {
  let separatedText = [];
  let startPosition = 0;
  if (typeof text !== "string") {
    return null;
  }
  while (true) {
    let chunk = text.substr(startPosition, num);
    if (chunk.length < num) {
      separatedText.push(chunk + ".".repeat(num - chunk.length));
      break;
    } else {
      separatedText.push(chunk);
    }
    startPosition += num;
  }

  return separatedText;
};

const string = "pogoda chujowa skoro noweryj rik";
console.log(splitText(string, 3));

const countOccurrences = (text = "", str) => {
  if ((str.length = 0)) {
    return null;
  }
  let count = 0;
  let pos = text.indexOf(str);

  while (pos !== -1) {
    count += 1;
    pos = text.indexOf(str, pos + 1);
  }
  return count;
};

const text = "if i coud, if i should, if i try, i gonna do it";
console.log(countOccurrences(string, "i"));

// const countOccurrences = (text = "", str) =>
//   str.length === 0 ? nul : text.split(str).length - 1;
