// Функція котра ділить строку по кількості елементів і підносить кожний перший елемент нової строки до верхньго регістру
// const splitText = (text, len) => {
//   const strArr = [];
//   let startPosition = 0;
//   while (true) {
//     let chunk = text.substr(startPosition, len);
//     if (chunk.length === 0) {
//       break;
//     }
//     strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
//     startPosition += len;
//   }
//   return strArr.join("\n"); //------> Метод масиву котрий склеює елементи масиву
// };
// console.log(splitText("iloveyoubaby", 3));

const splitText = (text, len) => {
  const strArr = [];
  let startPosition = 0;
  while (true) {
    let chunk = text.substr(startPosition, len);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk);
    startPosition += len;
  }
  return strArr;
};
console.log(splitText("ilo vey oubaby", 3));

/// Сортування контактів телефонної книги
const contacts = [
  {
    name: "Tom",
    phoneNumber: "574-432-123",
  },
  {
    name: "Frank",
    phoneNumber: "514-442-126",
  },
  {
    name: "John",
    phoneNumber: "524-452-173",
  },
  {
    name: "Mike",
    phoneNumber: "576-472-183",
  },
  {
    name: "Kevin",
    phoneNumber: "524-532-123",
  },
];

const sortContacts = (contacts) => {
  const result = contacts.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  return result;
};
console.log(sortContacts(contacts));
