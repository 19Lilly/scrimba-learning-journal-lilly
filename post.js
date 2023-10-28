"use strict";
import { dataArr } from "./data.js";
import { heroArr } from "./data.js";

const blogContainer = document.querySelector(".blog-container");
const topEl = document.querySelector(".top");

function showTopOfThePage() {
  heroArr.forEach(
    ({
      date,
      title,
      text,
      img,
      title1,
      text1,
      text2,
      title2,
      text3,
      text4,
      alt
    }) => {
      topEl.innerHTML += `
      <div class="post-page-container">
            <div class="text-content">
                <span class="date post-page-date upper">${date}</span>
                <h1 class="post-page-title-main">${title}</h1>
                <p class="post-page-text">${text}</p>
            </div>
            <img class="post-page-img" src="${img}" alt="${alt}"/>
            <div class="text-content">
                <p class="post-page-title">${title1}</p>
                <p class="post-page-text">${text1}</p>
                <p class="post-page-text">${text2}</p>
                <p class="post-page-title">${title2}</p>
                <p class="post-page-text">${text3}</p>
                <p class="post-page-text">${text4}</p>
            </div> 
        </div>`;
    }
  );
}

function showRecentPost() {
  dataArr.forEach(({ id, img, alt, date, title, text }) => {
    if (id < 4) {
      blogContainer.innerHTML += `
            <div class="blog-article" id="blog-article-${id}">
            <img
            class="blog-img"
            src="${img}"
            alt="${alt}"
            />
            <span class="date upper">${date}</span>
            <h3 class="blog-title">${title}</h3>
            <p class="blog-text">${text}</p>
            </div>`;
    }
  });
}

showTopOfThePage();
showRecentPost();
