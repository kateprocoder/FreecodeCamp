function myLocalScope() {
  // Only change code below this line
const myVar = "inside myLocalScope"
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);