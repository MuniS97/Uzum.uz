import { getData } from "./helpers";

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

  let region =
    localStorage.getItem("region") === null
      ? "Выбрать"
      : localStorage.getItem("region");

  left.classList.add("left");
  right.classList.add("right");
  orders.dataset.contact = "";
  city.dataset.regions = "";
  give.setAttribute("href", "/pages/deliveryPoints/");

  city.innerHTML =
    navigator.geolocation.length > 0
      ? `Город: <span>${navigator.geolocation}</span>`
      : `Город: <span>${region}</span>`;
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
  let topRightLoginText = document.createElement("p");
  let topRightFavorites = document.createElement("a");
  let topRightFavoritesImg = document.createElement("img");
  let topRightFavoritesText = document.createElement("p");
  let topRightCard = document.createElement("a");
  let topRightCardImg = document.createElement("img");
  let topRightCardText = document.createElement("p");
  let topRightCardCount = document.createElement("span");
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
  topRightLogin.dataset.contact = "active";

  setTimeout(() => {
    let goods = document.querySelectorAll(".circle");
    goods.forEach((good) => {
      good.onclick = () => {
        let busket = JSON.parse(localStorage.getItem("card")) || [];
        busket_count(busket, topRightCardCount);
        topRightCardCount.innerHTML = busket.length;
      };
    });
  }, 1000);
  let busket = JSON.parse(localStorage.getItem("card")) || [];
  busket_count(busket, topRightCardCount);

  topRightFavorites.href = "/pages/wishes/";
  topRightCard.href = "/pages/card/";
  topLogo.src = "/public/img/headerLogo.svg";
  topBtn.innerHTML = "Каталог";
  topBtnImg.src = "/public/img/headerCatalog.svg";
  topInput.placeholder = "Искать товары и категории";
  topInputdivImg.src = "/public/img/headerSearch.svg";
  topRightLoginText.innerHTML = "Войти";
  topRightFavoritesText.innerHTML = "Избранное";
  topRightCardText.innerHTML = "Корзина";
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
  topRightCardCount.innerHTML = busket.length;

  place.append(top, bottom);
  top.append(topLogo, topCenter, topRight);
  topCenter.append(topBtn, topInput, topInputCancel, topInputdiv);
  topBtn.prepend(topBtnImg);
  topInputdiv.append(topInputdivImg);
  topRight.append(topRightLogin, topRightFavorites, topRightCard);
  topRightLogin.append(topRightLoginImg, topRightLoginText);
  topRightFavorites.append(topRightFavoritesImg, topRightFavoritesText);
  topRightCard.append(topRightCardImg, topRightCardText, topRightCardCount);
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
export function min_footer(place) {
  place.innerHTML += `
  <button class="btn_more">Показать ещё</button>
  <div class="container min_footer">
  <div class="inf">
    <details>
      <summary>О нас</summary>
      <a href="#">Пункты выдачи</a>
      <a href="#">Вакансии</a>
    </details>
    <details>
      <summary>Пользователям</summary>
      <a href="#">Связаться с нами</a>
      <a href="#">Вопрос-ответ</a>
    </details>
    <details>
      <summary>Для предпринимателей</summary>
      <a href="#">Продавайте на Uzum</a>
      <a href="#">Вход для продавцов</a>
    </details>
  </div>
  <div class="apps">
    <h3>Скачать приложение</h3>
    <img src="/public/img/footerApp (1).png" alt="app" />
    <img src="/public/img/footerApp (2).png" alt="app" />
  </div>
  <div class="socials">
    <h3>Uzum в соцсетях</h3>
    <div>
      <div><img src="/public/img/footerInstagram.svg" alt="media" /></div>
      <div><img src="/public/img/footerTelegram.svg" alt="media" /></div>
      <div><img src="/public/img/footerYoutube.svg" alt="media" /></div>
      <div><img src="/public/img/footerFacebook.svg" alt="media" /></div>
    </div>
  </div>
  <div class="more">
    <a href="#">Соглашение о конфиденциальности</a>
    <a href="#">Пользовательское соглашение</a>
    <p>«2023© ИП ООО «UZUM MARKET». ИНН 309376127. Все права защищены»</p>
  </div>
</div>`;
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

    img.onclick = () => {
      location.assign("/pages/good/?good_id=" + item.id);
    };

    let wishes = JSON.parse(localStorage.getItem("wishes")) || [];
    if (wishes.includes(item.id)) {
      imgLike.src = "/public/img/wished_like.svg";
    } else {
      imgLike.src = "/public/img/like.svg";
    }
    imgLike.onclick = () => {
      let wishes = JSON.parse(localStorage.getItem("wishes")) || [];

      if (wishes.includes(item.id)) {
        wishes = wishes.filter((id) => id !== item.id);
        localStorage.setItem("wishes", JSON.stringify([...wishes]));
        imgLike.src = "/public/img/like.svg";
        return;
      }
      localStorage.setItem("wishes", JSON.stringify([...wishes, item.id]));
      imgLike.src = "/public/img/wished_like.svg";
    };

    overallPriceCircleImg.onclick = () => {
      let card = JSON.parse(localStorage.getItem("card")) || [];
      let goodsCount = document.querySelector("main .header .right a span");
      let none_card_block = document.querySelector("main .none_block");
      let goodsPlace = document.querySelector(".card .content");
      let totalPlace = document.querySelector(".card .dash");
      let total_view = document.querySelector(".card .dash h2");

      if (card.includes(item.id)) {
        card = card.filter((id) => id !== item.id);
        localStorage.setItem("card", JSON.stringify([...card]));
        return;
      }
      localStorage.setItem("card", JSON.stringify([...card, item.id]));
      busket_count(card, goodsCount);
      busket_checking(none_card_block, goodsPlace, totalPlace, total_view);
    };
  }
}

