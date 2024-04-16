/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified.
// Do any of these variables need to be initialized when the page is loaded?
// When do they need to be reset or updated?
let costPerDay = 0;
let selectedDays = 0;
let monButton = document.getElementById("monday");
let tueButton = document.getElementById("tuesday");
let wedButton = document.getElementById("wednesday");
let thuButton = document.getElementById("thursday");
let friButton = document.getElementById("friday");
let fullButton = document.getElementById("full");
let halfButton = document.getElementById("half");
let clearButton = document.getElementById("clear-button");
let costResult = document.getElementById("calculated-cost");
const HALF_DAY_RATE = 20;
const FULL_DAY_RATE = 35;
/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

monButton.addEventListener("click", toggleMon);
function toggleMon() {
  if (monButton.classList.contains("clicked")) {
    selectedDays -= 1;
  } else {
    selectedDays += 1;
  }
  monButton.classList.toggle("clicked");
  recalculate();
}

tueButton.addEventListener("click", toggleTue);
function toggleTue() {
  if (tueButton.classList.contains("clicked")) {
    selectedDays -= 1;
  } else {
    selectedDays += 1;
  }
  tueButton.classList.toggle("clicked");
  recalculate();
}

wedButton.addEventListener("click", toggleWed);
function toggleWed() {
  if (wedButton.classList.contains("clicked")) {
    selectedDays -= 1;
  } else {
    selectedDays += 1;
  }
  wedButton.classList.toggle("clicked");
  recalculate();
}

thuButton.addEventListener("click", toggleThu);
function toggleThu() {
  if (thuButton.classList.contains("clicked")) {
    selectedDays -= 1;
  } else {
    selectedDays += 1;
  }
  thuButton.classList.toggle("clicked");
  recalculate();
}

friButton.addEventListener("click", toggleFri);
function toggleFri() {
  if (friButton.classList.contains("clicked")) {
    selectedDays -= 1;
  } else {
    selectedDays += 1;
  }
  friButton.classList.toggle("clicked");
  recalculate();
}

/*****************  once-toggle version  **********************/

// monButton.addEventListener("click", toggleMon);
// function toggleMon() {
//   if (monButton.classList.contains("clicked") == false) {
//     selectedDays += 1;
//     monButton.classList.toggle("clicked");
//   }

//   recalculate();
// }

// tueButton.addEventListener("click", toggleTue);
// function toggleTue() {
//   if (tueButton.classList.contains("clicked") == false) {
//     selectedDays += 1;
//     tueButton.classList.toggle("clicked");
//   }
//   recalculate();
// }

// wedButton.addEventListener("click", toggleWed);
// function toggleWed() {
//   if (wedButton.classList.contains("clicked") == false) {
//     selectedDays += 1;
//     wedButton.classList.toggle("clicked");
//   }
//   recalculate();
// }

// thuButton.addEventListener("click", toggleThu);
// function toggleThu() {
//   if (thuButton.classList.contains("clicked") == false) {
//     selectedDays += 1;
//     thuButton.classList.toggle("clicked");
//   }
//   recalculate();
// }

// friButton.addEventListener("click", toggleFri);
// function toggleFri() {
//   if (friButton.classList.contains("clicked") == false) {
//     selectedDays += 1;
//     friButton.classList.toggle("clicked");
//   }
//   recalculate();
// }
/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clearButton.addEventListener("click", removeClicked);
function removeClicked() {
  monButton.classList.remove("clicked");
  tueButton.classList.remove("clicked");
  wedButton.classList.remove("clicked");
  thuButton.classList.remove("clicked");
  friButton.classList.remove("clicked");
  fullButton.classList.remove("clicked");
  halfButton.classList.remove("clicked");
  costResult.innerHTML = 0;
  selectedDays = 0;
}
/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
halfButton.addEventListener("click", toggleHalf);
function toggleHalf() {
  halfButton.classList.toggle("clicked");
  halfButton.classList.contains(
    "clicked",
    fullButton.classList.remove("clicked")
  );
  recalculate();
}

fullButton.addEventListener("click", toggleFull);
function toggleFull() {
  fullButton.classList.toggle("clicked");
  fullButton.classList.contains(
    "clicked",
    halfButton.classList.remove("clicked")
  );
  recalculate();
}

/**************  once-toggle version **********************/

// halfButton.addEventListener("click", toggleHalf);
// function toggleHalf(){
//   if(halfButton.classList.contains("clicked") == false){
//     halfButton.classList.add("clicked");
//     fullButton.classList.remove("clicked");
//   }
// }
// fullButton.addEventListener("click", toggleFull);
// function toggleFull(){
//   if(fullButton.classList.contains("clicked") == false){
//     fullButton.classList.add("clicked");
//     halfButton.classList.remove("clicked");
//   }
// }

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function recalculate() {
  if (halfButton.classList.contains("clicked")) {
    costPerDay = HALF_DAY_RATE;
  } else if (fullButton.classList.contains("clicked")) {
    costPerDay = FULL_DAY_RATE;
  } else {
    costPerDay = 0;
  }
  totalFee = selectedDays * costPerDay;
  costResult.innerHTML = totalFee;
}
