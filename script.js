const cewek = document.getElementById('cewek');
const cowok = document.getElementById('cowok');
const tinggi = document.getElementById('tinggi');
const button = document.querySelector('.btn-hitung');
const result = document.querySelector('.result-box p');

button.addEventListener('click', (e) => {
  if (cewek.checked) {
    hasil = hitung(cewek.value, tinggi.value);
  } else if (cowok.checked) {
    hasil = hitung(cowok.value, tinggi.value);
  } else {
    alert('Pilih gender dulu');
  }
  result.innerHTML = hasil;
  e.preventDefault;
});

function hitung(gender, tinggi) {
  if (gender == 'cewek' && tinggi != 0) {
    const hasil = (tinggi - 100 - (tinggi - 100) * 0.15).toFixed(2);
    return hasil;
  } else if (gender == 'cowok' && tinggi != 0) {
    const hasil = (tinggi - 100 - (tinggi - 100) * 0.1).toFixed(2);
    return hasil;
  } else {
    alert('Masukkan tinggi badan anda');
    return '';
  }
}
