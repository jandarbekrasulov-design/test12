const form = document.getElementById("profile-form");
const result = document.getElementById("result");

const formatDate = (d) =>
  [d.getDate(), d.getMonth() + 1, d.getFullYear()]
    .map((n) => String(n).padStart(2, "0"))
    .join(".");

const randomDate = () => {
  const start = new Date(2020, 0, 1).getTime();
  return new Date(start + Math.random() * (Date.now() - start));
};

async function showProfile(name) {
  try {
    const response = await fetch("https://dummyjson.com/users?limit=0");
    if (!response.ok) throw new Error("Ошибка сервера: " + response.status);

    const { users } = await response.json();
    const user = users.find((u) => u.username.toLowerCase() === name.toLowerCase());
    if (!user) throw new Error(`Пользователь «${name}» не найден`);

    result.className = "profile";
    result.innerHTML = `
      <h2>${user.firstName} ${user.lastName}</h2>
      <p>Email: ${user.email}</p>
      <p>Дата регистрации: ${formatDate(randomDate())}</p>`;
  } catch (error) {
    result.className = "error";
    result.textContent = error.message;
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  showProfile(form.username.value.trim());
});