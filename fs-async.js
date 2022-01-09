const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, success) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = success;
  console.log(first);
  readFile("./content/second.txt", "utf8", (err, success) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = success;
    console.log(second);
    writeFile(
      "./content/result-async.txt",
      `Here is the result : ${first}, ${second}`,
      (err, success) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(success);
      }
    );
  });
});
