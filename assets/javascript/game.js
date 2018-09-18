
// characters attributes
var character = [
    'kyloren', 'darthvader', 'darthsidious', 'darthmaul', 
    'masteryoda', 'lukeskywalker', 'chewbacca', 'princessleia'
]

var abilitiesDmg = [];

var kyloren = {
    name: 'Kylo Ren',
    side: 'Galatic Empire',
    abilities1: 'Saber',
    abilitiesDmg1: 8, 
    abilities2: 'Push',
    abilitiesDmg2: 5, 
    abilities3: 'Lightning',
    abilitiesDmg3: 10, 
}

var darthvader = {
    name: 'Darth Vader',
    side: 'Galatic Empire',
    abilities1: 'Lightning',
    abilitiesDmg1: 7, 
    abilities2: 'Choke',
    abilitiesDmg2: 6, 
    abilities3: 'Saber',
    abilitiesDmg3: 10,
}

var darthsidious = {
    name: 'Darth Sidious',
    side: 'Galatic Empire',
    abilities1: 'Lightning',
    abilitiesDmg1: 7, 
    abilities2: 'Choke',
    abilitiesDmg2: 6, 
    abilities3: 'Lightning',
    abilitiesDmg3: 10,
}

var darthmaul = {
    name: 'Darth Maul',
    side: 'Galatic Empire',
    abilities1: 'Saber',
    abilitiesDmg1: 14, 
    abilities2: 'Choke',
    abilitiesDmg2: 6, 
    abilities3: 'Lightning',
    abilitiesDmg3: 7, 
}

var masteryoda = {
    name: 'Master Yoda',
    side: 'Rebel Alliance',
    abilities1: 'Saber',
    abilitiesDmg1: 8, 
    abilities2: 'Lightning',
    abilitiesDmg2: 12, 
    abilities3: 'Push',
    abilitiesDmg3: 5,
}

var lukeskywalker = {
    name: 'Luke Skywalker',
    side: 'Rebel Alliance',
    abilities1: 'Saber',
    abilitiesDmg1: 8,
    abilities2: 'Punch',
    abilitiesDmg2: 4,
    abilities3: 'Push',
    abilitiesDmg3: 5,
}

var chewbacca = {
    name: 'Chewbacca',
    side: 'Rebel Alliance',
    abilities1: 'Bowcaster',
    abilitiesDmg1: 9,
    abilities2: 'Slam',
    abilitiesDmg2: 11, 
    abilities3: 'Grenade',
    abilitiesDmg3: 12, 
}

var princessleia = {
    name: 'Princess Leia',
    side: 'Rebel Alliance',
    abilities1: 'Pistol',
    abilitiesDmg1: 3, 
    abilities2: 'Punch',
    abilitiesDmg2: 15, 
    abilities3: 'Grenade',
    abilitiesDmg3: 12, 
}


// Opening
$('.theEnd').hide();
$('.endMessage').hide();
$('.opening').hide();
$('.intro').css("animation-play-state", "paused");
$('#content').css("animation-play-state", "paused");
$('.logo').css("animation-play-state", "paused");
$('.selectionPhase').hide();
$('#clickToContinue').click(function() {
    // test
    $('.selectionPhase').fadeIn(2000);
    
    $('.welcome').fadeOut(1000);
    $("#themeSong").trigger('play');
    $('.opening').fadeIn(1000);
    $('.intro').css("animation-play-state", "running");
    $('#content').css("animation-play-state", "running");
    $('.logo').css("animation-play-state", "running");
    setTimeout(function() {
        $('.selectionPhase').fadeIn(2000);
        $('.opening').fadeOut(1000);
    }, 60000);
});
// FUNCTIONS
// When player select a character
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
    // Remove name from player
    $('#leftField').children('div').remove();
    // fade out selection phase
    $('.selectionPhase').fadeOut(1000);
    // fade in battle phase
    $('.battlePhase').fadeIn(2000);
    }
