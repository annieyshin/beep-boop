var beepboop = function(input) {
  if (input % 3 === 0) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function () {
  $("form#ourForm").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#field").val());
    var result = beepboop(input);
    $("#result").text(result);
    $("#result").show();

$("#result").text(input);

if(result) {
  $("#result").text("I'm sorry Dave, I can't do that");
} else {
  $("#result").text(input);
}

console.log("hello");


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
