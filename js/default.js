var number = Math.floor(Math.random()*3);

var loop = true;

while(loop){
  

  var answer = parseInt(window.prompt('数あてゲーム0~2の数字を入力して下さい！！'));



  var message;

  if(answer === number) {
    message = '正解！';
    loop = false;
  }
  else if (answer < number){
    message = '残念。もっと大きいです';
  }
  else if (number < answer){
    message = '残念。もっと小さいです';
  }
  else{
    message = '0~2の数字を入力してください';
  }
  document.getElementById('choice').textContent = message;

};
