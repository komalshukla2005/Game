function Rock_Paper_Scissors(user){
    const choices = ['Rock', 'Paper', 'Scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    let Computer = choices[randomNumber];
    let answer;
    if (user === Computer) {
        answer = 'It\'s a tie!';
    } else if (
        (user === 'Rock' && Computer === 'Scissors') ||
        (user === 'Paper' && Computer === 'Rock') ||
        (user === 'Scissors' && Computer === 'Paper')
    ){
        answer = 'You won the match';
    } else {
        answer = 'Computer won the match';
    }
    
    document.getElementById('answer').innerHTML = `You chose: ${user}  and Computer chose: ${Computer} and  Result: ${answer}`;
}

