let res;

let score={
    win:0,
    lose:0,
    tie:0
}

function rock_clicked(){
    randomValue()
    console.log(`The computer choose ${res}`)
    if(res=='rock')
        score.tie++;
    else if(res=='paper')
        score.lose++;
    else if(res=='scissors')
        score.win++;
}

function paper_clicked(){
    randomValue()
    console.log(`The computer choose ${res}`)
    if(res=='rock')
        score.win++;
    else if(res=='paper')
        score.tie++;
    else if(res=='scissors')
        score.lose++;
}

function scissor_clicked(){
    randomValue()
    console.log(`The computer choose ${res}`)
    if(res=='rock')
        score.lose++;
    else if(res=='paper')
        score.win++
    else if(res=='scissors')
        score.tie++;
}

function reset_clicked(){
    score={
        win:0,
        lose:0,
        tie:0
    }
}

function randomValue(){
    let ranNo=Math.random();
    if(ranNo>=0 && ranNo<0.33)
        res='rock';
    else if (ranNo>=0.33 && ranNo<0.66)
        res='paper';
    else if (ranNo>=0.66 && ranNo<=1)
        res='sissors'
}