// Randome computer character when player choose a chacater
function randomCharacter() {
    $('#rightField').children('img').attr('id', 'rightPlayer');
    // flip image
    $('#rightField').children('img').toggleClass('flipped');
    // change name on battle phase with selection character name
    $('#rightName').html($('#rightField').children('div').html());
    // get name of random character
    var randomName = $('#rightField').children('div').html();
    // remove spaces
    noSpaceRandomName = randomName.replace(/ /g,'');
    // convert all letters to lower case
    newRandomName = noSpaceRandomName.toLowerCase();
    // loop the abilities to button ablities
    for (var i = 0; i < character.length; i++) {
        if (newRandomName === character[i]) {
            // select varibles with string
            currentRandomChar = window[character[i]];
            // replace html of abilities buttons with character abilities
            $('#rightAbility1').html(currentRandomChar.abilities1);
            console.log(currentRandomChar.abilities1);
            $('#rightAbility2').html(currentRandomChar.abilities2);
            console.log(currentRandomChar.abilities2);
            $('#rightAbility3').html(currentRandomChar.abilities3);
            console.log(currentRandomChar.abilities3);
        }
    }
    // Remove Name below character
    $('#rightField').children('div').remove();
}
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
        // Remove name from player
        $('#leftField').children('div').remove();
        // fade out selection phase
        $('.selectionPhase').fadeOut(1000);
        // fade in battle phase
        $('.battlePhase').fadeIn(2000);
    }
    for (var i = 0; i < 4; i++){
        // if clicked on character on rebel side
        $('#rebelAlliance-' + i).click(selectAddFade);
        // computer character to be random galatic
        $('#rebelAlliance-' + i).click(function() {
            var randomComputer = Math.floor((Math.random() * 4));
            var selected = $('#galaticEmpire-' + randomComputer).html();
            $('#rightField').html(selected);
            randomCharacter();
        });
        // if clicked on galatic side
        $('#galaticEmpire-' + i).click(selectAddFade);
        // if clicked on galatic side, random rebel to be computer
        $('#galaticEmpire-' + i).click(function() {
            var randomComputer = Math.floor((Math.random() * 4));
            var selected = $('#rebelAlliance-' + randomComputer).html();
            $('#rightField').html(selected);
            randomCharacter();
        });

    }


// Battle Phase
// header portion
    // player one health
        var leftHealth = 100;
        $('.healthBarLeft').html(leftHealth);
        $('.healthBarLeft').width(leftHealth + '%');
    // computer player health
        var rightHealth = 100;
        $('.healthBarRight').html(rightHealth);
        $('.healthBarRight').width(rightHealth + '%');

// battle portion
    var playerWent = false;
    var computerWent = false;
// win condition
function win() {
    if (rightHealth <= 0) {
        var winningPlayer = $('#leftField').html();
        var winningName = $('#leftName').html();
        $('#lastMessageName').html(winningName + " wins");
        $('#winningCharacter').html(winningPlayer);
        $('#rightField').remove();
        $('#powerField').remove();
        $('.battlePhase').fadeOut(1000);
        $('.endMessage').fadeIn(4000);
        setTimeout(function() {
            $('.endMessage').fadeOut(2000);
            $('.theEnd').fadeIn(3000);
        }, 2000);
    };
    if (leftHealth <= 0) {
        var winningPlayer = $('#rightField').html();
        var winningName = $('#rightName').html();
        $('#lastMessageName').html(winningName + " wins");
        $('#winningCharacter').html(winningPlayer);
        $('#leftField').remove();
        $('#powerField').remove();
        $('.battlePhase').fadeOut(1000);
        $('.endMessage').fadeIn(4000);
        setTimeout(function() {
            $('.endMessage').fadeOut(2000);
            $('.theEnd').fadeIn(3000);
        }, 2000);
    };
    
}
// button 1
$('#leftAbility1').click(function() {
    var randomButtonNumber = Math.floor((Math.random() * 3) + 1);
    for (var i = 0; i < character.length; i++)
        playerWent = true;
        // get name of choosen character
        var chacacterName = $('#leftName').html().replace(/ /g,'').toLowerCase();
        // loop the abilities to button ablities
        for (var i = 0; i < character.length; i++) {
            if (chacacterName === character[i]) {
                // select varibles with string
                currentChar = window[character[i]];
                // get abilityDamage
                var abilitiyDamage = currentChar.abilitiesDmg1;
            }
        }
        var ablitiyName = $('#leftAbility1').html().toLowerCase();
        var abilityTag = "<img id='abilities' src='assets/images/abilities/" + ablitiyName + ".gif'>"
        console.log(abilityTag);
        // loop the abilities to button ablities
        $('#powerField').html(abilityTag);
        // move ability's image toward the other player
        $('#abilities').animate({left: '90%'}, 2000, function() {
            $('#abilities').fadeOut('fast');
        });
        // calulate, increment damage then substract from computer's character's health
        setTimeout(function() {
            $('#rightPlayer').toggleClass('shake animated');
            rightHealth = rightHealth - abilitiyDamage;
            $('.healthBarRight').html(rightHealth);
            $('.healthBarRight').width(rightHealth + '%');
            win();
        }, 1900);
        setTimeout(function() {
            $('#rightPlayer').removeClass();
        }, 2800);
        $('button').prop('disabled', true);
        // Computer Side
        if (playerWent) {
            win();
            setTimeout(function() {
                // flip character
                $('#rightPlayer').removeClass('flipped');
                $('#rightPlayer').addClass('flipped');
                $('#powerField').fadeIn();
                var abilityName = $('#rightAbility' + randomButtonNumber).html()
                var abilityTag = "<img id='compAbilities' src='assets/images/abilities/" + abilityName + ".gif'>";
                // loop the abilities to button ablities
                $('#powerField').html(abilityTag);
                $('#compAbilities').toggleClass("flipped");
                $('#compAbilities').css({left: '50%', top: '20%',position:'relative'});
                // set computer power
                // get computer position
                // var computerPositionX = $('#rightPlayer').offset().left;
                // console.log(computerPositionX);
            }, 3000);
            setTimeout(function() {
                $('#compAbilities').animate({left: '-20%'}, 2000, function() {  
                $('#compAbilities').fadeOut('fast');
                $('#leftPlayer').toggleClass('shake animated');
                $('button').prop('disabled', false);
                // get name of choosen character
                var currentChar;
                var name = $('#rightName').html().replace(/ /g,'').toLowerCase();
                for (var i = 0; i < character.length; i++) {
                    if (name === character[i]) {
                        // select varibles with string
                        currentChar = window[character[i]];
                    }
                }
                if (randomButtonNumber === 1) {
                    leftHealth -= currentChar.abilitiesDmg1;
                    $('.healthBarLeft').html(leftHealth);
                    $('.healthBarLeft').width(leftHealth + '%');
                } else if (randomButtonNumber === 2) {
                    leftHealth -=currentChar.abilitiesDmg2;
                    $('.healthBarLeft').html(leftHealth);
                    $('.healthBarLeft').width(leftHealth + '%');
                } else if (randomButtonNumber === 3) {
                    leftHealth -= currentChar.abilitiesDmg3;
                    $('.healthBarLeft').html(leftHealth);
                    $('.healthBarLeft').width(leftHealth + '%');
                }
                playerWent = false;
                win();
                });
            }, 3100);
            setTimeout(function() {
                $('#leftPlayer').removeClass();
            }, 3500);
        }
    });
