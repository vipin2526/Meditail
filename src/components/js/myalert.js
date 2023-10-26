// function myalert(msg = "Default Message!", time = 1000) {
//     const alertbox = document.createElement("div");
//     alertbox.innerHTML = msg;
//     alertbox.className = "alertbox";
//     const body = document.querySelector('body')
//     body.appendChild(alertbox);
//     setTimeout(() => {
//         alertbox.remove();
//     }, time);
// }

// export default myalert;


function myalert(msg = "Default Message!", time = 1000) {
    return new Promise(resolve => {
      const alertbox = document.createElement("div");
      alertbox.innerHTML = msg;
      alertbox.className = "alertbox";
      const body = document.querySelector('body');
      body.appendChild(alertbox);
      setTimeout(() => {
        alertbox.remove();
        resolve(); // Resolve the promise after alert is removed
      }, time);
    });
  }
  
  export default myalert;