

const product = [
    {
      title: "599,89₽",
      brand: "Комбайн КЗС-1218 ",
      price: "«ДЕСНА-ПОЛЕСЬЕ GS12»",
      ishlab: "В корзину",
  
      image: "./assets/images/articles/home/image.png",
      image1: "./assets/images/articles/home/yulduz2.png",
    },
    {
      title: "44,50₽",
      brand: "Колбаса сырокопченая МЯСНАЯ ",
      price: "ИСТОРИЯ Колбаса Тоскан...",
      ishlab: "В корзину",
  
      image: "./assets/images/articles/home/image2.png",
      image1: "./assets/images/articles/home/yulduz5.png",
    },
    {
      title: "159,99₽",
  
      brand: "Комбайн КЗС-1218 ",
      price: "«ДЕСНА-ПОЛЕСЬЕ GS12»",
      ishlab: "В корзину",
  
      image: "./assets/images/articles/home/image3.png",
      image1: "./assets/images/articles/home/yulduz2.png",
    },
    {
      title: "49,39₽",
      brand: "Комбайн КЗС-1218 ",
      price: "«ДЕСНА-ПОЛЕСЬЕ GS12»",
      ishlab: "В корзину",
  
      image: "./assets/images/articles/home/image4.png",
      image1: "./assets/images/articles/home/yulduz2.png",
    },
    {
      title: "77,99₽",
      brand: "Комбайн КЗС-1218 ",
      price: "«ДЕСНА-ПОЛЕСЬЕ GS12»",
      ishlab: "В корзину",
  
      image: "./assets/images/articles/home/image5.png",
      image1: "./assets/images/articles/home/yulduz2.png",
    },
    {
      title: "159,99₽",
      brand: "Комбайн КЗС-1218 ",
      price: "«ДЕСНА-ПОЛЕСЬЕ GS12»",
      ishlab: "В корзину",
  
      image: "./assets/images/articles/home/image3.png",
      image1: "./assets/images/articles/home/yulduz2.png",
    },
    {
      title: "599,99₽",
      brand: "Комбайн КЗС-1218 ",
      price: "«ДЕСНА-ПОЛЕСЬЕ GS12»",
      ishlab: "В корзину",
  
      image: "./assets/images/articles/home/image.png",
      image1: "./assets/images/articles/home/yulduz2.png",
    },
    {
      title: "49,39₽",
      brand: "Комбайн КЗС-1218 ",
      price: "«ДЕСНА-ПОЛЕСЬЕ GS12»",
      ishlab: "В корзину",
  
      image: "./assets/images/articles/home/image4.png",
      image1: "./assets/images/articles/home/yulduz2.png",
    },
  ];
  const cards = document.querySelector(".cards");
  function displayProducts(data) {
    let src = "";
    data.forEach((product) => {
        src += `
     <div class="cards">
        <div class="card">
          <img class="rasm" src="${product.image}"  alt="">
         
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.brand}</p>
            <p class="card-text">${product.price}</p>
            <img src="${product.image1}"  alt="">
            <a href="#" class="btn btn-primary">${product.ishlab}</a>
        </div>
      </div>
      `;

    

    });
    cards.innerHTML = src;

  }
  displayProducts(product);

  document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("katalog").addEventListener("click", function(){
        document.querySelector("header").classList.toggle("open")
    })
}
)