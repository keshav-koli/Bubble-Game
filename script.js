var clutter='';
function createBubble(){
for(let i=1;i<=170;i++){
    var rn=Math.floor(Math.random()*10);
    clutter+=`<div class="bubble">${rn}   
    </div>`
}

let pbtm=document.querySelector('#pbottom') ;
pbtm.innerHTML=clutter;
}
createBubble();
var timer=60;
function runtimer(){
var time_counter=setInterval(() => {
    if(timer>0){
    timer--;
    let Timer=document.querySelector('#Timer') ;
    Timer.textContent=timer;
    }
    else{
        clearInterval(time_counter);
    }
}, 1000);
}
runtimer();
