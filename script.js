const cewek = document.getElementById('cewek');
const cowok = document.getElementById('cowok');
const tinggi = document.getElementById('tinggi');
const button = document.querySelector('.btn-hitung');
const result = document.querySelector('.result-box p');

button.addEventListener('click', (e) => {
  if (cewek.checked) {
    result.innerHTML = hitung(cewek.value, tinggi.value);
  } else if (cowok.checked) {
    result.innerHTML = hitung(cowok.value, tinggi.value);
  } else {
    alert('Pilih gender dulu');
  }
  e.preventDefault();
});

function hitung(gender, tinggi) {
  if (tinggi != 0) {
    if (gender == 'cewek' && tinggi > 100) {
      const hasil = (tinggi - 100 - (tinggi - 100) * 0.15).toFixed(2);
      return hasil;
    } else if (gender == 'cowok' && tinggi > 100) {
      const hasil = (tinggi - 100 - (tinggi - 100) * 0.1).toFixed(2);
      return hasil;
    } else {
      alert('Tinggi harus lebih dari 100Cm');
      return '';
    }
  } else {
    alert('Masukkan tinggi badan anda');
    return '';
  }
}
