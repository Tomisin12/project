let duedate = new Date();
duedate.setDate(duedate.getDate() + 15);
let messagedate = new Date(duedate);

let Interval  = setInterval(updateCountdown, 1000)

function updateCountdown() {
  let now = new Date().getTime();
  let distance = duedate - now

  if (distance<= 0) { +
      duedate.setDate(duedate.getDate() + 15);

      clearInterval(Interval);
      Interval = setInterval(updateCountdown, 1000);

  }

  let DAYS = Math.floor(distance / (1000 * 60 * 60 * 24));
  let HOURS = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let MINUTES = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let SECONDS = Math.floor((distance % (1000 * 60)) / (1000));

  document.getElementById("DAYS").innerHTML = DAYS + "d" ;
  document.getElementById("HOURS").innerHTML = HOURS + "h" ;
  document.getElementById("MINUTES").innerHTML = MINUTES + "m" ;
  document.getElementById("SECONDS").innerHTML = SECONDS + "s" ;
  document.getElementById("message").innerHTML = "Note:You will be given a chance after the timer ends on" + " " + messagedate

}


