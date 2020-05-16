let Anindya = function() {
    console.log('speaks too much');
};
setTimeout(Anindya, 3000);

setTimeout(function() {
    console.log('speaks too much');
}, 3000);

let btn = document.querySelector('#item1');
btn.addEventListener("click", function(e){
    console.log('the button was clicked');
});
debugger:
function anotherAddEventListener(typeOfEvent, callback){
    var eventThatHappened = {
        eventType: "keypress",
        key:p,
        durationOfKeypress:2
    }
    if(eventThatHappened.eventType === typeOfEvent){
        callback(eventThatHappened);
    }
}

anotherAddEventListener("keypress", function(event){ 
    console.log(event);
});
const numbers = [0,1,2,3,4];
let newNumbers = [];
for (let i=0; i<numbers.length; i++){
    newNumbers.push
}