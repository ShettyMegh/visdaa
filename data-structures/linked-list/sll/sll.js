//create node element
function createNode(input) {
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

const input = document.querySelector("#input");

// disable add btns if no value in input
input.addEventListener("input", (e) => {
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

//ADT functions
function append(input) {
  const node = createNode(input);
  const visualContainer = document.querySelector(".visual-container");
  console.log("sdasd");
  visualContainer.insertBefore(
    node,
    visualContainer.children[getNodeLength() - 1]
  );
}

function prepend(input) {
  const node = createNode(input);
  const visualContainer = document.querySelector(".visual-container");
  visualContainer.insertBefore(node, visualContainer.children[1]);
}

function removeFirst() {
  const nodes = document.querySelectorAll(".node-card");
  console.log(nodes[1]);
  if (getNodeLength() > 2) nodes[1].remove();
}

function removeLast() {
  const nodes = document.querySelectorAll(".node-card");
  const nodeLen = getNodeLength();
  if (nodeLen > 2) nodes[nodeLen - 2].remove();
  toggleDisableBtns(false);
}

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
        removeFirst();
        break;

      case "addLast":
        append(input.value);
        input.value = "";
        toggleDisableBtns(true);
        break;

      case "removeLast":
        removeLast();
        break;
      default:
        console.log("none");
    }
  });
});