// button 2
$('#leftAbility2').click(function() {
    for (var i = 0; i < character.length; i++)
        playerWent = true;
        // get name of choosen character
        var chacacterName = $('#leftName').html().replace(/ /g,'').toLowerCase();
        // loop the abilities to button ablities
        for (var i = 0; i < character.length; i++) {
            if (chacacterName === character[i]) {
                // select varibles with string
                currentChar = window[character[i]];
                // get abilityDamage
                var abilitiyDamage = currentChar.abilitiesDmg1;
            }
        }
        var ablitiyName = $('#leftAbility2').html().toLowerCase();
        var abilityTag = "<img id='abilities' src='assets/images/abilities/" + ablitiyName + ".gif'>"
        console.log(abilityTag);
        // loop the abilities to button ablities
        $('#powerField').html(abilityTag);
        // move ability's image toward the other player
        $('#abilities').animate({left: '90%'}, 2000, function() {
            $('#abilities').fadeOut('fast');
        });
        // calulate, increment damage then substract from computer's character's health
        setTimeout(function() {
            $('#rightPlayer').toggleClass('shake animated');
            rightHealth = rightHealth - abilitiyDamage;
            $('.healthBarRight').html(rightHealth);
            $('.healthBarRight').width(rightHealth + '%');
        }, 1900);
        setTimeout(function() {
            $('#rightPlayer').removeClass();
            win();
        }, 2800);
        $('button').prop('disabled', true);
        // Computer Side
        if (playerWent) {
            win();
            var randomButtonNumber = Math.floor((Math.random() * 3) + 1);
            setTimeout(function() {
                // flip character
                $('#rightPlayer').removeClass('flipped');
                $('#rightPlayer').addClass('flipped');
                $('#powerField').fadeIn();
                var abilityName = $('#rightAbility' + randomButtonNumber).html()
                var abilityTag = "<img id='compAbilities' src='assets/images/abilities/" + abilityName + ".gif'>";
                // loop the abilities to button ablities
                $('#powerField').html(abilityTag);
                $('#compAbilities').toggleClass("flipped");
                $('#compAbilities').css({left: '50%', top: '20%',position:'relative'});
                // set computer power
                // get computer position
                // var computerPositionX = $('#rightPlayer').offset().left;
                // console.log(computerPositionX);
            }, 3000);
            setTimeout(function() {
                $('#compAbilities').animate({left: '-20%'}, 2000, function() {  
                $('#compAbilities').fadeOut('fast');
                $('#leftPlayer').toggleClass('shake animated');
                $('.healthBarLeft').html(leftHealth);
                $('.healthBarLeft').width(leftHealth + '%');
                $('button').prop('disabled', false);
                // get name of choosen character
                var currentChar;
                var name = $('#rightName').html().replace(/ /g,'').toLowerCase();
                for (var i = 0; i < character.length; i++) {
                    if (name === character[i]) {
                        // select varibles with string
                        currentChar = window[character[i]];
                    }
                }
                if (randomButtonNumber === 1) {
                    leftHealth -= currentChar.abilitiesDmg1;
                    $('.healthBarLeft').html(leftHealth);
                    $('.healthBarLeft').width(leftHealth + '%');
                } else if (randomButtonNumber === 2) {
                    leftHealth -=currentChar.abilitiesDmg2;
                    $('.healthBarLeft').html(leftHealth);
                    $('.healthBarLeft').width(leftHealth + '%');
                } else if (randomButtonNumber === 3) {
                    leftHealth -= currentChar.abilitiesDmg3;
                    $('.healthBarLeft').html(leftHealth);
                    $('.healthBarLeft').width(leftHealth + '%');
                }
                playerWent = false;
                });
            }, 3100);
            setTimeout(function() {
                $('#leftPlayer').removeClass();
                win();
            }, 3500);
        }
    });
