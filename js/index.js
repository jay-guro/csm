'use strict';
// Tabs
const tabs = document.querySelectorAll(".tabs li");
const tabContentBoxes = document.querySelectorAll("#tab-content> div");
tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        tabs.forEach((item) => item.classList.remove("is-active"));
        tab.classList.add("is-active");
        const target = tab.dataset.target;
        tabContentBoxes.forEach((box) => {
            if (box.getAttribute("id") === target) {
                box.classList.remove("is-hidden");
            } else {
                box.classList.add("is-hidden");
            }
        });
    });
});

// Burger
document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});

// Loader
$(document).ready(function () {
         setTimeout(function () {
            $('body').addClass('loaded');
         }, 1500);
      });