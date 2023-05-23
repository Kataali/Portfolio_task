
// alert("Hello");

// scroll event listener
var prevScrollpos = window.pageYOffset;
window.addEventListener("scroll", function() {
  var currentScrollPos = window.pageYOffset;
  prevScrollpos = currentScrollPos;
  // prevScrollpos = currentScrollPos - 1;
  if (currentScrollPos > 10){
    var element = document.getElementsByTagName("nav")[0];
    // console.log(element.className);
    element.className += " sticky-top";
    // element.classList.add("sticky-top");
  }
  console.log("current " + currentScrollPos);
  console.log("previous " + prevScrollpos);
  console.log("difference " + (currentScrollPos - prevScrollpos));
})

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementByClassName("navbar").style.top = "0";
//   } else {
//     document.getElementsByClassName("navbar").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }
