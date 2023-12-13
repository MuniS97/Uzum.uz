export function header_create(place) {
  let left = document.createElement("div");
  let city = document.createElement("a");
  let cityImg = document.createElement("img");
  let give = document.createElement("a");
  let desc = document.createElement("p");
  let right = document.createElement("div");
  let support = document.createElement("a");
  let orders = document.createElement("a");
  let language = document.createElement("a");
  let languageImg = document.createElement("img");

  left.classList.add("left");
  right.classList.add("right");
  give.classList.add("give");

  city.innerHTML = "Город: <span>Ташкент</span>";
  cityImg.src = "/public/img/headerLocal.svg";
  give.innerHTML = "Пункты выдачи";
  desc.innerHTML = "Доставим ваш заказ бесплатно — всего за 1 день!";
  support.innerHTML = "Вопрос-ответ";
  orders.innerHTML = "Мои заказы";
  language.innerHTML = "Русский";
  languageImg.src = "/public/img/headerLang.svg";

  place.append(left, desc, right);
  left.append(city, give);
  city.prepend(cityImg);
  right.append(support, orders, language);
  language.prepend(languageImg);
}

export function main_header_create(place) {
  let top = document.createElement("div");
  let topLogo = document.createElement("img");
  let topCenter = document.createElement("div");
  let topBtn = document.createElement("button");
  let topBtnImg = document.createElement("img");
  let topInput = document.createElement("input");
  let topInputdiv = document.createElement("div");
  let topInputdivImg = document.createElement("img");
  let topInputCancel = document.createElement("img");
  let topRight = document.createElement("div");
  let topRightLogin = document.createElement("a");
  let topRightLoginImg = document.createElement("img");
  let topRightFavorites = document.createElement("a");
  let topRightFavoritesImg = document.createElement("img");
  let topRightCard = document.createElement("a");
  let topRightCardImg = document.createElement("img");
  let bottom = document.createElement("div");
  let bottomP = document.createElement("a");
  let bottomPImg = document.createElement("img");
  let bottomP1 = document.createElement("a");
  let bottomP2 = document.createElement("a");
  let bottomP3 = document.createElement("a");
  let bottomP4 = document.createElement("a");
  let bottomP5 = document.createElement("a");
  let bottomP6 = document.createElement("a");
  let bottomP7 = document.createElement("a");
  let bottomP8 = document.createElement("a");
  let bottomP9 = document.createElement("a");
  let bottomP10 = document.createElement("a");
  let bottomP10Img = document.createElement("img");

  top.classList.add("top");
  topLogo.classList.add("logo");
  topCenter.classList.add("center");
  topRight.classList.add("right");
  topInputCancel.classList.add("cancel");
  bottom.classList.add("bottom");
  bottomP.classList.add("bold");
  bottomP.classList.add("noAnim");
  bottomP10.classList.add("noAnim");

  topLogo.src = "/public/img/headerLogo.svg";
  topBtn.innerHTML = "Каталог";
  topBtnImg.src = "/public/img/headerCatalog.svg";
  topInput.placeholder = "Искать товары и категории";
  topInputdivImg.src = "/public/img/headerSearch.svg";
  topRightLogin.innerHTML = "Войти";
  topRightFavorites.innerHTML = "Избранное";
  topRightCard.innerHTML = "Корзина";
  topRightLoginImg.src = "/public/img/headerUser.svg";
  topRightFavoritesImg.src = "/public/img/headerFavorites.svg";
  topRightCardImg.src = "/public/img/headerCard.svg";
  topInputCancel.src = "/public/img/headerCancel.svg";
  bottomP.innerHTML = "Рассрочка";
  bottomP1.innerHTML = "Электроника";
  bottomP2.innerHTML = "Бытовая техника";
  bottomP3.innerHTML = "Одежда";
  bottomP4.innerHTML = "Обувь";
  bottomP5.innerHTML = "Аксессуары";
  bottomP6.innerHTML = "Красота и уход";
  bottomP7.innerHTML = "Здоровье";
  bottomP8.innerHTML = "Товары для дома";
  bottomP9.innerHTML = "Строительство и ремонт";
  bottomP10.innerHTML = "Ещё";
  bottomPImg.src = "/public/img/headerUnion.png";
  bottomP10Img.src = "/public/img/headerArrow.svg";

  place.append(top, bottom);
  top.append(topLogo, topCenter, topRight);
  topCenter.append(topBtn, topInput, topInputCancel, topInputdiv);
  topBtn.prepend(topBtnImg);
  topInputdiv.append(topInputdivImg);
  topRight.append(topRightLogin, topRightFavorites, topRightCard);
  topRightLogin.prepend(topRightLoginImg);
  topRightFavorites.prepend(topRightFavoritesImg);
  topRightCard.prepend(topRightCardImg);
  bottom.append(
    bottomP,
    bottomP1,
    bottomP2,
    bottomP3,
    bottomP4,
    bottomP5,
    bottomP6,
    bottomP7,
    bottomP8,
    bottomP9,
    bottomP10
  );
  bottomP.prepend(bottomPImg);
  bottomP10.append(bottomP10Img);

  topLogo.onclick = () => location.assign("/");
  topInput.onkeydown = () => {
    topInputCancel.classList.add("show");
    setInterval(() => {
      topInput.value.length === 0
        ? topInputCancel.classList.remove("show")
        : topInputCancel.classList.add("show");
    }, 0);
  };
  topInputCancel.onclick = () => (topInput.value = "");
}

