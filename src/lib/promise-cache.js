let promiseCache = {};

export let suspend = (asyncFn, key) => {
  let id = JSON.stringify(key);

  if (!promiseCache[id]) {
    promiseCache[id] = {};
    promiseCache[id].promise = new Promise(async (resolve) => {
      promiseCache[id].value = await asyncFn();
      promiseCache[id].done = true;
      resolve();
    });
  }

  if (!promiseCache[id].done) {
    throw promiseCache[id].promise;
  } else {
    return promiseCache[id].value;
  }
};

export let slow = (fn, time) => {
  return new Promise(async (resolve) => {
    let result = await fn();
    setTimeout(() => resolve(result), time);
  });
};

export const forever = new Promise((resolve) => {});
