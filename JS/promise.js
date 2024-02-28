// const p = Promise.resolve(() => {setTimeout())
const tasks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function fn() {
  const task = tasks.shift();
  const p = new Promise(resolve => {
    setTimeout(() => {
      const res = task;
      console.log(new Date());
      resolve(res);
    }, 1000);
  });
  return p.then(res => {
    console.log(res);
    if (tasks.length) {
      return fn();
    }
    return 'success';
  });
}

for (let i = 0; i < 5; i++) {
  fn();
}
