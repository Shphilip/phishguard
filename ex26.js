// let button1 = document.getElementById("button1");
// button1.onclick = alert("נשלח בהצלחה");

// function
// if (button1.onclick) {

// } else {

// }

// ------------+=accessibility=+------------
function toggleMenu() {
  // const negisot = document.getElementById('accessibility-options');
  // negisot.classList.toggle('hidden'); // מראה את התפריט

  const button1 = document.getElementById("Button1");
  const button3 = document.getElementById("Button3");
  const button2 = document.getElementById("Button2");
  button1.classList.toggle("div"); // משנה את המראה של הכפתור לפי זה שהוא קורה ל div ב css
  button2.classList.toggle("div"); // משנה את המראה של הכפתור לפי זה שהוא קורה ל div ב css
  button3.classList.toggle("div"); // משנה את המראה של הכפתור לפי זה שהוא קורה ל div ב css
}

function toggleContrast() {
  document.body.classList.toggle("high-contrast"); // קורה ל high-contrast בcss
  const button1 = document.getElementById("Button1");
  button1.classList.toggle("clicked"); // משנה את המראה של הכפתור לפי זה שהוא קורה לclicked ב css
}

function toggleTextSize() {
  document.body.classList.toggle("large-text"); // קורה ל large-text בcss
  const button2 = document.getElementById("Button2");
  button2.classList.toggle("clicked"); // משנה את המראה של הכפתור לפי זה שהוא קורה לclicked ב css
}

function toggleReadableFont() {
  document.body.classList.toggle("readable-font"); // קורה ל readable-font בcss
  const button3 = document.getElementById("Button3");
  button3.classList.toggle("clicked"); // משנה את המראה של הכפתור לפי זה שהוא קורה לclicked ב css
}
// ------------+=accessibility=+------------

const button = document.getElementById("submitBtn"); // נניח שיש כפתור עם id כזה

button.addEventListener("click", function () {
  // אוספים את כל האינפוטים
  const inputs = document.querySelectorAll("input[type='text']");

  let emptyFound = false;

  inputs.forEach(function (input) {
    if (input.value.trim() === "") {
      emptyFound = true;
    }
  });

  // if (emptyFound) {
  //   alert("אנא מלא את כל השדות לפני השליחה.");
  // } else {
  //   alert("ההודעה נשלחה בהצלחה!");
  // }
});

function submitForm() {
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value;

  if (fullName === "" || email === "") {
    alert("נא להזין שדות חובה!");
    return; // עוצר את הפעולה אם שדה ריק
  }

  if (email.includes("gmail.com@")) {
    alert("ההודעה נשלחה בהצלחה");
  } else {
    alert("כתובת אימייל לא חוקית");
  }
}
