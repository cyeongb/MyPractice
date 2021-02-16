// 1. producer function

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

promise
  .then((name) => {
    console.log("내이름은", name, "라옹");
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("끝났다냥");
  });
