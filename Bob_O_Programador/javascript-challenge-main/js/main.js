/**
 * @file Main runtime
 * @author Gleidson Braga 
 */

const configureFormEvents = () => {
    const form = document.getElementsByTagName('form').item(0);
    form.addEventListener('keydown', formOnChange);
    form.addEventListener('submit', formOnSubmit);
}


window.onload = () => {
    configureFormEvents();
    renderJobPage();
}

function validateForm() {
    var a = getElementsByTagName["form"].value;
    if (a == null || a == "") {
        $(".form_error").show();
        $('html,body').animate({
           scrollTop: $(".form_error").offset().top - 180 
        })
    }
};