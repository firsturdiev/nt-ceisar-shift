let SHIFT_COUNT = 13;
const ALPHABET = [
  [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ],
  [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ],
];

const elInput = document.querySelector('#inputStr');
const elOutput = document.querySelector('#outputStr');
const elSelect = document.querySelector('#rotSelect');
const elForm = document.querySelector('#form');
const elClipboardCopy = document.querySelector('.clipboard-copy');
const elClearBtn = document.querySelector('.clear-btn');
const elClipboardToast = document.querySelector('#clipboardToast');
const toast = new bootstrap.Toast(elClipboardToast);

function encoderIndex(index, shift) {
  return (index + shift) % 26;
}

function decoderIndex(index, shift) {
  if (index - shift < 0) return 26 + (index - shift);
  return (index - shift) % 26;
}

function encoderStr(str, alphabet, shift) {
  let encodedStr = '';
  for (let i = 0; i < str.length; i++) {
    let alphabetIndex = alphabet[0].indexOf(str[i]);

    if (alphabetIndex > -1) {
      let shiftIndex = encoderIndex(alphabetIndex, shift);
      encodedStr += alphabet[0][shiftIndex];
    } else {
      alphabetIndex = alphabet[1].indexOf(str[i]);
      let shiftIndex = encoderIndex(alphabetIndex, shift);

      if (alphabetIndex > -1) encodedStr += alphabet[1][shiftIndex];
      else encodedStr += str[i];
    }
  }

  elOutput.textContent = encodedStr;
}

function decoderStr(str, alphabet, shift) {
  let decodedStr = '';
  for (let i = 0; i < str.length; i++) {
    let alphabetIndex = alphabet[0].indexOf(str[i]);

    if (alphabetIndex > -1) {
      let shiftIndex = decoderIndex(alphabetIndex, shift);
      decodedStr += alphabet[0][shiftIndex];
    } else {
      alphabetIndex = alphabet[1].indexOf(str[i]);
      let shiftIndex = decoderIndex(alphabetIndex, shift);

      if (alphabetIndex > -1) decodedStr += alphabet[1][shiftIndex];
      else decodedStr += str[i];
    }
  }

  elOutput.textContent = decodedStr;
}

function copyClipboard(text) {
  navigator.clipboard.writeText(text).then(
    () => toast.show(),
    () => {
      toast._element.querySelector('.toast-body').textContent = 'Your browser don\'t support this feature. Please update the browser';
      toast.show();
    })
}

elClipboardCopy.addEventListener('click', () => {
  copyClipboard(elOutput.value);
});


