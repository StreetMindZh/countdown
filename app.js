class Countdown {
    constructor(timer, countdown, from, to) {
       this.timer      = timer; 
       this.countdown  = countdown;
       this.start      = from;
       this.finish     = to;
       
       this.run();
    }
    
    run() {
       let distance = this.finish - this.start,
           days, hours, minutes, seconds,
           percent;
       
       let countdown = setInterval(_ => {
          let point = new Date().getTime() - this.start,
              localDistance = this.finish - new Date().getTime();
          
          days = Math.max(0, Math.floor(localDistance / (1000 * 60 * 60 * 24)));
          hours = Math.max(0, Math.floor((localDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
          minutes = Math.max(0, Math.floor((localDistance % (1000 * 60 * 60)) / (1000 * 60)));
          seconds = Math.max(0, Math.floor((localDistance % (1000 * 60)) / 1000));
          
          percent = point * 100 / distance;
          
          if(percent >= 99) clearInterval(countdown);
          
          this.countdown.children[0].innerText = days;
          this.countdown.children[1].innerText = hours < 10 ? '0' + hours : hours;
          this.countdown.children[2].innerText = minutes < 10 ? '0' + minutes : minutes;
          this.countdown.children[3].innerText = seconds < 10 ? '0' + seconds : seconds;
          
          this.timer.querySelector('.timer-line > span').style.width = `${percent}%`;
       }, 1000);
    }
 }
 
 window.onload = _ => {
    new Countdown(
       document.getElementById('5min'),
       document.getElementById('5min').previousElementSibling, 
       new Date().getTime(), 
       new Date().getTime() + 1000 * 60
    );
 
    new Countdown(
       document.getElementById('next-month'), 
       document.getElementById('next-month').previousElementSibling, 
       new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).getTime(), 
       new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).getTime() + 1000 * 60 * 60 * 24
    );
 
    new Countdown(
       document.getElementById('new-year'), 
       document.getElementById('new-year').previousElementSibling, 
       new Date(new Date().getFullYear(), 0, 1).getTime(), 
       new Date(new Date().getFullYear(), 0, 1).getTime() + 1000 * 60 * 60 * 24 * 366
    );
 };
 
 // window.addEventListener('DOMContentLoaded', _ => {
    
 // })
 