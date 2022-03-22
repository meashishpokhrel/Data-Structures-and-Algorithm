const nemo = ["nemo"];
const everyOne = ["ashish", "shankar", "sfhsdjhs", "nemo"];
const large = new Array(10000).fill("nemo");
const larges = new Array(200).fill("ashish");

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found Nemo");
    }
  }
  t;
  let t1 = performance.now();
  console.log("Call to find Nemo took " + (t1 - t0) + "ms");

  char(20);
}

findNemo(large);
