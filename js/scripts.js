var array = [];
var results = [];

$(document).ready(function () {
  $("form#ourForm").submit(function(event) {
    event.preventDefault();
    var varInput = parseInt($("#submitField").val());
    if (varInput % 3 === 0) {
      $("#result").text("I'm sorry, Dave. I'm afraid I can't do that");
    } else {
    var resultMaybe = justForFun(varInput);
    $("#result").text(results);
    // $("#result").show();
    }
    
    function justForFun(number) {
      for (var x = 0; x<= varInput; x++) {
        if (x.toString().includes("1")) {
        results.push("Boop!");
        } else if (x.toString().includes("0")) {
        results.push("Beep!");
      } else if ( x.toString() % 3 === 0) {
          results.push("I'm sorry, Dave. I'm afraid I can't do that");
        } else {
          results.push(x);
          }
          console.log(results);
          }
        }



  });

    });
