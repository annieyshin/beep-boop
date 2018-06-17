var array = [];
var results = [];




$(document).ready(function () {
  $("form#ourForm").submit(function(event) {
    event.preventDefault();
    var varInput = parseInt($("#submitField").val());
    console.log(varInput);
    // var numbToString   = varInput.toString();
    // console.log(typeof(numbToString));
    var brokenDownNumb = countDown(varInput);
    console.log(array);
    function countDown(number) {
      for(var i = 0; i <= varInput; i++) {
        array.push(i);
      }
    }
    



//
// array.forEach(function(x) {
//   if (string.includes("1") {
//     results.push("Boop!");
//   }
//     else if (string.includes("0") {
//       result.push("Beep!");
//     }
//     else if (numberInput % 3 === 0) {
//       results.push("I'm sorry, Dave. I'm afraid I can't do that");
//   }
//     else {
//       results.push(string);
//     }
//
// })
//
//     $("#result").append("<li>" + [fill with output array].map? + "</li");
//
//
//
//

  });

});
