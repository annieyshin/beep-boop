var threedivisible = function(input) {
  if (input % 3 === 0) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function () {

  $("form#ourForm").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#field").val());
    var result = beepboop(input);
    $("#result").text(result);
    $("#result").show();
  });

});

 //  var inputs = {"Beep": 1,
 //                 "Boop": 0,
 //                 };
 //  var number = "";
 //  var i = 0;
 //
 //  for(i in numerals) {
 //    while(number >= numerals[i]) {
 //      roman += i;
 //      number -= numerals[i];
 //
 //    }
 //  }
 //  return roman;
 // }
