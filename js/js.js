document.getElementById("desktop1-submit").addEventListener("click", function () {
    // Perform form validation
    const phnumber = document.getElementById("phnumber").value;
    if (!phnumber) {
        alert("Phone number is required.");
        return;
    }

    if (phnumber.length !== 10) {
        alert("Please enter correct phone number.");
        return;
    }

    window.location.href = "desktop7.html";
});

function moveToNext(input) {
    const maxLength = parseInt(input.getAttribute('maxlength'));
    const currentLength = input.value.length;

    if (currentLength >= maxLength) {
        const nextInput = input.nextElementSibling;

        if (nextInput) {
            nextInput.focus();
        }
    }
}


function validateOTP() {
    const otp1 = document.getElementById("otp1").value;
    const otp2 = document.getElementById("otp2").value;
    const otp3 = document.getElementById("otp3").value;
    const otp4 = document.getElementById("otp4").value;

    // Check if all OTP fields are filled
    if (otp1 && otp2 && otp3 && otp4) {
        // Perform additional validation here if needed


        window.location.href = "desktop6.html";
    } else {
        alert("Please enter a valid OTP.");
    }
}

function register() {
    const fname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const referral = document.getElementById("referral").value;

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    //Check if name and email are not null
    if (!fname) {
        alert("Please enter your name.");
        return;
    }

    if (emailPattern.test(email)) {
    } else {
        alert("Please enter a valid email address.");
        return;
    }

    window.location.href = "desktop8.html";
}


function enableButton() {
    const checkbox1 = document.getElementById("checkbox1");
    const checkbox2 = document.getElementById("checkbox2");
    const checkbox3 = document.getElementById("checkbox3");
    const checkbox4 = document.getElementById("checkbox4");
    const checkbox5 = document.getElementById("checkbox5");
    const checkbox6 = document.getElementById("checkbox6");

    const submitButton = document.getElementById("desktop8-submit");
    const label = document.querySelector('label');
    const checkborder1 = document.getElementById("checkborder1");
    const checkborder2 = document.getElementById("checkborder2");
    const checkborder3 = document.getElementById("checkborder3");
    const checkborder4 = document.getElementById("checkborder4");
    const checkborder5 = document.getElementById("checkborder5");
    const checkborder6 = document.getElementById("checkborder6");



    if (checkbox1.checked || checkbox2.checked || checkbox3.checked || checkbox4.checked || checkbox5.checked || checkbox6.checked) {
        submitButton.disabled = false;
        submitButton.style.background = "#283A97";
        submitButton.style.cursor = "pointer";
        if (checkbox1.checked) {
            checkborder1.style.border = "1px solid #283A97";
            document.querySelector('label[for="checkbox1"]').style.color = "#3746A3";
        }
        if (checkbox2.checked) {
            checkborder2.style.border = "1px solid #283A97";
            document.querySelector('label[for="checkbox2"]').style.color = "#3746A3";
        }
        if (checkbox3.checked) {
            checkborder3.style.border = "1px solid #283A97";
            document.querySelector('label[for="checkbox3"]').style.color = "#3746A3";
        }
        if (checkbox4.checked) {
            checkborder4.style.border = "1px solid #283A97";
            document.querySelector('label[for="checkbox4"]').style.color = "#3746A3";
        }
        if (checkbox5.checked) {
            checkborder5.style.border = "1px solid #283A97";
            document.querySelector('label[for="checkbox5"]').style.color = "#3746A3";
        }
        if (checkbox6.checked) {
            checkborder6.style.border = "1px solid #283A97";
            document.querySelector('label[for="checkbox6"]').style.color = "#3746A3";
        }


        if (!checkbox1.checked) {
            checkborder1.style.border = "none";
            document.querySelector('label[for="checkbox1"]').style.color = "#BDBDBD";
        }
        if (!checkbox2.checked) {
            checkborder2.style.border = "none";
            document.querySelector('label[for="checkbox2"]').style.color = "#BDBDBD";
        }
        if (!checkbox3.checked) {
            checkborder3.style.border = "none";
            document.querySelector('label[for="checkbox3"]').style.color = "#BDBDBD";
        }
        if (!checkbox4.checked) {
            checkborder4.style.border = "none";
            document.querySelector('label[for="checkbox4"]').style.color = "#BDBDBD";
        }
        if (!checkbox5.checked) {
            checkborder5.style.border = "none";
            document.querySelector('label[for="checkbox5"]').style.color = "#BDBDBD";
        }
        if (!checkbox6.checked) {
            checkborder6.style.border = "none";
            document.querySelector('label[for="checkbox6"]').style.color = "#BDBDBD";
        }

    } else {
        submitButton.disabled = true;
        submitButton.style.background = "#DADFFF";
        submitButton.style.cursor = "not-allowed";

        if (!checkbox1.checked) {
            checkborder1.style.border = "none";
            document.querySelector('label[for="checkbox1"]').style.color = "#BDBDBD";
        }
        if (!checkbox2.checked) {
            checkborder2.style.border = "none";
            document.querySelector('label[for="checkbox2"]').style.color = "#BDBDBD";
        }
        if (!checkbox3.checked) {
            checkborder3.style.border = "none";
            document.querySelector('label[for="checkbox3"]').style.color = "#BDBDBD";
        }
        if (!checkbox4.checked) {
            checkborder4.style.border = "none";
            document.querySelector('label[for="checkbox4"]').style.color = "#BDBDBD";
        }
        if (!checkbox5.checked) {
            checkborder5.style.border = "none";
            document.querySelector('label[for="checkbox5"]').style.color = "#BDBDBD";
        }
        if (!checkbox6.checked) {
            checkborder6.style.border = "none";
            document.querySelector('label[for="checkbox6"]').style.color = "#BDBDBD";
        }


    }
}

