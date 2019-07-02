var loadTime;

function splashLoader(){
    loadTime = setTimeout(sendIndex, 1000);
}

function sendIndex(){
    window.location.href='login.html';
}

function logined(){
    window.location.href='loading.html';
}

function loader(){
    loadTime = setTimeout(sendHome, 2000);
}

function sendHome(){
    window.location.href='home.html';
}

function payLoader(){
    loadTime = setTimeout(showPaid, 2000);
}

function showPaid(){
    document.getElementById("processing").style.display = "none";
    document.getElementById("paid").style.display = "block";
    loadTime = setTimeout(sendBoardingPass, 800);
}

function sendBoardingPass(){
    window.location.href='boarding-pass.html';
}

function validate(evt) {
    var theEvent = evt || window.event;
  
    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
    // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }

// Booking Details Form Confirm
function bd_confirm(){
    var storage = window.localStorage;

    // Get Value
    var bd_refnumber = document.getElementById('booking-reference').value;
    var bd_lastname = document.getElementById('last-name').value;
    var bd_connumber = document.getElementById('contact-number').value;
    document.getElementById("try").innerHTML = bd_refnumber + " " + bd_lastname + " " + bd_connumber;

    // Store Item
    storage.setItem('bd_refnumber', bd_refnumber);
    storage.setItem('bd_lastname', bd_lastname);
    storage.setItem('bd_connumber', bd_connumber);

    // Get Item
    var  storedRefNumber = storage.getItem('bd_refnumber');
    var  storedLastName = storage.getItem('bd_lastname');
    var  storedConNumber = storage.getItem('bd_connumber');

    document.getElementById("tryw").innerHTML = storedRefNumber+ " " + storedLastName + " " + storedConNumber +"Stored";

    // Go to another site
    window.location.href = "boarding-pass.html";
}

var _hmt = _hmt || [];
(function() {
var hm = document.createElement("script");
hm.src = "//hm.baidu.com/hm.js?73c27e26f610eb3c9f3feb0c75b03925";
var s = document.getElementsByTagName("script")[0];
s.parentNode.insertBefore(hm, s);
})();

// Edit Profile
function editProfile(){
    var profile_inputs = document.getElementsByClassName("profile_inputs");
    var edit_btn = document.getElementById("edit-btn");
    var save_btn = document.getElementById("save-btn");
    var confirm_btn = document.getElementById("profile-confirm-holder");
    
    // profile_inputs[0].style.backgroundColor = "red";
    for (counter = 0; counter < profile_inputs.length; counter++) {
        profile_inputs[counter].disabled=false;
        profile_inputs[counter].style.backgroundColor = "#e8f0fe";
        profile_inputs[counter].style.border = "solid 1px #2A2929";
        profile_inputs[counter].style.borderRadius = "5px";
        profile_inputs[counter].style.padding = ".375rem .75rem";
    }
    save_btn.style.display = "block";
    edit_btn.style.display = "none";
    confirm_btn.style.display = "block";
    
}

function saveProfile(){
    var profile_inputs = document.getElementsByClassName("profile_inputs");
    var edit_btn = document.getElementById("edit-btn");
    var save_btn = document.getElementById("save-btn");
    var confirm_btn = document.getElementById("profile-confirm-holder");

    for (counter = 0; counter < profile_inputs.length; counter++) {
        profile_inputs[counter].disabled=true;
        profile_inputs[counter].style.backgroundColor = "#FFF";
        profile_inputs[counter].style.border = "none";
        profile_inputs[counter].style.padding = "0";
    }
    save_btn.style.display = "none";
    edit_btn.style.display = "block";
    confirm_btn.style.display = "none";

    // PHP save functions
}