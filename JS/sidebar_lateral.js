document.addEventListener("DOMContentLoaded", function (event) {
    const showNavbar = (toggleId, navId, bodyId, headerId) => {
        const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId),
            bodypd = document.getElementById(bodyId),
            headerpd = document.getElementById(headerId);

        // Validate that all variables exist
        if (toggle && nav && bodypd && headerpd) {
            toggle.addEventListener("click", () => {
                // show navbar
                nav.classList.toggle("show");
                // change icon
                toggle.classList.toggle("bx-x");
                // add padding to body
                bodypd.classList.toggle("body-pd");
                // add padding to header
                headerpd.classList.toggle("body-pd");
            });
        }
    };

    showNavbar("header-toggle", "nav-bar", "body-pd", "header");

    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll(".nav_link");

    function colorLink() {
        if (linkColor) {
            linkColor.forEach((l) => l.classList.remove("active"));
            this.classList.add("active");
        }
    }
    linkColor.forEach((l) => l.addEventListener("click", colorLink));

    // Your code to run since DOM is loaded and ready
});

var myLink = document.querySelector('a[href="#"]');
myLink.addEventListener("click", function (e) {
    e.preventDefault();
});


// Marcar o desmarcar todos los checkboxes
$(document).ready(function () {
    $('#example').DataTable(
        {
            "aLengthMenu": [[5, 10, 25, -1], [5, 10, 25, "All"]],
            "iDisplayLength": 5
        }
    );
});


function checkAll(bx) {
    var cbs = document.getElementsByTagName('input');
    for (var i = 0; i < cbs.length; i++) {
        if (cbs[i].type == 'checkbox') {
            cbs[i].checked = bx.checked;
        }
    }
}


//* Chart Area */
var ctx = document.getElementById("myAreaChart").getContext("2d");
var myChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun",
            "Jul", "Ago", "Set", "Oct", "Nov", "Dic"],
        datasets: [
            {
                label: "2021",
                data: [10, 9, 15, 15, 15, 10, 10, 9, 15, 10, 9, 15],
                backgroundColor: [
                    "rgba(255, 205, 86, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 205, 86)",
                ],
                borderWidth: 1.5,
            },
            {
                label: "2022",
                data: [10, 9, 15, 15, 15, 10, 10, 9, 15, 10, 9, 15],
                backgroundColor: [
                    "rgba(75, 192, 192, 0.2)",
                ],
                borderColor: [
                    "rgba(75, 192, 192)",
                ],
                borderWidth: 1.5,
            },
        ],
    },
});
