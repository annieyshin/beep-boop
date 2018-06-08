
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
      if(number > 101) {
        return "That number is too large, beepity boop, try something smaller";
      } else if (input % 3 === 0) {
        return "I'm sorry, Dave. I'm afraid I can't do that";
      }

console.log("hello");

// BEEP BOOP CONDITIONS
                                       var phrases = {"Boop!": 100,
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

  for(i in phrases) {
    while(number >= phrases[i]) {
      output += i;
      number -= phrases[i];

    }
  }
  return output;
 }
