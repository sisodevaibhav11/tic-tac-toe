let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#resetbtn");
let newGamebtn=document.querySelector("#NewButton");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


let turn0=true;
let count=0;
const winpattern=
[[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],
];

const resetGame=()=>{
    turn0=true;
    let count=0;
    enabledBoxes();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0){
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        count++;
        let isWinner=checkWinner();
        if(count===9 && !isWinner){
            gameDraw();
        }
    });
});

const gamedraw=()=>{
    msg.innertext=`game was Draw`;
    msgcontainer.classList.remove("hide");
    disabledBoxes();
}
const disabledBoxes=() =>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
};
const enabledBoxes=() =>
{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }

};
const showWinner=(winner) =>{
    msg.innerText=`Congratulation,Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledBoxes();
}
const checkWinner=() =>{
    for(let pattern of winpattern)
    {
        console.log(pattern[0],pattern[1],pattern[2]);
        console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        let pos1val=boxes[pattern[0]].innerText;        
        let pos2val=boxes[pattern[1]].innerText;        
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!="" &&pos2val!="" && pos3val!="")
            {
                if(pos1val===pos2val && pos2val==pos3val)
                {
                    console.log("Winner",pos1val);
                    showWinner(pos1val);
                    return true;
                }
            }        
    }
};

newGamebtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);