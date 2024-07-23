const emoji = ["👋","👋","👌","👌","🤣","🤣","❤️","❤️","😁","😁","😶‍🌫️","😶‍🌫️","🥶","🥶","🙀","🙀"];
    let shuffle = emoji.sort(() => (Math.random() > .5) ? 2 : -1);
    for(let i = 0; i < emoji.length; i++){
      let box = document.createElement('div');
      box.className = 'item';
      box.innerHTML = shuffle[i];
      box.onclick = function(){
        if(this.classList.contains('boxopen')) return;
        this.classList.add('boxopen');
        setTimeout(function(){
          let openBoxes = document.querySelectorAll('.boxopen');
          if(openBoxes.length > 1){
            if(openBoxes[0].innerHTML == openBoxes[1].innerHTML){
              openBoxes[0].classList.add('boxmatch');
              openBoxes[1].classList.add('boxmatch');
              openBoxes[0].classList.remove('boxopen');
              openBoxes[1].classList.remove('boxopen');
              if(document.querySelectorAll('.boxmatch').length == emoji.length){
                alert('You win!');
              }
            } else {
              openBoxes[0].classList.remove('boxopen');
              openBoxes[1].classList.remove('boxopen');
            }
          }
        }, 500);
      }
      document.querySelector('.game').appendChild(box);
    }