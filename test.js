function getCharactersData() {
    // получить данные с сервера
}

function showCharacters() {
    // отрисовать плитки
}

function createPagination(current_page, max_page) {
    // нарисовать кнопки пагинатора
    // навесить на пагинатор событие refreshPage по клику

    pagination_wrapper.addEventListener("click", refreshPage)
}

function updatePaginationState(current_page, max_page) {
    // Скрыть лишние кнопки
    // перерисовать цифры
    // изменить подстветку
}

function loadPage() {
    let data = getCharactersData()

    showCharacters(data)
    createPagination(current_page, max_page)
}

function refreshPage() {
    let data = getCharactersData()

    showCharacters(data)
    updatePaginationState(current_page, max_page)
}


// вызывается прямо из корня скрипта
loadPage()
















// async function getCharactersData(url) {
//   try {
//     const response = await fetch(сharactersURL + "?page=" + current_page);
//     const data = await response.json();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }

// делай функции тоньше (функция в идеале делает не много действий, а какое-то одно)

// почитай про событие document ready

// async function loadPage() {
//   // функция "сборщик"
//   let data = await getCharactersData(сharactersURL);

//   showCharacters(data);
//   createPagination(current_page, max_page);
//   arrowDisplay();
// }

// loadPage();

// function showCharacters(data) {
//   const characters = document.querySelector(".characters");

//   data.results.forEach((character) => {
//     const characterEl = document.createElement("div");
//     characterEl.classList.add("characters__item");
//     characterEl.innerHTML = `
//             <div class="characters__item-img">
//               <img
//                 src="${character.image}"
//                 alt="${character.name}"
//               />
//             </div>
//             <div class="characters__item-info">
//               <div class="characters__name">${character.name}</div>
//               <div class="characters__gender">${character.gender}</div>
//               <div class="characters__status">${character.status}</div>
//               <div class="characters__species">${character.species}</div>
//               <div class="characters__location"><span>Last known location:</span> ${character.location.name}</div>
//             </div>
//     `;
//     characters.appendChild(characterEl);
//   });
// }

// function createPagination() {
//   const pagination = document.querySelector(".pagination");
//   const inner_pagination = document.createElement("div");
//   inner_pagination.classList.add("pagination__inner");
//   inner_pagination.innerHTML = `
//   <button class="pagination__btn first"><<</button>
//   <button class="pagination__btn arrow prev"><</button>
//   <button class="pagination__btn btn_1" id = "btn_1">1</button>
//   <button class="pagination__btn btn_2" id = "btn_2">2</button>
//   <button class="pagination__btn btn_3" id = "btn_3">3</button>
//   <button class="pagination__btn btn_4" id = "btn_4">4</button>
//   <button class="pagination__btn btn_5" id = "btn_5">5</button>

//   <button class="pagination__btn arrow next">></button>
//   <button class="pagination__btn last">>></button>
// `;
//   pagination.appendChild(inner_pagination);
//   changePaginationNumber();

// }

// написать функцию "обновить номера пагинатора"
// она ищет все кнопки пагинатора от btn_1 до btn_5
// ты получаешь список элементов DOM дерева
// пробегаешься в цикле по каждому элементу
// заменяешь в нем автрибут .text или .content

// function changePaginationNumber() {
//   let btn_1 = document.getElementById("btn_1").textContent;
//   let btn_2 = document.getElementById("btn_2").textContent;
//   let btn_3 = document.getElementById("btn_3").textContent;
//   let btn_4 = document.getElementById("btn_4").textContent;
//   let btn_5 = document.getElementById("btn_5").textContent;

//   const pagination_wrapper = document.querySelector(".pagination__inner");
//   pagination_wrapper.addEventListener("click", (event) => {
//     if (event.target && event.target.tagName === "BUTTON") {
//       event.target.classList.forEach((classEl) => {
//         switch (classEl) {
//           case "first":
//             current_page = first_page;
//             console.log("first");
//             break;

//           case "prev":
//             current_page--;
//             break;

//           case "last":
//             current_page = max_page;
//             break;

//           case "next":
//             current_page++;
//             break;
//           case "btn_1":
//             btn_1 = current_page - 2;
//             if (current_page === first_page) {
//               event.target.classList.add("backlight");
//             }
//           case "btn_2":
//             btn_2 = current_page - 1;
//             if (current_page === first_page + 1) {
//               event.target.classList.add("backlight");
//             }
//           case "btn_3":
//             btn_3 = current_page;
//             if (
//               current_page !== first_page + 1 &&
//               current_page !== first_page &&
//               current_page !== max_page - 1 &&
//               current_page !== max_page
//             ) {
//               event.target.classList.add("backlight");
//             }
//           case "btn_4":
//             btn_4 = current_page + 1;
//             if (current_page === max_page - 1) {
//               event.target.classList.add("backlight");
//             }
//           case "btn_5":
//             btn_5 = current_page + 2;
//             if (current_page === max_page) {
//               event.target.classList.add("backlight");
//             }
//         }
//       });
//     }
//   });
// }
