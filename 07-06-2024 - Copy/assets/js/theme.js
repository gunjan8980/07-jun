(function ($) {

  var headerfixed = 1;
  if (headerfixed == 1) {
      $(window).scroll(function () {
          if ($(this).scrollTop() > 160) {
              $('header').addClass('header-fixed');
          } else {
              $('header').removeClass('header-fixed');
          }
      });
  }
  else {
      $('header').removeClass('header-fixed');
  }

})(jQuery);

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");
  
    navLinks.forEach(link => {
      link.addEventListener("click", function() {
        navLinks.forEach(navLink => navLink.classList.remove("underline"));
        this.classList.add("underline");
      });
    });

    // wishlist svg start
    var wishlistItems = document.querySelectorAll('.wishlist');

    wishlistItems.forEach(function(item) {
      
        item.addEventListener('click', function() {
            var svg = this.querySelector('path');
            var currentFillColor = svg.getAttribute('fill');
            var currentStrokeColor = svg.getAttribute('stroke');

            if (currentFillColor === '#FFFFFF' && currentStrokeColor === '#FFFFFF') {
                svg.setAttribute('fill', '#2E7D32');
                svg.setAttribute('stroke', '#2E7D32');
            } else {
                svg.setAttribute('fill', '#FFFFFF');
                svg.setAttribute('stroke', '#FFFFFF');
            }
        });
    });
    // wishlist svg end
    
    // log in page buttom
    const buttons = document.querySelectorAll('.index-buttons a');

    buttons.forEach(button => {
        const svg = button.querySelector('svg');
        const paths = svg.querySelectorAll('path');

        button.addEventListener('mouseenter', function() {
            paths.forEach(path => {
                path.setAttribute('stroke', '#FFFFFF');
            });
        });

        button.addEventListener('mouseleave', function() {
            paths.forEach(path => {
                path.setAttribute('stroke', '#2E7D32');
            });
        });
    });

    
        // back icon start
        var backItems = document.querySelectorAll('.back-icon');
        var paths = document.querySelectorAll('.back-icon svg path');
        backItems.forEach(function(item2) {
          
            item2.addEventListener('mouseenter', function() {
                paths.forEach(function(path) {
                    path.setAttribute('stroke', '#FFFFFF');
                });
            });
            item2.addEventListener('mouseleave', function() {
                paths.forEach(function(path) {
                    path.setAttribute('stroke', '#181818');
                });
            });
        });
        // back icon end

        // OTP verification start
        var otp_inputs = document.querySelectorAll(".otp__digit")
        var mykey = "0123456789".split("")
        otp_inputs.forEach((_)=>{
        _.addEventListener("keyup", handle_next_input)
        })
        function handle_next_input(event){
            let current = event.target
            let index = parseInt(current.classList[1].split("__")[2])
            current.value = event.key
            
            if(event.keyCode == 8 && index > 1){
                current.previousElementSibling.focus()
            }
            if(index < 5 && mykey.indexOf(""+event.key+"") != -1){

                var next = current.nextElementSibling;
                
                next.focus()
            }
            // var _finalKey = ""
            // for(let {value} of otp_inputs){
            //     _finalKey += value
            // }
            // if(_finalKey.length == 6){
            //     document.querySelector("#_otp").classList.replace("_notok", "_ok")
            //     document.querySelector("#_otp").innerText = _finalKey
            // }else{
            //     document.querySelector("#_otp").classList.replace("_ok", "_notok")
            //     document.querySelector("#_otp").innerText = _finalKey
            // }
            // OTP verification end
        }

    // Gender selection start
    const loginFields = document.querySelectorAll('.gender');
    loginFields.forEach(field => {
        field.addEventListener('click', function() {
            loginFields.forEach(field => {
                field.classList.remove('selected');
            });
            this.classList.add('selected');
            this.querySelector('input').checked = true;
        });
    });
    // Gender selection end

    
});
  