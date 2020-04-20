function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: ms });
    }, ms);
  });
}

const requestBySequence = array => {
  return new Promise(async (resolve) => {
    const res = [];
    for (let i = 0; i < array.length; i++) {
      const r = await(delay(array[i]))
      console.log(r);
      res.push(r);
    }
    resolve(res);
  })
}

requestBySequence([1000, 1000, 1000]).then(r => console.log(r));