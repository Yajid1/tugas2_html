// Menggunakan localStorage:
// Data tetap tersimpan bahkan setelah tab/browser ditutup.

let count = parseInt(localStorage.getItem('clickCount') || '0');

function updateDisplay() {
  const line = document.getElementById('counterLine');
  if (count > 0) {
    line.textContent = `You have clicked the button ${count} time(s) in this session.`;
    line.style.opacity = '1';
  } else {
    line.textContent = '';
  }
}

function handleClick() {
  count++;
  localStorage.setItem('clickCount', count);
  updateDisplay();
}

// Tampilkan counter saat halaman dimuat
updateDisplay();    