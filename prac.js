/*
console.log('1');
setTimeout(() =>
    console.log('3')
    ,1000);
console.log('2');

ddddddds
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
