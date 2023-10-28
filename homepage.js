"use strict";
import { heroArr } from "./data.js";
import { dataArr } from "./data.js";

console.log(heroArr)
//render home page hero section

heroArr.forEach(({ date, title, text }) => {
  document.querySelector("#hero").innerHTML += `
    <div class="text-container">
        <span class="date upper">${date}</span>
        <h1 class="hero-title">${title}</h1>
        <p class="hero-text">${text}</p>
    </div>`;
});

//render home page articles

dataArr.forEach(({ id, img, date, title, text }) => {
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
});
onlyThreeArticles();
addViewMoreBtn();
addViewLessBtn();
document.querySelector(".view-less-btn").style.display = "none";

//show/hide more blog articles
document.querySelector(".view-more-btn").addEventListener("click", () => {
  dataArr.forEach(({ id }) => {
    document.querySelector(`#blog-article-${id}`).style.display = "initial";
  });

  document.querySelector(".view-more-btn").style.display = "none";
  document.querySelector(".view-less-btn").style.display = "initial";
  //show less blog articles
  document.querySelector(".view-less-btn").addEventListener("click", () => {
    onlyThreeArticles();
    document.querySelector(".view-more-btn").style.display = "initial";
    document.querySelector(".view-less-btn").style.display = "none";
  });
});

//show only first three articles on blog function

function onlyThreeArticles() {
  dataArr.forEach(({ id }) => {
    if (id >= 4) {
      document.querySelector(`#blog-article-${id}`).style.display = "none";
    }
    // } else {
    //   document.querySelector(`#blog-article-${id}`).style.display = "initial";
    // }
  });
}

//add view-more btn on page
function addViewMoreBtn() {
  document.querySelector(".blog-container").innerHTML += `
    <a class="view-more-btn" href="#" >View more</a>`;
}

//add view-less btn on page
function addViewLessBtn() {
  document.querySelector(".blog-container").innerHTML += `
    <a class="view-less-btn" href="#" >View less</a>`;
}
