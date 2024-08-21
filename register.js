const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const texts = ['We Love Programming!', 'Coding is fun!', 'Keep practicing!'];
let textIdx = 0;
let idx = 1;
let speed = 300 / speedEl.value;

writeText();

function writeText() {
    const currentText = texts[textIdx];
    textEl.innerText = currentText.slice(0, idx);

    idx++;

    if (idx > currentText.length) {
        idx = 1;
        textIdx = (textIdx + 1) % texts.length; // Move to the next text in the array
    }

    // speed = 300 / speedEl.value; // Update speed based on input

    setTimeout(writeText, speed);
}

speedEl.addEventListener('input', (e) => {
    speed = 300 / e.target.value;
});