export function regions_reload(arr, place, text, mw) {
  place.innerHTML = "";
  for (let item of arr) {
    let p = document.createElement("div");
    p.innerHTML = item.title;
    place.append(p);

    p.onclick = () => {
      text.innerHTML = p.innerHTML;
      mw.classList.remove("modal_contacts_anim");
      mw.classList.add("modal_contacts_anim1");
      document.body.style.overflowY = "scroll";

      let chosedRegion = document.querySelector("header .left a span");
      localStorage.setItem("region", chosedRegion.innerHTML);
    };
  }
}
export function select_reload(arr, place) {
  place.innerHTML = "";
  for (let item of arr) {
    let option = document.createElement("option");
    option.value = item.title;
    option.innerHTML = item.title;

    place.append(option);
  }
}
export function reload_about_good(object, place) {
  let top = document.createElement("top");
  let block_img = document.createElement("div");
  let block_img_min = document.createElement("div");
  let img = document.createElement("img");
  let block_inf = document.createElement("div");
  let inf_top = document.createElement("div");
  let inf_top_left = document.createElement("div");
  let rating = document.createElement("p");
  let order_count = document.createElement("p");
  let inf_top_right = document.createElement("div");
  let wishImg = document.createElement("img");
  let wishP = document.createElement("p");
  let title = document.createElement("h2");
  let sailer_inf = document.createElement("div");
  let sailer_title = document.createElement("p");
  let sailer = document.createElement("p");
  let delivery_inf = document.createElement("div");
  let delivery_div = document.createElement("div");
  let delivery_title = document.createElement("p");
  let delivery_title_img = document.createElement("img");
  let delivery = document.createElement("p");
  let colorsP = document.createElement("h4");
  let colors_div = document.createElement("div");
  let countP = document.createElement("h4");
  let count_block = document.createElement("div");
  let count_count = document.createElement("div");
  let minus = document.createElement("p");
  let count = document.createElement("h5");
  let plus = document.createElement("p");
  let overall_has = document.createElement("div");
  let overall_img = document.createElement("img");
  let overallP = document.createElement("p");
  let priceP = document.createElement("h4");
  let price_inf = document.createElement("div");
  let discount_price = document.createElement("h6");
  let old_price = document.createElement("p");
  let sale_div = document.createElement("div");
  let part_pay_block = document.createElement("div");
  let part_p = document.createElement("p");
  let part_img = document.createElement("img");
  let btns = document.createElement("div");
  let add_busket_btn = document.createElement("button");
  let buy_one_click = document.createElement("button");
  let people_bought = document.createElement("div");
  let bottom = document.createElement("div");
  let bottom_top = document.createElement("div");
  let descP = document.createElement("p");
  let viewsP = document.createElement("p");
  let desc = document.createElement("div");
  let views = document.createElement("div");
  let views_div = document.createElement("div");

  let sal_per = (object.price / 100) * object.salePercentage;
  let dis_price = object.price - sal_per;

  object.media.slice(0, 3).forEach((min_img) => {
    let img = document.createElement("img");
    img.classList.add("min_img");
    img.src = min_img;
    block_img_min.append(img);
  });
  object.colors.forEach((color) => {
    let div = document.createElement("div");
    div.style.backgroundColor = color;
    colors_div.append(div);
  });

  top.classList.add("top");
  block_img.classList.add("block_img");
  block_img_min.classList.add("block_img_min");
  block_inf.classList.add("block_inf");
  inf_top.classList.add("inf_top");
  inf_top_left.classList.add("inf_top_left");
  inf_top_right.classList.add("inf_top_right");
  sailer_inf.classList.add("sailer_inf");
  delivery_inf.classList.add("delivery_inf");
  delivery_div.classList.add("delivery_div");
  count_block.classList.add("count_block");
  count_count.classList.add("count_count");
  overall_has.classList.add("overall_has");
  price_inf.classList.add("price_inf");
  part_pay_block.classList.add("part_pay_block");
  btns.classList.add("btns");
  add_busket_btn.classList.add("add_busket_btn");
  buy_one_click.classList.add("buy_one_click");
  bottom.classList.add("bottom");
  bottom_top.classList.add("bottom_top");
  descP.classList.add("descP");
  viewsP.classList.add("viewsP");
  descP.classList.add("chose");
  desc.classList.add("desc");
  views.classList.add("views");
  desc.classList.add("show");
  people_bought.classList.add("people_bought");
  colors_div.classList.add("colors_div");

  img.src = object.media[0];
  rating.innerHTML = `<img src="/public/img/star.svg">${object.rating}(15 отзывов)`;
  order_count.innerHTML = "Более 1000 заказов";
  wishImg.src = "/public/img/like.svg";
  wishP.innerHTML = "В желания";
  title.innerHTML = object.title;
  sailer_title.innerHTML = "Продавец:";
  sailer.innerHTML = "--";
  delivery_title.innerHTML = "Доставка:";
  delivery_title_img.src = "/public/img/good_deliver.svg";
  delivery.innerHTML = "1 день, бесплатно";
  colorsP.innerHTML = "Цвет:";
  countP.innerHTML = "Количество:";
  minus.innerHTML = "&minus;";
  count.innerHTML = "1";
  plus.innerHTML = "&plus;";
  overall_img.src = "/public/img/good_count_img.svg";
  overallP.innerHTML = "Осталось всего 2";
  priceP.innerHTML = "Цена:";
  discount_price.innerHTML = Math.round(dis_price) + " сум";
  old_price.innerHTML = object.price + " сум";
  sale_div.innerHTML = "Акция";
  part_p.innerHTML = `<span>От ${Math.round(
    dis_price / 12
  )} сум/мес</span> в рассрочку`;
  part_img.src = "/public/img/titleArrow.svg";
  add_busket_btn.innerHTML = "Добавить в корзину";
  buy_one_click.innerHTML = "Купить в 1 клик";
  people_bought.innerHTML = `<img src="/public/img/good_bought.svg">4217 человек купили на этой неделе`;
  descP.innerHTML = "Описание";
  viewsP.innerHTML = "Отзывы (15)";
  desc.innerHTML = object.description;

  views.append(views_div, views_div);
  bottom_top.append(descP, viewsP);
  bottom.append(bottom_top, desc, views);
  btns.append(add_busket_btn, buy_one_click);
  part_pay_block.append(part_p, part_img);
  price_inf.append(discount_price, old_price, sale_div);
  overall_has.append(overall_img, overallP);
  count_count.append(minus, count, plus);
  count_block.append(count_count, overall_has);
  delivery_div.append(delivery_title, delivery_title_img);
  delivery_inf.append(delivery_div, delivery);
  sailer_inf.append(sailer_title, sailer);
  inf_top_right.append(wishImg, wishP);
  inf_top_left.append(rating, order_count);
  inf_top.append(inf_top_left, inf_top_right);
  block_inf.append(
    inf_top,
    title,
    sailer_inf,
    delivery_inf,
    colorsP,
    colors_div,
    countP,
    count_block,
    priceP,
    price_inf,
    part_pay_block,
    btns,
    people_bought
  );
  block_img.append(block_img_min, img);
  top.append(block_img, block_inf);
  place.append(top, bottom);

  descP.onclick = () => {
    viewsP.classList.remove("chose");
    descP.classList.add("chose");
    desc.classList.add("show");
    views.classList.remove("show");
  };
  viewsP.onclick = () => {
    descP.classList.remove("chose");
    viewsP.classList.add("chose");
    desc.classList.remove("show");
    views.classList.add("show");
  };
}

