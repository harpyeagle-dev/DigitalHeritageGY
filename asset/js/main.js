document.addEventListener("DOMContentLoaded", () => {

    const toggle = document.querySelector("#mobile-nav-toggle");
    const menu = document.querySelector("#top-nav-contents");

    if(toggle && menu){

        toggle.addEventListener("click",()=>{

            menu.classList.toggle("is-open");

            toggle.setAttribute(
                "aria-expanded",
                menu.classList.contains("is-open")
            );

        });

    }

});