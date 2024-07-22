function setAvailableHeight(height) {
    document.querySelector('.fixed-center .available').innerHTML = height;
    document.querySelector('.fixed-center').style.height = height + `px`;
}

function setKeyboardHeight(height) {
  document.querySelector('.fixed-center .keyboard').innerHTML = height;
}