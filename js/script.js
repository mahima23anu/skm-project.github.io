var prevScrollpos = window.pageYOffset;
var animat =document.getElementById("navbar");
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } 
  else if(currentScrollPos>140)
  {
    var abc=(140-currentScrollPos)/3;
    var abcd=abc+"px";
    document.getElementById("navbar").style.top = abcd;
        
  }  
  prevScrollpos = currentScrollPos;
}