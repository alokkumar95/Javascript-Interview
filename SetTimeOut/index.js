console.log("Start");

setTimeout(() => {
  console.log("callback");
}, 5000);

let startTime = new Date().getTime();
let endTime = startTime;

while (endTime < startTime + 10000) {
  endTime = new Date().getTime();
}

console.log("End while loop");
