
var secretNumber = Math.floor(Math.random()*101);
var answers = [];
var indexAnswers = 0;

$('#checkButton').click(function(){
  checkNumber();
});
$('#number').focus(function(){
  $('#highOrLow').empty();
})

function checkNumber() {

  var playerNumber = document.getElementById('number').value;

  if ( playerNumber.length <1 || (playerNumber < 0) || (playerNumber > 100)) {
    $('#number').css('border', '2px solid red');
    alert('J\'ai dit UN NOMBRE ENTRE 0 ET 100 !!!!');
  } else {
    if (playerNumber == secretNumber) {
      $('#Success').text(function() {
        return 'Félicitation, vous avez trouvé, mais vous pouvez quand même rejouer !!'
      });
    } else if (playerNumber < secretNumber) {
      if (indexAnswers < 9) {

        $('#highOrLow').text(function(){
          return 'Trop petit';
        });
        answers[indexAnswers] = playerNumber;
        indexAnswers++
        $('#recap').text(function() {
          return answers;
        });
      } else {
        $('#failure').text(function() {
          return 'Dommage vous avez perdu, mais vous pouvez retenter votre chance !'
        });
      }
    } else {
      if (indexAnswers < 9) {
        $('#highOrLow').text(function(){
          return 'Trop grand';
        });
        answers[indexAnswers] = playerNumber;
        indexAnswers++
        $('#recap').text(function() {
          return answers;
        });
      } else {
        $('#failure').text(function() {
          return 'Dommage vous avez perdu, mais vous pouvez retenter votre chance !'
        });
      }
    }
  }
}
