function TreeNode() {
  this.val= val
  this.left= this.right= null
  
}
let a1= new TreeNode(3)
let a2 = new TreeNode(9)
let a3 = new TreeNode(20)
a1.left = a2
a1.right = a3
let a4 = new TreeNode(15)
let a5 = new TreeNode(7)
a3.left = a4
a3.right = a5

// 层序遍历
function levelOrderTraverlsal(root) {
  if (!root) return [];
  const items = []; // 存放所有结点 返回的结果
  const quene = [root,null]; // 当前所在处理层的队列
  let levelNodes = []; // 每层的结点
  while(quene.length > 0) {
    const t = quene.shift();
    if (t) {
      // 真实的结点
      levelNodes.push(t.val);
      if (t.left) {
        quene.push(t.left);
      }
      if (t.right) {
        quene.push(t.right)
      }

    }else {
      // null, 层与层之间的分界符
      items.push(levelNodes);
      levelNodes = [];
      if (quene.length >0) {
        quene.push(null);
      }
    }
  }




  
}
