// async

//자바스크립트에 비동기가 필요한 이유
// 자바스크립트는 동기적인 언어이기때문에 차례대로 블럭씩, 한줄씩 실행합니다.
// 진행중에 몇초씩 또는 몇분이 걸리는 로직이 있으면 그 로직이 끝난 후 그 밑에 코드가 실행이 됩니다.
// 그러면 사용자는 데이터가 제대로 받아와지지 않은 웹페이지를 보게 되기때문에
// 사용자 편의성을 위해 비동기가 필요합니다.

// 사용자의 데이터를 서버에서 받아오는 함수라고 가정합니다.

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
// async키워드를 붙이면 promise 를 간편하게 쓸 수 있습니다.
async function fetchUser() {
  // 네트워크 연결로 몇초 지나면 사용자의 이름이 출력됩니다.
  // await 키워드는 async 키워드가 있는 블럭 안에서만 사용 가능합니다.
  // 정해진 ms(밀리세컨드)가 지나면 resolve()를 호출하는 프로미스를 return합니다
  await delay(1200);
  return "choco";
}

async function fetchUser2() {
  await delay(1500);
  return "berry";
}

function getUser() {
  /*const user = await fetchUser();
    const user2 = await fetchUser2();
    만약 이렇게 실행하게되면 fetchUser기다리고 fetchUser2기다려야해서 총 2700ms가 걸립니다.
     그래서 propmise를 따로 선언해서 병렬적으로 실행되도록 합니다.*/
  // const userPromise = fetchUser();
  //  const user2Promise = fetchUser2();
  //이런식으로 각각의 promise를 따로만들어서 코드들이 만들어지는 동시에 promise를 실행하도록 합니다.
  // 그런데 여러개의 promise를 사용할때는 API를 이용합니다.
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
