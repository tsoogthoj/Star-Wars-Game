
// characters attributes
var stormTrooper = {
    name: 'Storm Trooper',
    hp: 100,
    side: 'Galatic Empire',
    abilities1: 'E-11 blaster rifle',
    abilities2: '',
    abilities3: '',
}

var darthVader = {
    name: 'Darth Vader',
    hp: 100,
    side: 'Galatic Empire',
    abilities1: 'Force Choke',
    abilities2: 'Light Saber',
    abilities3: 'Force Lightning',
}

var darthSidious = {
    name: 'Darth Sidious',
    hp: 100,
    side: 'Galatic Empire',
    abilities1: 'Force Throw',
    abilities2: 'Force Choke',
    abilities3: 'Force Lightning',
}

var darthMaul = {
    name: 'Darth Maul',
    hp: 100,
    side: 'Galatic Empire',
    abilities1: 'Double Light Saber',
    abilities2: 'Force Choke',
    abilities3: 'Force Throw',
}

var masterYoda = {
    name: 'Master Yoda',
    hp: 100,
    side: 'Rebel Alliance',
    abilities1: 'Light Saber',
    abilities2: 'Heals',
    abilities3: 'Force Push',
}

var lukeSkywalker = {
    name: 'Luke Skywalker',
    hp: 100,
    side: 'Rebel Alliance',
    abilities1: 'Light Saber',
    abilities2: 'Deflect',
    abilities3: 'Force Push',
}

var chewbacca = {
    name: 'Chewbacca',
    hp: 100,
    side: 'Rebel Alliance',
    abilities1: 'Bowcaster',
    abilities2: 'Slam Ground',
    abilities3: 'Shock Grenade',
}

var princessLeia = {
    name: 'Princess Leia',
    hp: 100,
    side: 'Rebel Alliance',
    abilities1: 'Pistol Fire',
    abilities2: 'Sheild',
    abilities3: 'Grenade',
}



// selection phase
    // show selection phase
    $('.battlePhase').toggle();
    for (var i = 0; i < 4; i++){
        $('#rebelAlliance-' + i).click(function(){
                // fade selection when clicked
                $(this).addClass('fadeDiv');
                // replase player1 with selection
                var selected = $(this).html();
                $('#leftField').html(selected);
                console.log(selected);
                $('#leftField').children('img').attr('id', 'leftPlayer');
                $('#leftField').children('div').remove();
                // fade out selection phase
                $('.selectionPhase').fadeOut(1000);
                // fade in battle phase
                $('.battlePhase').fadeIn(2000);
        })
        $('#galaticEmpire-' + i).click(function(){
            // fade selection when clicked
            $(this).addClass('fadeDiv');
            // replase player1 with selection
            var selected = $(this).html();
            $('#leftField').html(selected);
            console.log(selected);
            $('#leftField').children('img').attr('id', 'leftPlayer');
            $('#leftField').children('div').remove();
            // fade out selection phase
            $('.selectionPhase').fadeOut(1000);
            // fade in battle phase
            $('.battlePhase').fadeIn(2000);
        });
    }



// Battle Phase
// header portion
    // player one
        // name

        // health

    // computer player health
        // name

        // health
        

// battle portion
    // player one
        // character

    // abilities animation

    // computer player
        // charcter


// abilities button portion
    // button 1

    // button 2

    // button 3