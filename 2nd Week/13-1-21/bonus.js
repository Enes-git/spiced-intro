function Countdown(seconds) {
    this.seconds = seconds;
    this.start = function () {
        while (this.seconds > 0) {
            setTimeout(() => {
                console.log(seconds);
            }, 1000);
            seconds--;
        }
    }
}



var countdown = new Countdown(5);
countdown.start();