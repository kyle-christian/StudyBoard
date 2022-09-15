// const stopwatch = document.querySelector('#stopwatch')

let hundreds = 00;
let secs = 00;
let mins = 00; 

let appendHundred = document.querySelector('.hund')
let appendSeconds = document.querySelector('.sec')
let appendMinutes = document.querySelector('.min')


function timer() {
  hundreds++;
  if (hundreds <= 9) {
    appendHundred.innerHTML = "0" + hundreds
  }

  if (hundreds > 9) {
    appendHundred.innerHTML = hundreds
  }

  if(hundreds > 99) {
    hundreds = 0;
    appendHundred.innerHTML = "0" + hundreds
    secs++;
    appendSeconds.innerHTML = "0" + secs
  }
  
  if (secs <= 9) {
    appendSeconds.innerHTML = "0" + secs;
  }

  if (secs > 9) {
    appendSeconds.innerHTML = secs;
  }

  if (secs > 59) {
    secs = 0
    appendSeconds.innerHTML = "0" + secs;
    mins++;
    appendMinutes.innerHTML = "0" + mins;
  }  
  
}

let laps = document.getElementById('duration')
function start() {
  interval = setInterval(timer, 10); 
}

function stop() {
  clearInterval(interval);
  laps.innerText = `Duration: ${appendMinutes.innerHTML} : ${appendSeconds.innerHTML} : ${appendHundred.innerHTML}`
}


function reset() {
  hundreds = 0;
  secs = 0;
  mins = 0;
  appendHundred.innerHTML = "0" + hundreds;
  appendSeconds.innerHTML = "0" + secs;
  appendMinutes.innerHTML = "0" + mins;
  laps.innerText = ""
}




// const deleteBtn = document.querySelectorAll('.del')
// const todoItem = document.querySelectorAll('span.not')
// const todoComplete = document.querySelectorAll('span.completed')

// Array.from(deleteBtn).forEach((el)=>{
//     el.addEventListener('click', deleteTodo)
// })

// Array.from(todoItem).forEach((el)=>{
//     el.addEventListener('click', markComplete)
// })

// Array.from(todoComplete).forEach((el)=>{
//     el.addEventListener('click', markIncomplete)
// })

// async function deleteTodo(){
//     const todoId = this.parentNode.dataset.id
//     try{
//         const response = await fetch('todos/deleteTodo', {
//             method: 'delete',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }

// async function markComplete(){
//     const todoId = this.parentNode.dataset.id
//     try{
//         const response = await fetch('todos/markComplete', {
//             method: 'put',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }

// async function markIncomplete(){
//     const todoId = this.parentNode.dataset.id
//     try{
//         const response = await fetch('todos/markIncomplete', {
//             method: 'put',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'todoIdFromJSFile': todoId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }