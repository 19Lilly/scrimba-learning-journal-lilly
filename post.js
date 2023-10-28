"use strict"
import { dataArr } from "./data.js";
import { heroArr } from "./data.js";

heroArr.forEach(
  ({ date, title, text, img, title1, text1, text2, title2, text3, text4 }) => {
    document.querySelector(".blog-container").innerHTML += `
        <div class="post-page-container">
            <span class="date post-page-date upper">${date}</span>
            <h1 class="post-page-title-main">${title}</h1>
            <p class="post-page-text">${text}</p>
            <img class="post-page-img" src="${img}" alt="computer on the table in the evening"/>
            <p class="post-page-title">${title1}</p>
            <p class="post-page-text">${text1}</p>
            <p class="post-page-text">${text2}</p>
            <p class="post-page-title">${title2}</p>
            <p class="post-page-text">${text3}</p>
            <p class="post-page-text">${text4}</p>
        </div>`;
  }
);

showRecentPost();

function showRecentPost() {
  document.querySelector(".blog-container").innerHTML += `
    <h3 class="recent-post-title">Recent post</h3>`;
  dataArr.forEach(({ id, img, date, title, text }) => {
    if (id < 4) {
      document.querySelector(".blog-container").innerHTML += `
            <div class="blog-article" id="blog-article-${id}">
            <img
            class="blog-img"
            src="${img}"
            alt="notebook with opened code editor"
            />
            <span class="date upper">${date}</span>
            <h3 class="blog-title">${title}</h3>
            <p class="blog-text">${text}</p>
            </div>`;
    }
  });
}
