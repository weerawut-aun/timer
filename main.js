window.onload = function () {
  var secound = 00;
  var tens = 00;
  var appendSecound = document.getElementById('secound');
  var appendTens = document.getElementById('tens');
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');

  function startClock() {
    tens++;
    if (tens <= 9) {
      appendTens.innerHTML = '0' + tens;
    } else if (tens > 9) {
      appendTens.innerHTML = tens;
    } else if (tens > 60) {
      secound++;

      appendSecound.innerHTML = '0' + secound;
      tens = 0;
      appendSecound.innerHTML = '0' + tens;
    } else if (secound > 60) {
      appendSecound.innerHTML = secound;
    }
  }
};
