console.log("Welcome To Tic Tac Toe")
let music = new Audio("click.wav")
let turn = new Audio("click.wav")
let gameover = new Audio("gameover.wav")
let win = false;
let Turn = "X"

const ChangeTurn = ()=>{
    return Turn === "X"?"0":"X"
}

const checkWin = ()=>{
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2,-20,5,0],
        [3,4,5,-20,15,0],
        [6,7,8,-20,25,0],
        [0,3,6,-32,15,90],
        [1,4,7,-22,15,90],
        [2,5,8,-12,15,90],
        [0,4,8,-20,15,45],
        [2,4,6,-20,15,135],
    ]
    wins.forEach(e=>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText)&& (boxtexts[e[0]].innerText !== "")){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + "Won"
            win = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector('.line').style.width = "20vw"
            document.querySelector('.line').style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            gameover.play();
        }
    })

}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if (boxtext.innerText === '') {
            boxtext.innerText = Turn;
            Turn = ChangeTurn();
            turn.play();
            checkWin();
            if(!win)
            {document.getElementsByClassName('info')[0].innerText = "Turn for" + Turn;
        }
            
        }
    })
})

reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    Turn = "X";
    win = false
    document.querySelector(".line").style.width = '0vw'
    document.getElementsByClassName('info')[0].innerText = "Turn for" + Turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"

})