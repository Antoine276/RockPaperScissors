// Constants definition
const NumberOfGames = 5;
const MaxTry = 5;

let GameNbr = 1;

const rock = "rock";
const paper = "paper";
const scissors = "scissors";

const ComputerWins = "The computer wins ! :("
const UserWins = "You win, congrats ! :)"
const Tie = "It's a tie, sucka' ! :/"

let ComputerScore = 0;
let UserScore = 0;

const title = document.querySelector("#GameAnnouncement");

const Res = document.querySelector("#Res");
const ResUsr = document.getElementById("userchoice");
const ResCptr = document.getElementById("computerchoice");

const rockBtn = document.querySelector("button#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resetBtn = document.querySelector("#reset");

const rockImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Logan_Rock_Treen_closeup.jpg/1200px-Logan_Rock_Treen_closeup.jpg";
const paperImg = "https://www.relyco.com/wp-content/uploads/2019/10/Syn_Tridura_1_ALT.jpg";
const scissorsImg = "https://cdn.shopify.com/s/files/1/0635/4468/8866/products/10545_ead30520-5104-48c6-80db-c1b55d872945.jpg?v=1660658451";

rockBtn.addEventListener("click", () => Game(rock));
paperBtn.addEventListener("click", () => Game(paper));
scissorsBtn.addEventListener("click", () => Game(scissors));
resetBtn.addEventListener("click", () => ResetGame());


function Game(UserChoice) 
{
    if (GameNbr > NumberOfGames) {
        return;
    }

    // Get Computer choices
    let ComputerChoice = getComputerChoice();
    // alert(`UserChoice = ${UserChoice}\nComputerChoice = ${ComputerChoice}`);

    // User and Computer fight !
    let result;
    switch (UserChoice) {
        case rock :
            ResUsr.src = rockImg;
            if (ComputerChoice === rock) {ResCptr.src = rockImg; result = Tie;}
            else if (ComputerChoice === paper) {ResCptr.src = paperImg; result = ComputerWins;}
            else {ResCptr.src = scissorsImg; result = UserWins;}
            break;

        case paper :
            ResUsr.src = paperImg;
            if (ComputerChoice === rock) {ResCptr.src = rockImg; result = UserWins;}
            else if (ComputerChoice === paper) {ResCptr.src = paperImg; result = Tie;}
            else {ResCptr.src = scissorsImg; result = ComputerWins;}
            break;
            
        case scissors :
            ResUsr.src = scissorsImg;
            if (ComputerChoice === rock) {ResCptr.src = rockImg; result = ComputerWins;}
            else if (ComputerChoice === paper) {ResCptr.src = paperImg; result = UserWins;}
            else {ResCptr.src = scissorsImg; result = Tie;}
            break;
    }
    
    // alert(result);

    let ResColor = "";
    if(result == ComputerWins) {ComputerScore++; ResColor = "red";}
    else if (result == UserWins) {UserScore++; ResColor = "green";}
    else {ResColor = "black";}

    const ResGame = document.createElement("p");
    ResGame.textContent = `Game ${GameNbr} : ${result}`;
    ResGame.style.color = ResColor;
    Res.appendChild(ResGame);



    const ResImg = document.createElement("img");
    ResImg.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Crown_of_Savoy.svg/2560px-Crown_of_Savoy.svg.png";
    ResUsr.appendChild(ResImg);

    // Results
    if (GameNbr == NumberOfGames)
    {
        // alert(`Computer : ${ComputerScore}\nUser : ${UserScore}`)
        if (ComputerScore > UserScore) {title.textContent = "The Computer is the Champion !";title.style.color = "red";}
        else if(UserScore > ComputerScore) {title.textContent = "The User is the Champion !";title.style.color = "green";}
        else {title.textContent = "No Champion here...";title.style.color = "black";}
    }
    else
    {
        ((NumberOfGames - GameNbr) == 1) ? title.textContent = `Game number ${GameNbr + 1} !\nThis is the last Game !` : title.textContent = `Game number ${GameNbr + 1} !`;
    }

    GameNbr++;
}

function ResetGame()
{
    title.textContent = "Game number 1 !";
    title.style.color = "black";

    ComputerScore = 0;
    UserScore = 0;

    ResUsr.src = "";
    ResCptr.src = "";
    
    let child = Res.lastElementChild;
    while (child) {
        Res.removeChild(child);
        child = Res.lastElementChild;
    }

    GameNbr = 1;
}

function getComputerChoice() 
{
    // Generate random int number between 1 and 3
    let Rdm = getRandomInt(1, 3);

    // Associate with play
    if (Rdm === 1) {return rock;}
    else if (Rdm === 2) {return paper;}
    else {return scissors;}
}

function getRandomInt(min, max) 
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}