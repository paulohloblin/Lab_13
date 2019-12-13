'use strict';
console.log("Script started");
let topbarheight = 80;
let tbheight_selector = document.querySelector(".top");
let bodypadding_selector = document.querySelector("body");
let logoheight_selector = document.querySelector(".logo");
let textfield = document.querySelector(".mdc-text-field");
let textfieldicon = document.querySelector(".mdc-text-field__icon");
let topmenu = document.querySelector(".mathposition");
let logo = document.querySelector(".logowrapper");

console.log(screen.availHeight);

tbheight_selector.style.setProperty('--topbarheight', topbarheight + 'px');
logoheight_selector.style.setProperty('--topbarheight', topbarheight + 'px');
bodypadding_selector.style.setProperty('--topbarheight', topbarheight + 'px');
textfield.style.setProperty('--text', ((topbarheight)-56)/2 + 'px');
topmenu.style.setProperty('--toppadding', ((topbarheight)-44)/2 + 'px');
logo.style.setProperty('--logomargin', ((topbarheight)-40)/2 + 'px');

textfieldicon.style.setProperty('--textfieldicon', ((56)-24)/2 + 'px');

var ctx = document.getElementById('sourses').getContext('2d');
var chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ["Search Engines", "Direct Click", "Bookmarks Click"],
      datasets: [
        {
          label: "Traffic sources",
          backgroundColor: ["rgb(33,142,229)", "rgb(44,195,173)","#fe7096"],
          data: [33,33,33]
        }
      ]
    },
    options: {
        legend: {
            display: false
        },
      title: {
        display: false
      },
      responsive: true,
      maintainAspectRatio:false
    }
});

var ctx = document.getElementById('stats').getContext('2d');
var chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["JAN", "FEB", "MAR", "APR","MAY","JUN","JUL","AUG"],
      datasets: [
        {
          label: "CHN",
          backgroundColor: "#9a55ff",
          data: [133,221,783,2478,133,221,783,2478],
        }, {
          label: "USA",
          backgroundColor: "#fe7096",
          data: [408,547,675,734,408,547,675,734]
        }, {
            label: "UK",
            backgroundColor: "rgb(33,142,229)",
            data: [408,434,56,643,408,547,675,734]
          }
      ]
    },
    options: {
        legend: {
            display: false
        },
      title: {
        display: false
      },
      scales: {
        xAxes: [{
            barPercentage: 0.4
        }],
        yAxes: [{
            ticks: {
                display: false
            }

        }]
    },
      maintainAspectRatio:false
    }
});

var c = document.getElementById("bar5");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "rgb(120,189,244)");
grd.addColorStop(1, "rgb(33,142,229)");

ctx.fillStyle = grd;
ctx.fillRect(0, 0, 122, 6);

var c = document.getElementById("bar4");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "#ffbf96");
grd.addColorStop(1, "#fe7096");

ctx.fillStyle = grd;
ctx.fillRect(0, 0, 80, 6);

var c = document.getElementById("bar3");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "#da8cff");
grd.addColorStop(1, "#9a55ff");

ctx.fillStyle = grd;
ctx.fillRect(0, 0, 175, 6);

var c = document.getElementById("bar2");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "#e5ee6e");
grd.addColorStop(1, "#e3e703");

ctx.fillStyle = grd;
ctx.fillRect(0, 0, 200, 6);

var c = document.getElementById("bar1");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "rgb(103,210,198)");
grd.addColorStop(1, "rgb(44,195,173)");

ctx.fillStyle = grd;
ctx.fillRect(0, 0, 100, 6);
console.log("Script finished");