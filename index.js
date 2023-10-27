const dataArr = [
  {
    id: 1,
    img: "images/blog-img-01.png",
    date: "July 23, 2022",
    title: "Blog one",
    text: `I'm excited to start a new learning journey as a Scrimba Bootcamp
        student! After several months of learning in the Frontend
        Developer Career Path.`,
  },
  {
    id: 2,
    img: "images/blog-img-02.png",
    date: "July 23, 2022",
    title: "Blog two",
    text: `I'm excited to start a new learning journey as a Scrimba Bootcamp
        student! After several months of learning in the Frontend
        Developer Career Path.`,
  },
  {
    id: 3,
    img: "images/blog-img-03.png",
    date: "July 23, 2022",
    title: "Blog three",
    text: `I'm excited to start a new learning journey as a Scrimba Bootcamp
        student! After several months of learning in the Frontend
        Developer Career Path.`,
  },
  {
    id: 4,
    img: "images/blog-img-04.png",
    date: "July 23, 2022",
    title: "Blog four",
    text: `I'm excited to start a new learning journey as a Scrimba Bootcamp
        student! After several months of learning in the Frontend
        Developer Career Path.`,
  },
  {
    id: 5,
    img: "images/blog-img-05.png",
    date: "July 23, 2022",
    title: "Blog five",
    text: `I'm excited to start a new learning journey as a Scrimba Bootcamp
        student! After several months of learning in the Frontend
        Developer Career Path.`,
  },
  {
    id: 6,
    img: "images/blog-img-06.png",
    date: "July 23, 2022",
    title: "Blog six",
    text: `I'm excited to start a new learning journey as a Scrimba Bootcamp
        student! After several months of learning in the Frontend
        Developer Career Path.`,
  },
];

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

  if (id >=4 ) {
    document.querySelector(`#blog-article-${id}`).style.display = "none";
  } else {
    document.querySelector(`#blog-article-${id}`).style.display = "initial";
  }
});

document.querySelector(".blog-container").innerHTML += `
    <a class="view-more-btn" href="#" >View more</a>`

// document.querySelector('.view-more-btn').addEventListener('click', ()=>{
   
    
// })