function toggleMenu() {
    // const negisot = document.getElementById('accessibility-options');
    // negisot.classList.toggle('hidden'); // מראה את התפריט
  
    const button1 = document.getElementById('Button1');
    const button3 = document.getElementById('Button3');
    const button2 = document.getElementById('Button2');
    button1.classList.toggle('div');  // משנה את המראה של הכפתור לפי זה שהוא קורה ל div ב css
    button2.classList.toggle('div');  // משנה את המראה של הכפתור לפי זה שהוא קורה ל div ב css
    button3.classList.toggle('div');  // משנה את המראה של הכפתור לפי זה שהוא קורה ל div ב css
  }
  
  function toggleContrast() {
    document.body.classList.toggle('high-contrast'); // קורה ל high-contrast בcss
    const button1 = document.getElementById('Button1');
    button1.classList.toggle('clicked');  // משנה את המראה של הכפתור לפי זה שהוא קורה לclicked ב css
  }
  
  function toggleTextSize() {
    document.body.classList.toggle('large-text'); // קורה ל large-text בcss
    const button2 = document.getElementById('Button2');
    button2.classList.toggle('clicked');  // משנה את המראה של הכפתור לפי זה שהוא קורה לclicked ב css
  }
  
  function toggleReadableFont() {
    document.body.classList.toggle('readable-font'); // קורה ל readable-font בcss
    const button3 = document.getElementById('Button3');
    button3.classList.toggle('clicked');  // משנה את המראה של הכפתור לפי זה שהוא קורה לclicked ב css
  }











