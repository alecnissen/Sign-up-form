// $(document).ajaxStart(function() {
//     Pace.restart();
// });
// $(document).ready(function() {
//   $('input[type=password]').keyup(function() {
//       $('#password_confirmation').on('keyup',function(){
//       $('#pswd_info').hide();
//   });
//       // keyup event code here
//   });
//   $('input[type=password]').focus(function() {
//       // focus code here
//   });
//   $('input[type=password]').blur(function() {

//     $('#password').removeClass('valid');
//       // blur code here
//   });
//    $('input[type=password]').keyup(function() {
//       // keyup code here
//   }).focus(function() {
//       // focus code here

//   }).blur(function() {
//       // blur code here
//   });

//   $('#password').keyup(function() {
//   // keyup code here
//   var pswd = $(this).val();
//   //validate the length
//   if ( pswd.length < 8 ) {
//       $('#length').removeClass('valid').addClass('invalid');
//   } else {
//       $('#length').removeClass('invalid').addClass('valid');
//   }

//   //validate letter
//   if ( pswd.match(/[a-z]/) ) {
//       $('#letter').removeClass('invalid').addClass('valid');
//   } else {
//       $('#letter').removeClass('valid').addClass('invalid');
//   }

//   //validate capital letter
//   if ( pswd.match(/[A-Z]/) ) {
//       $('#capital').removeClass('invalid').addClass('valid');
//   } else {
//       $('#capital').removeClass('valid').addClass('invalid');
//   }

//   //validate number
//   if ( pswd.match(/\d/) ) {
//       $('#number').removeClass('invalid').addClass('valid');
//   } else {
//       $('#number').removeClass('valid').addClass('invalid');
//   }
//   if (/^[a-zA-Z0-9- ]*$/.test(pswd) == false) {
//       $('#special').removeClass('invalid').addClass('valid');
//   } else {
//       $('#special').removeClass('valid').addClass('invalid');
//   }

//   }).focus(function() {
//       $('#pswd_info').show();
//   }).blur(function() {
//       $("#pswd_info").hide();

//   });
// });
// $('#password_confirmation').on('click',function(){
//  $('#pswd_info').hide();
// });



































// password popup container 


let myInput = document.getElementById("password"); 
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length"); 

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
  }
  
  // When the user clicks outside of the password field, hide the message box
  myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
  }
  
  // When the user starts to type something inside the password field
  myInput.onkeyup = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
  }
  
    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }
  
    // Validate numbers
    var numbers = /[0-9]/g;
    if(myInput.value.match(numbers)) {
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }
  
    // Validate length
    if(myInput.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
  } 






// text underneath password field 


// password.addEventListener('focusin', () => {
//     if (password.classList.contains('invalid-input')) {
//     password.classList.remove('invalid-input');
//     }
// passwordValidation.classList.add('pass-focus');
// })



// password.addEventListener('input', () => {
//     const minEightcharCheck = document.querySelector('.pass-at-least-eight');
//     const minOneNumCheck = document.querySelector('.pass-at-least-num');
//     const minOneCharCheck = document.querySelector('.pass-at-least-char');

//     if (password.value.trim().length >= 8) {
//         minEightcharCheck.textContent = '✓';
//         minEightcharCheck.classList.add('pass');
//     } else {
//         minEightcharCheck.textContent = '🗴';
//         minEightcharCheck.classList.remove('pass');
//     }

//     const hasNum = /\d/.test(password.value);
//     if (hasNum) {
//         minOneNumCheck.textContent = '✓';
//         minOneNumCheck.classList.add('pass');
//     } else {
//         minOneNumCheck.textContent = '🗴';
//         minOneNumCheck.classList.remove('pass');

//     }

//     const hasChar = /[a-zA-Z]/.test(password.value);
//     if (hasChar) {
//         minOneCharCheck.textContent = '✓';
//         minOneCharCheck.classList.add('pass');

//     } else {
//         minOneCharCheck.textContent = '🗴';
//         minOneCharCheck.classList.remove('pass');

//     }
// }) 







