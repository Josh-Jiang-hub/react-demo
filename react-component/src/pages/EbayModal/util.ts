const getPromise = (resolveFunc) => {
  resolveFunc = () => {
    console.log(1);
  };
  new Promise((resolve) => {
    resolveFunc = resolve;
  }).then((value) => {
    console.log(value++, value++);
  });
};

export const getInputNumber = () => {
  let promiseAResolve = (value?: unknown) => {};
  let promiseAReject = () => {};
  let promiseBResolve = (value?: unknown) => {};
  let promiseBReject = () => {};
  const bindA = () => {
    new Promise((resolve, reject) => {
      promiseAResolve = resolve;
      promiseAReject = reject;
    }).then((value) => {
      console.log(value++, value++);
      setTimeout(() => {
        promiseBResolve(value);
      }, 2000);
      bindA();
    });
  };
  const bindB = () => {
    new Promise((resolve, reject) => {
      promiseBResolve = resolve;
      promiseBReject = reject;
    }).then((value) => {
      console.log(value++, value++);
      setTimeout(() => {
        promiseAResolve(value);
      }, 2000);
      bindB();
    });
  };
  bindA();
  bindB();
  promiseBResolve(0);
};
