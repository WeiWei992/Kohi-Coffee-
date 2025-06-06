//Buttons on the left
var button_1 = document.querySelector(".button_1")
var button_2 = document.querySelector(".button_2")
var button_3 = document.querySelector(".button_3")
var button_4 = document.querySelector(".button_4")

//Tabs on the right
var tab_1 = document.querySelector(".tab_1")
var tab_2 = document.querySelector(".tab_2")
var tab_3 = document.querySelector(".tab_3")
var tab_4 = document.querySelector(".tab_4")

var settings_button = document.querySelector('.options_button');

function displayTabs(tab_number) {
    if (tab_number == 0) {
        tab_1.style.display = "flex";
        tab_2.style.display = "none";
        tab_3.style.display = "none";
        // tab_4.style.display = "none";

        button_1.classList.add("active_button");
        button_2.classList.remove("active_button");
        button_3.classList.remove("active_button");
        // button_4.classList.remove("active_button");

    } else if (tab_number == 1) {
        tab_1.style.display = "none"
        tab_2.style.display = "flex";
        tab_3.style.display = "none";
        // tab_4.style.display = "none";

        button_1.classList.remove("active_button");
        button_2.classList.add("active_button");
        button_3.classList.remove("active_button");
        // button_4.classList.remove("active_button");

    } else if (tab_number == 2) {
        tab_1.style.display = "none"
        tab_2.style.display = "none";
        tab_3.style.display = "flex";
        // tab_4.style.display = "none";

        button_1.classList.remove("active_button");
        button_2.classList.remove("active_button");
        button_3.classList.add("active_button");
        // button_4.classList.remove("active_button");

    }
    // } else if (tab_number == 3) {
    //     tab_1.style.display = "none"
    //     tab_2.style.display = "none";
    //     tab_3.style.display = "none";
    //     tab_4.style.display = "flex";

    //     button_1.classList.remove("active_button");
    //     button_2.classList.remove("active_button");
    //     button_3.classList.remove("active_button");
    //     button_4.classList.add("active_button");

    // }
    

}


// settings_button.addEventListener("mousedown", function() {
//     settings_button.style.backgroundColor = "#d3d3d3";

// });