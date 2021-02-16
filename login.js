//콜백 지옥 예제를 promise로 전환
class UserStorage {
  loginUser(id, pw) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          //사용자 정보
          (id === "gambi" && pw === "nyang") ||
          (id === "jadu" && pw === "mung")
        ) {
          resolve(id);
        } else {
          reject(new Error("찾을 수 없습니다! "));
        }
      }, 1500);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      //사용자 역할
      setTimeout(() => {
        if (user === "gambi") {
          resolve({ name: "gambi", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt("id를 입력하세요");
const pw = prompt("password를 입력하세요");

userStorage
  .loginUser(id, pw)
  .then(userStorage.getRoles)
  .then((user) => alert(`hi ${user.name} , your role is ${user.role}`))
  .catch(console.log);
