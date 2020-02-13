window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  let infoTab = document.querySelectorAll(".info-header-tab"),
    tabContent = document.querySelectorAll(".info-tabcontent"),
    incomeItem = document.querySelectorAll(".income__item"),
    content = document.querySelector(".content"),
    info = document.querySelector(".info"),
    income = document.querySelector(".income"),
    infoBlock = document.querySelectorAll(".info-block"),
    viewport = document.querySelector("meta[name=viewport]");

  //добавляем анимацию
  function showSection() {
    content.classList.add('move');
    content.addEventListener('webkitAnimationEnd', function (event) {
      income.classList.add('hide');
      info.classList.add('fade');
      info.classList.remove('hide');
    }, false);
  }

//  скрываем все блоки кроме первого
  function hideTab() {
    for (let i = 0; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  // прописываем условия показа блока
  function showTab(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  //скрываем все стили
  function hideSec() {
    for (let i = 0; i < infoTab.length; i++) {
      infoTab[i].classList.remove("active");
      infoTab[i].classList.add("disable");
    }
  }

  //прописываем условия показа стилей на табах
  function showSec(c) {
    if (infoTab[c].classList.contains('disable')) {
      infoTab[c].classList.remove("disable");
      infoTab[c].classList.add("active");
    }
  }

  function hideMob() {
    for (let i = 0; i < infoBlock.length; i++) {
      infoBlock[i].classList.remove("show");
      infoBlock[i].classList.add("hide");
    }
  }

  function showMob(b) {
    if (infoBlock[b].classList.contains('hide')) {
      infoBlock[b].classList.remove('hide');
      infoBlock[b].classList.add('show');
    }
  }


  //клик на табы первого блока
  for (let i = 0; i < incomeItem.length; i++) {
    incomeItem[i].addEventListener("click", function () {
      showSection(i);
      hideTab(0);
      showTab(i);
      hideSec();
      showSec(i);
    })
  }

  //клик на табы
  for (let i = 0; i < infoTab.length; i++) {
    infoTab[i].addEventListener('click', function () {
      hideTab();
      showTab(i);
      hideSec();
      showSec(i);
    })
  }
});

