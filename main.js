$(document).ready(function() {

    //Array that holds all data

const info = [
    {
    letter: "Q",
    effect: "Cymbals",
    audio: "http://www.denhaku.com/r_box/sr16/sr16cym/cmbocrsh.wav"   
    },
    {
    letter: "W",
    effect: "High Hat",
    audio: "http://www.denhaku.com/r_box/sr16/sr16hat/smallhat.wav"
    },
    {
    letter: "E",
    effect: "Crash Cymbal",
    audio: "http://dight310.byu.edu/media/audio/FreeLoops.com/2/2/Crash%20Hit%20003-1698-Free-Loops.com.mp3"
    },
    {
    letter: "A",
    effect: "Cowbell",
    audio: "http://www.randomthink.net/labs/html5drums/drumkit/Cow%20Bell.wav"
    },
    {
    letter: "S",
    effect: "Snare Drum",
    audio: "http://bigsamples.free.fr/d_kit/snare/snare03.wav"
    },
    {
    letter: "D",
    effect: "Tom Toms",
    audio: "http://www.denhaku.com/r_box/sr16/sr16tom/mdsuprtm.wav"
    },
    {
    letter: "Z",
    effect: "Floor Tom",
    audio: "http://www.denhaku.com/r_box/sr16/sr16tom/hiflatrm.wav"
    },
    {
    letter: "X",
    effect: "Bass Drum",
    audio: "http://dight310.byu.edu/media/audio/FreeLoops.com/3/3/Free%20Kick%20Sample%209-903-Free-Loops.com.mp3"
    },
    {
    letter: "C",
    effect: "Triangle",
    audio: "http://www.burnkit2600.com/temp/HR-16/HR-16-WAVs/45-triangle.wav"
    },
    
]


//functions

let audio;

function playDrum(drum) {
    $('#display').html(info[drum].effect)
        audio = new Audio(info[drum].audio)
        audio.play();
}

function colorChange(item) {
    item.css("background-color", "red");
    setTimeout(function() {
        item.css("background-color", "lightgrey")
    }, 100)
}




//Event Handlers

$('.drum-pad').click(function() {
    switch($('.drum-pad').index(this)) {
        case 0: playDrum(0)
        break;
        case 1: playDrum(1)
        break;
        case 2: playDrum(2)
        break;
        case 3: playDrum(3)
        break;
        case 4: playDrum(4)
        break;
        case 5: playDrum(5)
        break;
        case 6: playDrum(6)
        break;
        case 7: playDrum(7)
        break;
        case 8: playDrum(8)
        break;

    }
})



$(document).keypress(function(event) {
    

    if (event.which === 113) {
        playDrum(0);
        colorChange($('#Q'))
    }  else if (event.which === 119) {
            playDrum(1);
            colorChange($('#W'))
         } else if (event.which === 101) {
            playDrum(2);
            colorChange($('#E'))
         } else if (event.which === 97) {
             playDrum(3);
             colorChange($('#A'))
         } else if (event.which === 115) {
             playDrum(4);
             colorChange($('#S'))
         } else if (event.which === 100) {
             playDrum(5);
             colorChange($('#D'))
         } else if (event.which === 122) {
             playDrum(6);
             colorChange($('#Z'))
         } else if (event.which === 120) {
             playDrum(7);
             colorChange($('#X'))
         } else if (event.which === 99) {
             playDrum(8);
             colorChange($('#C'))
         }

       
})


});


