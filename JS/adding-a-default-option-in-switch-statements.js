function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
switch (val) {
  
  case "a":
    answer = "apple";
    console.log(answer);
    break;

  case "b":
    answer = "bird";
    console.log(answer);
    break;

case "c":
    answer = "cat";
    console.log(answer);
    break;

  default:
  answer = "stuff"
    console.log("stuff");
    break;
}


  // Only change code above this line
  return answer;
}

switchOfStuff("a");
switchOfStuff("b");