
const email = document.getElementById("email_address");
const gilaki = document.getElementById("arrow_background");
const send_email = document.getElementById("send_email");
const arasworia = document.getElementById("email_error");
const error = document.getElementById("error_div");


let mailregex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function testMail(input) {
    if (mailregex.test(input.value)) {
        console.log("this is true");
        arasworia.style.display = "none";
        send_email.style.border = "none";
        error.style.display = "none";
    }

    else if (!mailregex.test(input.value)) {
        console.log("this is false");
        send_email.style.border = " 2px solid #F96464";
        arasworia.style.display = "block";
        error.style.display = "block";
    };
};

gilaki.addEventListener("click", function () {
    testMail(email);
}
);

