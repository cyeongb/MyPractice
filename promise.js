/* promise
//1. state
// promise를 만들어서 동작중일때 --> pending -- 성공적으로 잘 끝남 --> fulfilled
                                           -- 파일이 없거나 완료가 안됨 --> rejected
// promise의 두가지 기능 producer / consumer
producer : 원하는 데이터를 만들어 낸다
consumer : 원하는 데이터를 소비한다.


*/

// 1. producer function
// Promise 클래스에서 생성자가 생성되면 거기서 executor()라는 콜백함수를 전달해 줘야합니다.
// executor() 콜백함수에는  또 다른 콜백함수 2개를 받습니다.
// resolve()는 정상적으로 수행해서 데이터를  전달하면 호출하는 함수
// eject()는  작동하다가 문제가 생기면 호출하는 함수

// 그런데 promise는 promise가 만들어질때마다 바로 자동적으로 실행됩니다.
// 그래서 불필요한 작업까지도 같이 실행하게되어 자원낭비,지연등이 발생할 수도 있습니다.
const promise = new Promise((resolve, reject) => {
  const name = "gambi?";
  // network연결, file을 읽는다던지 시간이 많이걸리는 무거운 작업들을 주로 수행
  console.log("로딩중냥..");
  setTimeout(() => {
    //setTimeout으로 네트워크에 연결하는 척
    console.log("이름 연결 완료됬다옹");
    if (name === "gambi") {
      resolve("gambi");
    } else {
      reject(new Error("이름이 다르다냥"));
    }
  }, 1800);
});

//2. consumer function
// then, catch, finally로 값을 받아올 수 있습니다.
promise
  .then((name) => {
    console.log("내이름은", name, "라옹");
  })
  .catch((error) => {
    //우리가 reject에서 전달해준 에러가 찍히게 됩니다.
    console.log(error);
  })
  .finally(() => {
    console.log("끝났다냥");
  }); //성공/실패 상관없이 호출됩니다.
