
function startGame() {

}

function hurtPlayer() {
    var playerHP = player.health - 100;
    document.getElementById('playerHealth').textContent = playerHP;
    console.log('The player took 100 points of damage.');
    if (playerHP < 600) {
        playerHP - 200;
        console.log('The player lost 200 health');
        document.getElementById('playerHealth').textContent = 'Fuck You';
    }
}