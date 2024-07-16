let comps = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msgp")
const userscorce = document.querySelector("#us");
 const compscore = document.querySelector("#cs")
const drawgame = () => {
    msg.innerText ="GAME WAS DRAW";
    msg.style.backgroundColor = "darkblue";
};

const gencompchoice = () =>{ 
    const options =["rock", "paper", "scissors"];
   const ranidx = Math.floor(Math.random() * 3);
   return options[ranidx];
};
const showwinner = (userwin, userchoice, compchoice) =>{
    if(userwin){
        users++;
        userscorce.innerText = users;
        console.log("YOU WIN");
        msg.innerText = `You Win your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = " green";
    }
    else{
        comps++;
        compscore.innerText = comps;
        msg.innerText =`You Lose  ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};
const plygame = (userchoice) =>{
    console.log("user choice =",userchoice);
    const compchoice = gencompchoice();
    console.log("computer choice =",compchoice);

    if(userchoice == compchoice)
    {
        drawgame();
    }
    else {
        let userwin = true;
        if(userchoice == "rock"){
           userwin = compchoice == "paper" ? false : true;
        }
        else if(userchoice=="paper"){
           
            userwin = compchoice == "scissors" ? false :true;

        }
        else{
            userwin = compchoice == "rock" ? false : true;
        }
        showwinner(userwin,userchoice,compchoice);
        }
        
    };
   
    
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id"); 
     plygame(userchoice);

    });
});                     
