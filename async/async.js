const usersTemplate = document.querySelector('#users__card-template');
const usersList = document.querySelector('.users__cards');
const buttonShowUsers = document.querySelector('#get-all-cards');
const buttonClearUsers = document.querySelector('#delete-all-cards');
const buttonClearUser = document.querySelector('#delete-specific-card');
let isUsersShow = false;

function addEventListenerToButtons() {
  buttonShowUsers.addEventListener('click', showUsers);
  buttonClearUsers.addEventListener('click', clearUsers);
  buttonClearUser.addEventListener('click', clearUser);
}

function clearUser() {
  isUsersShow = false;
  const users = JSON.parse(localStorage.getItem("users"));
  if (users) {
    const userId = prompt("Введите ID пользователя, которого хотите удалить:");
    const result = users.filter(user => user.id !== Number(userId));
    localStorage.setItem("users", JSON.stringify(result));
    showUsers();
  }
}

function clearUsers() {
  localStorage.removeItem("users");
  usersList.innerHTML = "";
  isUsersShow = false;
}

function showUsers() {
  if (isUsersShow) {
    alert("Пользователи уже отображены");
    return;
  }

  if (!localStorage.getItem("users")) {
    fetchData();
    const statusBar = document.querySelector('.status_bar');
    statusBar.style.display = 'block';
  } else {
    usersList.innerHTML = "";
    const users = JSON.parse(localStorage.getItem("users"));
    users?.forEach(user => {
      const userClone = usersTemplate.content.cloneNode(true);

      userClone.querySelector(".users__id").textContent += user.id;
      userClone.querySelector(".users__name").textContent += user.name;
      userClone.querySelector(".users__surname").textContent += user.surname;
      userClone.querySelector(".users__email").textContent += user.email;
      userClone.querySelector(".users__age").textContent += user.age;

      usersList.appendChild(userClone);
    });
    isUsersShow = true;
  }
}

async function fetchData() {

  setTimeout(async () => {
    try {
      const response = await fetch("users.json");
      if (!response.ok) {
        throw new Error("Ошибка при загрузке данных: " + response.status);
      }
      const users = await response.json();
      localStorage.setItem("users", JSON.stringify(users));
      const statusBar = document.querySelector('.status_bar');
      statusBar.style.display = 'none';
      showUsers();
    } catch (error) {
      const statusBar = document.querySelector('.status_bar');
      statusBar.textContent = error.message;
      statusBar.style.display = 'block';
    }
  }, 2000);


}

addEventListenerToButtons()

