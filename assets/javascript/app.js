var main = $('#bod');

//buttons

$(document).on('click', '#start', function(e) {
  trivia.start();
});

$(document).on('click', '#done', function(e) {
  trivia.done();
});

//trivia

var questions = [{
  question: "1 . What is the largest land animal in the world?",
  answers: ["Yao Ming", "Blue Whale", "Elephant"],
  rightAnswer: "Elephant"
}, {
  question: "2 . Elephants can live over:",
  answers: ["100 years old", "25 years old", "70 years old"],
  rightAnswer: "70 years old"
}, {
  question: "3 . Similar to cats, elephants:",
  answers: ["purr", "good eyesight", "groom themselves"],
  rightAnswer: "purr"
}, {
  question: "4 . What body part other than their ears do elephants use to listen?",
  answers: ["nose", "trunk", "feet"],
  rightAnswer: "feet"
}, {
  question: "5 . Similar to humans, elephants are social creatures. Which of the following actions do elephants NOT partake in?",
  answers: ["rock out", "cry and laugh", "hug"],
  rightAnswer: "rock out"
}, {
  question:  "6 . Which of the following characteristics does an elephant's trunk NOT able to detect?",
  answers: ["temperature of an object", "shape of an object", "level of rad-ness"],
  rightAnswer: "level of rad-ness"
}, {
  question: "7 . Can elephants swim?",
  answers: ["They sure can!", "Probs not??"],
  rightAnswer: "They sure can!"
}, {
  question: "8 . Can elephants jump?",
  answers: ["Duhh!", "Hmm, don't think so."],
  rightAnswer: "Hmm, don't think so."
}, {
  question: "9 . How many muscles does an elephant trunk have?",
  answers: ["too many", "over 40,000", "over 500"],
  rightAnswer: "over 40,000"
}, {
  question: "10 . What is the best land animal in the world?",
  answers: ["baby elephants", "adult elephants", "ALL ELEPHANTS!"],
  rightAnswer: "ALL elephants!"
}];

//log totals and timer

var trivia = {
  correct:0,
  incorrect:0,
  count:60,
  countdown: function(){
    trivia.count--;
    $('#counter-text').html(trivia.count);

    if (trivia.count === 0){
      trivia.done();
    }
  },
  start: function() {
    timer = setInterval(trivia.countdown, 1000);

    $('#second').prepend('<h2 id="clock"><span id="counter-text">60</span> seconds left</h2>');
    $('#start').remove();


    for (var i = 0; i < questions.length; i++) {
      main.append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].answers.length; j++) {
        main.append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
      }
    }

    main.append('<button id="done">Done</button>');
  },
  done: function() {


    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() == questions[0].rightAnswer) {
        trivia.correct++;
      } else {
        trivia.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
        if ($(this).val() == questions[1].rightAnswer) {
        trivia.correct++;
      } else {
        trivia.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() == questions[2].rightAnswer) {
        trivia.correct++;
      } else {
        trivia.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() == questions[3].rightAnswer) {
        trivia.correct++;
      } else {
        trivia.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() == questions[4].rightAnswer) {
        trivia.correct++;
      } else {
        trivia.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() == questions[5].rightAnswer) {
        trivia.correct++;
      } else {
        trivia.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() == questions[6].rightAnswer) {
        trivia.correct++;
      } else {
        trivia.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() == questions[7].rightAnswer) {
        trivia.correct++;
      } else {
        trivia.incorrect++;
      }
    });
    $.each($("input[name='question-8']:checked"), function() {
      if ($(this).val() == questions[8].rightAnswer) {
        trivia.correct++;
      } else {
        trivia.incorrect++;
      }
    });
    $.each($("input[name='question-9']:checked"), function() {
      if ($(this).val() == questions[9].rightAnswer) {
        trivia.correct++;
      } else {
        trivia.incorrect++;
      }
    });
    $.each($("input[name='question-10']:checked"), function() {
      if ($(this).val() == questions[10].rightAnswer) {
        trivia.correct++;
      } else {
        trivia.incorrect++;
      }
    });

    this.result();
  },
    result: function() {

    clearInterval(timer);

    $('#second h2').remove();
    main.html('<h2>All Done!</h2>');
    main.append('<h3>Correct Answers: ' + this.correct + '</h3>');
    main.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
    main.append('<h3>Unanswered: ' + (questions.length - (this.incorrect + this.correct)) + '</h3>');
  }

};