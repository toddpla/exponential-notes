window.addEventListener("load", function() {
  console.log("here")
  document.getElementById("app").innerHTML = NavBar().render();
}, false)

const handleNoteDetailPage = function(index) {
  document.getElementById("app").innerHTML = DetailPage().render(index);
}