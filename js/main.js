// Elementlarni topamiz

// Selectning o'zgarish hodisasiga quloq solamiz
    // Agar boshqa ga teng bo'lsa
      // inputdagi disabled olib tashla
    // teskari holatda
        // inputdagi malumotni olib tashla
        // inputni disabledga o'zgartir

const elSelect = document.querySelector('.select'),
  input = document.querySelector('.input-country');

elSelect.addEventListener('change', function () {
  if(elSelect.value === 'AQSH') {
    input.disabled = false
  } else {
    input.disabled = true
    input.value = '';
  }
})