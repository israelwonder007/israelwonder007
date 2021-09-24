let toggleNavStatus = false;

// Anonymous function
let toggleNav = function() {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarTitle = document.querySelector(".nav-sidebar span");
    // What querySelectorAll does is that it takes all the anchor(a) tags and put them inside an Array...
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

    if (toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "300px";
        getSidebarTitle.style.opacity = "0.5";

        let arrayLength = getSidebarLinks.length;
        for (let index = 0; index < arrayLength; index++) {
            getSidebarLinks[index].style.opacity = "1";
   
        }

         toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {
        getSidebarUl.style.visibility = "hidden";
        getSidebar.style.width = "50px";
        getSidebarTitle.style.opacity = "0";

        let arrayLength = getSidebarLinks.length;
        for (let index = 0; index < arrayLength; index++) {
            getSidebarLinks[index].style.opacity = "0";
   
        }

         toggleNavStatus = false;
    }
}