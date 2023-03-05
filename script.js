const сharactersURL = "https://rickandmortyapi.com/api/character";
let current_page = null;
let max_page = null;
async function getCharactersData(сharactersURL, current_page = 1) {
  // получить данные с сервера
  try {
    const response = await fetch(сharactersURL + "?page=" + current_page);
    const data = await response.json();
    max_page = data.info.pages;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
function showCharacters(data) {
  // отрисовать плитки
  const characters = document.querySelector(".characters");
  characters.innerHTML = ``;
  data.results.forEach((character) => {
    const characterEl = document.createElement("div");
    characterEl.classList.add("characters__item");
    characterEl.innerHTML = `
              <div class="characters__item-img">
                <img
                  src="${character.image}"
                  alt="${character.name}"
                />
              </div>
              <div class="characters__item-info">
                <div class="characters__name">${character.name}</div>
                <div class="characters__gender">${character.gender}</div>
                <div class="characters__status">${character.status}</div>
                <div class="characters__species">${character.species}</div>
                <div class="characters__location"><span>Last known location:</span> ${character.location.name}</div>
              </div>
      `;
    characters.appendChild(characterEl);
  });
}

function createPagination() {
  // создать кнопки пагинации
  const pagination_wrapper = document.querySelector(".pagination");

  for (let page = 1; page < max_page + 1; page++) {
    const pagination_btn = document.createElement("div");
    pagination_btn.classList.add("pagination_btn");
    if (page === 1) {
      pagination_btn.classList.add("pagination-active");
    }
    pagination_btn.innerHTML = `${page}`;
    pagination_wrapper.appendChild(pagination_btn);
    pagination_btn.addEventListener("click", paginatorButtonClick);
  }
}

async function paginatorButtonClick(event) {
  const activePaginationBtn = document.querySelectorAll(".pagination-active");

  activePaginationBtn.forEach((btn_active) => {
    btn_active.classList.remove("pagination-active");
  });

  current_page = Number(event.target.textContent);
  event.target.classList.add("pagination-active");
  let data = await getCharactersData(сharactersURL, current_page);

  showCharacters(data);
}

async function loadPage() {
  // функция "сборщик"
  let data = await getCharactersData(сharactersURL, current_page);

  showCharacters(data);
  createPagination();
}
loadPage();
