const log = console.log
const sentence = "hello there from lighthouse labs";

let delay = 0;
let incrementor = 50
let stringlength = sentence.length
log(stringlength);
  for (let char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay)
    delay += incrementor;
  };
  setTimeout(() => {process.stdout.write('\n')},(incrementor * stringlength) + incrementor);
