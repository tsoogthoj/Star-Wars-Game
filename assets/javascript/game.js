
// characters attributes
var character = [
    'kyloren', 'darthvader', 'darthsidious', 'darthmaul', 'masteryoda', 'lukeskywalker', 'chewbacca', 'princessleia'
]

var abilities = [];
var abilitiesImg = [];
var abilitiesDmg = [];

var kyloren = {
    name: 'Kylo Ren',
    hp: 100,
    side: 'Galatic Empire',
    abilities1: 'Light Saber',
    abilities1img: "'assets/images/abilities/lightsaber.gif'",
    abilities1Dmg: 8, 
    abilities2: 'Push',
    abilities2img: "'assets/images/abilities/push.gif'",
    abilities2Dmg: 5, 
    abilities3: 'Lightning',
    abilities3img: "'assets/images/abilities/lightning.gif'",
    abilities3Dmg: 10, 
}

var darthvader = {
    name: 'Darth Vader',
    hp: 100,
    side: 'Galatic Empire',
    abilities1: 'Choke',
    abilities1img: "'assets/images/abilities/choke.gif'",
    abilities1Dmg: 6, 
    abilities2: 'Light Saber',
    abilities2img: "'assets/images/abilities/lightsaber.gif'",
    abilities2Dmg: 8, 
    abilities3: 'Lightning',
    abilities3img: "'assets/images/abilities/lightning.gif'",
    abilities3Dmg: 10, 
}

var darthsidious = {
    name: 'Darth Sidious',
    hp: 100,
    side: 'Galatic Empire',
    abilities1: 'Throw',
    abilities1img: "'assets/images/abilities/throw.gif'",
    abilities1Dmg: 7, 
    abilities2: 'Choke',
    abilities2img: "'assets/images/abilities/choke.gif'",
    abilities2Dmg: 6, 
    abilities3: 'Lightning',
    abilities3img: "'assets/images/abilities/lightning.gif'",
    abilities3Dmg: 10,
}

var darthmaul = {
    name: 'Darth Maul',
    hp: 100,
    side: 'Galatic Empire',
    abilities1: 'Double Light Saber',
    abilities1img: "'assets/images/abilities/doublelightsaber.gif'",
    abilities1Dmg: 14, 
    abilities2: 'Choke',
    abilities2img: "'assets/images/abilities/choke.gif'",
    abilities2Dmg: 6, 
    abilities3: 'Throw',
    abilities3img: "'assets/images/abilities/throw.gif'",
    abilities3Dmg: 7, 
}

var masteryoda = {
    name: 'Master Yoda',
    hp: 100,
    side: 'Rebel Alliance',
    abilities1: 'Light Saber',
    abilities1img: "'assets/images/abilities/lightsaber.gif'",
    abilities1Dmg: 8, 
    abilities2: 'Heals',
    abilities2img: "'assets/images/abilities/heals.gif'",
    abilities2Dmg: 12, 
    abilities3: 'Push',
    abilities3img: "'assets/images/abilities/push.gif'",
    abilities3Dmg: 5,
}

var lukeskywalker = {
    name: 'Luke Skywalker',
    hp: 100,
    side: 'Rebel Alliance',
    abilities1: 'Light Saber',
    abilities1img: "'assets/images/abilities/lightsaber.gif'",
    abilities1Dmg: 8,
    abilities2: 'Punch',
    abilities2img: "'assets/images/abilities/deflect.gif'",
    abilities2Dmg: 4,
    abilities3: 'Push',
    abilities3img: "'assets/images/abilities/push.gif'",
    abilities3Dmg: 5,
}

var chewbacca = {
    name: 'Chewbacca',
    hp: 100,
    side: 'Rebel Alliance',
    abilities1: 'Bowcaster',
    abilities1img: "'assets/images/abilities/bowcaster.gif'",
    abilities1Dmg: 9,
    abilities2: 'Slam Ground',
    abilities2img: "'assets/images/abilities/slamground.gif'",
    abilities2Dmg: 11, 
    abilities3: 'Grenade',
    abilities3img: "'assets/images/abilities/grenade.gif'",
    abilities3Dmg: 12, 
}

