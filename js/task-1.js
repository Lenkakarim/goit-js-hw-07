const categoriesList =
  document.querySelector("#categories");
const categoryItems =
  categoriesList.querySelectorAll("li.item");

console.log(
  `Number of categories: ${categoryItems.length}`
);

categoryItems.forEach((item) => {
  const categoryTitle =
    item.querySelector("h2").textContent;

  const elementsQuantity =
    item.querySelectorAll("ul li").length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elementsQuantity}`);
});

const headings = document.querySelectorAll(
  "#categories .item h2"
);
headings.forEach((heading) => {
  heading.classList.add("category-title");
});

const ulElements = document.querySelectorAll(
  "#categories .item ul"
);
ulElements.forEach((ul) => {
  ul.classList.add("category-list");
});

const liElements = document.querySelectorAll(
  "#categories .item ul li"
);
liElements.forEach((li) => {
  li.classList.add("category-item");
});
