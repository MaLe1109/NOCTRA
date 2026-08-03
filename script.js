const button = document.querySelector("button");

const message = document.querySelector("#message");

button.addEventListener("click", function(){
    message.innerHTML = "Willkommen bei NOCTRA";

     message.style.opacity = "1";

     message.style.transform = "translateY(0)";

});


const title = document.querySelector("#title");

const subtitle = document.querySelector("#subtitle");

const description = document.querySelector("#description");

window.addEventListener("load", function(){

    title.style.opacity = "1";

    title.style.transform = "translateY(0)";


    setTimeout(function() {
        subtitle.title.opacity = "1";

        subtitle.style.transform = "translateY(0)";
    
    }, 500);

    setTimeout(function(){

        description.style.opacity = "1";

        description.style.transform = "translate(0)";
    }, 1000);
});