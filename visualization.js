function visualizeTree(root) {
  const canvas = document.getElementById("bst-visualization");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = "12px Arial";
  drawTree(root, canvas.width / 2, 50, canvas.width / 4);

  function drawTree(node, x, y, xOffset) {
    if (node !== null) {
      // Draw the node
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.fillText(node.value, x - 5, y + 5);

      // Draw lines to left and right children
      if (node.left !== null) {
        const leftX = x - xOffset;
        const leftY = y + 50;
        ctx.moveTo(x, y + 20);
        ctx.lineTo(leftX, leftY);
        ctx.stroke();
        drawTree(node.left, leftX, leftY, xOffset / 2);
      }

      if (node.right !== null) {
        const rightX = x + xOffset;
        const rightY = y + 50;
        ctx.moveTo(x, y + 20);
        ctx.lineTo(rightX, rightY);
        ctx.stroke();
        drawTree(node.right, rightX, rightY, xOffset / 2);
      }
    }
  }
}
