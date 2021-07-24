let milliseconds = 0
let seconds = 0
let minutes = 0

let displaymilliseconds = 0
let displayseconds = 0
let displayminutes = 0

let interval = null

let status = "stopped"

function stopWatch(){

    milliseconds++

    if(milliseconds / 100 === 1){
        milliseconds = 0;
        seconds++

        if(seconds / 60 === 1){
            seconds = 0;
            minutes++
        }

    }

    if(milliseconds < 10){
        displaySeconds = "0" + milliseconds.toString()
    }
    else{
        displaymilliseconds = milliseconds
    }

    if(seconds < 10){
        displayseconds = "0" + seconds.toString()
    }
    else{
        displayseconds = seconds
    }

    if(minutes < 10){
        displayminutes = "0" + minutes.toString()
    }
    else{
        displayminutes = minutes
    }

    //Display updated time values to user
    document.getElementById("display").innerHTML = displayminutes + ":" + displayseconds + ":" + displaymilliseconds

}



function startStop(){

    if(status === "stopped"){

        interval = window.setInterval(stopWatch, 10)
        document.getElementById("startStop").innerHTML = "Stop"
        status = "started"
    }
    else{

        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start"
        status = "stopped";

    }

}

function reset(){

    window.clearInterval(interval);
    milliseconds = 0
    seconds = 0
    minutes = 0
    document.getElementById("display").innerHTML = "00:00:00"
    document.getElementById("startStop").innerHTML = "Start"

}

generateScramble()

function generateScramble() {

    var array = new Array("U", " D"," R", " L", " F"," B")
  
    var switches = ["&nbsp", "\'&nbsp", "2&nbsp"]; 
  
    var array2 = new Array(); 
  
    var last = ''; 
  
    var random = 0;
  
    for (var i = 0; i < 20; i++) {
      
        do {
           random = Math.floor(Math.random() * array.length);
        } while (last == array[random]) 
  
    
    last = array[random];
  
   
    var scrambleItem = array[random] + switches[parseInt(Math.random()*switches.length)];
  
    array2.push(scrambleItem); 
    }
  
    var scramble = "";

    for(i=0; i<20; i++) {
       scramble += array2[i];
    }
  
    document.getElementById("scramble").innerHTML = scramble; 
  }





document.getElementById("save_button").addEventListener("click",function() {
    
 
    if(milliseconds === 00 && seconds === 00 && minutes === 00){
      null
    }else{
        let displayTime = document.getElementById('time_display').innerHTML += '<div>' + displayminutes + ":" + displayseconds + ":" + displaymilliseconds + '</div>'
         reset()     
          generateScramble()     

    }
})
