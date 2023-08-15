function StartTimer(duration){
    let timer = duration,
        minutes,
        seconds;
    setInterval(function () {
      minutes = parseInt((timer / 60).toString(), 10);
      seconds = parseInt((timer % 60).toString(), 10);
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      this.timer = minutes + ":" + seconds;
      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  }

  export default StartTimer