(function(global){
  var currentSubject = "",
   currentSubjectArray = "",
   currentQuestion = "",
   maskElem = $('#mask'),
   submitBtn = $('#submit'),
   startedTime = localStorage.getItem('started-time');

   if (!startedTime) { 
    startedTime = new Date(); 
    localStorage.setItem('started-time', startedTime); 
  }



   global.displayNextQuestion = function() {
    currentSubject.questionIndex++;
    currentQuestion = currentSubjectArray[currentSubject.questionIndex];
    if (currentSubject.questionIndex > currentSubjectArray.length - 1) { currentSubject.questionIndex--; }
    currentSubjectArray[currentSubject.questionIndex].style.display = "block";
    currentSubjectArray[currentSubject.questionIndex - 1].style.display = "none";
  };

   global.displayPreviousQuestion = function() {
    currentSubject.questionIndex--;
    if (currentSubject.questionIndex < 0) { currentSubject.questionIndex++; }
    currentSubjectArray[currentSubject.questionIndex].style.display = "block";
    currentSubjectArray[currentSubject.questionIndex + 1].style.display = "none";
  };

  function displayQuestion(e) {
    e.stopPropagation();
    for (var i = currentSubjectArray.length - 1; i >= 0; i--) {
      currentSubjectArray[i].style.display = "none";
    }
    var questionIndex = parseInt(e.target.innerHTML);
    var theQuestion = currentSubjectArray[questionIndex - 1];
    theQuestion.style.display = "block";
    //currentSubjectArray[questionIndex - 1].style.display = "block";
    currentSubject.questionIndex = questionIndex - 1;
  }

  function hideOpenSubject() {
    currentSubject.style.display = "none";
    currentSubject = "";
  }

  function createButtons() {
    if (currentSubject.buttonCreated) { return; }
    var numElem = currentSubject.getElementsByClassName("question_numbers")[0];
    for (var i = 0; i < currentSubjectArray.length; i++) {
      var newButton = document.createElement("a");
      newButton.innerHTML = i + 1;
      newButton.className = "btn btn-primary btn-lg";
      // newButton.data.index = i;
      newButton.addEventListener("click", displayQuestion);
      // theOptions = document.getElementsByClassName(displayQuestion().theQuestion.dataset.question);
      // alert(theOptions)
      // for (var i = 0; i < theOptions.length; i++) {
      //   theOptions[i].addEventListener("click", function(){
      //     if (theOptions[i].checked){newButton.style.display="none";}//{newButton.addClass("answered");}
      //   })
      // }
      numElem.appendChild(newButton);
    }
    currentSubject.buttonCreated = true;
  }

  global.showSubject = function(subject){
    if(currentSubject) hideOpenSubject();
    subject.style.display = "block";
    subject.questionIndex = subject.questionIndex || 0;
    currentSubject = subject;
    currentSubjectArray = subject.getElementsByTagName("li");
    currentSubjectArray[currentSubject.questionIndex].style.display = "block";
    createButtons();
    colorButtons();
  };

  $(document).keydown(function(e) {
    if(!currentSubject) return;

       if (e.keyCode == 65 || e.keyCode == 97) {
           //#a.checked = true
           optionKeyPressed("_a");
        } 
        else if (e.keyCode == 66 || e.keyCode == 98) {
           //#a.checked = true
           optionKeyPressed("_b");
         }
         else if (e.keyCode == 67 || e.keyCode == 99) {
           //#a.checked = true
              optionKeyPressed("_c");
            }
        else if (e.keyCode == 68 || e.keyCode == 100) {
           //#a.checked = true
              optionKeyPressed("_d");
            }
        else if (e.keyCode == 69 || e.keyCode == 101) {
           //#a.checked = true
              optionKeyPressed("_e");
            }
        else if (e.keyCode == 80 || e.keyCode == 112) {
           //P key for previous question
              global.displayPreviousQuestion();
            }
        else if (e.keyCode == 78 || e.keyCode == 110) {
           //N key for next question
              global.displayNextQuestion();
            }
        else if (e.keyCode == 83 || e.keyCode == 115) {
           //S for submit
                $('#mask').addClass('active');
                maskElem.find("#dialog").html('\
                  <p>Are you sure you want to submit?</p>\
                <p>Press "R" to Reverse or Press "Y" to confirm submission</p>');
            }
             else if (maskElem.hasClass('active') && e.keyCode === 89) {
                localStorage.removeItem(startedTime);
                submitBtn.click();
              }
             else if (e.keyCode == 82 || e.keyCode == 114){
              maskElem.removeClass('active');
            }

    })

  function optionKeyPressed(keyValue) {
    if(!currentSubject) return;
    var currentQuestionId= currentSubjectArray[currentSubject.questionIndex].dataset.question;
    var optionId = currentQuestionId + keyValue;
    var optionSelected = document.getElementById(optionId);
    optionSelected.checked = true;
    $.ajax({
            type: "POST",
            url: "/user_choice/",
            data: {
                'user_choice_question': optionId,
                'csrfmiddlewaretoken': $('input[name=csrfmiddlewaretoken]').val()
            },
        });
    var numElem = currentSubject.getElementsByClassName("question_numbers")[0];
    var done = numElem.children[currentSubject.questionIndex].style.backgroundColor="#9ad4a9";
        return;
    
  }
  
function colorButtons() {
    if (currentSubject.buttonColored) { return; }
    for (var i = 0; i < currentSubjectArray.length; i++) {
      var currentQuestionId= currentSubjectArray[i].dataset.question;
      var options = document.getElementsByClassName(currentQuestionId);
      for (var j = 0; j < options.length; j++) {
        if (options[j].checked) {
          var numElem = currentSubject.getElementsByClassName("question_numbers")[0];
          var done = numElem.children[i].style.backgroundColor="#9ad4a9";
        }
      }
    }
    currentSubject.buttonColored = true;
  }


  global.getUserChoice = function(){
    var numElem = currentSubject.getElementsByClassName("question_numbers")[0];
    var done = numElem.children[currentSubject.questionIndex].style.backgroundColor="#9ad4a9";

    $.ajax({
            type: "POST",
            url: "/user_choice/",
            data: {
                'user_choice_question': document.activeElement.id,
                'csrfmiddlewaretoken': $('input[name=csrfmiddlewaretoken]').val()
            },
        });
        return;
}
          function getTimeRemaining(endtime) {
            var t = Date.parse(endtime) - Date.parse(new Date());
            var seconds = Math.floor((t / 1000) % 60);
            var minutes = Math.floor((t / 1000 / 60) % 60);
            var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            var days = Math.floor(t / (1000 * 60 * 60 * 24));
            return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
            };
            }
            
            function initializeClock(id, endtime) {
            var clock = document.getElementById(id);
            var daysSpan = clock.querySelector('.days');
            var hoursSpan = clock.querySelector('.hours');
            var minutesSpan = clock.querySelector('.minutes');
            var secondsSpan = clock.querySelector('.seconds');
            
            function updateClock() {
              var t = getTimeRemaining(endtime);
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
              minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
              secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
            
              if (t.total <= 0) {
                clearInterval(timeinterval);
                maskElem.find("#dialog").html("<h1>Your time is up. Submitting...</h1>");
                localStorage.removeItem(startedTime);
                submitBtn.click();
              }
            }
            
            updateClock();
            var timeinterval = setInterval(updateClock, 1000);

            var sendElapseTimeInterval = setInterval(sendUserElapsedTime, 120000);
            function sendUserElapsedTime() {
              var t = getTimeRemaining(endtime);
            
              if (t.total <= 0) {
                clearInterval(sendElapseTimeInterval);
              } else {
                $.ajax({
                        type: "POST",
                        url: "/update_elapse_time/",
                        data: {
                            'csrfmiddlewaretoken': $('input[name=csrfmiddlewaretoken]').val(),
                            'incByMinutes': 2
                        },
                    });
              }
            }
            
            }
            
            // var duration = $('#duration').val();
            // var starttime = $('#starttime').val();
            
            // var deadline = new Date(Date.parse(new Date()) + duration * 60 * 1000);
            // initializeClock('clockdiv', deadline);
            var duration = $('#du').val();
            var elapseTime = $('#et').val() || 0;

            //var remainingDuration = duration - elapseTime;
            var starttime = new Date();
            starttime.setMinutes(starttime.getMinutes() - elapseTime);
           
            
            var deadline = new Date(Date.parse(starttime) + duration * 60 * 1000);
            initializeClock('clockdiv', deadline);

  return global;
}(this));

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
// Get all the keys from document
var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', 'x', '÷'];
var decimalAdded = false;

