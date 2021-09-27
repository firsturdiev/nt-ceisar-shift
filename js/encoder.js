elInput.addEventListener('input', () => {
  encoderStr(elInput.value, ALPHABET, SHIFT_COUNT);
});

elSelect.addEventListener('change', () => {
  SHIFT_COUNT = Number(elSelect.value);
  encoderStr(elInput.value, ALPHABET, SHIFT_COUNT);
});

elClearBtn.addEventListener('click', () => {
  elInput.value = '';
  encoderStr(elInput.value, ALPHABET, SHIFT_COUNT);
})
