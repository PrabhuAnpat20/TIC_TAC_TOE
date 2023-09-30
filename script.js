console.log("tic tac toe")
// let gameover = new Audio("youwon.mp3")
let audioturn =new Audio("Mouse-Click.mp3")
let winaudio =new Audio("trumpet.mp3")
let turn="X"
let gameover=false

//function to change turn 
const changeTurn=()=>{
  return turn == "X"?"0":"X"
}

//function to check for win
const checkwin =()=>{
let boxtexts=document.getElementsByClassName("boxtext")    
let wins =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    
]

wins.forEach((e) => {
    if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText)&& (boxtexts[e[1]].innerText===boxtexts[e[2]].innerText)&&(boxtexts[e[0]].innerText!=="")){
        
    
    document.querySelector('.info').innerHTML=boxtexts[e[0]].innerHTML + " won !!"
    gameover=true
    winaudio.play()
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "70px"
    }
})
}

//game logic
let boxes =document.getElementsByClassName("box")
console.log(boxes)
Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext')
    element.addEventListener('click',()=>{
        if(boxtext.innerHTML==''){
            boxtext.innerHTML=turn
            turn = changeTurn()
            audioturn.play()
            checkwin()
            if(!gameover){
            document.querySelector('.info').innerHTML="Turn for "+ turn;
            }
        }
        
        
    })
})

// reset
reset.addEventListener('click',()=>{
    let boxtext=document.querySelectorAll(".boxtext")
    boxtext.forEach((element) => {
        element.innerHTML=""
        
    })
    gameover=false
    turn='X'
    document.querySelector('.info').innerHTML="Turn for "+ turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0px"

})