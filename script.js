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

window.addEventListener('message', (event) => {
  document.getElementById('log').innerHTML += 'Received message from React Native:' + event.data + "\n<br>";
});

function sendMessageToReactNative(data) {
  window.ReactNativeWebView.postMessage(JSON.stringify(data));
}