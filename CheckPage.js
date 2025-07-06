let lastSubmittedText = "";

function SplitText() {
    let textArea = document.getElementById("EnterTextArea");
    let highlighter = document.getElementById("highlighter");

    let text = textArea.value;
    if (text.trim() === "") {
        highlighter.innerHTML = "";
        return;
    }

    let SusWords = [
  "שלום",       // hello (common greeting, sometimes in phishing)
  "כניסה",      // login
  "אימות",      // verification
  "חשבון",      // account
  "דחוף",       // urgent
  "לחץ",        // press/click
  "קישור",      // link
  "בנק",        // bank
  "אשראי",      // credit (card)
  "אבטחה",      // security
  "סיסמה",      // password
  "עדכון",      // update
  "אישור",      // approval/confirmation
  "זהירות",     // caution
  "פרטי",       // private
  "פרטים",      // details
  "פריצת",      // hacking/break-in
  "משתמש",      // user
  "התחברות",    // login/connect
  "הודעה",      // message/notification
  "הנפקה",      // issuance
  "השבתה",      // deactivation
  "חשבונית",    // invoice
  "טעינת",      // loading
  "הסרה",      // removal
  "קוד",        // code (could be verification code)
  "הפעלה",      // activation
  "תשלום",      // payment
  "מתנה",       // gift (often phishing bait)
  "זיכוי",       // credit (refund)
  "חשוד",       // suspicious
  "בדוק",       // check/verify
  "פרסום",      // advertisement (sometimes scam ads)
  "מתקפה",      // attack
  "בקשת",      // request
  "חסימה",      // blocking
  "הסרה",      // removal
  "מייל",       // email
  "החלפה",      // replacement
  "פיצוי",      // compensation
  "אזהרה",      // warning
  "דואר",       // mail
  "אפליקציה",   // application/app
  "מזויף",      // fake/forged
  "מסמך",       // document
  "התחייבות",   // commitment
  "מבצע",       // operation/offer (fake promotions)
  "הנחה",       // discount
  "חשד",       // suspicion
];

    let prefixes = ['ש', 'ל', 'כ', 'ב', 'ו'];

    let wordsWithPunctuation = text.split(/(\s+)/); // includes spaces
    let highlightedHTML = "";

    for (let i = 0; i < wordsWithPunctuation.length; i++) {
        let originalWord = wordsWithPunctuation[i];

        if (/\s+/.test(originalWord)) {
            highlightedHTML += originalWord;
            continue;
        }

        let clean = originalWord.replace(/[.,!?]/g, '').toLowerCase();
        let testWord = clean;
        let isSus = false;

        for (let j = 0; j <= testWord.length; j++) {
            if (SusWords.includes(testWord)) {
                isSus = true;
                break;
            }

            if (prefixes.includes(testWord[0])) {
                testWord = testWord.substring(1);
            } else {
                break;
            }
        }

        if (isSus) {
            highlightedHTML += `<mark>${originalWord}</mark>`;
        } else {
            highlightedHTML += originalWord;
        }
    }

    highlighter.innerHTML = highlightedHTML;

    textArea.style.zIndex = "0"
    highlighter.style.zIndex = "1"
}

function CheckEmpty() {
    const textArea = document.getElementById("EnterTextArea");
    const highlighter = document.getElementById("highlighter");

    const currentText = textArea.value;

    // If text was changed since last submit, clear highlight
    if (currentText !== lastSubmittedText) {
        highlighter.innerHTML = "";
    }
}

function RefreshPage() {
    location.reload()
}

// ------------+=accessibility=+------------
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
// ------------+=accessibility=+------------

function GoToPage(url) {
    window.location.href = url;
}
