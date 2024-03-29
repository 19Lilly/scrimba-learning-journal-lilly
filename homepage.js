"use strict";
import { heroArr } from "./data.js";
import { dataArr } from "./data.js";

const hero = document.querySelector("#hero");
const blogContainer = document.querySelector(".blog-container");
const viewMoreBtn = document.querySelector(".view-more-btn");
const viewLessBtn = document.querySelector(".view-less-btn");

//render home page hero section

function showHero() {
  heroArr.forEach(({ date, title, text }) => {
    hero.innerHTML += `
      <div class="text-container">
          <span class="date upper">${date}</span>
          <h1 class="hero-title">${title}</h1>
          <p class="hero-text">${text}</p>
      </div>`;
  });
}

showHero();

//render home page articles
function showArticle() {
  blogContainer.innerHTML = "";
  dataArr.forEach(({ id, img, alt, date, title, text }) => {
    blogContainer.innerHTML += `<div class="blog-article" id="blog-article-${id}">
        <img
        class="blog-img"
        src="${img}"
        alt="${alt}"
        />
        <span class="date upper">${date}</span>
        <h3 class="blog-title">${title}</h3>
        <p class="blog-text">${text}</p>
        </div>`;
  });
  showThreeArticles();
}

showArticle();

//show/hide more blog articles
function showThreeArticles() {
  dataArr.forEach(({ id }) => {
    if (id > 3) {
      document.querySelector(`#blog-article-${id}`).classList.toggle("hidden");
    }
  });
}

function showRestArticles() {
  dataArr.forEach(({ id }) => {
    if (id > 3) {
      document.querySelector(`#blog-article-${id}`).classList.toggle("hidden");
    }
  });
}

function showHideBtn() {
  viewMoreBtn.classList.toggle("hidden");
  viewLessBtn.classList.toggle("hidden");
}

viewMoreBtn.addEventListener("click", (e) => {
  e.preventDefault();
  showRestArticles();
  showHideBtn();
});

viewLessBtn.addEventListener("click", (e) => {
  e.preventDefault();
  showThreeArticles();
  showHideBtn();
});
