function myFunction(event) {
  var x = event.keyCode;
  if (x == 27) {// 27 is the ESC key
    alert ("You pressed the Escape key!");
  }
  else if (x > 48) {
    return false;
  }
}

function myenter(event) {
  var x = event.keyCode;
  if (x == 13) {  // 27 is the ESC key
    alert ("You pressed the Escape key!");
  }
  //elseif(x == 37)
  else if (x == 37) {
    for (var i = 0; i < 2; i++) {
      alert ("You pressed the left key!");
    }
  }
}


function ex() {
  document.write('babo<br>');
  document.write(1+4);
}


function sum(x, y) {
  //document.write('<div style "color: red;">' + x+y + '<br>');
  return x+y;
}