// button 3
$('#leftAbility3').click(function() {
    for (var i = 0; i < character.length; i++)
        playerWent = true;
        // get name of choosen character
        var chacacterName = $('#leftName').html().replace(/ /g,'').toLowerCase();
        // loop the abilities to button ablities
        for (var i = 0; i < character.length; i++) {
            if (chacacterName === character[i]) {
                // select varibles with string
                currentChar = window[character[i]];
                // get abilityDamage
                var abilitiyDamage = currentChar.abilitiesDmg1;
            }
        }
        var ablitiyName = $('#leftAbility3').html().toLowerCase();
        var abilityTag = "<img id='abilities' src='assets/images/abilities/" + ablitiyName + ".gif'>"
        console.log(abilityTag);
        // loop the abilities to button ablities
        $('#powerField').html(abilityTag);
        // move ability's image toward the other player
        $('#abilities').animate({left: '90%'}, 2000, function() {
            $('#abilities').fadeOut('fast');
        });
        // calulate, increment damage then substract from computer's character's health
        setTimeout(function() {
            $('#rightPlayer').toggleClass('shake animated');
            rightHealth = rightHealth - abilitiyDamage;
            $('.healthBarRight').html(rightHealth);
            $('.healthBarRight').width(rightHealth + '%');
        }, 1900);
        setTimeout(function() {
            $('#rightPlayer').removeClass();
            win();
        }, 2800);
        $('button').prop('disabled', true);
        // Computer Side
        if (playerWent) {
            win();
            var randomButtonNumber = Math.floor((Math.random() * 3) + 1);
            setTimeout(function() {
                // flip character
                $('#rightPlayer').removeClass('flipped');
                $('#rightPlayer').addClass('flipped');
                $('#powerField').fadeIn();
                var abilityName = $('#rightAbility' + randomButtonNumber).html()
                var abilityTag = "<img id='compAbilities' src='assets/images/abilities/" + abilityName + ".gif'>";
                // loop the abilities to button ablities
                $('#powerField').html(abilityTag);
                $('#compAbilities').toggleClass("flipped");
                $('#compAbilities').css({left: '50%', top: '20%',position:'relative'});
                // set computer power
                // get computer position
                // var computerPositionX = $('#rightPlayer').offset().left;
                // console.log(computerPositionX);
            }, 3000);
            setTimeout(function() {
                $('#compAbilities').animate({left: '-20%'}, 2000, function() {  
                $('#compAbilities').fadeOut('fast');
                $('#leftPlayer').toggleClass('shake animated');
                $('.healthBarLeft').html(leftHealth);
                $('.healthBarLeft').width(leftHealth + '%');
                $('button').prop('disabled', false);
                // get name of choosen character
                var currentChar;
                var name = $('#rightName').html().replace(/ /g,'').toLowerCase();
                for (var i = 0; i < character.length; i++) {
                    if (name === character[i]) {
                        // select varibles with string
                        currentChar = window[character[i]];
                    }
                }
                if (randomButtonNumber === 1) {
                    leftHealth -= currentChar.abilitiesDmg1;
                    $('.healthBarLeft').html(leftHealth);
                    $('.healthBarLeft').width(leftHealth + '%');
                } else if (randomButtonNumber === 2) {
                    leftHealth -=currentChar.abilitiesDmg2;
                    $('.healthBarLeft').html(leftHealth);
                    $('.healthBarLeft').width(leftHealth + '%');
                } else if (randomButtonNumber === 3) {
                    leftHealth -= currentChar.abilitiesDmg3;
                    $('.healthBarLeft').html(leftHealth);
                    $('.healthBarLeft').width(leftHealth + '%');
                }
                playerWent = false;
                win();
                });
            }, 3100);
            setTimeout(function() {
                $('#leftPlayer').removeClass();
                win();
            }, 3500);
        }
    });