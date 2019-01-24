var rgb = (function(rgb, $, window){
  rgb.color = "#ffffff";
  rgb.i = 0;
  rgb.j = 0;
  rgb.ff = function (ff) {
    var aa = 0;
    switch (ff) {
      case 10 :
        aa = "a";
        break;
      case 11 :
        aa = "b";
        break;
      case 12 :
        aa = "c";
        break;
      case 13 :
        aa = "d";
        break;
      case 14 :
        aa = "e";
        break;
      case 15 :
        aa = "f";
        break;
      case 15 :
        aa = "f";
        break;
      default : aa = ff; break
    }
    return aa;
  }
  rgb.repeat = function ($) {
    if (rgb.i == 0) {
      rgb.color = "#"+rgb.ff(rgb.j)+"fffff"
    } else if (rgb.i == 1) {
      rgb.color = "#0"+rgb.ff(rgb.j)+"ffff"
    } else if (rgb.i == 2) {
      rgb.color = "#00"+rgb.ff(rgb.j)+"fff"
    } else if (rgb.i == 3) {
      rgb.color = "#000"+rgb.ff(rgb.j)+"ff"
    } else if (rgb.i == 4) {
      rgb.color = "#0000"+rgb.ff(rgb.j)+"f"
    } else if (rgb.i == 5) {
      rgb.color = "#00000"+rgb.ff(rgb.j)
    }
    jQuery("#rgbLright > ul > li").eq(0).css("background", rgb.color)
    console.log(rgb.color)
    rgb.j += 1
    if (rgb.j == 16) {
      rgb.j = 0
      rgb.i += 1
      if (rgb.i == 6) {
        rgb.i = 0
      } 
    }
  }
  rgb.setInterval = function() {
    setInterval('rgb.repeat()', 100)
  }
  rgb.sss = function () {
    alert("Sss")
  }
  return rgb
})(window.rgb ||{}, window.jQuery, window)

$(document).ready(function(){
  rgb.setInterval();
});

// $(document).on('click', '#start',function(e){
// })