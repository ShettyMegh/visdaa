var arr = []; //create empty array
var n = genRandom(300);

function genRandom(upto) {
  return Math.floor(Math.random() * upto) + 50;
}

function genRandomBars(len, upto) {
  arr = [];
  for (var i = 0; i < len; i++) { //initialize the array
    arr.push(n);
    n = genRandom(upto);
  }
  console.log(arr)
}


function draw(n, color) {
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    var width = 35;
    var currX = 10;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < n.length; i++) {
      if (i == color) {
        ctx.fillStyle = 'red';
      } else {
        ctx.fillStyle = 'blue';
      }
      var h = n[i];
      ctx.fillRect(currX, canvas.height - h, width, h);
      currX += width + 10;
    }
  }
}

function* bubbleSort(array) { // * is magic
  var swapped;
  var step = 0;
  var pass = 1;

    do {
      swapped = false;
      for (var i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
          var temp = array[i];
          array[i] = array[i + 1];
          array[i + 1] = temp;
          swapped = true;
          step++;
          draw(array, i);
          yield swapped; // pause here
        }
      }
      pass++
    } while (swapped);
  enableAllBtn();
}

function start() {
  canvas = document.getElementById('visualizer');
  var sort = bubbleSort(arr);
  // let start = 0;
  // an anim function triggered every 60th of a second
  function anim(timestamp) {
    // const elapsed = timestamp - start;
    // if (elapsed > 20) {
    //   start = timestamp;
    //   tick();
    // }
    requestAnimationFrame(anim);
    // draw(ar);
    setInterval(() => sort.next(), 1000)
    // call next iteration of the bubbleSort function
  }
  setTimeout(anim(), 700);
}

//function ref(){ //Refreshes the page
//	location.reload();
//}

function ref() { //Refreshes the page
  shuffle(arr);
  draw(arr, 0);
}

function shuffle(array) { //shuffles the array
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  enableAllBtn();
  return array;
}

function disableAllBtn() {
  const btns = document.querySelectorAll('button');
  btns.forEach((btn) => {
    btn.disabled = true;
  })
}

function enableAllBtn() {
  const btns = document.querySelectorAll('button');
  btns.forEach((btn) => {
    btn.disabled = false;
  })
}

window.onload = function () {
  canvas = document.getElementById('visualizer');
  canvas.width = (window.innerWidth - 80);
  genRandomBars(30, 300);
  draw(arr, 0);
}
document.getElementById("sort").onclick = function () {
  start();
  disableAllBtn();
};
document.getElementById("ref").onclick = function () {
  ref();
};

document.getElementById("random").onclick = function () {
  disableAllBtn();
  genRandomBars(30, 300)
  draw(arr, 0);
  enableAllBtn();
};