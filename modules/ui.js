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

  let catalog = document.querySelector(".catalog");
  topBtn.onclick = () => {
    if (catalog.classList.contains("catalog_anim_act")) {
      catalog.classList.remove("catalog_anim_act");
      catalog.classList.add("catalog_anim_act_remove");
      setTimeout(() => {
        topBtnImg.src = "/public/img/headerCatalog.svg";
      }, 100);
      return;
    }
    catalog.classList.remove("catalog_anim_act_remove");
    setTimeout(() => {
      topBtnImg.src = "/public/img/catalog_x.svg";
    }, 100);
    catalog.classList.add("catalog_anim_act");
  };
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
      <a href="https://uzum.uz/ru/about/delivery-points" target="_blank">Пункты выдачи</a>
      <a href="https://uzum.uz/ru/about/careers" target="_blank">Вакансии</a>
    </div>
    <div class="div1">
      <h3>Пользователям</h3>
      <a href="#">Связаться с нами</a>
      <a href="https://uzum.uz/ru/faq" target="_blank">Вопрос-ответ</a>
    </div>
    <div class="div1">
      <h3>Для предпринимателей</h3>
      <a href="https://seller.uzum.uz/" target="_blank">Продавайте на Uzum</a>
      <a href="https://seller.uzum.uz/seller/signin" target="_blank">Вход для продавцов</a>
    </div>
    <div class="div">
      <h3>Скачать приложение</h3>
      <div>
          <a href="https://apps.apple.com/ru/app/uzum-market-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD/id1640483056" target="_blank">
          <div>
            <img src="/public/img/footerApple.svg" alt="apple" />
          <p>AppStore</p>
          </div>
          </a>
          <a href="https://play.google.com/store/apps/details?id=uz.uzum.app&pli=1" target="_blank"><div>
          <img src="/public/img/footerPlay.svg" alt="play_market" />
            <p>Google Play
            </p>
            </div></a>
      </div>
      <h3>Uzum в соцсетях</h3>
      <div>
            <a href="https://www.instagram.com/uzum.market/" target="_blank"><div><img src="/public/img/footerInstagram.svg" alt="media" /></div></a>
            <a href="https://t.me/uzum_market" target="_blank"><div><img src="/public/img/footerTelegram.svg" alt="media" /></div></a>
            <a href="https://www.youtube.com/channel/UCY3nNF2MUDKHrELA6LzbnHA" target="_blank"><div><img src="/public/img/footerYoutube.svg" alt="media" /></div></a>
            <a href="https://www.facebook.com/uzummarket" target="_blank"><div><img src="/public/img/footerFacebook.svg" alt="media" /></div></a>
      </div>
      </div>
    </div>
  </div>
  <span></span>
  <div class="bottom">
    <div>
      <a href="https://legal.uzum.uz/privacy-policy.html" target="_blank">Соглашение о конфиденциальности</a>
      <a href="https://legal.uzum.uz/user-agreement-ru.html" target="_blank">Пользовательское соглашение</a>
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
      <a href="https://uzum.uz/ru/about/delivery-points" target="_blank">Пункты выдачи</a>
      <a href="https://uzum.uz/ru/about/careers" target="_blank">Вакансии</a>
    </details>
    <details>
      <summary>Пользователям</summary>
      <a href="#">Связаться с нами</a>
      <a href="https://uzum.uz/ru/faq" target="_blank">Вопрос-ответ</a>
    </details>
    <details>
      <summary>Для предпринимателей</summary>
      <a href="https://seller.uzum.uz/" target="_blank">Продавайте на Uzum</a>
      <a href="https://seller.uzum.uz/seller/signin" target="_blank">Вход для продавцов</a>
    </details>
  </div>
  <div class="apps">
    <h3>Скачать приложение</h3>
    <a href="https://apps.apple.com/ru/app/uzum-market-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD/id1640483056" target="_blank"><img src="/public/img/footerApp (1).png" alt="app" /></a>
    <a href="https://play.google.com/store/apps/details?id=uz.uzum.app&pli=1" target="_blank"><img src="/public/img/footerApp (2).png" alt="app" /></a>
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
    <a href="https://legal.uzum.uz/privacy-policy.html" target="_blank">Соглашение о конфиденциальности</a>
    <a href="https://legal.uzum.uz/user-agreement-ru.html" target="_blank">Пользовательское соглашение</a>
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
        good.remove();
        setTimeout(() => {
          let wishes = JSON.parse(localStorage.getItem("wishes")) || [];
          let wishesPlace = document.querySelector(".all_goods");
          let none_wishes_block = document.querySelector(".none_block");
          wishes_checking(wishes, none_wishes_block, wishesPlace);
        }, 0);
        return;
      }
      localStorage.setItem("wishes", JSON.stringify([...wishes, item.id]));
      setTimeout(() => {
        imgLike.src = "/public/img/wished_like.svg";
        let wishes = JSON.parse(localStorage.getItem("wishes")) || [];
        let wishesPlace = document.querySelector(".all_goods");
        let none_wishes_block = document.querySelector(".none_block");
        wishes_checking(wishes, none_wishes_block, wishesPlace);
      }, 0);
    };

    overallPriceCircleImg.onclick = () => {
      let card = JSON.parse(localStorage.getItem("card")) || [];
      let goodsCount = document.querySelector("main .header .right a span");
      let none_card_block = document.querySelector("main .none_block");
      let goodsPlace = document.querySelector(".card .content");
      let totalPlace = document.querySelector(".card .dash");
      let total_view = document.querySelector(".card .dash h2");
      let text = document.querySelector(".text");

      if (card.includes(item.id)) {
        card = card.filter((id) => id !== item.id);
        localStorage.setItem("card", JSON.stringify([...card]));
        return;
      }
      localStorage.setItem("card", JSON.stringify([...card, item.id]));
      busket_count(card, goodsCount);
      busket_checking(none_card_block, goodsPlace, totalPlace, total_view);
      text.classList.add("show");
    };
  }
}
export function wishes_checking(ids, none, place) {
  if (ids.length === 0) {
    none.classList.add("flex");
    return;
  }
  none.classList.remove("flex");
  let goods = [];
  getData("/goods").then((res) => {
    res.data.forEach((item) => {
      if (ids.includes(item.id)) {
        goods.push(item);
      }
    });
    reload_goods(goods, place, "Акция");
  });
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
  overallP.innerHTML = "Осталось всего 9900..";
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
      total_v.innerHTML = allProducts + " сум";
      let total = item.price;
      let qt = 1;
      let text = document.querySelector(".text");

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
      if (window.innerWidth >= 700) {
        title.innerHTML = item.title;
      } else {
        title.innerHTML = item.title.slice(0, 50) + " ...";
      }
      price.innerHTML = item.price + " сум";
      minus.innerHTML = "<span>&minus;</span>";
      plus.innerHTML = "<span>&plus;</span>";
      count.innerHTML = qt;
      del.innerHTML = "Удалить";
      text.innerHTML = `Ваша корзина<span>, ${temp.length} заказ</span>`;

      place.append(div);
      div.append(img, inf_div);
      inf_div.append(title, price, counter_div, del);
      counter_div.append(minus, count, plus);

      plus.onclick = () => {
        count.innerHTML = ++qt;

        allProducts += item.price;
        allProducts = +allProducts.toFixed(2);
        total_v.innerHTML = allProducts + " сум";

        total = item.price * qt;
        total = +total.toFixed(2);

        price.innerHTML = total + " сум";
      };
      minus.onclick = () => {
        if (count.innerHTML === "1") return;
        count.innerHTML = --qt;

        allProducts -= item.price;
        allProducts = +allProducts.toFixed(2);
        total_v.innerHTML = allProducts + " сум";
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
          console.log(temp);
          if (temp.length === 1) {
            text.classList.remove("show");
          }
        }, 0);
        busket_checking(none, place, place1, total_v);
      };
    }
  });
}

