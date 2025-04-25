let noCount = 0;

function handleNo() {
  const noBtn = document.querySelector('.no');
  const yesBtn = document.querySelector('.yes');
  noCount++;

  if (noCount < 5) {
    noBtn.style.transform = `scale(${1 - noCount * 0.15})`;
    yesBtn.style.transform = `scale(${1 + noCount * 0.1})`;
  } else {
    noBtn.remove();
  }
}

function handleYes() {
  const q = document.getElementById('question');
  q.textContent = 'ARE U SURE BABE?? 💖';

  const buttonsDiv = document.getElementById('buttons');
  buttonsDiv.innerHTML = `
    <button class="btn yes" onclick="handleYesFinal()">Yes</button>
    <button class="btn no" id="movingNo">No</button>
  `;

  const movingNo = document.getElementById('movingNo');
  movingNo.addEventListener('mouseover', () => {
    const x = Math.floor(Math.random() * (window.innerWidth - 100));
    const y = Math.floor(Math.random() * (window.innerHeight - 100));
    movingNo.style.position = 'absolute';
    movingNo.style.left = `${x}px`;
    movingNo.style.top = `${y}px`;
  });
}

function handleYesFinal() {
  const q = document.getElementById('question');
  q.style.display = 'none';

  const finalMsg = document.getElementById('finalMessage');
  finalMsg.style.display = 'block';

  const buttonsDiv = document.getElementById('buttons');
  buttonsDiv.innerHTML = '';

  const hereBtn = document.getElementById('hereBabe');
  hereBtn.style.display = 'inline-block';
}

function showLongText() {
  const text = document.getElementById('longText');
  const finalMessage = document.getElementById('finalMessage');
  const hereBtn = document.getElementById('hereBabe');

  text.style.display = 'block';
  finalMessage.style.display = 'none';
  hereBtn.style.display = 'none';
}
