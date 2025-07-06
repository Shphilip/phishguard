window.onload = function () {
  const slider = document.getElementById("slider");
  let position = 0;
  const speed = 0.3;

  // שכפול התמונות כדי ליצור אפקט לולאה
  slider.innerHTML += slider.innerHTML;

  function animate() {
    position -= speed;
    slider.style.transform = `translateX(${position}px)`;

    if (Math.abs(position) >= slider.scrollWidth / 2) {
      position = 0;
    }

    requestAnimationFrame(animate);
  }

  animate(); // מתחיל מיד כשהעמוד נטען
};

document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.querySelector(".name");
  const emailInput = document.querySelector(".email");
  const sendButton = document.querySelector(".send-b");

  // טען מידע אם קיים (רק לסשן הנוכחי)
  const savedName = sessionStorage.getItem("savedName");
  const savedEmail = sessionStorage.getItem("savedEmail");
  if (savedName) nameInput.value = savedName;
  if (savedEmail) emailInput.value = savedEmail;

  sendButton.addEventListener("click", function () {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (name === "" || email === "") {
      alert("אנא מלא את שני השדות.");
    } else if (!validateEmail(email)) {
      alert("כתובת המייל אינה תקינה.");
    } else {
      // שמור רק לסשן הנוכחי
      sessionStorage.setItem("savedName", name);
      sessionStorage.setItem("savedEmail", email);
      alert("הפרטים נשמרו בהצלחה!");
    }
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});

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

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".search-toggle");
  const dropdown = document.querySelector(".search-dropdown");

  toggleButton.addEventListener("click", () => {
    dropdown.classList.toggle("show");
  });
});
