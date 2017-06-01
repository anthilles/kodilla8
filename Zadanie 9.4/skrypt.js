function drawTree(level){
  for (i = 0; i < level; i++){
      var star = '*';
      for (j = 0; j < i; j++){
          star += '*';
      }
      console.log(star);
  }
}
drawTree(7);