export function media_header() {
  let block = document.createElement("div");
  let div = document.createElement("div");
  let divImg = document.createElement("img");
  let divText = document.createElement("p");
  let div1 = document.createElement("div");
  let div1Img = document.createElement("img");
  let div1Text = document.createElement("p");
  let div2 = document.createElement("div");
  let div2Img = document.createElement("img");
  let div2Text = document.createElement("p");
  let div3 = document.createElement("div");
  let div3Img = document.createElement("img");
  let div3Text = document.createElement("p");
  let div4 = document.createElement("div");
  let div4Img = document.createElement("img");
  let div4Text = document.createElement("p");

  block.classList.add("media_header");
  divImg.src = "/public/logo.svg";
  divText.innerHTML = "Главная";
  div1Img.src = "/public/img/headerSearch.svg";
  div1Text.innerHTML = "Каталог";
  div2Img.src = "/public/img/headerCard.svg";
  div2Text.innerHTML = "Корзина";
  div3Img.src = "/public/img/headerFavorites.svg";
  div3Text.innerHTML = "Избранное";
  div4Img.src = "/public/img/headerUser.svg";
  div4Text.innerHTML = "Кабинет";

  block.append(div, div1, div2, div3, div4);
  div.append(divImg, divText);
  div1.append(div1Img, div1Text);
  div2.append(div2Img, div2Text);
  div3.append(div3Img, div3Text);
  div4.append(div4Img, div4Text);
  document.body.append(block);
}

export function footer_create(place) {
  place.innerHTML += `
    <div class="top">
    <div class="div1">
      <h3>О нас</h3>
      <a href="#">Пункты выдачи</a>
      <a href="#">Вакансии</a>
    </div>
    <div class="div1">
      <h3>Пользователям</h3>
      <a href="#">Связаться с нами</a>
      <a href="#">Вопрос-ответ</a>
    </div>
    <div class="div1">
      <h3>Для предпринимателей</h3>
      <a href="#">Продавайте на Uzum</a>
      <a href="#">Вход для продавцов</a>
    </div>
    <div class="div">
      <h3>Скачать приложение</h3>
      <div>
          <div>
            <img src="/public/img/footerApple.svg" alt="apple" />
          <p>AppStore</p>
          </div>
          <div><img src="/public/img/footerPlay.svg" alt="play_market" />
            <p>Google Play</p></div>
      </div>
      <h3>Uzum в соцсетях</h3>
      <div>
            <div><img src="/public/img/footerInstagram.svg" alt="media" /></div>
            <div><img src="/public/img/footerTelegram.svg" alt="media" /></div>
            <div><img src="/public/img/footerYoutube.svg" alt="media" /></div>
            <div><img src="/public/img/footerFacebook.svg" alt="media" /></div>
      </div>
      </div>
    </div>
  </div>
  <span></span>
  <div class="bottom">
    <div>
      <a href="#">Соглашение о конфиденциальности</a>
      <a href="#">Пользовательское соглашение</a>
    </div>
    <p>«2023© ИП ООО «UZUM MARKET». ИНН 309376127. Все права защищены»</p>
  </div>
    `;
}

export function reload_goods(arr, place, text) {
  place.innerHTML = "";
    for (let item of arr) {
      let good = document.createElement("div");
      let div = document.createElement("div");
      let img = document.createElement("img");
      let imgLike = document.createElement("img");
      let imgtext = document.createElement("div");
      let title = document.createElement("h3");
      let rating = document.createElement("div");
      let ratingImg = document.createElement("img");
      let raitngText = document.createElement("p");
      let partPayment = document.createElement("div");
      let overallPrice = document.createElement("div");
      let overallPricePrice = document.createElement("div");
      let overallPricePriceP = document.createElement("p");
      let overallPricePriceH4 = document.createElement("h4");
      let overallPriceCircle = document.createElement("div");
      let overallPriceCircleImg = document.createElement("img");
      let discount = (item.price / 100) * item.salePercentage;
      let discountPrice = item.price - discount;

      good.classList.add("good");
      div.classList.add("imgDiv");
      imgLike.classList.add("like");
      rating.classList.add("rating");
      partPayment.classList.add("part_payment");
      overallPrice.classList.add("overall_price");
      overallPricePrice.classList.add("price");
      overallPriceCircle.classList.add("circle");

      img.src = item.media[0];
      imgLike.src = "/public/img/like.svg";
      imgtext.innerHTML = text;
      item.title.length < 40
        ? (title.innerHTML = item.title)
        : (title.innerHTML = item.title.slice(0, 40) + " ...");
      ratingImg.src = "/public/img/star.svg";
      raitngText.innerHTML = item.rating + ` (${item.rating} баллов)`;
      partPayment.innerHTML = Math.round(discountPrice / 12) + "сум/мес";
      overallPricePriceP.innerHTML = item.price + " сум";
      overallPricePriceH4.innerHTML = Math.round(discountPrice) + " сум";
      overallPriceCircleImg.src = "/public/img/card.svg";

      place.append(good);
      good.append(div, title, rating, partPayment, overallPrice);
      div.append(img, imgLike, imgtext);
      rating.append(ratingImg, raitngText);
      overallPrice.append(overallPricePrice, overallPriceCircle);
      overallPricePrice.append(overallPricePriceP, overallPricePriceH4);
      overallPriceCircle.append(overallPriceCircleImg);
    }
  
}
