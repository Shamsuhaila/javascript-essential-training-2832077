/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

class ListToInsert {
  constructor(list1, list2, list3) {
    this.list1 = list1;
    this.list2 = list2;
    this.list3 = list3;
  }
  toggleList1(newlist1) {
    this.list1 = newlist1;
  }
}

const FruitList = new ListToInsert("Apple", "Banana", "DragonFruit");

function insert() {
  const whereToPlace = document.querySelector("main");
  const newHeader = document.createElement("header");
  newHeader.classList.add("class1");
  newHeader.setAttribute("id", "header1");

  newHeader.innerHTML = `
    <h1>HELLO EVERYONE</h1>
        <ul> The list </ul>
            <li>The number 1 ${FruitList.list1}</li>
            <li>The number 2 ${FruitList.list2}</li>
            <li>The number 3 ${FruitList.list3}</li>`;

  whereToPlace.append(newHeader);
}

console.log(insert());

const variable1 = function () {
  //return document.innerHTML("helloWorld");
};

variable1();
