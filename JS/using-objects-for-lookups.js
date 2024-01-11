// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line

  let obj = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  }
  result = obj[val]

  // Only change code above this line
  return result;
}
let obj = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  }

let obj2 = obj
 obj2 = obj2={bravo: "Bob"}

phoneticLookup("charlie");
phoneticLookup("foxtrot");
console.log(obj['bravo'])
console.log(obj2['bravo'])
console.log(obj)
console.log(obj2)