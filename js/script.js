var prevScrollpos = window.pageYOffset;
var animat =document.getElementById("navbar");
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("navbar").style.opacity = 1;
    
  } 
  else if(currentScrollPos>140)
  {
    var abc=(140-currentScrollPos)/3;
    var opa=Math.abs(abc);
    opa=1/opa;
    var abcd=abc+"px";
    document.getElementById("navbar").style.top = abcd;
    console.log(abcd)
    document.getElementById("navbar").style.opacity = opa;
  }  
  prevScrollpos = currentScrollPos;
}