function desktop8_redirect() {
    if (checkbox1.checked || checkbox2.checked || checkbox3.checked || checkbox4.checked || checkbox5.checked || checkbox6.checked) {
        window.location.href = "desktop9.html";
    }
    else {
        alert("Please check minimum 1 option.");
        return;
    }
}

function radiochange() {
    const radio1 = document.getElementById("checkbox1");
    const radio2 = document.getElementById("checkbox2");
    const radio3 = document.getElementById("checkbox3");

    const border1 = document.getElementById("radio-border1");
    const border2 = document.getElementById("radio-border2");
    const border3 = document.getElementById("radio-border3");


    const label = document.querySelector('label');

    document.querySelector('label[for="checkbox1"]').style.color = "#3746A3";



    if (radio1.checked) {
        border1.style.border = "1px solid #283A97";
        document.querySelector('label[for="checkbox1"]').style.color = "#3746A3";
        border2.style.border = "none";
        document.querySelector('label[for="checkbox2"]').style.color = "#BDBDBD";
        border3.style.border = "none";
        document.querySelector('label[for="checkbox3"]').style.color = "#BDBDBD";
    }
    else if (radio2.checked) {
        border2.style.border = "1px solid #283A97";
        document.querySelector('label[for="checkbox2"]').style.color = "#3746A3";
        border3.style.border = "none";
        document.querySelector('label[for="checkbox3"]').style.color = "#BDBDBD";
        border1.style.border = "none";
        document.querySelector('label[for="checkbox1"]').style.color = "#BDBDBD";
    }
    else if (radio3.checked) {
        border3.style.border = "1px solid #283A97";
        document.querySelector('label[for="checkbox3"]').style.color = "#3746A3";
        border1.style.border = "none";
        document.querySelector('label[for="checkbox1"]').style.color = "#BDBDBD";
        border2.style.border = "none";
        document.querySelector('label[for="checkbox2"]').style.color = "#BDBDBD";
    }

}


function startTimer(seconds) {
    var link = document.querySelector(".resend");
    link.style.pointerEvents = "none";

    var timer = seconds;

    function updateTimer() {
        link.innerText = "Resend OTP in " + timer + "s";
        if (timer <= 0) {
            link.innerText = "Resend OTP";
            link.style.pointerEvents = "auto";
        }
        timer--;
    }

    updateTimer();

    var countdown = setInterval(updateTimer, 1000);
}


document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".carousel-slider");
    const items = document.querySelectorAll(".carousel-item");
    let index = 0;

    function nextSlide() {
        slider.style.transition = "transform 0.5s ease-in-out";
        index = (index + 1) % items.length;
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    function loopCarousel() {
        setInterval(nextSlide, 3000);
    }

    loopCarousel();
});


document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".carousel2-slider");
    const items = document.querySelectorAll(".carousel2-item");
    let index = 0;

    function nextSlide() {
        slider.style.transition = "transform 0.5s ease-in-out";
        index = (index + 1) % items.length;
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    function loopCarousel() {
        setInterval(nextSlide, 3000);
    }

    loopCarousel();
});