// promise chaining 예제

const countOne = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(0), 1200);
  });

const countTwo = (one) =>
  new Promise((resolve, reject) => {
    if (one != 1) {
      reject(new Error("숫자가 1이아니에요"));
      return;
    }
    setTimeout(() => resolve(`${one} ->2 `), 1400);
  });

const countThree = (two) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${two} ->3 `), 1000);
  });

countOne()
  // 하나의 값을 똑같이 출력할 경우에는 생략 가능합니다.
  // 원래: countOne().then((one)=>countTwo(one)) ...
  .then(countTwo)
  .catch(console.log)

  .then(countThree)
  .catch(console.log)

  .then(console.log)
  .catch(console.log)
  .finally("--------------------");
