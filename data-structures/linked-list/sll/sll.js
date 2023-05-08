//create node element
function createNode(input){
  console.log(input)
  const nodeCard = document.createElement('div');
  nodeCard.classList.add("node-card");
  const node = document.createElement('div');
  node.classList.add('node');
  node.innerHTML = input;
  nodeCard.append(node);
  const arrowRight = document.createElement('img');
  arrowRight.src = "../media/arrow-right.png";
  arrowRight.classList.add('arrow-right')
  nodeCard.append(arrowRight)
  return nodeCard;
}

//appending
function append(input){
  const node = createNode(input);
  const nodeNull = document.querySelector(".node-card:last-child");
  nodeNull.prepend(node);
}

//ADT Btns
const btns = document.querySelectorAll('#controls button');
btns.forEach((btn)=>{
  btn.addEventListener("click",()=>{
    const input = document.querySelector('#input');
    switch(btn.dataset.action){
      case "addFirst": 
          append(input.value);
          input.value = "";
        break;
      case "removeFirst":console.log("rmf");
      break;
      case "removeFirst":console.log("rmf");
      break;
      case "removeFirst":console.log("rmf");
      break;
      default:console.log("none")
    }
  })
})