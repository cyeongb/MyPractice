// javascript는 synchronous 하다. 동기적입니다
// 호이스팅이 된 이후부터 나타난 코드 순서대로 실행이 됩니다
// (호이스팅이란 var이나 function으로 선언된 코드가 제일 위로 올라가서 실행되는 것)
// 브라우저를 통해서 다시 부르게 되는 함수를 콜백 함수라고 합니다
// 예를들어 setTimeout이라는 콜백 함수가 있습니다
/*
console.log('1');
setTimeout(() =>
    console.log('3')
    ,1000);
console.log('2');
// 자바스크립트의 synchronous로 코드가 순서대로 실행됩니다.
//setTimeout 함수는 브라우저로 다시 요청하게되는 비동기 콜백함수로, 1초후에 실행됩니다.


// 다음은 synchronous callback함수와 asynchronous callback함수를 나누어보겠습니다.


//synchronous callback

function printNow(print) {
    print();
}
printNow(() => console.log('print!!'));


//asynchronous callback

function printLater(print, timeout) {
    setTimeout(print, timeout);
}

printLater(() => console.log('print later!!'), 1500);
*/

//콜백 지옥 예제
class UserStorage {
  loginUser(id, pw, submit, error) {
    //사용자 정보
    //setTimeout으로 시간을 딜레이해서 서버와 통신하는 것 처럼 만들어본다.
    setTimeout(() => {
      if (
        (id === "gambi" && pw === "nyang") ||
        (id === "jadu" && pw === "mung")
      ) {
        submit(id);
      } else {
        error(new Error("not found"));
      }
    }, 1000);
  }

  getRoles(user, submit, error) {
    //사용자 역할
    setTimeout(() => {
      if (user === "gambi") {
        submit({ name: "gambi", role: "admin" });
      } else {
        error(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("id를 입력하세요");
const pw = prompt("password를 입력하세요");

userStorage.loginUser(
  id,
  pw,
  (user) => {
    userStorage.getRoles(
      user,
      (roleSubmit) => {
        alert(`hi ${roleSubmit.name} , your role is ${roleSubmit.role}`);
      },
      (error) => {
        alert(error);
      }
    );
  },
  (error) => {
    alert(error);
  }
);
