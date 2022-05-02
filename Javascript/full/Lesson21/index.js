const tasks = [
  "Buy milk",
  "Pick up Tom from airport",
  "visit party",
  "visit doctor",
  "Buy meat",
];

const renderListItems = (listItems) => {
  // функція котра буде виводити список справ
  const listElem = document.querySelector(".list"); // покласти в змінну шлях куди передавати данні
  const listItemsElems = listItems.map((itemText) => {
    const listItemElem = document.createElement("li"); // формування html елементів котрі будуть вставлятись
    listItemElem.classList.add("list_item");
    const checkboxElem = document.createElement("input");
    checkboxElem.setAttribute("type", "checkbox");
    checkboxElem.classList.add("list_item_checkbox");
    listItemElem.append(checkboxElem, itemText);
    return listItemElem;
  });
  listElem.append(...listItemsElems);
};

renderListItems(tasks);
