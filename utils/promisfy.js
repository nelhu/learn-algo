const fs = require('fs');

// fs.readFile('./package.json', 'utf-8', (error, data) => {
//   if (error) {
//     console.error(error);
//     return;
//   }
//   console.log(data);
// });

const promisify = fn => {
  return function(...args) {
    return new Promise((resolve, reject) => {
      args.push(function(error, data) {
        if (error) {
          reject(error);
          return ;
        }
        resolve(data);
      });
      fn.apply(this, args);
    });
  }
}

const readFileWithPromisify = promisify(fs.readFile);
readFileWithPromisify('./package.json', 'utf-8')
  .then(d => console.log(d))
  .catch(e => console.error(e))