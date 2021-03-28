/* for (var i = 0; i < 64; i++) {
  document.getElementById("mainChessBoard").appendChild(document.createElement("div")).style.backgroundColor =
    parseInt(i / 8 + i) % 2 || 0 ? "#000" : "#fff";
} */

for (var i = 0; i < 64; i++) {
  $("#mainChessBoard").append($(document.createElement("div"))).css("background-color") = parseInt(i / 8 + i) % 2 || 0 ? "#000" : "#fff";
}



/* window.onload = function () {
  if (window.jQuery) {
    // jQuery is loaded
    alert("Yeah!");
  } else {
    // jQuery is not loaded
    alert("Doesn't Work");
  }
};
 */
