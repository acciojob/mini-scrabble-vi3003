
let count;
document.getElementById("evaluatedText").value = ""; // initially string is empty so count is also empty

document.addEventListener("keyup", function () {
  count = document.getElementById("evaluatedText").value; //here this value will return string
  document.querySelector("#letterCount").textContent = count.length;
  //   console.log(count);
});
