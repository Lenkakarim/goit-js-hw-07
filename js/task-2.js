const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

const ulElement = document.querySelector(".gallery");
images.forEach((image) => {
  const li = document.createElement("li");
  const img = document.createElement("img");
  img.src = image.url;
  img.alt = image.alt;
  li.append(img);
  ulElement.append(li);
});

// =================== Стилі ============================
ulElement.style.display = "flex";
ulElement.style.flexWrap = "wrap";
ulElement.style.gap = "48px 24px";
ulElement.style.listStyle = "none";
ulElement.style.justifyContent = "center";

const liElements = document.querySelectorAll(".gallery li");
liElements.forEach((li) => {
  li.style.flex = "0 1 calc(33.33% - 24px)";
});

document
  .querySelectorAll(".gallery li img")
  .forEach((img) => {
    img.style.width = "100%";
    img.style.height = "auto";
  });
