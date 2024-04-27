const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.classList.contains('articles--hidden')) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
        if (entry.isIntersecting && entry.target.classList.contains('articles--hidden')) {
            entry.target.classList.add('articles--show');
        } else {
            entry.target.classList.remove('articles--show');
        }
    });
});

const articles = document.querySelectorAll('article');
const list = document.querySelectorAll("li");
const elements = document.querySelectorAll("div");
articles.forEach((el) => el.classList.add('articles--hidden'));
list.forEach((el) => el.classList.add("hidden"));
elements.forEach((el) => el.classList.add("hidden"));

const hiddenElements = document.querySelectorAll(".hidden");
const hiddenArticles = document.querySelectorAll('.articles--hidden');
hiddenElements.forEach((el) => observer.observe(el));
hiddenArticles.forEach((el) => observer.observe(el));

let layer = document.querySelector("header");

window.addEventListener("scroll", function() {
    let scrollPos = window.scrollY;
    layer.style.left = scrollPos + 'px';
});