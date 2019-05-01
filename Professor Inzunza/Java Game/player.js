
var player = {
    name: 'Player',
    class: 'Paladin',
    health: 700,
    baseAtk: 400,
    splAtk: 300,
    baseDef: 350,
    baseMana: 100,
    atkPotion: true,
    defPotion: true,
    defAbility: true,
    dmgAbility: true,
    actionPoints: 2,
    turn: false,

    // use "Attack" UI button to start this function
    // once a value is returned, run "assign damage" function
    atkDamage: function() {
        var boost = player.dmgBoost();
        console.log(boost);
        if (boost == 1) {
            // value added to attack when potion is used
                atkDamage = player.baseAtk + 150;
                console.log('Atk dmg is: ' + atkDamage);
                return atkDamage;  
        } else if (boost == 0) {
            atkDamage = player.baseAtk;
            console.log('Atk dmg is: ' + atkDamage);
            return atkDamage;
        }
    },

    dmgBoost: function() {
        if (player.atkPotion == true && player.turn == false) {
            dmgBoost = 0;
            console.log(dmgBoost);
            return dmgBoost;
        } else if (player.atkPotion == false && player.actionPoints < 2) {
            dmgBoost = 1;
            console.log('Strength Potion Applied, Attack + 150');
            return dmgBoost;
        }
    },
}

function playerTurn() {
    if (titan.turn == true && titan.actionPoints == 0) {
        while (player.turn == true) {
            player.turn = false;
            player.actionPoints = 2;
            document.getElementById('titanPoints').textContent = 'AP: ' + titan.actionPoints;
            document.getElementById('actionPoints').textContent = 'AP: ' + player.actionPoints;
        }
    }
}

function endTurn() {
    // read the turn variable for true
    if (player.turn == true && player.actionPoints == 0) {
        while (titan.turn == false) {
            console.log('Begin Enemy Turn.');
            document.getElementById('titanAction1').textContent = 'The Titan Unleashes a Mighty Scream and Begins to Gather His Strength.';
            titanTurn();
        }
    }
    // trigger titanTurn function

}

function enemyDamage() {
    var atkDamage = player.atkDamage();
    console.log('Attack Damage = ', atkDamage);
    var enemyDefense = titan.baseDef - 200; // convert integer to decimal
    console.log('Enemy Defense = ', enemyDefense);
    var damage = atkDamage - enemyDefense; // get a percent value of total attack damage
    console.log('Damage to Be Assigned = ', damage)
    titan.health = titan.health - damage;
    console.log('Action Complete, Enemy Health: ', titan.health);
    return damage;
}

function playerAttack() {
    // trigger this function and start the damage calculation loop
   var damage = enemyDamage();
    console.log('Enemy Damage Function Performed.')
    document.getElementById('playerAction1').textContent = 'The Paladin Raises His Great Sword, Strikes True and Deals ' + damage +' Damage.';
    document.getElementById('titanHealth').textContent = 'HP: ' + titan.health;
    // add section to update battle feed

    // add if statement to remove action points and trigger endTurn function
    if (player.actionPoints == 2 && player.turn == false) {
        while (titan.turn == false) {
            player.actionPoints = 0;
            player.turn = true;
            console.log('Player Action Points is: ' + player.actionPoints);
            document.getElementById('actionPoints').textContent = 'AP: ' + player.actionPoints;
            endTurn();
            

        }
    } else if (player.actionPoints < 2 && player.turn == false) {
        while (titan.turn == false) {
            player.actionPoints = 0;
            player.turn = true;
            document.getElementById('actionPoints').textContent = 'AP: ' + player.actionPoints;
            endTurn();
        }
    }
}