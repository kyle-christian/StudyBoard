//stopwatch controls
const startButton = document.querySelector('#start');


//timer controls
let appendSeconds = document.querySelector('.sec')
let appendMinutes = document.querySelector('.min')
let appendHours = document.querySelector('.hour')

//stopwatch
function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    this.start = function() {
        if (running)
            throw new Error('Stopwatch has already started.');
        running = true;

        startTime = new Date();
    };

    this.stop = function() {
        if (!running)
            throw new Error('Stopwatch is not started.');
        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;

        duration += seconds;
    };

    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    };

    Object.defineProperty(this, 'duration', {
        get: function() { return duration; }
    });
};

const swData = new Stopwatch();

function startSw() {
    console.log('hello');
    swData.start();
}


async function stopAndUpdateDB() {
    try{
        console.log('goodbye');
        swData.stop();
        console.log(swData.duration);
        
        const response = await fetch('/stat/updateStat', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'duration': swData.duration
            })
        })
        const data = await response.json();
        console.log(data);
        location.reload();
    } catch(err) {
        console.log(err);
    };
}

//stopwatch timer
var sw = {
    // (A) PROPERTIES
    etime : null, // html time display
    // erst : null, // html reset button
    ego : null, // html start/stop button
    timer : null, // timer object
    now : 0, // current elapsed time
  
    // (B) INITIALIZE
    init : () => {
      // (B1) GET HTML ELEMENTS
      sw.etime = document.getElementById("sw-time");
      sw.ego = document.getElementById("sw-go");
  
      // (B2) ENABLE BUTTON CONTROLS
 
      sw.ego.onclick = sw.start;
      sw.ego.disabled = false;
    },
  
    // (C) START!
    start : () => {
      startSw();
      sw.timer = setInterval(sw.tick, 1000);
      sw.ego.value = "Stop";
      sw.ego.onclick = sw.stop;
    },
  
    // (D) STOP
    stop : () => {
      stopAndUpdateDB();
      clearInterval(sw.timer);
      sw.timer = null;
      sw.ego.value = "Start";
      sw.ego.onclick = sw.start;
    },
  
    // (E) TIMER ACTION
    tick : () => {
      // (E1) CALCULATE HOURS, MINS, SECONDS
      sw.now++;
      let hours = 0, mins = 0, secs = 0,
      remain = sw.now;
      hours = Math.floor(remain / 3600);
      remain -= hours * 3600;
      mins = Math.floor(remain / 60);
      remain -= mins * 60;
      secs = remain;
  
      // (E2) UPDATE THE DISPLAY TIMER
      if (hours<10) { hours = "0" + hours; }
      if (mins<10) { mins = "0" + mins; }
      if (secs<10) { secs = "0" + secs; }
      sw.etime.innerHTML = hours + ":" + mins + ":" + secs;
    },
  
    // (F) RESET
    reset : () => {
      if (sw.timer != null) { sw.stop(); }
      sw.now = -1;
      sw.tick();
    }
  };
  window.addEventListener("load", sw.init);

// toast notifications

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}

//Stopwatch appending to the actual page
