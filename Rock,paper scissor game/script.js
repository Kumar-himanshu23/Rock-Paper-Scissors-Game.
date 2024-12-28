let userScore = 0;
let comScore = 0;
const choices = document.querySelectorAll(".choice");
const userscorep=document.querySelector("#user-score");
const computercorep=document.querySelector("#comp-score");
const msg=document.querySelector("#msg");
const gencompchoice=()=>{
    const options=["Rock","Paper","Scissors"];
     const randomIdx=Math.floor(Math.random() * 3);
     return options[randomIdx];
}

const drawgame=()=>{
    msg.innerText="Game is over.Play Again";
    msg.style.backgroundColor="#dbdf06ec";
}
const showWinner=(userwin,Userchoice,comchoice)=>{
    if(userwin)
    {  
       userScore++;
       userscorep.innerText=userScore;
        msg.innerText=`You win! your's ${Userchoice} beats ${comchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        comScore++;
        computercorep.innerText=comScore;
        msg.innerText=`You Lose! ${comchoice} beats you'r ${Userchoice}`;
        msg.style.backgroundColor="red";
    }
}
const playgame = (Userchoice) => {
    const comchoice=gencompchoice();
    if(Userchoice === comchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(Userchoice==="Rock")
        {
           userwin=comchoice==="paper"?false:true ;
        }
        else if(Userchoice==="Paper")
        {
            userwin=comchoice==="Scissor"?false:true;
        }
        else
        {
            userwin=comchoice==="Rock"?false:true;

        }
        showWinner(userwin,Userchoice,comchoice);
    }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const Userchoice = choice.getAttribute("id");
    playgame(Userchoice);
  });
});
