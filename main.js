//Code has been refactored into 2 more concise functions. Machine works as instructed, but does not pass test 6, 
//despite playing audio.  I've included multiple refactor attempts below, each working but failing test 6. 

$(document).ready(function() {

    
$('.drum-pad').click(function(e) { 
    $(this).find("audio").get(0).currentTime = 0;
    $(this).find("audio").get(0).play()
        $(this).find("audio").get(0).play()
        $('#display').html(e.target.id)   
});

$(document).keypress(function(event) {
$('.drum-pad').each(function() {
    if (String.fromCharCode(event.which) === $(this).text().toLowerCase() || String.fromCharCode(event.which) === $(this).text()) {
        $(this).find("audio").get(0).currentTime = 0;
        $(this).find("audio").get(0).play()
        $('#display').html($(this).attr("id"))
        $(this).css("background-color", "red");
        setTimeout(function() {
            $('.drum-pad').each(function() {
                $(this).css("background-color", "lightgrey");
            })
    },50)
    }
})
})


});


// function keyControls(item) {
//     item.find("audio").get(0).currentTime = 0;
//     item.find("audio").get(0).play()
//     $('#display').html(item.attr('id'))
//     item.css("background-color", "red");  
// }

// function keyControl(songID) {
//     songID[0].play()
//     $('#display').html(songID.parent().attr('id'))
//     songID.parent().css("background-color", "red");
//     setTimeout(function() {
//         songID.parent().css("background-color", "lightgrey")
//     })
// }sda

// $(document).keypress(function(event) {

//     for (var i = 0; i < $('.drum-pad').length; i++) {
//         console.log($('.drum-pad').get(0).html())
//         let theString = $('.drum-pad').get(i).text()
    
//         if (event.which === theString.charCodeAt(0)) {
//             $('.drum-pad').get(i).find("audio").get(0).play()
//             $('#display').html($('.drum-pad').get(i).attr('id'))
//             $('drum-pad').get(i).css("background-color", "red")
//             setTimeout(function() {
//                 $('.drum-pad').get(i).css("background-color", "lightgrey")
//             })
//         }
        
//     }

// })

// $( "li" ).each(function( index ) {
//     console.log( index + ": " + $( this ).text() );
//   });



// $(document).keypress(function(event) {
    

//     if (event.which === 81 || event.which === 113) {
   
//         keyControls($('#Cymbals'))
//     }  else if (event.which === 87 || event.which === 119) {
     
//         keyControls($('#High-Hat'))
//          } else if (event.which === 69 || event.which === 101) {
            
//             keyControls($('#Crash-Cymbals'))
//          } else if (event.which === 65 || event.which === 97) {
        
//             keyControls($('#Cowbell'))
//          } else if (event.which === 83 || event.which === 115) {
         
//             keyControls($('#Snare-Drum'))
//          } else if (event.which === 68 || event.which === 100) {
         
//             keyControls($('#Tom-Toms'))
//          } else if (event.which === 90 || event.which === 122) {
            
//             keyControls($('#Floor-Tom'))
//          } else if (event.which === 88 || event.which === 120) {
            
//             keyControls($('#Bass-Drum'))
//          } else if (event.which === 67 || event.which === 99) {
             
//             keyControls($('#Triangle'))
//          }

       
// })





