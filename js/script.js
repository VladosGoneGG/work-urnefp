let checkboxes = document.querySelectorAll(
  'input[type="checkbox"][name="chose"]'
);

for (let j = 0; j < checkboxes.length; j++) {
  checkboxes[j].addEventListener("click", function () {
    for (let i = 0; i < checkboxes.length; i++) {
      if (this !== checkboxes[i]) {
        checkboxes[i].checked = false;
        checkboxes[i].style.fontWeight = "400";
      } else {
        checkboxes[i].style.fontWeight = "700";
      }
    }
  });
}

// Валидация телефонов

// const phoneInput = document.getElementById("phone-input-tel");

// phoneInput.addEventListener("input", function () {
//   // Регулярное выражение для проверки номера телефона
//   const phonePattern = /^\d{10}$/; // Пример: 1234567890

//   if (phonePattern.test(this.value)) {
//     this.classList.remove("invalid-phone");
//     this.classList.add("valid-phone");
//   } else {
//     this.classList.remove("valid-phone");
//     this.classList.add("invalid-phone");
//   }
// });

// Кнопка Burger

const menuBtn = document.querySelector(".menu__btn-burg");
const menu = document.querySelector(".menu__list");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("menu__list--active");
  menuBtn.classList.toggle("active");
});

// логика TABS
let totalTabs = document.getElementsByClassName("tab").length;
let currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form ...
  let x = document.getElementsByClassName("tab");
  x[n].style.display = "flex";
  // ... and fix the Previous/Next buttons:

  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == x.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Далее";
  }

  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[n].style.display = "flex";
  // ... and run a function that displays the correct step indicator:
  fixStepIndicator(n);
}

function nextPrev(n) {
  let x = document.getElementsByClassName("tab");

  if (n == 1 && !validateForm()) return false;
  x[currentTab].style.display = "none";

  currentTab = currentTab + n;

  if (currentTab >= totalTabs) {
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("regForm").submit();
    return false;
  }

  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  let x,
    y,
    i,
    valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false:
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  let i,
    x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class to the current step:
  x[n].className += " active";
}

// Progress BAR

let progressBar = document.querySelector(".progress-bar");
let progress = document.querySelector(".progress-bar .progress");

progress.style.width = (progressBar.dataset.value / 5) * 100 + "%";
