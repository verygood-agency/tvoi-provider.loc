// Функции
// функция подключения скриптов
function includeFiles(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
};

// Основная рабочая область
document.addEventListener("DOMContentLoaded", () => {

  // подключаем файлы тут
  includeFiles("./js/parts/accordion.js");
  includeFiles("./js/parts/card-filter-by-click.js");

});

// техническая часть - УДАЛИТЬ НА ПРОДАКШЕНЕ!
// получить в консоли элемент, по которому кликнули
document.addEventListener('click', e => console.log(e.target));
