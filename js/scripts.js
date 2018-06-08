
$(document).ready(function () {
  $("form#ourForm").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#field").val());
    var result = beepboop(input);
    $("#result").text(result);
    $("#result").show();
  });

});

    function beepboop(input) {
      if (input > 100) {
        return "That number is too large, beepity boop, try something smaller";
      } else if (input % 3 === 0) {
        return "I'm sorry, Dave. I'm afraid I can't do that";
      }

console.log("hello");

// BEEP BOOP CONDITIONS
  var inputs = {
                                                      "Boop!": 100,
                                                      "Beep!": 90,
                                                      "Beep!": 80,
                                                      "Beep!": 70,
                                                      "Beep!": 60,
                                                      "Beep!": 50,
                                                      "Beep!": 40,
                                                      "Beep!": 30,
                                                      "Beep!": 20,
                "I'm sorry, Dave. I'm afraid I can't do that": 18,
                "I'm sorry, Dave. I'm afraid I can't do that": 15,
                "I'm sorry, Dave. I'm afraid I can't do that": 12,
                                                      "Beep!": 10,
                "I'm sorry, Dave. I'm afraid I can't do that": 9,
                "I'm sorry, Dave. I'm afraid I can't do that": 6,
                "I'm sorry, Dave. I'm afraid I can't do that": 3,
                                                      "Beep!": 1,
                                                      "Boop!": 0, };

  var output = "";
  var i = 0;
 //
  for(i in inputs) {
    while(input >= inputs[i]) {
      output += i;
      input -= inputs[i];

    }
  }
  return output;
 }
