let hp = 100

setHPText()

function setHPText() {
    document.getElementById("hpText").innerHTML = "HP: " + hp
}

function setDamageText() {
    document.getElementById("damageText").innerHTML = "-" + hpsub
}

document.getElementById("attackButton").addEventListener("click", function() {

    runHitCalculation()
    
})

function updateHP() {
    document.getElementById("hpText").innerHTML = "HP: " + hp

    if (hp > 0) {
        hpsub = Math.floor(Math.random() * 20) + 5;
        hp -= hpsub
    }
    
    if (hp > 0) {
        setHPText()
        animate()
        console.log(hp)
        console.log(hpsub)
        setDamageText()
    }else{
        hp = 0
        document.getElementById("hpText").innerHTML = "HP: " + hp
        document.getElementById("attackButton").disabled = true;
        animate()
        document.getElementById("battleText").innerHTML = "They're dead."
        console.log(hp)
    }
}

function runHitCalculation() {
    let hitChance = Math.random()

    if (hitChance > 0.9) {
        document.getElementById("battleText").innerHTML = "The attack missed!"
        console.log("Broke Boy missed")

    } else {
        document.getElementById("battleText").innerHTML = "The attack hit!"
        updateHP()
    }
}


function animate() {
    document.getElementById("battleImg").classList.add("shake")
    document.getElementById("battleImg").src = "img/hurtAmpharos.png"
    document.getElementById("attackButton").disabled = true;
}

document.getElementById("battleImg").addEventListener('animationend', () => {
    document.getElementById("battleImg").classList.remove('shake');
    if (hp > 0) {
        document.getElementById("battleImg").src = "img/Ampharos.png"
        document.getElementById("attackButton").disabled = false;
    }
    else {
        document.getElementById("battleImg").src = "img/deadAmpharos.png"
    }
});