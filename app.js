const filed = document.querySelector('.filed');
const ball = document.getElementById('ball');
const goal = document.querySelector('.goal');
const wrapper = document.querySelector('.wrapper');
const teamOne = document.getElementById('teamOne');
const teamTwo = document.getElementById('teamTwo');

filed.addEventListener('click', (e) => {
    console.log(e.clientY)
    console.log(e.clientX)
    ball.style.top = `${e.clientY}px`;
    ball.style.left = `${e.clientX}px`;
});

let team_one = 0;
let team_second = 0;

filed.addEventListener('click', (e) => {

    if ((e.clientY >= 280 && e.clientY <= 470) && (e.clientX >= 1020 && e.clientX <= 1100)) {
        document.querySelector(".goal").hidden = false;
        team_one++;
        teamOne.innerText = team_one;
    } else if ((e.clientY >= 280 && e.clientY <= 470) && (e.clientX >= 28 && e.clientX <= 93)){
        document.querySelector(".goal").hidden = false;
        team_second++;
        teamTwo.innerText = team_second;
    } else if ((e.clientY <= 280 || e.clientY >= 470) || (e.clientX >= 100 || e.clientX <= 1200)) {
        document.querySelector(".goal").hidden = true;
    } 
})



// сделать счетчик и увеличивать его каждый раз, когда мяч пересекает