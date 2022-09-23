const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');

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

const sw = new Stopwatch();

startButton.addEventListener('click', () => {
    console.log('hello');
    sw.start();
})

stopButton.addEventListener('click', stopAndUpdateDB);

async function stopAndUpdateDB() {
    try{
        console.log('goodbye');
        sw.stop();
        console.log(sw.duration);
        
        const response = await fetch('/stat/updateStat', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'duration': sw.duration
            })
        })
        const data = await response.json();
        console.log(data);
        location.reload();
    } catch(err) {
        console.log(err);
    };
}

// function testDivide (time) {
//     if (time > 60) return time / 60;
// }

// console.log(testDivide(93))