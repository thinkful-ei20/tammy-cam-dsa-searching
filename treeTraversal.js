const BinarySearchTree = require('./bst-class');
const bst = new BinarySearchTree();

const data = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];

const preOrder = (bst) => {
  console.log(bst.key)
  if(bst.left) preOrder(bst.left);
  if(bst.right) preOrder(bst.right);
}

const inOrder = (bst, values = []) => {
  if(bst.left){
    values = inOrder(bst.left, values)
  }
  values.push(bst.key);

  if (bst.right) {
  values = inOrder(bst.right, values);
  }
    return values;
}

const postOrder = (bst, values = []) => {
  if(bst.left){
    values = postOrder(bst.left, values)
  }
  if (bst.right) {
    values = postOrder(bst.right, values);
  }

  values.push(bst.key);

  return values;
}

const main = (data) => {
  for(let i=0; i<data.length; i++){
    //console.log(data[i]);
    bst.insert(data[i]);
  }
  //console.log(bst);
  //preOrder(bst);
  //console.log(inOrder(bst));
  console.log(postOrder(bst));
}

main(data);

