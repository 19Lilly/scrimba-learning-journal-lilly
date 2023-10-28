"use strict";
import { dataArr } from "./data.js";
import { heroArr } from "./data.js";

const blogContainer = document.querySelector(".blog-container");
const topEl = document.querySelector(".top");

function showTopOfThePage() {
  heroArr.forEach(
    ({
      text,
      title1,
      text1,
      text2,
      title2,
      text3,
      text4,
      aboutMeTitle,
      userImg,
    }) => {
      topEl.innerHTML += `<div class="post-page-container">
                <img class="user-img" src="${userImg}"/>
                <h1 class="about-title">${aboutMeTitle}</h1>
                <p class="post-page-text first-text">${text}</p>
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
  dataArr.forEach(({ id, img, date, title, text }) => {
    if (id < 4) {
      blogContainer.innerHTML += `
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

showTopOfThePage();
showRecentPost();
