let textValue = document.getElementById("textFile").innerHTML;

function getSearchValue() {
  let searchValue = document.getElementById("search").value;
  let replaceValue = document.getElementById("replace").value;
  const re = new RegExp(searchValue, "gi");

  let res = textValue.replace(
    re,
    `<span style= "background-color: yellow">${replaceValue}</span>`
  );
  document.getElementById("textFile").innerHTML = res;
}
// let myWord = document.getElementById("search").value;
// let myPattern = new RegExp("(\\w*" + myWord + "\\w*)", "gi");
// let matches = myString.match(myPattern);

// if (matches === null) {
//   document.getElementById("demo").innerHTML = "No Results";
// }
// function myFunction() {
//   return document.getElementById("textFile").innerHTML;
// }
// if (myWord) {

// }

// let myString = document.getElementById('textFile').innerHTML;
// let pText = myString[0].getElementsByTagName("P")[0].innerHTML;
// alert(pText);
// function myFunction() {
//   var text = document.getElementById("textFile").value;
//   var textSearch = document.getElementById("search").value;

//   var hits = [];
//   var kata = text.split(" ");
//   var jmlkata = kata.length;
//   var i = 0;
//   for (i = 0; i <= jmlkata - 1; i++) {
//     if (textSearch == kata[i]) {
//       hits.push(kata[i]);
//     }
//   }
//   var jmlfound = hits.length;
//   alert("found : " + jmlfound);
// }
