// 사용자의 데이터를 서버에서 받아오는 함수라고 가정합니다.

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
// async키워드를 붙이면 promise 를 간편하게 쓸 수 있습니다.
async function fetchUser() {
  // 정해진 ms(밀리세컨드)가 지나면 resolve()를 호출하는 프로미스를 return합니다
  await delay(1200);
  return "choco";
}

async function fetchUser2() {
  await delay(1500);
  return "berry";
}

function getUser() {
  // all()이라는 promise의 API를 사용하면, 이 배열안의 데이터들이 다 받아지고 나서 실행합니다.
  return Promise.all([fetchUser(), fetchUser2()]).then((users) =>
    users.join(":")
  );
}

//하나의 유저정보만 가져오게 합니다.
// Promise에 전달된 데이터 중에 가장 먼저 전달된 데이터를 return합니다.
function getOneUser() {
  return Promise.race([fetchUser(), fetchUser2()]);
}

getUser().then(console.log);
getOneUser().then((user) => console.log("가장 먼저 온 유저 데이터 :", user));
