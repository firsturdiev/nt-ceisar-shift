// elInput.addEventListener('input', () => {
//   debugger;
//   decoderStr(elInput.value, ALPHABET, SHIFT_COUNT);
// });

// elSelect.addEventListener('change', () => {
//   SHIFT_COUNT = Number(elSelect.value);
//   decoderStr(elInput.value, ALPHABET, SHIFT_COUNT);
// });

elClearBtn.addEventListener('click', () => {
  elInput.value = '';
  decoderStr(elInput.value, ALPHABET, SHIFT_COUNT);
})

elForm.addEventListener('submit', e => {
  e.preventDefault();

  SHIFT_COUNT = Number(elSelect.value);
  decoderStr(elInput.value, ALPHABET, SHIFT_COUNT);
})