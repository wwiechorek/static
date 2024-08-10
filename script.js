function setAvailableHeight(height) {
    document.querySelector('.fixed-center .available').innerHTML = height;
    document.querySelector('.fixed-center').style.height = height + `px`;
}

function setKeyboardHeight(height) {
  document.querySelector('.fixed-center .keyboard').innerHTML = height;
}

window.onload = function() {
  document.body.addEventListener("click", function(e) {
    if(['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

    if(element.contentEditable === 'true') return;

    const focusedElement = document.activeElement;
    if (focusedElement) {
      focusedElement.blur();
    }
  })
}