var array = [];
var results = [];

function blahboop(number) {
for(var x = 0; x <= array.length; x++) {
  if ( x % 3 === 0) {
    results.push("I'm sorry, Dave. I'm afraid I can't do that");
    } else if (x.toString().includes("1")) {
      results.push("Beep!");
    } else if (x.toString().includes("0")) {
      results.push("Boop!");
    }
    else {
      results.push(x);
      }

}
}


$(document).ready(function () {
  $("form#ourForm").submit(function(event) {
    event.preventDefault();
    var varInput = parseInt($("#submitField").val());
    var brokenDownNumb = countDown(varInput);
    function countDown(number) {
      for(var i = 0; i <= varInput; i++) {
        array.push(i);
        console.log(array);
        var stringTheory = array.toString().split("");
      }
      var resultsMaybe = blahboop(stringTheory);

            console.log(resultsMaybe);

            }
$("#result").text(results);


});
});