var princessleia = {
    name: 'Princess Leia',
    hp: 100,
    side: 'Rebel Alliance',
    abilities1: 'Pistol Fire',
    abilities1img: "'assets/images/abilities/pistolfire.gif'",
    abilities1Dmg: 3, 
    abilities2: 'Sheild',
    abilities2img: "'assets/images/abilities/sheild.gif'",
    abilities2Dmg: 15, 
    abilities3: 'Grenade',
    abilities3img: "'assets/images/abilities/grenade.gif'",
    abilities3Dmg: 12, 
}
// log abilities into array
for (var i = 0; i < character.length; i++) {
    var currentChar = window[character[i]];
    var currentCharAbilities1 = currentChar.abilities1;
    var currentCharAbilities2 = currentChar.abilities2;
    var currentCharAbilities3 = currentChar.abilities3;
    if(abilities.indexOf(currentCharAbilities1) === -1) {
        abilities.push(currentCharAbilities1);
    }
    if(abilities.indexOf(currentCharAbilities2) === -1) {
        abilities.push(currentCharAbilities2);
    }
    if(abilities.indexOf(currentCharAbilities3) === -1) {
        abilities.push(currentCharAbilities3);
    }
}
console.log(abilities);
// log abilities img into array
for (var i = 0; i < character.length; i++) {
    var currentCharImg = window[character[i]];
    var currentCharAbilities1Img = currentCharImg.abilities1img;
    var currentCharAbilities2Img = currentCharImg.abilities2img;
    var currentCharAbilities3Img = currentCharImg.abilities3img;
    if(abilitiesImg.indexOf(currentCharAbilities1Img) === -1) {
        abilitiesImg.push(currentCharAbilities1Img);
    }
    if(abilitiesImg.indexOf(currentCharAbilities2Img) === -1) {
        abilitiesImg.push(currentCharAbilities2Img);
    }
    if(abilitiesImg.indexOf(currentCharAbilities3Img) === -1) {
        abilitiesImg.push(currentCharAbilities3Img);
    }
}
console.log(abilitiesImg);
// log abilities dmg into array
for (var i = 0; i < character.length; i++) {
    var currentCharDmg = window[character[i]];
    var currentCharAbilities1Dmg = currentCharDmg.abilities1Dmg;
    var currentCharAbilities2Dmg = currentCharDmg.abilities2Dmg;
    var currentCharAbilities3Dmg = currentCharDmg.abilities3Dmg;
    if(abilitiesDmg.indexOf(currentCharAbilities1Dmg) === -1) {
        abilitiesDmg.push(currentCharAbilities1Dmg);
    }
    if(abilitiesDmg.indexOf(currentCharAbilities2Dmg) === -1) {
        abilitiesDmg.push(currentCharAbilities2Dmg);
    }
    if(abilitiesDmg.indexOf(currentCharAbilities3Dmg) === -1) {
        abilitiesDmg.push(currentCharAbilities3Dmg);
    }
}
console.log(abilitiesDmg);
// selection phase
    // show selection phase
    $('.battlePhase').toggle();
    // choosing character function
    function selectAddFade() {
        // fade selection when clicked
        $(this).addClass('fadeDiv');
        // replase player1 with selection
        var selected = $(this).html();
        console.log(selected);
        $('#leftField').html(selected);
        $('#leftField').children('img').attr('id', 'leftPlayer');
        // change name on battle phase with selection character name
        $('#leftName').html($('#leftField').children('div').html());
        // Replace abilities button with choosen abilities
            // get name of choosen character
            var name = $('#leftField').children('div').html();
            // remove spaces
            noSpace = name.replace(/ /g,'');
            // convert all letters to lower case
            newName = noSpace.toLowerCase();
            // loop the abilities to button ablities
            for (var i = 0; i < character.length; i++) {
                if (newName === character[i]) {
                    // select varibles with string
                    currentChar = window[character[i]];
                    // replace html of abilities buttons with character abilities
                    $('#leftAbility1').html(currentChar.abilities1);
                    $('#leftAbility2').html(currentChar.abilities2);
                    $('#leftAbility3').html(currentChar.abilities3);
                }
            }

        $('#leftField').children('div').remove();
        // fade out selection phase
        $('.selectionPhase').fadeOut(1000);
        // fade in battle phase
        $('.battlePhase').fadeIn(2000);
    }
    for (var i = 0; i < 4; i++){
        // if clicked on character on rebel side
        $('#rebelAlliance-' + i).click(selectAddFade);
        // if clicked on galatic side
        $('#galaticEmpire-' + i).click(selectAddFade);
        $('#themeSong').trigger('play');

    }
// Battle Phase
// header portion
    // player one
        // health
        var leftHealth = 100;
        $('.healthBarLeft').html(leftHealth);
        // health bar dynamic to health left
        $('.healthBarLeft').width(leftHealth + '%');
    // computer player health
        // health
        var rightHealth = 100;
        $('.healthBarRight').html(rightHealth);
        $('.healthBarRight').width(rightHealth + '%');

// battle portion
    // player one
    // abilities buttons
        // fade out abilities img
        
        // When click, this happens: place image and do animation, subtract abilities damage from health
        function animationDamageCal() {
            for (var i = 0; i < abilities.length; i++)
            if ($('#leftAbility1').html() === abilities[i]) {
                $('#powerField').html("<img id='abilities' src=" + abilitiesImg[i] + "></img>");
                $('#abilities').animate({left: '90%'}, 'slow', function() {
                $('#abilities').fadeOut('fast');
                });
                console.log(abilitiesDmg[i]);
                var newDmg = abilitiesDmg[i];
                if (abilitiesDmg[i] < 15) {
                    var newDmg = abilitiesDmg[i];
                    currentDamage = newDmg + (15 - abilitiesDmg[i]);
                    newDmg = currentDamage;
                    console.log(newDmg);
                    rightHealth = rightHealth - currentDamage;
                }
                $('.healthBarRight').html(rightHealth);
                $('.healthBarRight').width(rightHealth + '%');
            }
            // if computer health reaches 0, player 1 wins
            if (rightHealth <= 0) {
                alert('Player One Wins');
            }
        }
        // button 1
        $('#leftAbility1').click(function() {
            animationDamageCal();
        });
        // button 2
        $('#leftAbility2').click(function() {
            animationDamageCal();
        });
        // button 3
        $('#leftAbility3').click(function() {
            animationDamageCal();
        });
    // abilities animation

    // computer player
        // charcter