export function catalog_reload(place) {
  place.innerHTML += `
  <div class="dash">
  <div>
    <div class="left">
      <img src="/public/img/headerUnion.png" alt="union" />
      <h3>Рассрочка</h3>
    </div>
    <img src="/public/img/titleArrow.svg" alt="arrow" />
  </div>
  <div>
    <div class="left" data-categ>
      <img src="/public/img/catalog1.svg" alt="" />
      <h3>Электроника</h3>
    </div>
    <img src="/public/img/titleArrow.svg" alt="arrow" />
  </div>
  <div>
    <div class="left" data-categ>
      <img src="/public/img/catalog2.svg" alt="" />
      <h3>Бытовая техника</h3>
    </div>
    <img src="/public/img/titleArrow.svg" alt="arrow" />
  </div>
  <div>
    <div class="left" data-categ>
      <img src="/public/img/catalog3.svg" alt="" />
      <h3>Одежда</h3>
    </div>
    <img src="/public/img/titleArrow.svg" alt="arrow" />
  </div>
  <div>
    <div class="left" data-categ>
      <img src="/public/img/catalog4.svg" alt="" />
      <h3>Обувь</h3>
    </div>
    <img src="/public/img/titleArrow.svg" alt="arrow" />
  </div>
  <div>
    <div class="left" data-categ>
      <img src="/public/img/catalog5.svg" alt="" />
      <h3>Аксессуары</h3>
    </div>
    <img src="/public/img/titleArrow.svg" alt="arrow" />
  </div>
  <div>
    <div class="left" data-categ>
      <img src="/public/img/catalog6.svg" alt="" />
      <h3>Красота и уход</h3>
    </div>
    <img src="/public/img/titleArrow.svg" alt="arrow" />
  </div>
  <div>
    <div class="left" data-categ>
      <img src="/public/img/catalog19.svg" alt="" />
      <h3>Здоровье</h3>
    </div>
    <img src="/public/img/titleArrow.svg" alt="arrow" />
  </div>
  <div>
    <div class="left" data-categ>
      <img src="/public/img/catalog7.svg" alt="" />
      <h3>Товары для дома</h3>
    </div>
    <img src="/public/img/titleArrow.svg" alt="arrow" />
  </div>
  <div>
    <div class="left" data-categ>
      <img src="/public/img/catalog8.svg" alt="" />
      <h3>Строительство и ремонт</h3>
    </div>
    <img src="/public/img/titleArrow.svg" alt="arrow" />
  </div>
  <div>
    <div class="left" data-categ>
      <img src="/public/img/catalog9.svg" alt="" />
      <h3>Автотовары</h3>
    </div>
    <img src="/public/img/titleArrow.svg" alt="arrow" />
  </div>
  <div>
    <div class="left" data-categ>
      <img src="/public/img/catalog10.svg" alt="" />
      <h3>Детские товары</h3>
    </div>
    <img src="/public/img/titleArrow.svg" alt="arrow" />
  </div>
  <div>
    <div class="left" data-categ>
      <img src="/public/img/catalog11.svg" alt="" />
      <h3>Хобби и творчество</h3>
    </div>
    <img src="/public/img/titleArrow.svg" alt="arrow" />
  </div>
  <div>
    <div class="left" data-categ>
      <img src="/public/img/catalog12.svg" alt="" />
      <h3>Спорт и отдых</h3>
    </div>
    <img src="/public/img/titleArrow.svg" alt="arrow" />
  </div>
  <div>
    <div class="left" data-categ>
      <img src="/public/img/catalog13.svg" alt="" />
      <h3>Продукты питания</h3>
    </div>
    <img src="/public/img/titleArrow.svg" alt="arrow" />
  </div>
  <div>
    <div class="left" data-categ>
      <img src="/public/img/catalog14.svg" alt="" />
      <h3>Бытовая химия</h3>
    </div>
    <img src="/public/img/titleArrow.svg" alt="arrow" />
  </div>
  <div>
    <div class="left" data-categ>
      <img src="/public/img/catalog15.svg" alt="" />
      <h3>Канцтовары</h3>
    </div>
    <img src="/public/img/titleArrow.svg" alt="arrow" />
  </div>
  <div>
    <div class="left" data-categ>
      <img src="/public/img/catalog16.svg" alt="" />
      <h3>Зоотовары</h3>
    </div>
    <img src="/public/img/titleArrow.svg" alt="arrow" />
  </div>
  <div>
    <div class="left" data-categ>
      <img src="/public/img/catalog17.svg" alt="" />
      <h3>Книги</h3>
    </div>
    <img src="/public/img/titleArrow.svg" alt="arrow" />
  </div>
  <div>
    <div class="left" data-categ>
      <img src="/public/img/catalog18.svg" alt="" />
      <h3>Дача, сад и огород</h3>
    </div>
    <img src="/public/img/titleArrow.svg" alt="arrow" />
  </div>
</div>
<div class="content">
  <div class="content_about">
    <div class="top">
      <h2>Электроника</h2>
      <img src="/public/img/titleArrow.svg" alt="arrow" />
    </div>
    <div class="types">
      <div class="block">
        <a href="#"><h3>Смартфоны и телефоны</h3></a>
        <a href="#"><p>Аксессуары и запчасти</p></a>
        <a href="#"><p>Смартфоны</p></a>
        <a href="#"><p>Кнопочные телефоны</p></a>
        <a href="#"><p>DECT-телефоны</p></a>
        <a href="#"><p>Sim-карты</p></a>
        <a href="#"><p>Проводные телефоны</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Умные часы и фитнес браслеты</h3></a>
        <a href="#"><p>Умные часы</p></a>
        <a href="#"><p>Ремешки</p></a>
        <a href="#"><p>Фитнес браслеты</p></a>
        <a href="#"><p>Кабели и зарядные устройства</p></a>
        <a href="#"><p>Защита для часов и фитнес браслетов</p></a>
        <a href="#"><p>Умные гаджеты</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Ноутбуки, планшеты и электронные книги</h3></a>
        <a href="#"><p>Аксессуары</p></a>
        <a href="#"><p>Ноутбуки</p></a>
        <a href="#"><p>Планшеты</p></a>
        <a href="#"><p>Электронные книги</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Компьютерная техника</h3></a>
        <a href="#"><p>Аксессуары для компьютеров</p></a>
        <a href="#"><p>Комплектующие для компьютерной техники</p></a>
        <a href="#"><p>Компьютерная периферия</p></a>
        <a href="#"><p>Хранение данных</p></a>
        <a href="#"><p>Компьютеры</p></a>
        <a href="#"><p>Программное обеспечение</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Наушники и аудиотехника</h3></a>
        <a href="#"><p>Наушники</p></a>
        <a href="#"><p>Аудиотехника</p></a>
        <a href="#"><p>Аксессуары для проигрывателей</p></a>
        <a href="#"><p>Периферия и аксессуары</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Фото - и видеотехника</h3></a>
        <a href="#"><p>Оборудование для фотографов</p></a>
        <a href="#"><p>Фото - и видеокамеры</p></a>
        <a href="#"><p>Аксессуары для фото- и видеокамер</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Часы и электронные будильники</h3></a>
        <a href="#"><p>Электронные будильники</p></a>
        <a href="#"><p>Проекционные часы</p></a>
        <a href="#"><p>Аромабудильники и картриджи</p></a>
        <a href="#"><p>Радио-будильники</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Умный дом и безопасность</h3></a>
        <a href="#"><p>Видеонаблюдение</p></a>
        <a href="#"><p>Умный дом</p></a>
        <a href="#"><p>Безопасность дома</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Телевизоры и видеотехника</h3></a>
        <a href="#"><p>Оборудование для телевизоров</p></a>
        <a href="#"><p>Телевизоры</p></a>
        <a href="#"><p>Аксессуары для просмотра</p></a>
        <a href="#"><p>Плееры и техника для проигрывания</p></a>
        <a href="#"><p>Проекторы и аксессуары</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Квадрокоптеры и аксессуары</h3></a>
        <a href="#"><p>Аксессуары</p></a>
        <a href="#"><p>Квадрокоптеры</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Игровые приставки</h3></a>
        <a href="#"><p>Игровые контроллеры</p></a>
        <a href="#"><p>Приставки</p></a>
        <a href="#"><p>Аксессуары и запчасти для игровых приставок</p></a>
        <a href="#"><p>Игры</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Навигаторы</h3></a>
        <a href="#"><p>Автомобильные навигаторы</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Для сельскохозяйственных животных</h3></a>
        <a href="#"><p>Для коз и овец</p></a>
        <a href="#"><p>Для коров</p></a>
        <a href="#"><p>Для лошадей</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Для собак</h3></a>
        <a href="#"><p>Корма и Лакомства</p></a>
        <a href="#"><p>Амуниция</p></a>
        <a href="#"><p>Игрушки</p></a>
      </div>
    </div>
  </div>

  <div class="content_about">
    <div class="top">
      <h2>Бытовая техника</h2>
      <img src="/public/img/titleArrow.svg" alt="arrow" />
    </div>
    <div class="types">
      <div class="block">
        <a href="#"><h3>Техника для красоты</h3></a>
        <a href="#"><p>Укладка волос</p></a>
        <a href="#"><p>Стрижка волос</p></a>
        <a href="#"><p>Электробритвы</p></a>
        <a href="#"><p>Эпиляторы и аксессуары</p></a>
        <a href="#"><p>Аппаратная косметология</p></a>
        <a href="#"><p>Напольные весы</p></a>
        <a href="#"><p>Мини-солярии</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Климатическая техника</h3></a>
        <a href="#"><p>Вентиляторы</p></a>
        <a href="#"><p>Очищение и увлажнение воздуха</p></a>
        <a href="#"><p>Кондиционеры и сплит-системы</p></a>
        <a href="#"><p>Обогреватели</p></a>
        <a href="#"><p>Водонагреватели и котлы отопления</p></a>
        <a href="#"><p>Датчики</p></a>
        <a href="#"><p>Погодные станции</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Крупная бытовая техника</h3></a>
        <a href="#"><p>Кулеры для воды и аксессуары</p></a>
        <a href="#"><p>Аксессуары для крупной бытовой техники</p></a>
        <a href="#"><p>Холодильники и морозильники</p></a>
        <a href="#"><p>Стиральные машины</p></a>
        <a href="#"><p>Плиты</p></a>
        <a href="#"><p>Кухонные вытяжки</p></a>
        <a href="#"><p>Духовые шкафы</p></a>
      </div>
      <div class="block">
        <a href="#"
          ><h3>Прочие аксессуары и запчасти для бытовой техники</h3></a
        >
      </div>
      <div class="block">
        <a href="#"><h3>Техника для дома</h3></a>
        <a href="#"><p>Пылесосы и аксессуары</p></a>
        <a href="#"><p>Утюги и отпариватели</p></a>
        <a href="#"><p>Швейные машины и аксессуары</p></a>
        <a href="#"><p>Аппараты для влажной уборки</p></a>
        <a href="#"><p>Стерилизаторы</p></a>
        <a href="#"><p>Сушилки для рук</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Товары для кухни</h3></a>
        <a href="#"><p>Блендеры и миксеры</p></a>
        <a href="#"><p>Электрические чайники и термопоты</p></a>
        <a href="#"><p>Прочая кухонная техника</p></a>
        <a href="#"><p>Кофемашины и кофеварки</p></a>
        <a href="#"><p>Микроволновые печи и грили</p></a>
        <a href="#"><p>Мясорубки и комплектующие</p></a>
      </div>
    </div>
  </div>

  <div class="content_about">
    <div class="top">
      <h2>Одежда</h2>
      <img src="/public/img/titleArrow.svg" alt="arrow" />
    </div>
    <div class="types">
      <div class="block">
        <a href="#"><h3>Женская одежда</h3></a>
        <a href="#"><p>Нижнее белье</p></a>
        <a href="#"><p>Платья и сарафаны</p></a>
        <a href="#"><p>Футболки и поло</p></a>
        <a href="#"><p>Носки, чулки и колготки</p></a>
        <a href="#"><p>Брюки</p></a>
        <a href="#"><p>Джемперы, свитеры и кардиганы</p></a>
        <a href="#"><p>Блузки и рубашки</p></a>
        <a href="#"><p>Домашняя одежда</p></a>
        <a href="#"><p>Джинсы</p></a>
        <a href="#"><p>Спортивная одежда</p></a>
        <a href="#"><p>Купальники и пляжная одежда</p></a>
        <a href="#"><p>Юбки</p></a>
        <a href="#"><p>Топы и майки</p></a>
        <a href="#"><p>Костюмы и комплекты</p></a>
        <a href="#"><p>Худи и свитшоты</p></a>
        <a href="#"><p>Религиозная одежда для женщин</p></a>
        <a href="#"><p>Верхняя одежда</p></a>
        <a href="#"><p>Пиджаки и костюмы</p></a>
        <a href="#"><p>Туники</p></a>
        <a href="#"><p>Шорты</p></a>
        <a href="#"><p>Одежда для беременных</p></a>
        <a href="#"><p>Комбинезоны</p></a>
        <a href="#"><p>Боди</p></a>
        <a href="#"><p>Вязанные костюмы</p></a>
        <a href="#"><p>Карнавальная одежда</p></a>
        <a href="#"><p>Одежда больших размеров</p></a>
        <a href="#"><p>Спецодежда</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Мужская одежда</h3></a>
        <a href="#"><p>Футболки и поло</p></a>
        <a href="#"><p>Носки и гетры</p></a>
        <a href="#"><p>Брюки</p></a>
        <a href="#"><p>Худи и свитшоты</p></a>
        <a href="#"><p>Джемперы, свитеры и кардиганы</p></a>
        <a href="#"><p>Рубашки</p></a>
        <a href="#"><p>Джинсы</p></a>
        <a href="#"><p>Спортивная одежда</p></a>
        <a href="#"><p>Верхняя одежда</p></a>
        <a href="#"><p>Нижнее бельё</p></a>
        <a href="#"><p>Шорты</p></a>
        <a href="#"><p>Майки</p></a>
        <a href="#"><p>Спецодежда</p></a>
        <a href="#"><p>Плавки и шорты для плавания</p></a>
        <a href="#"><p>Домашняя одежда</p></a>
        <a href="#"><p>Термобельё</p></a>
        <a href="#"><p>Пиджаки и костюмы</p></a>
        <a href="#"><p>Карнавальная одежда</p></a>
        <a href="#"><p>Религиозная одежда для мужчин</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Детская одежда</h3></a>
        <a href="#"><p>Одежда для девочек</p></a>
        <a href="#"><p>Одежда для мальчиков</p></a>
        <a href="#"><p>Одежда для новорождённых</p></a>
      </div>
    </div>
  </div>

  <div class="content_about">
    <div class="top">
      <h2>Обувь</h2>
      <img src="/public/img/titleArrow.svg" alt="arrow" />
    </div>
    <div class="types">
      <div class="block">
        <a href="#"><h3>Женская обувь</h3></a>
        <a href="#"><p>Кроссовки и кеды</p></a>
        <a href="#"><p>Шлепанцы и сланцы</p></a>
        <a href="#"><p>Балетки и мокасины</p></a>
        <a href="#"><p>Туфли</p></a>
        <a href="#"><p>Босоножки и сандалии</p></a>
        <a href="#"><p>Ботинки и ботильоны</p></a>
        <a href="#"><p>Домашняя обувьи</p></a>
        <a href="#"><p>Сапоги и полусапоги</p></a>
        <a href="#"><p>Сабо и мюли</p></a>
        <a href="#"><p>Угги и валенки</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Мужская обувь</h3></a>
        <a href="#"><p>Кроссовки и кеды</p></a>
        <a href="#"><p>Туфли и мокасины</p></a>
        <a href="#"><p>Шлепанцы и сланцы</p></a>
        <a href="#"><p>Ботинки и полуботинки</p></a>
        <a href="#"><p>Сандалии и сабо</p></a>
        <a href="#"><p>Домашняя обувь</p></a>
        <a href="#"><p>Сапоги и полусапоги</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Обувь для девочек</h3></a>
        <a href="#"><p>Кроссовки и кеды</p></a>
        <a href="#"><p>Балетки и туфли</p></a>
        <a href="#"><p>Босоножки и сандалии</p></a>
        <a href="#"><p>Шлепанцы и сланцы</p></a>
        <a href="#"><p>Сапоги и полусапоги</p></a>
        <a href="#"><p>Ботинки</p></a>
        <a href="#"><p>Домашняя обувь</p></a>
        <a href="#"><p>Угги и валенки</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Обувь для мальчиков</h3></a>
        <a href="#"><p>Кроссовки и кеды</p></a>
        <a href="#"><p>Туфли и мокасины</p></a>
        <a href="#"><p>Сандалии и сабои</p></a>
        <a href="#"><p>Ботинки</p></a>
        <a href="#"><p>Шлепанцы и сланцыи</p></a>
        <a href="#"><p>Домашняя обувь</p></a>
        <a href="#"><p>Сапоги и полусапоги</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Аксессуары для обуви</h3></a>
        <a href="#"><p>Стельки и вставки</p></a>
        <a href="#"><p>Шнурки</p></a>
        <a href="#"><p>Джибитсы</p></a>
        <a href="#"><p>Чехлы и ледоступы</p></a>
        <a href="#"><p>Измерители стопы</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Специализированная обувь</h3></a>
      </div>
    </div>
  </div>

  <div class="content_about">
    <div class="top">
      <h2>Аксессуары</h2>
      <img src="/public/img/titleArrow.svg" alt="arrow" />
    </div>
    <div class="types">
      <div class="block">
        <a href="#"><h3>Женские аксессуары</h3></a>
        <a href="#"><p>Бижутерные украшения</p></a>
        <a href="#"><p>Сумки и рюкзаки</p></a>
        <a href="#"><p>Аксессуары для волос</p></a>
        <a href="#"><p>Очки</p></a>
        <a href="#"><p>Платки и шарфы</p></a>
        <a href="#"><p>Часы и ремешки</p></a>
        <a href="#"><p>Кошельки, ключницы и визитницы</p></a>
        <a href="#"><p>Зонты</p></a>
        <a href="#"><p>Головные уборы</p></a>
        <a href="#"><p>Ювелирные украшения</p></a>
        <a href="#"><p>Ремни, пояса и портупеи</p></a>
        <a href="#"><p>Перчатки и варежки</p></a>
        <a href="#"><p>Свадебные аксессуары</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Мужские аксессуары</h3></a>
        <a href="#"><p>Очки</p></a>
        <a href="#"><p>Часы и ремешки</p></a>
        <a href="#"><p>Сумки и рюкзаки</p></a>
        <a href="#"><p>Бижутерные украшения</p></a>
        <a href="#"><p>Головные уборы</p></a>
        <a href="#"><p>Кошельки, ключницы и визитницы</p></a>
        <a href="#"><p>Ремни и подтяжки</p></a>
        <a href="#"><p>Зонты</p></a>
        <a href="#"><p>Ювелирные украшения</p></a>
        <a href="#"><p>Галстуки, бабочки, карманные платки</p></a>
        <a href="#"><p>Платки и шарфы</p></a>
        <a href="#"><p>Перчатки и варежки</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Аксессуары для девочек</h3></a>
        <a href="#"><p>Аксессуары для волос</p></a>
        <a href="#"><p>Бижутерные украшения</p></a>
        <a href="#"><p>Сумки и рюкзаки</p></a>
        <a href="#"><p>Головные уборы</p></a>
        <a href="#"><p>Очки</p></a>
        <a href="#"><p>Зонты</p></a>
        <a href="#"><p>Кошельки для девочеки</p></a>
        <a href="#"><p>Шарфы и платки</p></a>
        <a href="#"><p>Носовые платки</p></a>
        <a href="#"><p>Перчатки и варежки</p></a>
        <a href="#"><p>Ремни и пояса</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Аксессуары для мальчиков</h3></a>
        <a href="#"><p>Сумки и рюкзаки</p></a>
        <a href="#"><p>Бижутерные украшения</p></a>
        <a href="#"><p>Головные уборы</p></a>
        <a href="#"><p>Очки</p></a>
        <a href="#"><p>Зонты</p></a>
        <a href="#"><p>Ремни и подтяжки</p></a>
        <a href="#"><p>Кошельки для мальчиков</p></a>
        <a href="#"><p>Галстуки и бабочки, карманные платки</p></a>
        <a href="#"><p>Шарфы и платки</p></a>
        <a href="#"><p>Перчатки и варежки</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Аксессуары для путешествий</h3></a>
        <a href="#"><p>Дорожные сумки</p></a>
        <a href="#"><p>Товары для сна</p></a>
        <a href="#"><p>Органайзеры для путешествий</p></a>
        <a href="#"><p>Чемоданы</p></a>
        <a href="#"><p>Наборы для путешествий</p></a>
        <a href="#"><p>Аксессуары для чемоданов</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Религиозные аксессуары</h3></a>
        <a href="#"><p>Четки</p></a>
        <a href="#"><p>Хиджабы и тюрбаны</p></a>
        <a href="#"><p>Кулоны и подвески</p></a>
        <a href="#"><p>Тюбетейки</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Аксессуары для взрослых</h3></a>
      </div>
    </div>
  </div>

  <div class="content_about">
    <div class="top">
      <h2>Красота и уход</h2>
      <img src="/public/img/titleArrow.svg" alt="arrow" />
    </div>
    <div class="types">
      <div class="block">
        <a href="#"><h3>Макияж</h3></a>
        <a href="#"><p>Глаза</p></a>
        <a href="#"><p>Лицо</p></a>
        <a href="#"><p>Губы</p></a>
        <a href="#"><p>Аксессуары для макияжа</p></a>
        <a href="#"><p>Брови</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Уход за лицом</h3></a>
        <a href="#"><p>Маски</p></a>
        <a href="#"><p>Увлажнение и питание</p></a>
        <a href="#"><p>Очищение и умывание</p></a>
        <a href="#"><p>Средства для проблемной кожи</p></a>
        <a href="#"><p>Патчи</p></a>
        <a href="#"><p>Скрабы и пилинг</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Уход за волосами</h3></a>
        <a href="#"><p>Средства для очищения и ухода</p></a>
        <a href="#"><p>Аксессуары</p></a>
        <a href="#"><p>Окрашивание и химическая завивка</p></a>
        <a href="#"><p>Средства для укладки</p></a>
        <a href="#"><p>Профессиональные инструменты парикмахер</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Уход за телом</h3></a>
        <a href="#"><p>Увлажнение и питание</p></a>
        <a href="#"><p>Загар и защита от солнца</p></a>
        <a href="#"><p>Средства для душа и ванны</p></a>
        <a href="#"><p>Аксессуары</p></a>
        <a href="#"><p>Средства против целлюлита и растяжек</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Маникюр и педикюр</h3></a>
        <a href="#"><p>Инструменты для маникюра</p></a>
        <a href="#"><p>Дизайн ногтей</p></a>
        <a href="#"><p>Лаки</p></a>
        <a href="#"><p>Лечебные и уходовые средства</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Наборы</h3></a>
        <a href="#"><p>Наборы средств для лица</p></a>
        <a href="#"><p>Наборы для маникюра и педикюра</p></a>
        <a href="#"><p>Наборы для макияжа</p></a>
        <a href="#"><p>Парфюмированный набор</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Для мужчин</h3></a>
        <a href="#"><p>Уход за лицом и телом</p></a>
        <a href="#"><p>Для волос</p></a>
        <a href="#"><p>Для бороды и усов</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Парфюмерия</h3></a>
        <a href="#"><p>Парфюмерная вода</p></a>
        <a href="#"><p>Духи</p></a>
        <a href="#"><p>Туалетная вода</p></a>
        <a href="#"><p>Духи масляные</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Оборудование и материалы для тату-салона</h3></a>
        <a href="#"><p>Тату-наборы</p></a>
        <a href="#"><p>Инструменты для пирсинга</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Ароматерапия</h3></a>
        <a href="#"><p>Эфирные масла</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Корейская косметика</h3></a>
        <a href="#"><p>Средства по уходу за лицом</p></a>
        <a href="#"><p>Средства для очищения лица</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Профессиональная косметика</h3></a>
        <a href="#"><p>Уход за волосами</p></a>
        <a href="#"><p>Мужчинам</p></a>
        <a href="#"><p>Уход за лицом</p></a>
      </div>
    </div>
  </div>

  <div class="content_about">
    <div class="top">
      <h2>Здоровье</h2>
      <img src="/public/img/titleArrow.svg" alt="arrow" />
    </div>
    <div class="types">
      <div class="block">
        <a href="#"><h3>Витамины, БАДы, пищевые добавки</h3></a>
        <a href="#"><p>БАДы</p></a>
        <a href="#"><p>Витамины</p></a>
        <a href="#"><p>Витаминно-минеральные комплексы</p></a>
        <a href="#"><p>Специализированное питание</p></a>
        <a href="#"><p>Спирулина</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Медицинские приборы</h3></a>
        <a href="#"><p>Прочее</p></a>
        <a href="#"><p>Термометры медицинские</p></a>
        <a href="#"><p>Тонометры и аксессуары</p></a>
        <a href="#"><p>Слуховые аппараты и усилители звука</p></a>
        <a href="#"><p>Медицинские браслеты и пульсоксиметры</p></a>
        <a href="#"><p>Глюкометры и аксессуары</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Массажеры и массажное оборудование</h3></a>
        <a href="#"><p>Массажеры для тела</p></a>
        <a href="#"><p>Массажеры для ног</p></a>
        <a href="#"><p>Массажеры для головы</p></a>
        <a href="#"><p>Массажные коврики</p></a>
        <a href="#"><p>Массажные подушки</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Медицинские изделия и расходные материалы</h3></a>
        <a href="#"><p>Перевязочные материалы</p></a>
        <a href="#"><p>Гели, мази</p></a>
        <a href="#"><p>Аптечки</p></a>
        <a href="#"><p>Прочее</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Ортопедические изделия</h3></a>
        <a href="#"><p>Корсеты и корректоры осанки</p></a>
        <a href="#"><p>Бандажи и ортезы</p></a>
        <a href="#"
          ><p>
            Ортопедические стельки и полустельки, корректоры стопы
          </p></a
        >
        <a href="#"><p>Бинты эластичные</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Оптика</h3></a>
        <a href="#"><p>Контактные линзы</p></a>
        <a href="#"><p>Очки</p></a>
        <a href="#"><p>Аксессуары для линз</p></a>
        <a href="#"><p>Растворы для контактных линз</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Презервативы и лубриканты</h3></a>
        <a href="#"><p>Лубриканты</p></a>
        <a href="#"><p>Презервативы</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Интимная косметика</h3></a>
      </div>
      <div class="block">
        <a href="#"><h3>Наборы</h3></a>
      </div>
    </div>
  </div>

  <div class="content_about">
    <div class="top">
      <h2>Товары для дома</h2>
      <img src="/public/img/titleArrow.svg" alt="arrow" />
    </div>
    <div class="types">
      <div class="block">
        <a href="#"><h3>Товары для кухни</h3></a>
        <a href="#"><p>Кухонные инструменты</p></a>
        <a href="#"><p>Хранение продуктов</p></a>
        <a href="#"><p>Посуда для приготовления</p></a>
        <a href="#"><p>Порядок на кухне</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Текстиль</h3></a>
        <a href="#"><p>Постельное белье</p></a>
        <a href="#"><p>Полотенца</p></a>
        <a href="#"><p>Кухонный текстиль</p></a>
        <a href="#"><p>Подушки</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Хозяйственные товары</h3></a>
        <a href="#"><p>Инвентарь для уборки</p></a>
        <a href="#"><p>Аксессуары для ванной</p></a>
        <a href="#"><p>Уход за одеждой и обувью</p></a>
        <a href="#"><p>Аксессуары для стирки</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Хранение вещей</h3></a>
        <a href="#"><p>Органайзеры и разделители</p></a>
        <a href="#"><p>Коробки, корзины, контейнеры</p></a>
        <a href="#"><p>Вакуумные пакеты и запайщики</p></a>
        <a href="#"><p>Чехлы для одежды</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Декор и интерьер</h3></a>
        <a href="#"><p>Сувениры и подарки</p></a>
        <a href="#"><p>Свечи и подсвечники</p></a>
        <a href="#"><p>Оформление интерьера</p></a>
        <a href="#"><p>Ароматы для дома</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Товары для комнатных растений</h3></a>
        <a href="#"><p>Горшки и кашпо</p></a>
        <a href="#"><p>Лейки и опрыскиватели</p></a>
        <a href="#"><p>Подставки и крепления для растений</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Товары для бани и сауны</h3></a>
        <a href="#"><p>Банный текстиль</p></a>
        <a href="#"><p>Предметы интерьера бани</p></a>
        <a href="#"><p>Полки и скамьи</p></a>
        <a href="#"><p>Ведра и кадки</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Товары для праздников</h3></a>
        <a href="#"><p>Подарочная упаковка, открытки</p></a>
        <a href="#"><p>Оформление праздника</p></a>
        <a href="#"><p>Новогодние товары</p></a>
        <a href="#"><p>Карнавальные товары</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Мебель</h3></a>
        <a href="#"><p>Кресла</p></a>
        <a href="#"><p>Этажерки и обувницы</p></a>
        <a href="#"><p>Матрасы</p></a>
        <a href="#"><p>Шкафы, тумбы, комоды</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Коврики для намаза</h3></a>
      </div>
    </div>
  </div>

  <div class="content_about">
    <div class="top">
      <h2>Строительство и ремонт</h2>
      <img src="/public/img/titleArrow.svg" alt="arrow" />
    </div>
    <div class="types">
      <div class="block">
        <a href="#"><h3>Ручной инструмент и оснастка</h3></a>
        <a href="#"><p>Ключи</p></a>
        <a href="#"><p>Столярно-слесарные инструменты</p></a>
        <a href="#"><p>Малярные инструменты</p></a>
        <a href="#"><p>Измерительные инструменты</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Электроинструменты</h3></a>
        <a href="#"><p>Расходные элементы</p></a>
        <a href="#"><p>Сверление, долбление, закручивание</p></a>
        <a href="#"><p>Пильно-отрезные инструменты</p></a>
        <a href="#"><p>Станки и комплектующие</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Сантехника</h3></a>
        <a href="#"><p>Смесители</p></a>
        <a href="#"><p>Аксессуары для ванной и кухни</p></a>
        <a href="#"><p>Душевые системы и лейки</p></a>
        <a href="#"><p>Ремкомплекты и расходные материалы</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Строительное оборудование</h3></a>
        <a href="#"><p>Прочее</p></a>
        <a href="#"><p>Краскопульт и аэрография</p></a>
        <a href="#"><p>Пневмоинструмент</p></a>
        <a href="#"><p>Промышленные и строительные пылесосы</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Электрика</h3></a>
        <a href="#"><p>Розетки и выключатели</p></a>
        <a href="#"><p>Автоматические выключатели, УЗО, диф...</p></a>
        <a href="#"><p>Батарейки</p></a>
        <a href="#"><p>Комплектующие и расходные материалы</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Освещение</h3></a>
        <a href="#"><p>Настольные светильники</p></a>
        <a href="#"><p>Ночники</p></a>
        <a href="#"><p>Светодиодное освещение</p></a>
        <a href="#"><p>Освещение для жилого помещения</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Вентиляция</h3></a>
        <a href="#"><p>Вытяжные вентиляторы</p></a>
        <a href="#"><p>Вентиляционные установки</p></a>
        <a href="#"><p>Канальные вентиляторы</p></a>
        <a href="#"><p>Вентиляционные решетки и ревизионные лю</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Отделочные материалы</h3></a>
        <a href="#"><p>Клеи и герметики</p></a>
        <a href="#"><p>Лаки и краски</p></a>
        <a href="#"><p>Прочие облицовочные материалы</p></a>
        <a href="#"><p>Аксессуары и расходные материалы</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Водоснабжение для дома и сада</h3></a>
        <a href="#"><p>Для откачивания из резервуаров</p></a>
        <a href="#"><p>Для автоматического водоснабжения</p></a>
        <a href="#"><p>Фильтрация воды</p></a>
        <a href="#"><p>Для повышения давления</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Отопление</h3></a>
        <a href="#"><p>Обвязка радиатора</p></a>
        <a href="#"><p>Радиаторы</p></a>
        <a href="#"><p>Теплые полы</p></a>
        <a href="#"><p>Шаровые краны</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Сварочное оборудование</h3></a>
        <a href="#"><p>Аксессуары и комплектующие для сварки</p></a>
      </div>
    </div>
  </div>

  <div class="content_about">
    <div class="top">
      <h2>Автотовары</h2>
      <img src="/public/img/titleArrow.svg" alt="arrow" />
    </div>
    <div class="types">
      <div class="block">
        <a href="#"><h3>Автозапчасти</h3></a>
        <a href="#"><p>Запчасти для ТО</p></a>
        <a href="#"><p>Автосвет</p></a>
        <a href="#"><p>Автозапчасти автомобильные</p></a>
        <a href="#"><p>Тормозная система</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Автозвук</h3></a>
        <a href="#"><p>Колонки для авто</p></a>
        <a href="#"><p>Автомагнитолы</p></a>
        <a href="#"><p>FM-трансмиттеры</p></a>
        <a href="#"><p>Аксессуары</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Аккумуляторы и аксессуары</h3></a>
        <a href="#"><p>Зарядные устройства для аккумуляторов</p></a>
        <a href="#"><p>Провода прикуривания</p></a>
        <a href="#"><p>Принадлежности для АКБ</p></a>
        <a href="#"><p>Зарядные станции для электромобилей</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Аксессуары и принадлежности</h3></a>
        <a href="#"><p>Обустройство салона</p></a>
        <a href="#"><p>Сувениры автомобильные</p></a>
        <a href="#"><p>Прочее</p></a>
        <a href="#"><p>Тюнинг и внешний декор</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Гараж и автосервис</h3></a>
        <a href="#"><p>Шиномонтажное оборудование</p></a>
        <a href="#"><p>Диагностическое оборудование</p></a>
        <a href="#"><p>Пневмоинструменты для авто</p></a>
        <a href="#"><p>Подъемное оборудование</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Инструменты и оборудование</h3></a>
        <a href="#"><p>Автомобильные компрессоры</p></a>
        <a href="#"><p>Ручные инструменты</p></a>
        <a href="#"><p>Наборы автоинструментов</p></a>
        <a href="#"><p>Домкраты</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Масла и автохимия</h3></a>
        <a href="#"><p>Моторные масла</p></a>
        <a href="#"><p>Промывки и очистители</p></a>
        <a href="#"><p>Смазки</p></a>
        <a href="#"><p>Антифризы</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Уход за автомобилем</h3></a>
        <a href="#"><p>Ароматизаторы автомобильные</p></a>
        <a href="#"><p>Щетки, губки, салфетки</p></a>
        <a href="#"><p>Чистящие средства для автомобиля</p></a>
        <a href="#"><p>Автомобильные пылесосы</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Шины и диски</h3></a>
        <a href="#"><p>Уход за шинами и дисками</p></a>
        <a href="#"><p>Ниппели, вентили и секретки</p></a>
        <a href="#"><p>Колпаки на диски</p></a>
        <a href="#"><p>Флипперы и эмблемы</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Электроника для авто</h3></a>
        <a href="#"><p>Автомобильные зарядные устройства</p></a>
        <a href="#"><p>Автосигнализации</p></a>
        <a href="#"><p>Видеорегистраторы</p></a>
        <a href="#"><p>Радар-детекторы</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Товары для мототехники, мотоэкипировка</h3></a>
        <a href="#"><p>Скутеры</p></a>
      </div>
    </div>
  </div>

  <div class="content_about">
    <div class="top">
      <h2>Детские товары</h2>
      <img src="/public/img/titleArrow.svg" alt="arrow" />
    </div>
    <div class="types">
      <div class="block">
        <a href="#"><h3>Гигиена и подгузники</h3></a>
        <a href="#"><p>Подгузники и трусики</p></a>
        <a href="#"><p>Детская косметика</p></a>
        <a href="#"><p>Гигиена полости рта</p></a>
        <a href="#"><p>Купание ребенка</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Детская комната</h3></a>
        <a href="#"><p>Защита и безопасность</p></a>
        <a href="#"><p>Товары для сна</p></a>
        <a href="#"><p>Декор и освещение</p></a>
        <a href="#"><p>Детская мебель</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Детский спорт и активный отдых</h3></a>
        <a href="#"><p>Детский транспорт</p></a>
        <a href="#"><p>Игровые комплексы и детские площадки</p></a>
        <a href="#"><p>Игры на улице</p></a>
        <a href="#"><p>Ходунки и прыгунки</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Детское питание</h3></a>
        <a href="#"><p>Пюре</p></a>
        <a href="#"><p>Смесь детская</p></a>
        <a href="#"><p>Каша детская</p></a>
        <a href="#"><p>Напитки</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Детское творчество</h3></a>
        <a href="#"><p>Пазлы</p></a>
        <a href="#"><p>Настольные и карточные игры</p></a>
        <a href="#"><p>Лепка</p></a>
        <a href="#"><p>Мыльные пузыри</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Для беременных и кормящих</h3></a>
        <a href="#"><p>Сумки и рюкзаки для мам</p></a>
        <a href="#"><p>Пластыри и вкладыши для груди</p></a>
        <a href="#"><p>Косметика и уход</p></a>
        <a href="#"><p>Наборы в роддом</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Игрушки и игры</h3></a>
        <a href="#"><p>Развивающие и обучающие игрушки</p></a>
        <a href="#"><p>Фигурки и аксессуары</p></a>
        <a href="#"><p>Игрушечный транспорт</p></a>
        <a href="#"><p>Игрушечное оружие и бластеры</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Коляски и автокресла</h3></a>
        <a href="#"><p>Коляски</p></a>
        <a href="#"><p>Рюкзаки, слинги, сумки-кенгуру</p></a>
        <a href="#"><p>Аксессуары</p></a>
        <a href="#"><p>Люльки и переноски</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Товары для кормления</h3></a>
        <a href="#"><p>Бутылочки и поильники</p></a>
        <a href="#"><p>Пустышки и соски</p></a>
        <a href="#"><p>Посуда для кормления</p></a>
        <a href="#"><p>Нагрудники и слюнявчики</p></a>
      </div>
    </div>
  </div>

  <div class="content_about">
    <div class="top">
      <h2>Хобби и творчество</h2>
      <img src="/public/img/titleArrow.svg" alt="arrow" />
    </div>
    <div class="types">
      <div class="block">
        <a href="#"><h3>Гадания и эзотерика</h3></a>
        <a href="#"><p>Магические аксессуары и материалы</p></a>
        <a href="#"><p>Амулеты, обереги и талисманы</p></a>
        <a href="#"><p>Аксессуары и атрибутика для гаданий</p></a>
        <a href="#"><p>Карты Таро</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Лепка</h3></a>
        <a href="#"><p>Гипс и масса для лепки</p></a>
        <a href="#"><p>Глина полимерная</p></a>
        <a href="#"><p>Наборы для создания слепков</p></a>
        <a href="#"><p>Инструменты</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Музыкальные инструменты</h3></a>
        <a href="#"><p>Струнные инструменты</p></a>
        <a href="#"><p>Аксессуары</p></a>
        <a href="#"><p>Ударные и перкуссия</p></a>
        <a href="#"><p>Клавишные инструменты</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Настольные и карточные игры</h3></a>
        <a href="#"><p>Настольные игры</p></a>
        <a href="#"><p>Игральные карты</p></a>
        <a href="#"><p>Шахматы, шашки, нарды</p></a>
        <a href="#"><p>Домино</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Пазлы, мозаика и фреска</h3></a>
        <a href="#"><p>Пазлы</p></a>
        <a href="#"><p>Алмазные мозаики</p></a>
        <a href="#"><p>Наборы для рисования песком</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Прочие хобби</h3></a>
        <a href="#"><p>Коллекционирование</p></a>
        <a href="#"><p>Мыловарение</p></a>
        <a href="#"><p>Гравюры</p></a>
        <a href="#"><p>Эпоксидная смола</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Рисование</h3></a>
        <a href="#"><p>Раскраски, наборы для росписи</p></a>
        <a href="#"><p>Краски, пигменты</p></a>
        <a href="#"><p>Кисти</p></a>
        <a href="#"><p>Скетчбуки</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Рукоделие</h3></a>
        <a href="#"><p>Материалы для рукоделия</p></a>
        <a href="#"><p>Создание украшений</p></a>
        <a href="#"><p>Шитье</p></a>
        <a href="#"><p>Вязание</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Создание картин, фоторамок, открыток</h3></a>
        <a href="#"><p>Картины по номерам</p></a>
        <a href="#"><p>Картины из пайеток</p></a>
        <a href="#"><p>Наборы для квиллинга</p></a>
        <a href="#"><p>Наборы для создания открыток</p></a>
      </div>
    </div>
  </div>

  <div class="content_about">
    <div class="top">
      <h2>Спорт и отдых</h2>
      <img src="/public/img/titleArrow.svg" alt="arrow" />
    </div>
    <div class="types">
      <div class="block">
        <a href="#"><h3>Активные виды отдыха</h3></a>
        <a href="#"><p>Велоспорт</p></a>
        <a href="#"><p>Самокаты, гироскутеры и моноколеса</p></a>
        <a href="#"><p>Скейтбординг</p></a>
        <a href="#"><p>Спортивные сумки</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Бассейны и аксессуары</h3></a>
        <a href="#"><p>Плавание и игры на воде</p></a>
        <a href="#"><p>Бассейны</p></a>
        <a href="#"><p>Аксессуары для бассейнов</p></a>
        <a href="#"><p>Фильтры, насосы и хлоргенераторы</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Виды спорта</h3></a>
        <a href="#"><p>Теннис и бадминтон</p></a>
        <a href="#"><p>Настольный теннис</p></a>
        <a href="#"><p>Бокс и единоборства</p></a>
        <a href="#"><p>Бег</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Водный спорт и отдых на воде</h3></a>
        <a href="#"><p>Плавание</p></a>
        <a href="#"><p>Аксессуары</p></a>
        <a href="#"><p>Дайвинг</p></a>
        <a href="#"><p>Водное поло</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Командные виды спорта</h3></a>
        <a href="#"><p>Футбол</p></a>
        <a href="#"><p>Баскетбол</p></a>
        <a href="#"><p>Аксессуары</p></a>
        <a href="#"><p>Волейбол</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Отдых на природе, рыбалка и охота</h3></a>
        <a href="#"><p>Туризм и отдых на природе</p></a>
        <a href="#"><p>Рыбалка</p></a>
        <a href="#"><p>Охота и стрельба</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Спортивная защита и экипировка</h3></a>
        <a href="#"><p>Защита тела</p></a>
        <a href="#"><p>Компрессионные повязки и рукава</p></a>
        <a href="#"><p>Шлемы и маски</p></a>
        <a href="#"><p>Экипировка для тяжелой атлетики</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Спортивное питание</h3></a>
        <a href="#"><p>Гейнеры и протеины</p></a>
        <a href="#"><p>BCAA и аминокислоты</p></a>
        <a href="#"><p>Шейкеры</p></a>
        <a href="#"><p>Специальные препараты</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Фитнес и тренажеры</h3></a>
        <a href="#"><p>Фитнес</p></a>
        <a href="#"><p>Йога и пилатес</p></a>
        <a href="#"><p>Аксессуары</p></a>
        <a href="#"><p>Кроссфит</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Зимний спорт</h3></a>
        <a href="#"><p>Горные лыжи и аксессуары</p></a>
      </div>
    </div>
  </div>

  <div class="content_about">
    <div class="top">
      <h2>Продукты питания</h2>
      <img src="/public/img/titleArrow.svg" alt="arrow" />
    </div>
    <div class="types">
      <div class="block">
        <a href="#"><h3>Бакалея</h3></a>
        <a href="#"><p>Приправы, специи, пищевые добавки</p></a>
        <a href="#"><p>Соусы</p></a>
        <a href="#"><p>Макароны</p></a>
        <a href="#"><p>Рыбные консервы</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Чай, кофе, горячие напитки</h3></a>
        <a href="#"><p>Чай черный</p></a>
        <a href="#"><p>Чай с добавками</p></a>
        <a href="#"><p>Чай зеленый</p></a>
        <a href="#"><p>Кофе растворимый</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Вода, соки, напитки</h3></a>
        <a href="#"><p>Соки, нектары, смузи</p></a>
        <a href="#"><p>Газированные напитки</p></a>
        <a href="#"><p>Вода</p></a>
        <a href="#"><p>Энергетические напитки</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Шоколад, конфеты, сладости</h3></a>
        <a href="#"><p>Конфеты, карамель, леденцы</p></a>
        <a href="#"><p>Зефир, пастила, мармелад</p></a>
        <a href="#"><p>Шоколад</p></a>
        <a href="#"><p>Пряники, вафли</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Орехи, сухофрукты, семечки</h3></a>
        <a href="#"><p>Сушеные фрукты и овощи</p></a>
        <a href="#"><p>Орехи</p></a>
        <a href="#"><p>Семечки</p></a>
        <a href="#"><p>Фруктовые чипсы</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Мед, варенье, сладкая консервация</h3></a>
        <a href="#"><p>Сиропы и топпинги</p></a>
        <a href="#"><p>Мед и продукты пчеловодства</p></a>
        <a href="#"><p>Варенье и джемы</p></a>
        <a href="#"><p>Молочные консервы</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Снеки</h3></a>
        <a href="#"><p>Печенье, крекер</p></a>
        <a href="#"><p>Чипсы, попкорн</p></a>
        <a href="#"><p>Импортные снеки</p></a>
        <a href="#"><p>Сухарики, сухари, баранки, сушки</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Здоровое питание</h3></a>
        <a href="#"><p>Молоко растительное</p></a>
        <a href="#"><p>Суперфуды</p></a>
        <a href="#"><p>Хлебцы</p></a>
        <a href="#"><p>Ягоды сушеные</p></a>
      </div>
    </div>
  </div>

  <div class="content_about">
    <div class="top">
      <h2>Бытовая химия</h2>
      <img src="/public/img/titleArrow.svg" alt="arrow" />
    </div>
    <div class="types">
      <div class="block">
        <a href="#"><h3>Освежители и ароматизаторы</h3></a>
        <a href="#"><p>Освежители воздуха</p></a>
        <a href="#"><p>Ароматизаторы</p></a>
        <a href="#"><p>Нейтрализаторы запахов</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Средства для посудомоечных машин</h3></a>
        <a href="#"><p>Капсулы и ополаскиватели</p></a>
        <a href="#"><p>Таблетки</p></a>
        <a href="#"><p>Очиститель для ПММ</p></a>
        <a href="#"><p>Соль для ПММ</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Средства для стирки</h3></a>
        <a href="#"><p>Стиральный порошок</p></a>
        <a href="#"><p>Гели и жидкости</p></a>
        <a href="#"><p>Капсулы и таблетки</p></a>
        <a href="#"><p>Кондиционеры и ополаскиватели</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Средства для ухода за бытовой техникой</h3></a>
        <a href="#"><p>Для стиральных машин</p></a>
        <a href="#"><p>Для кофемашин и чайников</p></a>
        <a href="#"><p>Для посудомоечных машин</p></a>
        <a href="#"><p>Средства для смягчения воды</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Средства по уходу за обувью</h3></a>
        <a href="#"><p>Щетки и губки для обуви</p></a>
        <a href="#"><p>Краска для обуви</p></a>
        <a href="#"><p>Кремы и воски</p></a>
        <a href="#"><p>Дезодоранты</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Чистящие и моющие средства</h3></a>
        <a href="#"><p>Универсальные чистящие средства</p></a>
        <a href="#"><p>Средства для мытья посуды</p></a>
        <a href="#"><p>Средства для ванной и туалета</p></a>
        <a href="#"><p>Средства для кухни</p></a>
      </div>
      <div class="block">
        <a href="#"><h3></h3></a>
        <a href="#"><p></p></a>
        <a href="#"><p></p></a>
        <a href="#"><p></p></a>
        <a href="#"><p></p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Средства от насекомых и грызунов</h3></a>
        <a href="#"><p>Репелленты</p></a>
        <a href="#"><p>Ловушки и мелки</p></a>
        <a href="#"><p>Спирали и пластины</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Хозяйственное мыло</h3></a>
      </div>
    </div>
  </div>

  <div class="content_about">
    <div class="top">
      <h2>Канцтовары</h2>
      <img src="/public/img/titleArrow.svg" alt="arrow" />
    </div>
    <div class="types">
      <div class="block">
        <a href="#"><h3>Бумажная продукция</h3></a>
        <a href="#"><p>Стикеры и бумага для заметок</p></a>
        <a href="#"><p>Тетради</p></a>
        <a href="#"><p>Блокноты и записные книжки</p></a>
        <a href="#"><p>Еженедельники и ежедневники, планнеры</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Демонстрационные доски</h3></a>
        <a href="#"><p>Маркерные доски</p></a>
        <a href="#"><p>Магниты для досок</p></a>
        <a href="#"><p>Магнитные доски</p></a>
        <a href="#"><p>Стиратели для доски</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Калькуляторы</h3></a>
        <a href="#"><p>Настольные калькуляторы</p></a>
        <a href="#"><p>Карманные калькуляторы</p></a>
        <a href="#"><p>Инженерные калькуляторы</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Настольные подставки и визитницы</h3></a>
        <a href="#"><p>Подставки для карандашей и ручек</p></a>
        <a href="#"><p>Подставки для учебников</p></a>
        <a href="#"><p>Визитницы настольные</p></a>
        <a href="#"><p>Сменные блоки для визитниц</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Оборудование для торговли</h3></a>
        <a href="#"><p>Ценники</p></a>
        <a href="#"><p>Информационное оборудование</p></a>
        <a href="#"><p>Счетчики и детекторы банкнот</p></a>
        <a href="#"><p>Этикет-пистолеты</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Офисные принадлежности</h3></a>
        <a href="#"><p>Канцелярские мелочи</p></a>
        <a href="#"><p>Канцелярские ножницы и ножи</p></a>
        <a href="#"><p>Степлеры и скобы</p></a>
        <a href="#"><p>Скотч</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Папки и файлы</h3></a>
        <a href="#"><p>Папки для бумаги</p></a>
        <a href="#"><p>Пружины для переплета</p></a>
        <a href="#"><p>Обложки для переплета</p></a>
        <a href="#"><p>Файлы и разделители</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Печати и штампы</h3></a>
        <a href="#"><p>Оснастки и футляры для штампов</p></a>
        <a href="#"><p>Нумераторы</p></a>
        <a href="#"><p>Штампы</p></a>
        <a href="#"><p>Печати канцелярские</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Письменные принадлежности</h3></a>
        <a href="#"><p>Ручки</p></a>
        <a href="#"><p>Карандаши</p></a>
        <a href="#"><p>Маркеры</p></a>
        <a href="#"><p>Ластики</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Чертежные принадлежности</h3></a>
        <a href="#"><p>Линейки</p></a>
        <a href="#"><p>Геометрические наборы</p></a>
        <a href="#"><p>Циркули</p></a>
        <a href="#"><p>Готовальни</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Товары для школы и обучения</h3></a>
        <a href="#"><p>Пеналы</p></a>
        <a href="#"><p>Глобусы</p></a>
        <a href="#"><p>Карты мира</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Картриджи</h3></a>
        <a href="#"><p>Картриджи для струйных принтеров</p></a>
      </div>
    </div>
  </div>

  <div class="content_about">
    <div class="top">
      <h2>Зоотовары</h2>
      <img src="/public/img/titleArrow.svg" alt="arrow" />
    </div>
    <div class="types">
      <div class="block">
        <a href="#"><h3>Ветаптека</h3></a>
        <a href="#"><p>Витамины и добавки для животных</p></a>
        <a href="#"><p>Средства от блох и клещей</p></a>
        <a href="#"><p>Воротники и лечебные ошейники</p></a>
        <a href="#"><p>Пасты и гели</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Гигиена</h3></a>
        <a href="#"><p>Средства по уходу за животными</p></a>
        <a href="#"><p>Косметика для животных</p></a>
        <a href="#"><p>Пеленки и подгузники</p></a>
        <a href="#"><p>Средства гигиены</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Для грызунов</h3></a>
        <a href="#"><p>Корма и лакомства для грызунов</p></a>
        <a href="#"><p>Игрушки</p></a>
        <a href="#"><p>Миски, поилки и кормушки для грызунов</p></a>
        <a href="#"><p>Клетки и домики</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Для кошек</h3></a>
        <a href="#"><p>Корма и лакомства</p></a>
        <a href="#"><p>Игрушки</p></a>
        <a href="#"><p>Туалеты и наполнители</p></a>
        <a href="#"><p>Миски</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Для птиц</h3></a>
        <a href="#"><p>Корма и лакомства для птиц</p></a>
        <a href="#"><p>Поилки, кормушки</p></a>
        <a href="#"><p>Игрушки и аксессуары для птиц</p></a>
        <a href="#"><p>Клетки и лестницы</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Для рыб и рептилий</h3></a>
        <a href="#"><p>Аквариумы и аксессуары</p></a>
        <a href="#"><p>Корма</p></a>
        <a href="#"><p>Террариумы и аксессуары</p></a>
        <a href="#"><p>Кормушки</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Для сельскохозяйственных животных</h3></a>
        <a href="#"><p>Для коз и овец</p></a>
        <a href="#"><p>Для коров</p></a>
        <a href="#"><p>Для лошадей</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Для собак</h3></a>
        <a href="#"><p>Корма и Лакомства</p></a>
        <a href="#"><p>Амуниция</p></a>
        <a href="#"><p>Игрушки</p></a>
        <a href="#"><p>Груминг</p></a>
      </div>
    </div>
  </div>

  <div class="content_about">
    <div class="top">
      <h2>Книги</h2>
      <img src="/public/img/titleArrow.svg" alt="arrow" />
    </div>
    <div class="types">
      <div class="block">
        <a href="#"><h3>Бизнес-литература</h3></a>
        <a href="#"><p>Бизнес образование и развитие карьеры</p></a>
        <a href="#"><p>Менеджмент и управление</p></a>
        <a href="#"><p>Маркетинг и продажи</p></a>
        <a href="#"><p>Экономика</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Учебная литература</h3></a>
        <a href="#"><p>Изучение иностранных языков</p></a>
        <a href="#"><p>Образовательные программы</p></a>
        <a href="#"><p>Учебно-методическая литература</p></a>
        <a href="#"><p>1 класс</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Художественная литература</h3></a>
        <a href="#"><p>Фантастика</p></a>
        <a href="#"><p>Приключения</p></a>
        <a href="#"><p>Детективы</p></a>
        <a href="#"><p>Боевики</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Нехудожественная литература</h3></a>
        <a href="#"><p>Юридическая литература</p></a>
        <a href="#"><p>Энциклопедии, справочники</p></a>
        <a href="#"><p>Кулинарные книги</p></a>
        <a href="#"><p>Научно-популярная литература</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Букинистика</h3></a>
        <a href="#"><p>Детям и родителям</p></a>
        <a href="#"><p>Учебная литература</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Литература на иностранных языках</h3></a>
        <a href="#"><p>Английский язык</p></a>
        <a href="#"><p>Французский язык</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Детям и родителям</h3></a>
        <a href="#"><p>Комиксы</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Манга</h3></a>
      </div>
      <div class="block">
        <a href="#"><h3>Журналы, газеты</h3></a>
      </div>
      <div class="block">
        <a href="#"><h3>Комиксы</h3></a>
      </div>
    </div>
  </div>

  <div class="content_about">
    <div class="top">
      <h2>Дача, сад и огород</h2>
      <img src="/public/img/titleArrow.svg" alt="arrow" />
    </div>
    <div class="types">
      <div class="block">
        <a href="#"><h3>Садовая техника</h3></a>
        <a href="#"><p>Мойки высокого давления и аксессуары</p></a>
        <a href="#"><p>Триммеры для газона и газонокосилки</p></a>
        <a href="#"><p>Прочая садовая техника</p></a>
        <a href="#"><p>Аксессуары и расходные материалы</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Обустройство дачи и сада</h3></a>
        <a href="#"><p>Антимоскитные сетки</p></a>
        <a href="#"><p>Прочие товары для обустройства</p></a>
        <a href="#"><p>Садовые светильники</p></a>
        <a href="#"><p>Садовые дорожки и ограждения</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Пикник, барбекю, гриль</h3></a>
        <a href="#"><p>Принадлежности для барбекю</p></a>
        <a href="#"><p>Средства для розжига</p></a>
        <a href="#"><p>Мангалы</p></a>
        <a href="#"><p>Шампуры</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Садовый инструмент</h3></a>
        <a href="#"><p>Уход за территорией</p></a>
        <a href="#"><p>Наборы садовых инструментов</p></a>
        <a href="#"><p>Обрезка деревьев и кустарников</p></a>
        <a href="#"><p>Аксессуары и расходные материалы</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Удобрения и уход за растениями</h3></a>
        <a href="#"><p>Грунт и удобрения</p></a>
        <a href="#"><p>Защита растений от вредителей и болезней</p></a>
        <a href="#"><p>Опрыскиватели и аксессуары</p></a>
        <a href="#"><p>Опоры и подвязки для растений</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Семена и саженцы</h3></a>
        <a href="#"><p>Семена</p></a>
        <a href="#"><p>Проращиватели семян</p></a>
        <a href="#"><p>Наборы для выращивания растений</p></a>
      </div>
      <div class="block">
        <a href="#"><h3>Садовая мебель и декор</h3></a>
        <a href="#"><p>Садовый декор</p></a>
        <a href="#"><p>Скамейки</p></a>
      </div>
    </div>
  </div>
</div>
  `;
}

export function contact_modal_reload(place) {
  place.innerHTML += `
  <div class="bg" data-contact_cancel></div>
  <div class="content">
    <p class="exit" data-contact_cancel>&times;</p>
    <form name="customerContact">
      <h3>Введите номер телефона</h3>
      <p>Отправим смс с кодом подтверждения</p>
      <div class="inp">
        <input
          placeholder="Номер телефона"
          type="tel"
          id="phone"
          pattern="^[0-9]$"
          name="phone"
        />
        <span>Неверный формат номера</span>
      </div>
      <button>Получить код</button>

      <p class="text">
        Авторизуясь, вы соглашаетесь c
        <a href="#">политикой обработки персональных данных</a>
      </p>
    </form>
  </div>
  `;
}

export function region_modal_reload(place) {
  place.innerHTML += `
  <div class="bg" data-regions_cancel></div>
  <div class="content">
    <p class="exit" data-regions_cancel>&times;</p>
    <h2>Выберите город доставки</h2>
    <p>Бесплатная доставка на следующий день в 72 города Узбекистана:</p>
    <input type="text" placeholder="Найти город" />
    <div class="regions"></div>
  </div>
  `;
}
