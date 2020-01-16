$(document).ready(function() {
    $("form#insurance").submit(function() {
        var age = parseInt($("input#age").val());
        var gender = $("select#gender").val();
    
        if (age) {
        var quote = (100 - age) * 3;     
        if (gender === "male" || age < 26){
          quote += 50;
        }
        $("#rate").text(quote);
        $("#quote").show();
        $("#please").hide();
      } else {
        $("#please").text("Please enter your age");
        $("#please").show();
        $("#quote").hide();
      }
        event.preventDefault();
      });










    });