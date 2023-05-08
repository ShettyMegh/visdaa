//create node element
function createNode(input) {
  console.log(input);
  const nodeCard = document.createElement("div");
  nodeCard.classList.add("node-card");
  const node = document.createElement("div");
  node.classList.add("node");
  node.innerHTML = input;
  nodeCard.append(node);
  const arrowRight = document.createElement("img");
  arrowRight.src = "../media/arrow-right.png";
  arrowRight.classList.add("arrow-right");
  nodeCard.append(arrowRight);
  return nodeCard;
}

//appending
function prepend(input) {
  const node = createNode(input);
  const nodeNull = document.querySelector("#node-null");
  nodeNull.parentNode.insertBefore(node, nodeNull);
}

function append(input) {
  const node = createNode(input);
  const nodeHead = document.querySelector("#node-head");
  nodeHead.parentNode.insertBefore(node, nodeHead.nextSibling);
}

const input = document.querySelector("#input");

// disable add btns if no value in input
input.addEventListener("input", (e) => {
  console.log(e.currentTarget.value);
  if (e.currentTarget.value) {
    toggleDisableBtns(false);
  } else {
    toggleDisableBtns(true);
  }
});

//toggle btns disable
function toggleDisableBtns(disable) {
  const nodeLen = getNodeLength();
  if (nodeLen >= 10) {
    btns[0].disabled = true;
    btns[2].disabled = true;
    return;
  }
  btns[0].disabled = disable;
  btns[2].disabled = disable;
}

//node length
function getNodeLength() {
  return document.querySelectorAll(".node-card").length;
}

const btns = document.querySelectorAll("#controls button");

// ADT btns operations
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    switch (btn.dataset.action) {
      case "addFirst":
        prepend(input.value);
        input.value = "";
        toggleDisableBtns(true);
        break;

      case "removeFirst":
        console.log("rmf");
        break;

      case "addLast":
        append(input.value);
        input.value = "";
        toggleDisableBtns(true);
        break;

      case "removeFirst":
        console.log("rmf");
        break;
      default:
        console.log("none");
    }
  });
});
