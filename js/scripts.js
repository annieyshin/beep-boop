
$(document).ready(function () {

  $("form#ourForm").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#field").val());
    var result = beepBoop(input);
    $("#result").text(result);
    $("#result").show();
  });

});


function beepBoop(number) {
  if(number > 12) {
    return "That number is too large, beepity boop, try something smaller than 42";
  } else if (number % 3 === 0) {
    return "I'm sorry, Dave. I'm afraid I can't do that";
    }


    var numerals = {
"Beep!": 0,
      "Boop!": 1,
      " 2 ": 2,
      " I'm sorry, Dave. I'm afraid I can't do that ": 3,
        " 4 ": 4,
          " 5 ": 5,
      "    I'm sorry, Dave. I'm afraid I can't do that ": 6,
      " 7 ": 7,
      " 8 ": 8,
      "I'm sorry, Dave. I'm afraid I can't do that ": 9,
         "Bleep!": 10,
         " 11 ": 11,
       " I'm sorry, Dave. I'm afraid I can't do that     ": 12};

                  var code = "";
          var i = 0;
          for(i in numerals) {
            while(number >= numerals[i]) {
              code += i + " ";
              i++;

            }
          }

          return code;
         }
