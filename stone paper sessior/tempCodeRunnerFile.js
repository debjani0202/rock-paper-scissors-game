let myscore=0;
let compscore=0;


const choices=document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userScoredisplay=document.querySelector("#my-score");
const compScoredisplay=document.querySelector("#comp-score");

const showWinner =(userwin,userchoice,compChoice) =>
{
    if(userwin)
    {
        myscore++;
        userScoredisplay.innerText=myscore;
        msg.innerText=`you win!" yours ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        
    }else{
        compscore++;
        compScoredisplay.innerText=compscore;
    
        msg.innerText="you loose!";
        msg.innerText=`you loose!" ${compChoice} beats  yours ${userchoice}`;
        msg.style.backgroundColor="red";
        
    }

}

const genCompChoice =() =>
{
    const options=["rock" ,"paper" , "scissors"];
    const randomIdx=Math.floor(Math.random() *3);
    return options[randomIdx];
}

const drawGame =() =>
{
    console.log("game was draw");
    msg.innerText="draw!";
    msg.style.backgroundColor="#d2ff72";
    
}
const playGame=(userchoice) =>
{
    console.log("user choice = ",userchoice);
    //generate computer choice
    const compChoice=genCompChoice();
    console.log("comp choice= ",compChoice);

    if (userchoice === compChoice)
    {
        drawGame();
    }
    else
    {
        let userwin=true;
        if (userchoice ==="rock") 
        {
            userwin = compChoice ==="paper"?false:true;
            
        }else if(userchoice ==="paper")
        {
            userwin =compChoice ==="scissors"?false:true;

        }else{
            userwin=compChoice ==="rock"?false:true;
        }

        showWinner(userwin,userchoice,compChoice);
    }


};

choices.forEach((choice) => {

    choice.addEventListener("click",()=> 
        {
            const userchoice=choice.getAttribute("id");
        // console.log(userchoice);
        playGame(userchoice);

    })
})