let checkboxes = document.querySelectorAll(
  'input[type="checkbox"][name="chose"]'
);

for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("click", function () {
    for (let j = 0; j < checkboxes.length; j++) {
      if (this !== checkboxes[j]) {
        checkboxes[j].checked = false;
      }
    }
  });
}

// Progress BAR

let progressBar = document.querySelector(".progress-bar");
let progress = document.querySelector(".progress-bar .progress");

progress.style.width = (progressBar.dataset.value / 5) * 100 + "%";