export function busket_count(busk, count) {
  if (busk.length === 0) {
    count.classList.add("hide");
  } else {
    count.classList.remove("hide");
    count.innerHTML = busk.length;
  }
}

export function busket_checking(none, place1, place2, total) {
  let busket = JSON.parse(localStorage.getItem("card")) || [];

  if (busket.length === 0) {
    none.classList.add("flex");
    place1.classList.add("hide");
    place2.classList.add("hide");
  } else {
    none.classList.remove("flex");
    place1.classList.remove("hide");
    place2.classList.remove("hide");
    reload_card_item(busket, place1, total, place2, none);
  }
}

export function reload_card_item(ids, place, total_v, place1, none) {
  place.innerHTML = "";
  let temp = [];
  let allProducts = 0;

  getData("/goods").then((res) => {
    for (let item of res.data) {
      for (let id of ids) {
        if (id === item.id) {
          temp.push(item);
        }
      }
    }
    for (let item of temp) {
      allProducts += item.price;
      total_v.innerHTML = allProducts;
      let total = item.price;
      let qt = 1;
      let div = document.createElement("div");
      let img = document.createElement("img");
      let inf_div = document.createElement("div");
      let title = document.createElement("h3");
      let price = document.createElement("h4");
      let counter_div = document.createElement("div");
      let minus = document.createElement("p");
      let count = document.createElement("p");
      let plus = document.createElement("p");
      let del = document.createElement("button");

      inf_div.classList.add("inf_div");
      counter_div.classList.add("counter_div");

      img.src = item.media[0];
      title.innerHTML = item.title;
      price.innerHTML = item.price + " сум";
      minus.innerHTML = "<span>&minus;</span>";
      plus.innerHTML = "<span>&plus;</span>";
      count.innerHTML = 1;
      del.innerHTML = "Удалить";

      place.append(div);
      div.append(img, inf_div);
      inf_div.append(title, price, counter_div, del);
      counter_div.append(minus, count, plus);

      plus.onclick = () => {
        count.innerHTML = ++qt;

        allProducts += item.price;
        allProducts = +allProducts.toFixed(2);
        total_v.innerHTML = allProducts;

        total = item.price * qt;
        total = +total.toFixed(2);

        price.innerHTML = total + " сум";
      };
      minus.onclick = () => {
        if (count.innerHTML === "1") return;
        count.innerHTML = --qt;

        allProducts -= item.price;
        allProducts = +allProducts.toFixed(2);
        total_v.innerHTML = allProducts;
        total = item.price * qt;
        total = +total.toFixed(2);

        price.innerHTML = total + " сум";
      };

      del.onclick = () => {
        let cards = JSON.parse(localStorage.getItem("card")) || [];
        if (cards.includes(item.id)) {
          cards = cards.filter((card) => card !== item.id);
          localStorage.setItem("card", JSON.stringify([...cards]));
          div.remove();
        }
        setTimeout(() => {
          let goodsCount = document.querySelector("main .header .right a span");
          busket_count(cards, goodsCount);
        }, 0);
        busket_checking(none, place, place1, total_v);
      };
    }
  });
}
