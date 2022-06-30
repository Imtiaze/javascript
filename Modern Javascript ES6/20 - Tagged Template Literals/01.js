

function modifier(string, ...values)
{
    return string.reduce(function(prev, current) {
        return prev + current + (values.length ? 'Mr. ' + values.shift() : '')
    }, '')
}



let player1 = 'Sakib';
let player2 = 'Tamim';

console.log(modifier`We have ${player1} and ${player2} in our cricket team.`);