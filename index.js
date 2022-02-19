document.getElementById("add").addEventListener("click", ex1);
const numberss = [];
function ex1() {
const number = +document.getElementById("number").value;
numberss.push(number);
document.getElementById("array").innerHTML = numberss;
}
function sumArray() {
let result1 = 0; 
for (let i = 0; i < numberss.length; i++) {
    const value = numberss[i];
    if (value > 0) {
      result1 += value;
    }
}
document.getElementById("final").innerHTML = result1;
}