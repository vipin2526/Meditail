function myalert(msg = "Default Message!", time = 1000, background = 'blue') {
  return new Promise(resolve => {
    const alertbox = document.createElement("div");
    alertbox.innerHTML = msg;
    alertbox.className = "alertbox";
    alertbox.style.backgroundColor = background;
    const body = document.querySelector('body');
    body.appendChild(alertbox);
    setTimeout(() => {
      alertbox.remove();
      resolve(); // Resolve the promise after alert is removed
    }, time);
  });
}

export default myalert;