// Add onclick event to all the keys and perform operations
for(var i = 0; i < keys.length; i++) {
  keys[i].onclick = function(e) {
    // Get the input and button values
    var input = document.querySelector('.screen');
    var inputVal = input.innerHTML;
    var btnVal = this.innerHTML;
    
    // Now, just append the key values (btnValue) to the input string and finally use javascript's eval function to get the result
    // If clear key is pressed, erase everything
    if(btnVal == 'C') {
      input.innerHTML = '';
      decimalAdded = false;
    }
    
    // If eval key is pressed, calculate and display the result
    else if(btnVal == '=') {
      var equation = inputVal;
      var lastChar = equation[equation.length - 1];
      
      // Replace all instances of x and ÷ with * and / respectively. This can be done easily using regex and the 'g' tag which will replace all instances of the matched character/substring
      equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
      
      // Final thing left to do is checking the last character of the equation. If it's an operator or a decimal, remove it
      if(operators.indexOf(lastChar) > -1 || lastChar == '.')
        equation = equation.replace(/.$/, '');
      
      if(equation)
        input.innerHTML = eval(equation);
        
      decimalAdded = false;
    }
    
    // Basic functionality of the calculator is complete. But there are some problems like 
    // 1. No two operators should be added consecutively.
    // 2. The equation shouldn't start from an operator except minus
    // 3. not more than 1 decimal should be there in a number
    
    // We'll fix these issues using some simple checks
    
    // indexOf works only in IE9+
    else if(operators.indexOf(btnVal) > -1) {
      // Operator is clicked
      // Get the last character from the equation
      var lastChar = inputVal[inputVal.length - 1];
      
      // Only add operator if input is not empty and there is no operator at the last
      if(inputVal != '' && operators.indexOf(lastChar) == -1) 
        input.innerHTML += btnVal;
      
      // Allow minus if the string is empty
      else if(inputVal == '' && btnVal == '-') 
        input.innerHTML += btnVal;
      
      // Replace the last operator (if exists) with the newly pressed operator
      if(operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
        // Here, '.' matches any character while $ denotes the end of string, so anything (will be an operator in this case) at the end of string will get replaced by new operator
        input.innerHTML = inputVal.replace(/.$/, btnVal);
      }
      
      decimalAdded =false;
    }
    
    // Now only the decimal problem is left. We can solve it easily using a flag 'decimalAdded' which we'll set once the decimal is added and prevent more decimals to be added once it's set. It will be reset when an operator, eval or clear key is pressed.
    else if(btnVal == '.') {
      if(!decimalAdded) {
        input.innerHTML += btnVal;
        decimalAdded = true;
      }
    }
    
    // if any other key is pressed, just append it
    else {
      input.innerHTML += btnVal;
    }
    
    // prevent page jumps
    e.preventDefault();
  } 
}
